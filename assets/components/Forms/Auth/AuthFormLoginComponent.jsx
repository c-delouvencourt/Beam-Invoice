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

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('validation.email')),
  password: Yup.string()
    .required(i18n.t('validation.password'))
});

class AuthFormLoginComponent extends Component {


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
          initialValues={{email: '', password: ''}}
          onSubmit={(values, actions) => {
            this.setState({loading: true});
            actions.setSubmitting(true);

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

                  <FormEmailInputComponent label={t('form.email')} element={"email"} placeholder={"client@beam.io"}
                                           icon={"fas fa-envelope"} errors={errors} values={values} touched={touched}
                                           handleBlur={handleBlur} handleChange={handleChange}/>
                  <FormPasswordInputComponent label={t('form.password')} element={"password"} placeholder={"***********"}
                                              icon={"fas fa-shield-alt"} errors={errors} values={values} touched={touched}
                                              handleBlur={handleBlur} handleChange={handleChange}/>

                  <button type="submit" className={"button is-primary custom-button m-t-30 is-fullwidth " + (this.state.loading ? "is-loading" : "")} disabled={isSubmitting}>
                    {t('form.login')}
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthFormLoginComponent)));
