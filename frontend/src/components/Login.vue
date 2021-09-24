<template>
  <v-container fluid fill-height>
    <v-card class="mx-auto" width="535px" align="center" justify="center"
      ><v-row>
        <v-col>
          <v-img src="../assets/img/pig3.png" height="200px" contain></v-img>
        </v-col>
        <v-col>
          <v-card-title class="justify-center">
            Select the Sucursal and the Cashier</v-card-title
          >

          <v-card-text>
            <v-form>
              <v-select
                prepend-icon="mdi-bank"
                v-model="sucursal"
                :rules="[() => !!sucursal || 'This field is required']"
                :items="sucursals"
                label="Sucursal"
                placeholder="Select..."
                required
              ></v-select>
              <v-select
                v-show="!!sucursal"
                prepend-icon="mdi-cash-register"
                v-model="cashier"
                :rules="[() => !!cashier || 'This field is required']"
                :items="cashiers"
                label="Cashier"
                placeholder="Select..."
                required
              ></v-select>
              <v-btn
                v-show="!!sucursal && !!cashier"
                color="grey"
                @click="onSubmit(sucursal, cashier)"
                >Login</v-btn
              >
            </v-form>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script >
//
import { GET_SUCURSALS, GET_CASHIERS, LOGIN } from "../store/actions.type";
export default {
  data: () => ({
    sucursals: [],
    sucursal: null,
    cashiers: [],
    cashier: null,
    show: false,
  }),

  methods: {
    onSubmit(sucursal, cashier_id) {
      this.$store
        .dispatch(LOGIN, { sucursal, cashier_id })
        .then(() => this.$router.push("/"));
    },
  },
  watch: {
    sucursal() {
      this.cashier = null;
      this.$store
        .dispatch(GET_CASHIERS, this.$data.sucursal[0].split(" - ")[0])
        .then((data) => {
          this.cashiers = data;
        });
    },
  },
  mounted() {
    this.$store.dispatch(GET_SUCURSALS).then((data) => {
      for (const key in data) {
        this.sucursals.push(
          `${key} - ${JSON.parse(JSON.stringify(data))[key].city}`
        );
      }
    });
  },
};
</script>

<style scoped>
</style>