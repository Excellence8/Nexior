import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "./assets/scss/style.scss";
import "./assets/css/tailwind.css";
import "mac-scrollbar/dist/mac-scrollbar.css";
import dayjs from "./plugins/dayjs";
import { MotionPlugin } from "@vueuse/motion";
import { vLoading } from "element-plus";

console.log("?? Vue 应用启动中...");

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);
app.use(MotionPlugin);
app.use(dayjs, {
  formatString: "YYYY-MM-DD HH:mm:ss"
});
app.directive("loading", vLoading);
app.mount("#app");

console.log("? Vue 应用已挂载！");

// make app available globally
// @ts-ignore
window.app = app;
