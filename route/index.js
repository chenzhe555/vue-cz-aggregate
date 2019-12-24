import Vue from 'vue';
import VueRouter from 'vue-router';

import routeMap from './map.js';

import MsgCategory from '@pages/msgCategory/index.vue';
import MsgLog from '@pages/msgLog/index.vue';
import MsgStatistics from '@pages/msgStatistics/index.vue';
import MsgTemplate from '@pages/msgTemplate/index.vue';
import NotFound from '@pages/notFound/index.vue';

/**
 * 获取路由配置
 */
function getRouteConfig() {
    return [
        Object.assign({ component: MsgCategory }, routeMap['MsgCategory']),
        Object.assign({ component: MsgLog }, routeMap['MsgLog']),
        Object.assign({ component: MsgStatistics }, routeMap['MsgStatistics']),
        Object.assign({ component: MsgTemplate }, routeMap['MsgTemplate']),
        Object.assign({ component: NotFound }, routeMap['NotFound'])
    ];
}

// 使用 vue-router
Vue.use(VueRouter);
const router = new VueRouter({
    routes: getRouteConfig()
});

// 配置标题
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default router;