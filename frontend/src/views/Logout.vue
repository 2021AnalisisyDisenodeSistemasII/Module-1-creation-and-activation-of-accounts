<template>
  <div>El mono was here</div>
</template>

<script>
import { LOGOUT } from "../store/actions.type";
export default {
  beforeMount() {
    this.$store.dispatch(LOGOUT).then(() => this.$router.push("/"));
  },
};
</script>

<style>
</style>