<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Vue - Complete Guide</router-link>
    </div>
    <nav>
      <ul v-if="!user">
        <li>
          <router-link to="/register">Sign Up</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
      <ul v-else>
        <li>
          <a href="javascript:void(0)" @click="handleClick">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  methods: {
    async handleClick() {
      const response = await axios.post("logout", {
        user: null,
      });
      console.log(response);
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.replace("/login");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
#header {
  height: 56px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: #521751;
  padding: 0 20px;
  width: 100%;
  margin: 0;
  /* position: fixed;
  top: 0;
  z-index: 9999; */
}

.logo {
  font-weight: bold;
  color: white;
}

.logo a {
  text-decoration: none;
  color: white;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

li {
  margin: 0 16px;
}

li a {
  text-decoration: none;
  color: white;
}

li a:hover,
li a:active,
li a.router-link-active {
  color: #fa923f;
}

.logout {
  background-color: transparent;
  border: none;
  font: inherit;
  color: white;
  cursor: pointer;
}
</style>
