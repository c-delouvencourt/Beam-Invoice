import React, {Component} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import FormEmailInputComponent from "../Inputs/FormEmailInputComponent";
import i18n from "../../../locales/i18n";
import {withTranslation} from "react-i18next";
import HandleBeamAPI from "../../../api/HandleBeamAPI";
import APIAdminUsers from "../../../api/services/Admin/APIAdminUsers";
import FormTextInputComponent from "../Inputs/FormTextInputComponent";

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string().min(3).max(25)
    .required(i18n.t('validation.firstName')),
  name: Yup.string().min(3).max(35)
    .required(i18n.t('validation.name')),
  email: Yup.string()
    .email(i18n.t('validation.email')),
  rank: Yup.string().min(3).max(20)
    .required(i18n.t('validation.rank'))
});

class AdminFormUsersComponent extends Component {

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
          initialValues={{firstName: '', name: '', email: '', rank: '', permissions: []}}
          onSubmit={(values, actions) => {
            this.setState({loading: true});
            actions.setSubmitting(true);

            APIAdminUsers.create(values.firstName, values.name, values.email, values.rank, JSON.stringify([])).then(r => HandleBeamAPI.handleWithError(r, (r) => {
              this.setState({loading: false});
              actions.setSubmitting(false);
              actions.setStatus({ msg: t(r.data.message) });
            })).then(data => {
              this.setState({loading: false, success: true, credentials: {
                  email: values.email,
                  password: data.password
                }});
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
                    <p style={{marginTop: 0, color: '#fff'}}>{t('form.login')}</p>
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

                  <FormTextInputComponent label={t('form.firstName')} element={"firstName"} placeholder={"John"}
                                          icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                          handleBlur={handleBlur} handleChange={handleChange}/>
                  <FormTextInputComponent label={t('form.name')} element={"name"} placeholder={"Doe"}
                                          icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                          handleBlur={handleBlur} handleChange={handleChange}/>
                  <FormEmailInputComponent label={t('form.email')} element={"email"} placeholder={"client@beam.io"}
                                           icon={"fas fa-envelope"} errors={errors} values={values} touched={touched}
                                           handleBlur={handleBlur} handleChange={handleChange}/>
                  <FormTextInputComponent label={t('form.rank')} element={"rank"} placeholder={"Developper, CTO, CEO"}
                                          icon={"fas fa-user-tag"} errors={errors} values={values} touched={touched}
                                          handleBlur={handleBlur} handleChange={handleChange}/>

                  <button type="submit" className={"button is-primary custom-button m-t-30 is-fullwidth " + (this.state.loading ? "is-loading" : "")} disabled={isSubmitting}>
                    {t('form.add')}
                  </button>
                </div>
              )}

            </form>
          )}
        />
      </div>
    )
  }
}

export default withTranslation()(AdminFormUsersComponent);
