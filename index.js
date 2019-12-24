import Vue from 'vue';
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const initProject = function () {
    // 使用 element-ui
    Vue.use(ElementUI);
}

export {
    initProject
};
