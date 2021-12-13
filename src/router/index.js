import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/home.vue";
import AvailableCourses from "../views/AvailableCourses/AvailableCourses.vue";

const routes = [
  {
    path: "/Home",
    name: "App",
    component: Home,
  },
  {
    path: "/AvailableCourses",
    name: "AvailableCourses",
    component: AvailableCourses,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
