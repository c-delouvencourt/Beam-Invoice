import React, {Component} from 'react';
import {Formik} from "formik";
import * as Yup from "yup";
import FormEmailInputComponent from "../Inputs/FormEmailInputComponent";
import i18n from "../../../locales/i18n";
import {withTranslation} from "react-i18next";
import Loading from "../../Loading";
import FormPasswordInputComponent from "../Inputs/FormPasswordInputComponent";
import APIAuth from "../../../api/services/APIAuth";
import HandleBeamAPI from "../../../api/HandleBeamAPI";
import {loginUser} from "../../../redux/actions/auth/AuthActions";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router";
import FormTextInputComponent from "../Inputs/FormTextInputComponent";

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .email(i18n.t('validation.firstName')),
  name: Yup.string()
    .required(i18n.t('validation.name')),
  email: Yup.string()
    .required(i18n.t('validation.email'))
});

class AuthFormProfileComponent extends Component {


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
          initialValues={{firstName: '', name: '', email: ''}}
          onSubmit={(values, actions) => {
            this.setState({loading: true});

            APIAuth.login(values.email, values.password).then(r => HandleBeamAPI.handleWithError(r, (r) => {
              this.setState({loading: false});
              actions.setSubmitting(false);
              actions.setStatus({ msg: t(r.data.message) });
            })).then(data => {
              localStorage.setItem("user-jwt", data.user.jwt);
              this.props.loginUser(data.user);
              this.props.history.push('/')
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
                    Vous êtes désormais connecté sur Beam, vous serez redirigé dans 3 secondes.
                  </div>
                </article>
              ) : this.state.loading ? (
                <Loading/>
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

                  <button type="submit" className="button is-primary custom-button m-t-30 is-fullwidth" disabled={isSubmitting}>
                    {t('form.edit')}
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


const mapDispatchToProps = dispatch => {
  return {
    loginUser: (data) => {
      dispatch(loginUser(data));
    }
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthFormProfileComponent)));
