import BeamAPI from "../BeamAPI";

export default class APIClients {

  static create(data) {
    return BeamAPI.url('/client').parameters(data).needAuth().contentJson().put();
  }

  static list(archive = false) {
    return BeamAPI.url('/client').parameters({archive}).needAuth().get();
  }

}
