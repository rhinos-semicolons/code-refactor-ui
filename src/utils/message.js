import { notification } from 'antd';

/**
 * This class gives support to the Notification popups
 */
export default class Message {
  static info(message, description) {
    notification.config({
      duration: 5
    });
    notification.info({
      message,
      description
    });
  }

  static warn(message, description) {
    notification.config({
      duration: 5
    });
    notification.warning({
      message,
      description
    });
  }

  static success(message, description) {
    notification.config({
      duration: 5
    });
    notification.success({
      message,
      description
    });
  }

  static error(message, description) {
    notification.config({
      duration: 5
    });
    notification.error({
      message,
      description
    });
  }

  static infoWithoutAutoHide(message, description) {
    notification.config({
      duration: 0
    });
    notification.info({
      message,
      description
    });
  }

  static warnWithoutAutoHide(message, description) {
    notification.config({
      duration: 0
    });
    notification.warning({
      message,
      description
    });
  }

  static successWithoutAutoHide(message, description) {
    notification.config({
      duration: 0
    });
    notification.success({
      message,
      description
    });
  }

  static errorWithoutAutoHide(message, description) {
    notification.config({
      duration: 0
    });
    notification.error({
      message,
      description
    });
  }
}
