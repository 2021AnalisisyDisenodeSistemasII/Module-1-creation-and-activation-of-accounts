<template>
  <div>
    <Debug></Debug>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Debug from "../components/Debug.vue";
import { CHECK_AUTH } from '../store/actions.type';
export default {
  components: { Debug },
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