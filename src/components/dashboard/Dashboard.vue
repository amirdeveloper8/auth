<template>
  <div>
    <div v-if="user" class="container">
      <h3 class="text-center">
        شماره تماس
      </h3>
      <h6 class="text-center">
        {{ user.phone }}
      </h6>
    </div>
    <div class="container">
      <h3>You are not logged in</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>
