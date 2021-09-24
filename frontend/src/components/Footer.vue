<template>
  <v-footer color="primary lighten-1 " app bottom fixed padless>
    <div class="ma-4">
      <v-btn
        class="mx-4"
        icon
        href="https://github.com/2021AnalisisyDisenodeSistemasII/Module-1-creation-and-activation-of-accounts"
        target="_blank"
      >
        <v-icon size="24px"> mdi-github </v-icon>Github
      </v-btn>
    </div>
    <v-row justify="center" no-gutters>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="8">
        {{ new Date().getFullYear() }} — <strong>StarBank</strong> —
        <v-btn class="mx-2" icon to="/debug">
          <v-icon size="24px"> mdi-bug </v-icon>AH!
        </v-btn>
      </v-col>
    </v-row>
    <div>
      <v-switch
        class="mx-4"
        v-model="$vuetify.theme.dark"
        :hint="!$vuetify.theme.dark ? 'Dark ' : 'Light '"
        persistent-hint
      ></v-switch>
    </div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
</style>