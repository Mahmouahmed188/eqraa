import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/home.vue";
import AvailableCourses from "../views/AvailableCourses/AvailableCourses.vue";
import arabic from "../views/arabic/arabicCourse.vue";
import popup from "../views/popup/popup.vue";


const routes = [
  {
    path: "/",
    name: "App",
    component: Home,
  },
  {
    path: "/AvailableCourses",
    name: "AvailableCourses",
    component: AvailableCourses,
  },
  {
    path: "/arabic",
    name: "arabic",
    component: arabic,
  },
  {
    path: "/popup",
    name: "popup",
    component: popup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
