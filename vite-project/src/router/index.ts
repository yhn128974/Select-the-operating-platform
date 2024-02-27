import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./routes";

let router = createRouter({
  // 路由模式hash
  history: createWebHashHistory(),
  routes: constantRoute,
});

export default router;
