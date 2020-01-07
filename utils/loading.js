import { Loading } from 'element-ui';

let loadingInstance;

export default class LoadingManager {
    /**
     * 显示Loading
     * @param {Object} params 配置参数
     */
    static show(params = {}) {
        loadingInstance = Loading.service({
            text: params.text || 'loading...'
        });
    }

    /**
     * 隐藏Loading
     * @param {Object} params
     */
    static hide(params = {}) {
        loadingInstance && loadingInstance.close();
        loadingInstance = null;
    }
}