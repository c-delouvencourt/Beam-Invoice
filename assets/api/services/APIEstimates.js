import BeamAPI from "../BeamAPI";

export default class APIEstimates {

  static list(archive = false) {
    return BeamAPI.url('/estimates').parameters({archive}).get();
  }

}
