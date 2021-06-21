<template>
  <div>
    <h1>hello</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
    const response = await axios.get("user");

    console.log(response);
  },
};
</script>
