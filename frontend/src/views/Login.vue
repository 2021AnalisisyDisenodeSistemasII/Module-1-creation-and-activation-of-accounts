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
import { mapGetters } from 'vuex';
import Login from "../components/Login.vue";
import { CHECK_AUTH } from '../store/actions.type';
export default {
  components: { Login },
   computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  async beforeMount() {
    await this.$store.dispatch(CHECK_AUTH);
    if (this.isAuthenticated) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>