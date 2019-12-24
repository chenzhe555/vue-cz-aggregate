import { Loading } from 'element-ui';

export default class LoadingManager {
    /**
     * 单例
     */
    static getInstance() {
        if (!this.instance) {
            this.instance = new this();
            this.instance.loading = null;
        }
        return this.instance;
    }

    /**
     * 显示Loading
     * @param {Object} params 配置参数
     */
    show(params = {}) {
        this.loading = Loading.service({
            text: params.text || 'Loading'
        });
    }

    /**
     * 隐藏Loading
     * @param {Object} params
     */
    hide(params = {}) {
        this.loading.close();
    }
}