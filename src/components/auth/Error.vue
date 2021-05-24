<template>
  <div v-if="error" class="alert alert-danger text-center">
    {{ error }}
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style lang="scss" scoped></style>
