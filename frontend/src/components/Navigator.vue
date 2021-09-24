<template>
  <span>
    <v-card>
      <v-navigation-drawer
        app
        :value="isAuthenticated"
        disable-resize-watcher
        :permanent="isAuthenticated ? true : false"
        height="100%"
      >
        <CashierCard></CashierCard>

        <v-spacer></v-spacer>
      </v-navigation-drawer>
    </v-card>

    <v-app-bar app>
      <v-toolbar-title
        ><router-link to="/" tag="span" style="cursor: pointer">
          <v-icon>mdi-piggy-bank</v-icon> StarBank
        </router-link></v-toolbar-title
      >

      <v-spacer> </v-spacer>
      <span v-if="!isAuthenticated">
        <v-btn v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </span>
      <div v-else>
        <v-btn v-for="item in menuItems2" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </div>
    </v-app-bar>
  </span>
</template>

<script>
import { mapGetters } from "vuex";
import CashierCard from "./CashierCard.vue";
export default {
  components: { CashierCard },
  data: () => ({
    menuItems: [{ title: "Log In", path: "/login", icon: "mdi-login" }],
    menuItems2: [{ title: "Log Out", path: "/logout", icon: "mdi-logout" }],
  }),
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
    }),
  },
};
</script>


