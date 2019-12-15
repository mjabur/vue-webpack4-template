<template>
  <div class="container center-content">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          cols="12"
          offset="0"
        >
          <div>
            <b-navbar
              variant="faded"
              type="light"
            >
              <b-navbar-brand href="#">
                <img
                  src="https://i7.pngguru.com/preview/303/549/109/sport-logo-football-clip-art-sports-logos.jpg"
                  height="42"
                  width="42"
                  class="d-inline-block align-top"
                  alt="Chance"
                >
                JUST DO IT
              </b-navbar-brand>

              <b-navbar-toggle target="nav-collapse" />

              <b-collapse
                id="nav-collapse"
                is-nav
              >
                <b-navbar-nav>
                  <b-link
                    to="/"
                    router-tag="b-nav-item"
                  >
                    Home
                  </b-link>

                  <b-link
                    to="/about"
                    router-tag="b-nav-item"
                  >
                    About
                  </b-link>

                  <b-link
                    to="/store"
                    router-tag="b-nav-item"
                  >
                    Store
                  </b-link>

                  <b-link
                    to="/contact"
                    router-tag="b-nav-item"
                  >
                    Contact
                  </b-link>

                  <b-link
                    to="/logout"
                    router-tag="b-nav-item"
                  >
                    Logout
                  </b-link>

                  <b-link
                    to="/register"
                    router-tag="b-nav-item"
                  >
                    Register
                  </b-link>

                  <b-link
                    to="/Login"
                    router-tag="b-nav-item"
                  >
                    Login
                  </b-link>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <RouterView />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="stylus" scoped>
.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px

</style>
