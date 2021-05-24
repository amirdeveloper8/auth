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
];

export default new VueRouter({ mode: "history", routes });
