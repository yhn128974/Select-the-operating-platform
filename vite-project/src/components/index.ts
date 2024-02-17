// 对外暴露插件对象
import SvgIcon from "./SvgIcon/index.vue";
import Pagination from "./Pagination/index.vue";

import type { App, Component } from "vue";
const components: { [name: string]: Component } = { SvgIcon, Pagination };
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
