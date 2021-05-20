import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/repair",
    name: "Repair",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RepairPage.vue")
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue")
  },
  {
    path: "/entry-successful",
    name: "Entry Successful",
    component: () => import("../views/EntrySuccessful.vue")
  },
  {
    path: "/logout",
    name: "Logout page",
    component: () => import("../views/Logout.vue")
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: () => import("../views/AdminPage.vue")
  },
  {
    path: "/empty",
    name: "Empty page",
    component: () => import("../views/EmptyPage.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
