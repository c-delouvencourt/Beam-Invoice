import BeamAPI from "../BeamAPI";

export default class APIClients {

  static create(data) {
    return BeamAPI.url('/api/client').parameters({
      data
    }).contentJson().put();
  }

  static list(archive = false) {
    return BeamAPI.url('/clients').parameters({archive}).get();
  }

}
