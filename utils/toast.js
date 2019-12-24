import { Message } from 'element-ui';

const defaultOptions = {
    duration: 2000
}

export default class ToastManager {
    /**
     * 显示Toast-success
     * @param {String} message 显示文本信息
     * @param {Object} params 配置参数
     */
    // eslint-disable-next-line no-unused-vars
    static showSuccess(message = '', params = {}) {
        if (message.length > 0) Message(Object.assign({}, defaultOptions, { message, type: 'success' }, params));
    }

    /**
     * 显示Toast-notice
     * @param {String} message 显示文本信息
     * @param {Object} params 配置参数
     */
    // eslint-disable-next-line no-unused-vars
    static showNotice(message = '', params = {}) {
        if (message.length > 0) Message(Object.assign({}, defaultOptions, { message, type: 'warning' }, params));
    }

    /**
     * 显示Toast-message
     * @param {String} message 显示文本信息
     * @param {Object} params 配置参数
     */
    // eslint-disable-next-line no-unused-vars
    static showMessage(message = '', params = {}) {
        if (message.length > 0) Message(Object.assign({}, defaultOptions, { message, type: 'info' }, params));
    }

    /**
     * 显示Toast-error
     * @param {String} message 显示文本信息
     * @param {Object} params 配置参数
     */
    // eslint-disable-next-line no-unused-vars
    static showFail(message = '', params = {}) {
        if (message.length > 0) Message(Object.assign({}, defaultOptions, { message, type: 'error' }, params));
    }
}