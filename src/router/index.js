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
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
    meta: {
      requiresNoAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Login.vue"),
    meta: {
      requiresNoAuth: true
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
