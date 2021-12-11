import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";

import './sass/main.scss';

createApp(App).use(store).use(router).mount("#app");