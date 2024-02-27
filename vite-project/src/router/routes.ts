export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
  },
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    name: "home",
  },
  {
    path: "/404",
    component: () => import("@/views/nofind/index.vue"),
    name: "404",
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  },
];
