import i18n from "../locales/i18n";
import ToastUtils from "../utils/ToastUtils";

export default class HandleBeamAPI {

  static handle(response){
    return new Promise((resolve, reject) => {
      if(response.data.error) {
        ToastUtils.showDanger(i18n.t(response.data.message));
        return resolve();
      }

      return resolve(response.data.data)
    });
  }

  static handleWithError(response, errorF){
    return new Promise((resolve, reject) => {
      if(response.data.error) {
        ToastUtils.showDanger(i18n.t(response.data.message));
        errorF(response);
        return resolve();
      }

      return resolve(response.data.data)
    });
  }

  static error(error){
    ToastUtils.showDanger(error.message);
  }

}
