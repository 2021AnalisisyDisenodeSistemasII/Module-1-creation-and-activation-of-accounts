<template>
  <div class="welcome">
    <div class="container">
      <div class="card shadow-lg o-hidden border-0 my-5">
        <div class="card-body p-0">
          <div class="row justify-content-center">
            <div class="col-lg-6 d-none d-lg-flex">
              <div
                class="flex-grow-1 bg-password-image"
                style="
                  background: url('./assets/img/pigs/pig2.png') center / contain
                    space;
                  height: 100%;
                  width: 100%;
                "
              ></div>
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <div class="text-center">
                  <h4 class="text-dark mb-2">
                    Please Log In to provide our services
                  </h4>
                  <p class="text-start mb-4">
                    StarBank is a bank entity in charge of managing deposit
                    accounts. Financial operations that you can carry out:<br /><br />●
                    Opening and activation of accounts of two types (Savings,
                    Current)<br />● Subscription of clients of two types
                    (Natural Person, Legal Company)<br />● Make consignments and
                    withdrawals on the balance of an account.<br />●
                    Deactivation of an account when the client requests it.
                  </p>
                </div>

                <router-link
                  to="login"
                  class="btn btn-dark btn-user w-100"
                  role="button"
                >
                  Log In
                </router-link>
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
  name: "Welcome",
  methods: {
    resetCurrentSucCas() {
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sucursal: "",
          cashier_id: "",
        }),
      });
    },
  },
  beforeMount() {
    this.resetCurrentSucCas();
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  height: 90%;
}
</style>
