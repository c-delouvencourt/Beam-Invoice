import React, {Component} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import FormEmailInputComponent from "../Inputs/FormEmailInputComponent";
import i18n from "../../../locales/i18n";
import {withTranslation} from "react-i18next";
import HandleBeamAPI from "../../../api/HandleBeamAPI";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router";
import FormTextInputComponent from "../Inputs/FormTextInputComponent";
import FormPhoneInputComponent from "../Inputs/FormPhoneInputComponent";
import APIClients from "../../../api/services/APIClients";
import {updateClients} from "../../../redux/actions/clients/ClientsActions";

const ValidationSchema = Yup.object().shape({
  entrepriseName: Yup.string().min(2).max(50)
    .required(i18n.t('validation.firstName')),
  fullName: Yup.string().min(2).max(50)
    .required(i18n.t('validation.fullNameDirector')),
  email: Yup.string()
    .email(i18n.t('validation.email')),
  phone: Yup.string()
    .required(i18n.t('validation.phone')),
  address: Yup.string().min(2).max(150)
    .required(i18n.t('validation.address')),
  address2: Yup.string(),
  city: Yup.string().min(2).max(50)
    .required(i18n.t('validation.city')),
  postalCode: Yup.number()
    .required(i18n.t('validation.postalCode')),
  country: Yup.string().min(2).max(35)
    .required(i18n.t('validation.name')),
  siret: Yup.number().min(2).max(25),
  tvaNumber: Yup.string().min(2).max(25)
});

class ClientsFormAddComponent extends Component {


  constructor(props) {
    super(props);


    this.state = {
      loading: false
    };
  }

  render() {
    const {t} = this.props;

    return (
      <div style={{width: '100%'}}>
        <Formik
          initialValues={{entrepriseName: '', fullName: '', email: '', phone: '', address: '', address2: '', city: '', postalCode: '', country: '', siret: '', tvaNumber: ''}}
          onSubmit={(values, actions) => {
            this.setState({loading: true});
            console.log("click");
            actions.setSubmitting(true);

            APIClients.create(values).then(r => HandleBeamAPI.handleWithError(r, (r) => {
              this.setState({loading: false});
              actions.setSubmitting(false);
              actions.setStatus({ msg: t(r.data.message) });
            })).then(data => {
              this.props.updateClients(data.clients);
              this.props.onClose();
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

                <div className="columns">
                  <div className="column is-6">
                    <FormTextInputComponent label={t('form.entrepriseName')} element={"entrepriseName"} placeholder={"Beam Inc."}
                                            icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                            handleBlur={handleBlur} handleChange={handleChange}/>
                  </div>
                  <div className="column is-6">
                    <FormTextInputComponent label={t('form.fullNameDirector')} element={"fullName"} placeholder={"John Doe"}
                                            icon={"fas fa-tag"} errors={errors} values={values} touched={touched}
                                            handleBlur={handleBlur} handleChange={handleChange}/>
                  </div>
                </div>

                <FormEmailInputComponent label={t('form.email')} element={"email"} placeholder={"client@beam.io"}
                                         icon={"fas fa-envelope"} errors={errors} values={values} touched={touched}
                                         handleBlur={handleBlur} handleChange={handleChange}/>
                <FormPhoneInputComponent label={t('form.phone')} element={"phone"} placeholder={"+33678398937"}
                                         icon={"fas fa-phone"} errors={errors} values={values} touched={touched}
                                         handleBlur={handleBlur} handleChange={handleChange}/>
                <FormTextInputComponent label={t('form.address')} element={"address"} placeholder={"17 Main Road"}
                                        icon={"fas fa-location"} errors={errors} values={values} touched={touched}
                                        handleBlur={handleBlur} handleChange={handleChange}/>
                <FormTextInputComponent label={t('form.address2')} element={"address"} placeholder={""}
                                        icon={"fas fa-location"} errors={errors} values={values} touched={touched}
                                        handleBlur={handleBlur} handleChange={handleChange}/>

                <div className="columns is-multiline">
                  <div className="column is-6">
                    <FormTextInputComponent label={t('form.city')} element={"city"} placeholder={"Paris"}
                                            icon={"fas fa-location"} errors={errors} values={values} touched={touched}
                                            handleBlur={handleBlur} handleChange={handleChange}/>
                  </div>
                  <div className="column is-6">
                    <FormTextInputComponent label={t('form.postalCode')} element={"postalCode"} placeholder={"75000"}
                                            icon={"fas fa-location"} errors={errors} values={values} touched={touched}
                                            handleBlur={handleBlur} handleChange={handleChange}/>
                  </div>
                  <div className="column is-12">
                    <FormTextInputComponent label={t('form.country')} element={"country"} placeholder={"France"}
                                            icon={"fas fa-location"} errors={errors} values={values} touched={touched}
                                            handleBlur={handleBlur} handleChange={handleChange}/>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-6">
                    <FormTextInputComponent label={t('form.siret')} element={"siret"} placeholder={"Siret"}
                                            icon={"fas fa-location"} errors={errors} values={values} touched={touched}
                                            handleBlur={handleBlur} handleChange={handleChange}/>
                  </div>
                  <div className="column is-6">
                    <FormTextInputComponent label={t('form.tvaNumber')} element={"tvaNumber"} placeholder={"Numéro de TVA"}
                                            icon={"fas fa-location"} errors={errors} values={values} touched={touched}
                                            handleBlur={handleBlur} handleChange={handleChange}/>
                  </div>
                </div>

                <button type="submit" className={"button is-primary custom-button m-t-30 is-fullwidth " + (this.state.loading ? "is-loading" : "")} disabled={isSubmitting}>
                  {t('form.edit')}
                </button>
              </div>
            </form>
          )}
        />
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    updateClients: (data) => {
      dispatch(updateClients(data));
    }
  }
};

const mapStateToProps = state => ({
  clients: state.clients.clients
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withRouter(ClientsFormAddComponent)));
