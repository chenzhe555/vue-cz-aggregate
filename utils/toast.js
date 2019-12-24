import { Message } from 'element-ui';

export default class ToastManager {

    defaultOptions = {
        duration: 2000
    }

    /**
     * 单例
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new this();
            this.instance.toast = null;
        }
        return this.instance;
    }

    /**
     * 显示Toast-success
     * @param {String} message 显示文本信息
     * @param {Object} params 配置参数
     */
    // eslint-disable-next-line no-unused-vars
    showSuccess(message = '', params = {}) {
        if (message.length > 0) Message(Object.assign({}, this.defaultOptions, { message, type: 'success' }));
    }

    /**
     * 显示Toast-notice
     * @param {String} message 显示文本信息
     * @param {Object} params 配置参数
     */
    // eslint-disable-next-line no-unused-vars
    showNotice(message = '', params = {}) {
        if (message.length > 0) Message(Object.assign({}, this.defaultOptions, { message, type: 'warning' }));
    }

    /**
     * 显示Toast-message
     * @param {String} message 显示文本信息
     * @param {Object} params 配置参数
     */
    // eslint-disable-next-line no-unused-vars
    showMessage(message = '', params = {}) {
        if (message.length > 0) Message(Object.assign({}, this.defaultOptions, { message, type: 'info' }));
    }

    /**
     * 显示Toast-error
     * @param {String} message 显示文本信息
     * @param {Object} params 配置参数
     */
    // eslint-disable-next-line no-unused-vars
    showFail(message = '', params = {}) {
        if (message.length > 0) Message(Object.assign({}, this.defaultOptions, { message, type: 'error' }));
    }
}