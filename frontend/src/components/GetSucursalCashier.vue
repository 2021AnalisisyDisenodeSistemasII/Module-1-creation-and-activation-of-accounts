<template>
  <div>
    <div class="card">
      {{ !current_cashier ? this.$router.push("/") : " " }}
      <div class="card-body">
        <h4 class="card-title">Sucursal: {{ current_sucursal }}</h4>
        <h6 class="text-muted card-subtitle mb-2">
          Cashier: {{ current_cashier }}
        </h6>
      </div>
    </div>
    <ul class="navbar-nav text-light" id="accordionSidebar">
      <li class="nav-item">
        <router-link class="nav-link active" to="services"
          ><i class="fas fa-table"></i><span>Services</span></router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/"
          ><i class="fa fa-exclamation-triangle"></i
          ><span>Log Out</span></router-link
        >
      </li>
      <li class="nav-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_cashier: "-",
      current_sucursal: "-",
    };
  },
  methods: {
    getCurrentSucCas() {
      fetch("http://localhost:3000/login/current")
        .then((res) => res.json())
        .then((data) => {
          (this.current_sucursal =
            data["sucursal"]["sucursal_id"] + " " + data["sucursal"]["city"]),
            (this.current_cashier = data["cashier_id"]);
        });
    },
    redirect() {
      console.log(this.current_cashier);
      this.$router.push("/");
    },
  },
  beforeMount() {
    this.getCurrentSucCas();
  },
};
</script>

<style>
.card {
  margin: 5px;
}
</style>