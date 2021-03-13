import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "@/utilities/firebase";

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!firebase.auth().currentUser) {
    store.dispatch("auth/logout");
  }

  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      firebase,
      render: (h) => h(App)
    }).$mount("#app");
  }
});
