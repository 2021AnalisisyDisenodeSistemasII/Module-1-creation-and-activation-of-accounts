<template>
  <div>
    <Debug></Debug>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Debug from "../components/Debug.vue";
export default {
  components: { Debug },
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