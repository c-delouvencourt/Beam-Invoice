import BeamAPI from "../BeamAPI";

export default class APIInvoices {

  static list(archive = false) {
    return BeamAPI.url('/invoices').parameters({archive}).get();
  }

}
