<template>
  <transition
    appear
    name="fab-transition"
    :duration="{ enter: 500, leave: 800 }"
    ><v-container fluid fill-height>
      <v-card class="mx-auto" width="535px" align="center"
        ><v-row>
          <v-col cols="6">
            <v-img src="../assets/img/aaah.gif" height="250px" contain></v-img>
          </v-col>
          <v-col align-self="center">
            <v-card-title class="justify-center">
              AH AH AH! <br />
              You Don't Have Access
            </v-card-title>

            <v-card-subtitle class="justify-center">
              Log in first
            </v-card-subtitle>
            <v-card-text class="justify-center"></v-card-text>
          </v-col>
        </v-row>
      </v-card> </v-container
  ></transition>
</template>

<script>
export default {};
</script>

<style>
</style>