<template>
  <transition
    appear
    name="fab-transition"
    :duration="{ enter: 500, leave: 800 }"
  >
    <v-container class="pa-4 text-center" fluid fill-height>
      <v-row class="mx-auto" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="4">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                color="grey"
              >
                <v-card-title class="text-h6 black--text font-weight-bold">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">
                      {{ item.title }}
                    </p>

                    <div>
                      <p
                        class="
                          ma-0
                          text-body-1
                          font-italic
                          text-left
                          white--text
                        "
                      >
                        {{ item.text }}
                      </p>
                    </div>
                    <v-spacer class="align-end"></v-spacer>
                    <div class="align-self-center pa-12">
                      <v-btn
                        :class="{ 'show-btns': hover }"
                        color="#3f51b5"
                        :disabled="item.status"
                        :to="item.path"
                      >
                        <v-icon
                          :class="{ 'show-btns': hover }"
                          class="mx-2"
                          :color="transparent"
                        >
                          {{ item.icon }}
                        </v-icon>
                        Select
                      </v-btn>
                    </div>
                  </v-row>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </transition>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    items: [
      {
        title: "Subscription of Clients",
        text: "Natural Person or Legal Company",
        icon: "mdi-account-multiple-plus",
        status: true,
        path: "*",
      },
      {
        title: "Opening of Accounts",
        text: "Saving or Current Account",
        icon: "mdi-notebook-plus",
        status: false,
        path: "/create-account",
      },
      {
        title: "Manage Account Balance",
        text: "Consignments and Withdrawals",
        icon: "mdi-scale-balance",
        status: true,
        path: "*",
      },
      {
        title: "Deactivate an Account",
        text: "Do it only when the client request it",
        icon: "mdi-file-cancel",
        status: true,
        path: "*",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>