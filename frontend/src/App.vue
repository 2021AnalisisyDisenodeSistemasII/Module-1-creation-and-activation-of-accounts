<template>
  <div>
    <v-app>
      <Navigator></Navigator>

      <v-main> <router-view /> </v-main>

      <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navigator from "./components/Navigator.vue";

export default {
  components: { Navigator, Footer },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
