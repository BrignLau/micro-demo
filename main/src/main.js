import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import microApp from "@micro-zoe/micro-app";
import router from "./router";

microApp.start({
  "disable-memory-router": true, // 关闭虚拟路由系统
  "disable-patch-request": true, // 关闭对子应用请求的拦截
});

createApp(App).use(router).mount("#app");
