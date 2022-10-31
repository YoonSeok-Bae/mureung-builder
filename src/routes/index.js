import {createWebHashHistory, createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        name: "root",
        path: "/",
        component: () => import("@/views/main/Index.vue"),
    },
    ...routerLogin,
    ...routerDevice,
    ...routerDtms,
    ...routerClass,
    ...routerTest,

    ...routerAdmin,
    ...routerService,
    ...routerTeacher,
    ...routerStudent,
    ...routerSchool
];

export const router = createRouter({
    history: process.env.VUE_APP_IS_ELECTRON == "true" ? createWebHashHistory() : createWebHistory(),
    routes,
});