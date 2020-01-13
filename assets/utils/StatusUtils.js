export default class StatusUtils {

  static isActiveUrl(url, currentUrl, classes){
      return currentUrl == url ? classes + " is-active" : classes;
  }

  static isActiveUrlImage(url, currentUrl, classes){
    return currentUrl == url ? classes + " profile-picture-flow" : classes;
  }

  static isActiveAdminUrl(url, currentUrl, classes){
    return currentUrl.includes(url) ? classes + " is-active" : classes;
  }

}
