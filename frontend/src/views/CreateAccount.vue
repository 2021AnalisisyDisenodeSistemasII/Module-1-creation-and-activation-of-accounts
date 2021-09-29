<template>
  <div><CreateAccount></CreateAccount></div>
</template>

<script>
import { mapGetters } from "vuex";
import CreateAccount from "../components/CreateAccount.vue";
import { CHECK_AUTH } from '../store/actions.type';
export default {
  components: { CreateAccount },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  async beforeMount() {
    await this.$store.dispatch(CHECK_AUTH);
    if (!this.isAuthenticated) {
      this.$router.push("error");
    }
  },
};
</script>

<style>
</style>