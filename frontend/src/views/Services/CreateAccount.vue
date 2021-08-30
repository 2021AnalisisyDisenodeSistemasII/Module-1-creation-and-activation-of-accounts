<template>
  <div class="create-account">
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
                      Create Account<span style="color: #d12d33"
                        ><strong>&nbsp;Service</strong></span
                      >
                    </h2>
                  </div>
                  <div class="container">
                    <div class="card shadow-lg o-hidden border-0 my-5">
                      <div class="card-body p-0">
                        <div class="row justify-content-center">
                          <div class="col-lg-6">
                            <div class="p-7">
                              <div>
                                <h5>Enter Client id :</h5>
                                <input
                                  class="input"
                                  type="text"
                                  v-model="client_id"
                                />
                                <br />
                                {{ msg }}
                              </div>
                              <br />
                              <div v-show="client !== ''">
                                {{ client }}<br /><br />
                                <h5>Choose Account Type :</h5>
                                <div
                                  id="floating-label"
                                  class="form-floating mb-3"
                                >
                                  <select
                                    class="form-select form-select"
                                    v-model="account_type"
                                  >
                                    <optgroup label="Account Types">
                                      <option
                                        v-for="acc in account_types"
                                        v-bind:value="acc"
                                        :key="acc"
                                      >
                                        {{ acc }}
                                      </option>
                                    </optgroup>
                                  </select>
                                </div>
                              </div>

                              <br /><button
                                v-show="client !== '' && account_type !== ''"
                                @click="(creation = true), createAccount()"
                                class="btn btn-dark btn-user w-100"
                                role="button"
                              >
                                Create Account
                              </button>

                              <div
                                v-show="creation === true"
                                class="popupsmart"
                                data-radium="true"
                                style="
                                  position: fixed;
                                  display: flex;
                                  justify-content: center;
                                  inset: 0px;
                                  z-index: 2147483647;
                                  pointer-events: none;
                                  height: 100%;
                                  width: 100%;
                                  margin: 0px;
                                  background: rgba(0, 0, 0, 0.5);
                                "
                              >
                                <div data-radium="true">
                                  <div
                                    data-radium="true"
                                    style="
                                      position: absolute;
                                      display: flex;
                                      justify-content: center;
                                      inset: 0px;
                                      height: auto;
                                      width: 100%;
                                      overflow: hidden auto;
                                      margin: 0px;
                                      box-sizing: border-box;
                                      font-size: 20px;
                                      background: rgba(0, 0, 0, 0.5);
                                      padding: 20px;
                                    "
                                  >
                                    <div
                                      class="rmq-12eea9bc"
                                      data-radium="true"
                                      style="
                                        position: relative;
                                        pointer-events: visible;
                                        height: auto;
                                        background: rgb(255, 255, 255);
                                        border-radius: 20px;
                                        margin: auto;
                                        animation-name: pulse-radium-animation-b93e56c5;
                                        animation-duration: 1s;
                                        animation-fill-mode: both;
                                        animation-iteration-count: 1;
                                        width: 450px;
                                        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px
                                          15px 0px;
                                        overflow: hidden auto;
                                      "
                                    >
                                      <div data-radium="true">
                                        <div
                                          id="PsCloseButton"
                                          data-radium="true"
                                          style="
                                            z-index: 99;
                                            position: absolute;
                                            right: 10px;
                                            top: 10px;
                                            cursor: pointer;
                                          "
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 60 60"
                                          >
                                            <g
                                              id="Group_1196"
                                              data-name="Group 1196"
                                              transform="translate(-0.5 -0.5)"
                                            >
                                              <router-link to="services">
                                                <circle
                                                  id="Ellipse_250"
                                                  data-name="Ellipse 250"
                                                  cx="30"
                                                  cy="30"
                                                  r="30"
                                                  transform="translate(0.5 0.5)"
                                                  fill="#000000"
                                                ></circle>
                                              </router-link>

                                              <line
                                                id="Line_1"
                                                data-name="Line 1"
                                                x2="23.4"
                                                y2="23.4"
                                                transform="translate(18.8 18.8)"
                                                fill="none"
                                                stroke="#FFFFFF"
                                                stroke-miterlimit="10"
                                                stroke-width="2"
                                              ></line>
                                              <line
                                                id="Line_2"
                                                data-name="Line 2"
                                                x1="23.4"
                                                y2="23.4"
                                                transform="translate(18.8 18.8)"
                                                fill="none"
                                                stroke="#FFFFFF"
                                                stroke-miterlimit="10"
                                                stroke-width="2"
                                              ></line>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <div data-radium="true">
                                        <div
                                          data-radium="true"
                                          style="
                                            width: 100%;
                                            display: flex;
                                            justify-content: center;
                                            align-items: center;
                                          "
                                        ></div>
                                      </div>
                                      <div data-radium="true">
                                        <div
                                          class="rmq-43f44628"
                                          data-radium="true"
                                          style="padding: 33px 50px"
                                        >
                                          <div data-radium="true">
                                            <div
                                              id="PsHeadline"
                                              data-radium="true"
                                              style="
                                                font-family: Inter;
                                                font-weight: 700;
                                                line-height: initial;
                                                margin: 0px 0px 15px;
                                              "
                                            >
                                              <p style="text-align: center">
                                                <span
                                                  style="
                                                    font-size: 16px;
                                                    color: #3179f7;
                                                  "
                                                  >Client Created
                                                  successfully</span
                                                >
                                              </p>
                                            </div>
                                          </div>
                                          <div data-radium="true">
                                            <div
                                              id="PsDescription"
                                              data-radium="true"
                                              style="
                                                font-family: Inter;
                                                font-weight: 700;
                                                line-height: 1.22;
                                                margin: 0px 0px 10px;
                                              "
                                            >
                                              <p style="text-align: center">
                                                <span
                                                  style="
                                                    font-size: 29px;
                                                    color: #000000;
                                                  "
                                                  >Client id: {{ client_id }}
                                                  <br />
                                                  Account id: {{ account_id }}
                                                  <br
                                                /></span>
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
  </div>
