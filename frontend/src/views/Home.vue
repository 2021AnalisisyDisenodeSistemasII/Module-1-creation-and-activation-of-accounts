<template>
  <transition
    appear
    name="fab-transition"
    :duration="{ enter: 500, leave: 800 }"
    ><v-container fluid fill-height>
      <v-card class="mx-auto" width="535px" align="center"
        ><v-row>
          <v-col>
            <v-img src="../assets/img/pig2.png" height="200px" contain></v-img>
          </v-col>
          <v-col>
            <v-card-title class="justify-center">
              StarBank Entity
            </v-card-title>

            <v-card-subtitle class="justify-center">
              Expert managing deposit accounts. Financial operations:
            </v-card-subtitle>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon @click="display = !display">
                <v-icon>{{
                  display ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="display">
                <v-divider></v-divider>

                <v-card-text class="text-left">
                  ● Opening and activation of two types of accounts (Savings,
                  Current).<br />
                  ● Subscription of two types of clients (Natural Person, Legal
                  Company).<br />
                  ● Make consignments and withdrawals on the balance of one
                  account.<br />
                  ● Deactivation of an account when the client requests it.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-col>
        </v-row>
      </v-card>
    </v-container></transition
  >
</template>

<script>
export default {
  data: () => ({
    display: false,
  }),
};
</script>
