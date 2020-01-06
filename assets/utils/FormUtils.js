export default class FormUtils {

  static ifError(error, classes){
    return error ? classes + " is-danger" : classes;
  }

  static phoneRegex(){
    return /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  }

}
