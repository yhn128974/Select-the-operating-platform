import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "@/App.vue";

const app = createApp(App);

app.use(ElementPlus);
// console.log(import.meta.env);
// svg插件需要配置代码
import "virtual:svg-icons-register";
// 引入自定义插件对象：注册整个项目的全局组件
import gloalComponent from "@/components";
// 安装自定义插件
app.use(gloalComponent);

// 引入模板的全局样式
import "@/styles/index.scss";

// 测试mock接口
import axios from "axios";
axios({
  url: "/api/user/login",
  method: "post",
  data: {
    username: "admin",
    password: "111111",
  },
});

// 引入路由
import router from "./router";
app.use(router);

app.mount("#app");
