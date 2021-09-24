<template>
  <transition
    appear
    name="fab-transition"
    :duration="{ enter: 500, leave: 800 }"
  >
    <Login></Login>
  </transition>
</template>

<script>
import Login from "../components/Login.vue";
export default {
  components: { Login },
};
</script>

<style>
</style>