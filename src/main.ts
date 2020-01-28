import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css-modules/globals.scss";
import "./css-modules/media-queries.scss";
import "./css-modules/helpers.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
