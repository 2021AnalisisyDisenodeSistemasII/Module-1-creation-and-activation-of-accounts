<template>
  <v-stepper v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1">
        Verify Client ID
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 2" step="2">
        Select Account Type
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Create Account </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-12 pa-12" color="grey lighten-1" height="200px">
          <v-text-field
            prepend-icon="mdi-card-account-details"
            label="Client ID"
            :rules="rules"
            hide-details="auto"
            v-model="clientId"
          ></v-text-field>
          <v-alert dense outlined type="error" v-if="!!error">
            <strong>Error: </strong> {{ error }}
          </v-alert>
          <v-alert dense text type="success" v-else-if="!!currentClient">
            <strong>Success: </strong> Client Found
          </v-alert>
        </v-card>

        <v-btn
          color="primary"
          @click="step = step + 1"
          v-show="!!currentClient"
        >
          Continue
        </v-btn>

        <v-btn text to="/"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12 pa-12" color="grey lighten-1" height="200px">
          <v-select
            v-model="accountType"
            :items="['current', 'saving']"
            menu-props="auto"
            label="Select"
            hide-details
            prepend-icon="mdi-cash-multiple"
            single-line
          ></v-select>
        </v-card>

        <v-btn color="primary" @click="step = 3" v-show="!!accountType">
          Continue
        </v-btn>

        <v-btn text to="/"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left text-h6">Account Type</th>
                  <th class="text-left text-h6">{{ accountType }}</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(key, index) of Object.keys(currentClient)"
                  :key="`${index}_q`"
                >
                  <td>{{ key.replace("_", " ") }}</td>
                  <td>{{ currentClient[key] }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>

        <v-dialog v-model="dialog" persistent max-width="45%">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              @click="createAccount"
              v-bind="attrs"
              v-on="on"
            >
              Create
            </v-btn>
            <v-btn text to="/"> Cancel </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5">
              Account Created Successfully
            </v-card-title>
            <v-card-text
              ><strong>Cliend ID: </strong>{{ clientId }}<br />
              <strong>Account ID: </strong>{{ accountId }}<br />
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="grey" text @click="acept"> Acept </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import {
  GET_CLIENT,
  CREATE_ACCOUNT,
  PURGUE_CLIENT,
} from "../store/actions.type";
export default {
  data() {
    return {
      dialog: false,
      clientId: "",
      accountType: "",
      accountId: "",
      step: 1,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 8) || "Min 8 characters",
      ],
    };
  },
  methods: {
    createAccount() {
      this.$store
        .dispatch(CREATE_ACCOUNT, {
          client_id: this.clientId,
          sucursal_id: this.currentUser.sucursal.split(" - ")[0],
          account_type: this.accountType + "_accounts.json",
        })
        .then((data) => {
          this.accountId = data.data.account_id;
        });
      console.log(this.accountId);
      this.dialog = true;
    },
    acept() {
      this.$router.push("/");
    },
  },
  watch: {
    clientId() {
      this.$store.dispatch(GET_CLIENT, this.clientId);
    },
  },
  computed: {
    ...mapGetters({
      currentClient: "currentClient",
      currentUser: "currentUser",
    }),
    ...mapState({
      error: (state) => state.account.error,
    }),
  },
  async mounted(){
    await this.$store.dispatch(PURGUE_CLIENT)
  }

};
</script>