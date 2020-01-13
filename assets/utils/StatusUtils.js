export default class StatusUtils {

  static isActiveUrl(url, currentUrl, classes){
      return currentUrl == url ? classes + " is-active" : classes;
  }

  static isActiveAdminUrl(url, currentUrl, classes){
    return currentUrl.includes(url) ? classes + " is-active" : classes;
  }

}
