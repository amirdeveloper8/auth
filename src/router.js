import Vue from "vue";
import VueRouter from "vue-router";

import SignupPage from "./components/auth/Signup.vue";
import LoginPage from "./components/auth/Login.vue";
import ForgotPage from "./components/auth/Forgot.vue";
import ResetPage from "./components/auth/Reset.vue";
import DashboardPage from "./components/dashboard/Dashboard.vue";
import DashboardEdit from "./components/dashboard/DashboardEdit.vue";
import DashboardInfo from "./components/dashboard/DashboardInfo.vue";
import DashboardFile from "./components/dashboard/DashboardFile.vue";
import DashboardMultiFile from "./components/dashboard/DashboardMultiFile.vue";

// import store from "./vuex";

Vue.use(VueRouter);

const routes = [
  { path: "/register", component: SignupPage },
  { path: "/login", component: LoginPage },
  { path: "/forgot", component: ForgotPage },
  { path: "/reset/:token", component: ResetPage },
  { path: "/dashboard", component: DashboardPage },
  { path: "/dashboard-edit", component: DashboardEdit },
  { path: "/dashboard-info", component: DashboardInfo },
  { path: "/dashboard-file", component: DashboardFile },
  { path: "/dashboard-multi-file", component: DashboardMultiFile },

  // {
  //   path: "/dashboard",
  //   component: DashboardPage,
  //   beforeEnter(to, from, next) {
  //     if (store.state.user != null) {
  //       next();
  //     } else {
  //       next("/login");
  //     }
  //   },
  // },

  // {
  //   path: "/dashboard-edit",
  //   component: DashboardEdit,
  //   beforeEnter(to, from, next) {
  //     if (store.state.user) {
  //       next();
  //     } else {
  //       next("/login");
  //     }
  //   },
  // },

  // {
  //   path: "/dashboard-info",
  //   component: DashboardInfo,
  //   beforeEnter(to, from, next) {
  //     if (store.state.user) {
  //       next();
  //     } else {
  //       next("/login");
  //     }
  //   },
  // },

  // {
  //   path: "/dashboard-multi-file",
  //   component: DashboardMultiFile,
  //   beforeEnter(to, from, next) {
  //     if (store.state.user) {
  //       next();
  //     } else {
  //       next("/login");
  //     }
  //   },
  // },

  // {
  //   path: "/dashboard-file",
  //   component: DashboardFile,
  //   beforeEnter(to, from, next) {
  //     if (store.state.user) {
  //       next();
  //     } else {
  //       next("/login");
  //     }
  //   },
  // },
];

export default new VueRouter({ mode: "history", routes });
