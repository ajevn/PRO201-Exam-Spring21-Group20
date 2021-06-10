import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/repair",
    name: "Repair",
    component: () => import("../views/RepairPage.vue"),
    meta: {
      title: "Repair Page"
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/ProfilePage.vue"),
    meta: {
      title: "Your profile"
    }
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue"),
    meta: {
      title: "Login"
    }
  },
  {
    path: "/entry-successful",
    name: "Entry Successful",
    component: () => import("../views/EntrySuccessful.vue"),
    meta: {
      title: "Entry Successful"
    }
  },
  {
    path: "/logout",
    name: "Logout page",
    component: () => import("../views/Logout.vue"),
    meta: {
      title: "Logout"
    }
  },
  {
    path: "/admin",
    name: "AdminPage",
    component: () => import("../views/AdminPage.vue"),
    meta: {
      title: "Admin"
    }
  },
  {
    path: "/notimplemented",
    name: "NotImplemented",
    component: () => import("../views/NotImplementedPage.vue"),
    meta: {
      title: "NotImplemented"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const userData = store.getters.getUserData;
  if (to.path !== "/login" && !userData) {
    next("/login");
  } else if (to.path === "/login" && userData) {
    next(false);
  } else if (to.path === "/admin" && !userData.admin) {
    next("/");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  else if (previousNearestWithMeta)
    document.title = previousNearestWithMeta.meta.title;
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map(el => el.parentNode.removeChild(el));
  if (!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");
      Object.keys(tagDef).forEach(key => tag.setAttribute(key, tagDef[key]));
      tag.setAttribute("data-vue-router-controlled", "");
      return tag;
    })
    .forEach(tag => document.head.appendChild(tag));
  next();
});

export default router;
