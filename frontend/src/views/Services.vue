<template>
  <div><Services></Services></div>
</template>

<script>
import { mapGetters } from "vuex";
import Services from "../components/Services.vue";
export default {
  components: { Services },
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