<template>
  <div><CreateAccount></CreateAccount></div>
</template>

<script>
import { mapGetters } from "vuex";
import CreateAccount from "../components/CreateAccount.vue";
export default {
  components: { CreateAccount },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  beforeMount() {
    if (!this.isAuthenticated) {
      this.$router.push("error");
    }
  },
};
</script>

<style>
</style>