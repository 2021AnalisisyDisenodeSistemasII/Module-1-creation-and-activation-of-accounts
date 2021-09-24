<template>
  <transition
    appear
    name="fab-transition"
    :duration="{ enter: 500, leave: 800 }"
    ><v-container fluid fill-height v-show="show">
      <v-card class="mx-auto" width="535px" align="center"
        ><v-row>
          <v-col cols="6">
            <v-img
              src="../assets/img/error-404.png"
              height="250px"
              contain
            ></v-img>
          </v-col>
          <v-col align-self="center">
            <v-card-title class="justify-center">
              Oops: ERROR 404 Page Not Found
            </v-card-title>

            <v-card-subtitle class="justify-center">
              El mono made something wrong
            </v-card-subtitle>
            <v-card-text class="justify-center"></v-card-text>
          </v-col>
        </v-row>
      </v-card> </v-container
  ></transition>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  mounted() {
    this.show = !this.show;
  },
};
</script>

<style>
</style>