</template>

<script>
import GetSucursalCashier from "../../components/GetSucursalCashier.vue";
export default {
  data() {
    return {
      client_id: "",
      client: "",
      account_types: ["current", "saving"],
      account_type: "",
      account_id: "",
      msg: "",
      creation: "",
      current_sucursal: "",
    };
  },
  watch: {
    client_id() {
      fetch(`http://localhost:3000/client/${this.$data.client_id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data["msg"]) {
            this.msg = data["msg"];
            this.client = "";
          } else {
            this.msg = "";
            this.client = data;
            delete this.client["client_id"];
          }
        });
    },
  },
  methods: {
    createAccount() {
      fetch("http://localhost:3000/login/current")
        .then((res) => res.json())
        .then((data) => {
          this.current_sucursal = data["sucursal"];
        });
      fetch("http://localhost:3000/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: this.client_id,
          sucursal_id: this.sucursal_id,
          account_type: this.account_type + "_accounts.json",
        }),
      })
        .then((res) => res.json())
        .then((data) => (this.account_id = data["account_id"]));
    },
  },
  components: { GetSucursalCashier },
};
</script>

<style>
.input {
  margin: 5px;
}
@media (max-width: 600px) {
  .rmq-43f44628 {
    padding: 33px 20px !important;
  }
}

@media (max-width: 600px) {
  .rmq-126a285f {
    flex-direction: column-reverse !important;
  }
}

@media (max-width: 600px) {
  .rmq-d802e13 {
    text-align: center !important;
    width: 100% !important;
  }
}
@media (max-width: 600px) {
  .rmq-12eea9bc {
    width: 90% !important;
    max-width: 350px !important;
  }
}

@keyframes pulse-radium-animation-b93e56c5 {
  from {
    opacity: 0;
    transform: scale(0.9, 0.9);
  }

  to {
    opacity: 1;
    transform: scale(1, 1);
  }
}
</style>