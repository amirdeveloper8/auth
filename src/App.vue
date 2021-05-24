<template>
  <div id="app">
    <app-header />
    <sidebar v-if="user" />
    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "./components/header/Header";
import axios from "axios";
import { mapGetters } from "vuex";
import Sidebar from "./components/dashboard/Sidebar.vue";
export default {
  name: "App",
  components: {
    "app-header": Header,
    Sidebar,
  },

  computed: {
    ...mapGetters(["user"]),
  },

  async created() {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await axios.get("user");
      this.$store.dispatch("user", response.data);
    }
  },
};
</script>

<style>
body,
html {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  overflow-x: hidden;
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
