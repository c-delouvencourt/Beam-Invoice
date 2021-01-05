import React, {Component} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import FormEmailInputComponent from "../Inputs/FormEmailInputComponent";
import i18n from "../../../locales/i18n";
import {withTranslation} from "react-i18next";
import HandleBeamAPI from "../../../api/HandleBeamAPI";
import APIAdminUsers from "../../../api/services/Admin/APIAdminUsers";
import FormTextInputComponent from "../Inputs/FormTextInputComponent";
import FormNumUnityInputComponent from "../Inputs/FormNumUnityInputComponent";

const ValidationSchema = Yup.object().shape({
  entrepriseName: Yup.string().min(3).max(120)
    .required(i18n.t('validation.entrepriseName')),
  firstName: Yup.string().min(3).max(120)
    .required(i18n.t('validation.firstName')),
  name: Yup.string().min(3).max(120)
    .required(i18n.t('validation.name')),
  siret: Yup.string().min(1).max(12)
    .email(i18n.t('validation.siret')),
  email: Yup.string()
    .email(i18n.t('validation.email')),
  tva: Yup.number().min(0).max(40)
    .required(i18n.t('validation.tva')),
  phone: Yup.string().min(1).max(12)
    .required(i18n.t('validation.phone')),
  address: Yup.string().min(1).max(120)
    .required(i18n.t('validation.address')),
  address2: Yup.string().min(1).max(120),
  city: Yup.string().min(1).max(80)
    .required(i18n.t('validation.city')),
  postalCode: Yup.number().min(1).max(999999)
    .required(i18n.t('validation.postalCode')),
  country: Yup.string().min(1).max(50)
    .required(i18n.t('validation.country')),
  website: Yup.string().min(1).max(120)
});

class AdminFormSocietyComponent extends Component {

  constructor(props) {
    super(props);


    this.state = {
      loading: false,
      success: false
    };
  }

  render() {
    const {t} = this.props;

    return (
      <div style={{width: '100%'}}>
        <Formik
          initialValues={{
            entrepriseName: '',
            firstName: '',
            name: '',
            siret: '',
            email: '',
            tva: 0,
            phone: '',
            adresse: '',
            address2: '',
            city: '',
            postalCode: '',
            country: '',
            website: ''
          }}
          onSubmit={(values, actions) => {
            this.setState({loading: true});
            actions.setSubmitting(true);

            APIAdminUsers.create(values.firstName, values.name, values.email, values.rank, JSON.stringify([])).then(r => HandleBeamAPI.handleWithError(r, (r) => {
              this.setState({loading: false});
              actions.setSubmitting(false);
              actions.setStatus({msg: t(r.data.message)});
            })).then(data => {
              this.setState({
                loading: false, success: true, credentials: {
                  email: values.email,
                  password: data.password
                }
              });
              actions.setSubmitting(false);
              actions.resetForm();
              this.props.onUpdate();
            }).catch(e => HandleBeamAPI.error(e));
          }}
          validationSchema={ValidationSchema}
          render={({
                     values,
                     errors,
                     status,
                     touched,
                     handleBlur,
                     handleChange,
                     handleSubmit,
                     isSubmitting,
                     setFieldValue
                   }) => (
            <form onSubmit={handleSubmit}>
              {this.state.success ? (
                <article className="message is-success mt-10 mb-30">
                  <div className="message-header">
                    <p style={{marginTop: 0, color: '#fff'}}>{t('form.societeSettings')}</p>
                    <button className="delete" aria-label="delete"/>
                  </div>
                  <div className="message-body">
                    {t('admin.usersContent.user_added')}
                    <br/><br/>
                    <b>{t('form.email')}: </b> <code>{this.state.credentials.email}</code><br/>
                    <b>{t('form.password')}: </b> <code>{this.state.credentials.password}</code>
                  </div>
                </article>
              ) : (
                <div>
                  {status && status.msg && <article className="message is-danger mt-10 mb-30">
                    <div className="message-header">
                      <p style={{marginTop: 0, color: '#fff'}}>{t('errors.error')}</p>
                      <button className="delete" aria-label="delete"/>
                    </div>
                    <div className="message-body">
                      {status.msg}
                    </div>
                  </article>}

                  <div className="columns is-multiline">
                    <div className="column is-6">
                      <div className="card">
                        <div className="card-content">
                          <h5 className="title is-5">{t('admin.society')}</h5>
                          <div className="columns is-multiline">
                            <div className="column is-12">
                              <FormTextInputComponent label={t('form.entrepriseName')} element={"entrepriseName"}
                                                      placeholder={"Acme"}
                                                      icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-6">
                              <FormTextInputComponent label={t('form.firstName')} element={"firstName"} placeholder={"John"}
                                                      icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-6">
                              <FormTextInputComponent label={t('form.name')} element={"name"} placeholder={"Doe"}
                                                      icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-12">
                              <FormTextInputComponent label={t('form.siret')} element={"siret"}
                                                      placeholder={"362 521 879 00034"}
                                                      icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-6">
                              <FormTextInputComponent label={t('form.phone')} element={"phone"} placeholder={"+33634587848"}
                                                      icon={"fas fa-phone"} errors={errors} values={values}
                                                      touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-6">
                              <FormEmailInputComponent label={t('form.email')} element={"email"}
                                                       placeholder={"client@beam.io"}
                                                       icon={"fas fa-envelope"} errors={errors} values={values}
                                                       touched={touched}
                                                       handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-12">
                              <FormNumUnityInputComponent label={t('form.tva')} element={"tva"} unity={"%"} max={40} min={0}
                                                          placeholder={"0"}
                                                          icon={"fas fa-user-tag"} errors={errors} values={values}
                                                          touched={touched}
                                                          handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-12">
                              <FormTextInputComponent label={t('form.website')} element={"website"}
                                                      placeholder={"https://beam.io"}
                                                      icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-12">
                              <button type="submit"
                                      className={"button is-primary custom-button m-t-30 is-fullwidth " + (this.state.loading ? "is-loading" : "")}
                                      disabled={isSubmitting}>
                                {t('form.edit')}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="card">
                        <div className="card-content">
                          <h5 className="title is-5">{t('admin.addressSociety')}</h5>
                          <div className="columns is-multiline">
                            <div className="column is-12">
                              <FormTextInputComponent label={t('form.address')} element={"address"}
                                                      placeholder={"17 Rue des Vergers"}
                                                      icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-12">
                              <FormTextInputComponent label={t('form.address2')} element={"address2"}
                                                      placeholder={"BP 123"}
                                                      icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-8">
                              <FormTextInputComponent label={t('form.city')} element={"city"}
                                                      placeholder={"Paris"}
                                                      icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-4">
                              <FormTextInputComponent label={t('form.postalCode')} element={"postalCode"}
                                                      placeholder={"75000"}
                                                      icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-12">
                              <FormTextInputComponent label={t('form.country')} element={"country"}
                                                      placeholder={"France"}
                                                      icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                                      handleBlur={handleBlur} handleChange={handleChange}/>
                            </div>
                            <div className="column is-12">
                              <button type="submit"
                                      className={"button is-primary custom-button m-t-30 is-fullwidth " + (this.state.loading ? "is-loading" : "")}
                                      disabled={isSubmitting}>
                                {t('form.edit')}
                              </button>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

            </form>
          )}
        />
      </div>
    )
  }
}

export default withTranslation()(AdminFormSocietyComponent);
