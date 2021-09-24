<template>
  <span>
    <v-card class="mx-auto" max-width="434" tile>
      <v-img
        height="100%"
        src="../assets/img/pig1.png"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      >
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-5" cols="12">
            <v-avatar color="indigo">
              <v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Sucursal: {{ currentUser.sucursal }}
                </v-list-item-title>
                <v-list-item-subtitle
                  >Cashier: {{ currentUser.cashier_id }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
    <v-divider></v-divider>

    <v-list nav dense v-for="(link, index) in links" :key="index">
      <v-list-item :to="link.path">
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ link.title }}</v-list-item-title>
      </v-list-item>
    </v-list></span
  >
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    links: [
      { title: "Services", path: "/services", icon: "mdi-hexagon-slice-4" },
    ],
  }),
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    }),
  },
};
</script>

<style>
</style>