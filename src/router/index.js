import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "@/utilities/firebase";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
    meta: {
      requiresNoAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Login.vue"),
    meta: {
      requiresNoAuth: true
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Profile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/flight",
    name: "flight",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Flight.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/systems",
    name: "systems",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Systems.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !firebase.auth().currentUser) {
    next("login");
  } else if (to.meta.requiresNoAuth && firebase.auth().currentUser) {
    next("home");
  } else {
    next();
  }
});

export default router;
