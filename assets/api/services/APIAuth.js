import BeamAPI from "../BeamAPI";

export default class APIAuth {

  static login(email, password) {
    return BeamAPI.url('/auth/login').parameters({
      email,
      password
    }).contentJson().post();
  }

}
