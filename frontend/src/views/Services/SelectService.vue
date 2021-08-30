<template>
  <div class="select-service">
    <div id="wrapper">
      <nav
        class="
          navbar navbar-dark
          align-items-start
          sidebar sidebar-dark
          accordion
          bg-gradient-primary
          p-0
        "
      >
        <div class="container-fluid d-flex flex-column p-0">
          <a
            class="
              navbar-brand
              d-flex
              justify-content-center
              align-items-center
              sidebar-brand
              m-0
            "
          >
            <div class="sidebar-brand-icon rotate-n-15">
              <i class="fas fa-piggy-bank"></i>
            </div>
            <div class="sidebar-brand-text mx-3"><span>Starbank</span></div>
          </a>
          <get-sucursal-cashier />
        </div>
      </nav>
      <div class="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <div class="container-fluid">
            <section id="services" class="services">
              <div class="container-md section-title">
                <div class="text-center">
                  <h5
                    class="d-inline-block justify-content-lg-center"
                    style="
                      background-color: #e2d6b5;
                      width: 120px;
                      margin-left: 0px;
                      border-radius: 30px;
                      padding: 5px;
                      margin-top: 20px;
                      color: #ffffff;
                      font-size: 18px;
                    "
                  >
                    SERVICES
                  </h5>
                  <h2 style="color: #75aadb">
                    Select One<span style="color: #d12d33"
                      ><strong>&nbsp;Service</strong></span
                    >
                  </h2>
                </div>
                <div class="row">
                  <div
                    class="
                      col-12
                      text-center
                      col-md-6 col-lg-3
                      d-flex
                      align-items-stretch
                      mb-5 mb-lg-0
                    "
                  >
                    <div class="text-center icon-box">
                      <div class="icon">
                        <i
                          class="fas fa-user-plus"
                          style="margin-bottom: 15px"
                        ></i>
                        <h4 class="title">
                          <strong>Subscription of Clients</strong><br />
                        </h4>
                        <p class="text-center description">
                          Natural Person<br />Legal Company
                        </p>
                      </div>
                      <button
                        class="btn btn-primary disabled"
                        type="button"
                        disabled=""
                      >
                        Select
                      </button>
                    </div>
                  </div>
                  <div
                    class="
                      col-12
                      text-center
                      col-md-6 col-lg-3
                      d-flex
                      align-items-stretch
                      mb-5 mb-lg-0
                    "
                  >
                    <div class="text-center icon-box">
                      <div class="icon">
                        <i
                          class="far fa-address-book"
                          style="margin-bottom: 15px"
                        ></i>
                        <h4 class="title">
                          <strong>Opening of Accounts&nbsp;</strong><br /><a
                            href="#"
                          ></a>
                        </h4>
                        <p class="description">
                          Saving Account&nbsp; <br />Current Account&nbsp;&nbsp;
                        </p>
                      </div>
                      <router-link
                        class="btn btn-primary"
                        role="button"
                        to="/create-account"
                      >
                        Select
                      </router-link>
                    </div>
                  </div>
                  <div
                    class="
                      col-12
                      text-center
                      col-md-6 col-lg-3
                      d-flex
                      align-items-stretch
                      mb-5 mb-lg-0
                    "
                  >
                    <div class="text-center icon-box">
                      <div class="icon">
                        <i
                          class="fas fa-balance-scale"
                          style="margin-bottom: 15px"
                        ></i>
                        <h4 class="title">
                          <strong>Manage Account Balance</strong>
                        </h4>
                        <p class="description">
                          Make Consignments<br />Make Withdrawals&nbsp;&nbsp;
                        </p>
                      </div>
                      <button
                        class="btn btn-primary disabled"
                        type="button"
                        disabled=""
                      >
                        Select
                      </button>
                    </div>
                  </div>
                  <div
                    class="
                      col-12
                      text-center
                      col-md-6 col-lg-3
                      d-flex
                      align-items-stretch
                      mb-5 mb-lg-0
                    "
                  >
                    <div class="text-center icon-box">
                      <div class="icon">
                        <i class="fas fa-lock" style="margin-bottom: 15px"></i>
                        <h4 class="title">
                          <strong>Deactivate an Account&nbsp;</strong>
                        </h4>
                        <p class="description">
                          Do it when the client request it&nbsp;<br />&nbsp;
                          &nbsp; &nbsp;&nbsp;
                        </p>
                      </div>
                      <button
                        class="btn btn-primary disabled"
                        type="button"
                        disabled=""
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GetSucursalCashier from "../../components/GetSucursalCashier.vue";
export default {
  components: { GetSucursalCashier },
};
</script>

<style>
</style>