import { createApp } from "vue";
import App from "./App.vue";

import setupPlugins from "@/plugins";
import PreloaderPopup from "@/components/PreloaderPopup/index.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";


// 自动为某些默认事件（如 touchstart、wheel 等）添加 { passive: true },提升滚动性能并消除控制台的非被动事件监听警告
import "default-passive-events";

const app = createApp(App);
app.component('preloader-popup', PreloaderPopup)
app.component('breadcrumb', Breadcrumb)
// 注册插件
app.use(setupPlugins);
app.mount("#app");
