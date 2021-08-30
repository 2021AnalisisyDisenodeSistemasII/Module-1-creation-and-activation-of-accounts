<template>
  <div>
    <header>
      <div v-if="$route.name.indexOf('Services') !== -1">
        <router-view />
      </div>
      <div v-else>
        <div id="nav">
          <router-link to="/">Home</router-link>
        </div>
        <router-view />
      </div>
    </header>

    <footer>
      <div>
        <footer class="footer-dark">
          <div class="container">
            <div class="row">
              <div class="col item social">
                <a
                  href="https://github.com/2021AnalisisyDisenodeSistemasII/Module-1-opening-and-activation-of-accounts"
                  ><i class="icon ion-social-github"></i
                ></a>
              </div>
            </div>
            <p class="copyright">
              Module 1: Opening and activation of accounts © 2021
            </p>
          </div>
        </footer>
      </div>
    </footer>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #e43c5c;
}
</style>
