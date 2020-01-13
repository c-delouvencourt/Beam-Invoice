import BeamAPI from "../BeamAPI";

export default class APIContracts {

  static list(archive = false) {
    return BeamAPI.url('/contracts').parameters({archive}).get();
  }

}
