import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(
    window.__MICRO_APP_BASE_ROUTE__ || import.meta.env.BASE_URL
  ),
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: routes,
});

export default router;
