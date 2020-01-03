import Vue from 'vue';
import VueRouter from 'vue-router';

const getRouter = function (configs = []) {
    // 使用 vue-router
    Vue.use(VueRouter);
    const router = new VueRouter({
        routes: configs
    });

    // 配置标题
    router.beforeEach((to, from, next) => {
        /* 路由发生变化修改页面title */
        if (to.meta && to.meta.title) {
            document.title = to.meta.title;
        }
        next();
    });
    return router;
}

export {
    getRouter
};