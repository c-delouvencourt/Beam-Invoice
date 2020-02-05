import BeamAPI from "../BeamAPI";

export default class APIAuth {

  static login(email, password) {
    return BeamAPI.url('/auth/login').parameters({
      email: email,
      password: password
    }).contentJson().post();
  }

  static token() {
    return BeamAPI.url('/auth/token').needAuth().get();
  }

}
