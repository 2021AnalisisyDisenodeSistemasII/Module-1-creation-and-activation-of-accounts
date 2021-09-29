<template>
  <div><Services></Services></div>
</template>

<script>
import { mapGetters } from "vuex";
import Services from "../components/Services.vue";
import { CHECK_AUTH } from '../store/actions.type';
export default {
  components: { Services },
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