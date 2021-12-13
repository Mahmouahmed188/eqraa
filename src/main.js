import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/free-solid-svg-icons"

import './sass/main.scss';

createApp(App).use(store).use(router).mount("#app");
