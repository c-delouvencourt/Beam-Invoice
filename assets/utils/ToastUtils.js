import {toast} from 'react-toastify';

const position = toast.POSITION.BOTTOM_CENTER;

export default class ToastUtils {

  static showSuccess(message){
    toast.success(message, {
      position: position
    });
  }

  static showError(message){
    toast.error(message, {
      position: position
    });
  }

  static showDanger(message){
    toast.warn(message, {
      position: position
    });
  }

  static showInfo(message){
    toast.info(message, {
      position: position
    });
  }
}
