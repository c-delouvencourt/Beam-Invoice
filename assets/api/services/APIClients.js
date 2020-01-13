import BeamAPI from "../BeamAPI";

export default class APIClients {

  static list(archive = false) {
    return BeamAPI.url('/clients').parameters({archive}).get();
  }

}
