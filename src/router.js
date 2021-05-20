import Vue from "vue";
import VueRouter from "vue-router";

import SignupPage from "./components/auth/Signup.vue";
import LoginPage from "./components/auth/Login.vue";
import DashboardPage from "./components/dashboard/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/register", component: SignupPage },
  { path: "/login", component: LoginPage },
  { path: "/dashboard", component: DashboardPage },
];

export default new VueRouter({ mode: "history", routes });
