/*
 * @Author       : Lutao
 * @Date         : 2024-01-31 09:27:13
 * @LastEditTime : 2024-02-05 08:19:53
 * @LastEditors  : Lutao
 * @Description  : 
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import microApp from "@micro-zoe/micro-app";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

microApp.start({
  "disable-memory-router": true, // 关闭虚拟路由系统
  "disable-patch-request": true, // 关闭对子应用请求的拦截
});

createApp(App).use(router).use(ElementPlus).mount("#app");
