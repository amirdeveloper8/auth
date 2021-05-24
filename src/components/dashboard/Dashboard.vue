<template>
  <div id="dashboard">
    <div v-if="user" class="container">
      <h3 class="text-center">
        شماره تماس
      </h3>
      <h6 class="text-center">
        {{ user.phone }}
      </h6>
    </div>
    <div v-else class="container">
      <h3>You are not logged in</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
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

<style scoped>
#dashboard {
  width: 85%;
  padding: 3%;
}
</style>
