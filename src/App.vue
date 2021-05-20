<template>
  <div id="app">
    <app-header :user="user" />
    <transition name="slide" mode="out-in">
      <router-view :user="user" />
    </transition>
  </div>
</template>

<script>
import Header from "./components/header/Header";
import axios from "axios";
export default {
  name: "App",
  components: {
    "app-header": Header,
  },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const response = await axios.get("user");
    this.user = response.data;

    console.log(response);
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
