import type { App } from "vue";
import { createRouter, createWebHistory,createWebHashHistory, type RouteRecordRaw } from "vue-router";

export const Layout = () => import("@/layout/index.vue");

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/index.html",
    children: [
      {
        path: "/index.html",
        component: () => import("@/views/home/index.vue"),

        meta: { title:'Home', hidden: true },
      },
      {
        path: "/contact_us.html",
        component: () => import("@/views/contact-us/index.vue"),
        meta: { title:'Contact us', hidden: true },
      },
      {
        path: "/solutions.html",
        component: () => import("@/views/solutions/index.vue"),
        meta: { title:'Solutions', hidden: true },
      },
      {
        path: "/blog.html",
        component: () => import("@/views/blog/index.vue"),
        meta: { title:'Blog', hidden: true },
      },
      {
        path: "/starter.html",
        component: () => import("@/views/starter/index.vue"),
        meta: { title:'Starter', hidden: true },
      },
      {
        path: "/single-post/:id",
        component: () => import("@/views/single-post/index.vue"),
        meta: { title:'Single post', hidden: true },
      },
      {
        path: "/single-post.html/:id",
        component: () => import("@/views/single-post/index.vue"),
        meta: { title:'Single post', hidden: true },
      },
      {
        path: "/privacy_policy.html",
        component: () => import("@/views/privacy-policy/index.vue"),
        meta: { title:'Privacy Policy', hidden: true },
      },
      {
        path: "401",
        component: () => import("@/views/error/401.vue"),
        meta: { hidden: true },
      },
      {
        path: "404",
        component: () => import("@/views/error/404.vue"),
        meta: { hidden: true },
      }
    ],
  }
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory("/"),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 全局注册 router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
