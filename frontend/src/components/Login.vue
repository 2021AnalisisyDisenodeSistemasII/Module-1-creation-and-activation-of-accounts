<template>
  <div class="login">
    <div class="container">
      <div class="card shadow-lg o-hidden border-0 my-5">
        <div class="card-body p-0">
          <div class="row justify-content-center">
            <div class="col-lg-6 d-none d-lg-flex">
              <div
                class="flex-grow-1 bg-login-image"
                style="
                  background: url('./assets/img/pigs/pig3.png') center / contain
                    space;
                "
              ></div>
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <div class="text-center">
                  <h4 class="text-dark mb-2">
                    Select Sucursal and Cashier IDs
                  </h4>
                </div>
                <form class="user">
                  <div id="floating-label" class="form-floating mb-3">
                    <select
                      @click="getCashiers(current_sucursal.sucursal_id)"
                      class="form-select form-select"
                      v-model="current_sucursal"
                    >
                      <optgroup label="Sucursals">
                        <option
                          v-for="(suc, index) in sucursals"
                          v-bind:value="suc"
                          :key="index"
                        >
                          {{ suc.sucursal_id + " " + suc.city }}
                        </option>
                      </optgroup>
                    </select>
                  </div>

                  <div id="floating-label" class="form-floating mb-3">
                    <select
                      class="form-select form-select"
                      v-model="current_cashier"
                    >
                      <optgroup label="These are the cashiers">
                        <option
                          v-for="cash in cashiers"
                          v-bind:value="cash"
                          :key="cash"
                        >
                          {{ cash }}
                        </option>
                      </optgroup>
                    </select>
                  </div>

                  <router-link
                    class="btn btn-dark btn-user w-100"
                    role="button"
                    to="services"
                    @click="postSucCas(current_sucursal, current_cashier)"
                    v-show="current_cashier != null"
                  >
                    Log In
                  </router-link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sucursals: [],
      cashiers: [],
      current_sucursal: null,
      current_cashier: null,
    };
  },
  methods: {
    getSucursals: function () {
      fetch("http://localhost:3000/sucursals")
        .then((res) => res.json())
        .then((data) => (this.sucursals = data.sucursals));
    },
    getCashiers: function (id) {
      if (id) {
        fetch("http://localhost:3000/cashiers/" + id)
          .then((res) => res.json())
          .then((data) => (this.cashiers = data.cashiers));
      }
    },
    postSucCas: function (current_sucursal, current_cashier) {
      if (current_sucursal && current_cashier) {
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sucursal: current_sucursal,
            cashier_id: current_cashier,
          }),
        });
      }
    },
  },
  beforeMount() {
    this.getSucursals();
  },
};
</script>

<style>
.container {
  width: 90%;
  height: 90%;
}
</style>