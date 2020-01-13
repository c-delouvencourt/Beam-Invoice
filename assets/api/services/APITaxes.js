import BeamAPI from "../BeamAPI";

export default class APITaxes {

  static list(archive = false) {
    return BeamAPI.url('/taxes').parameters({archive}).get();
  }

}
