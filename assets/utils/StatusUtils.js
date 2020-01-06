export default class StatusUtils {

  static isActiveUrl(url, currentUrl, classes){
      return currentUrl == url ? classes + " is-active" : classes;
  }

}
