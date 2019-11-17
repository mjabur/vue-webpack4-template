<template>
  <div class="container center-content">
    <div id="nav">
      <b-card
        title="JUST DO IT"
        no-body
      >
        <b-card-header header-tag="nav">
          <b-nav
            card-header
            tabs
          >
            <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
            <b-nav-item
              to="/"
              exact
              exact-active-class="active"
            >
              <img
                src="../assets/img/logo.png"
                alt="Logo"
                title="Home"
                height="42"
                width="68"
              >
            </b-nav-item>
            <b-nav-item
              to="/about"
              exact
              exact-active-class="active"
            >
              About
            </b-nav-item>
            <b-nav-item
              to="/store"
              exact
              exact-active-class="active"
            >
              Strore
            </b-nav-item>
            <b-nav-item
              to="/contact"
              exact
              exact-active-class="active"
            >
              Contact
            </b-nav-item>
            <b-nav-item
              v-if="user"
              to="/logout"
              exact
              exact-active-class="active"
            >
              Logout
            </b-nav-item>
            <b-nav-item
              v-else
              to="/login"
              exact
              exact-active-class="active"
            >
              Login
            </b-nav-item>
          </b-nav>
        </b-card-header>
      </b-card>
    </div>
    <RouterView />
  </div>
</template>

<style lang="stylus" scoped>
.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px
b-nav-item
  font-size 40px
</style>

<script>
export default {
  data: function () {
    return {
      user: undefined
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/18xv8i')
      .then(response => response.json())
      .then(json => {
        this.users = json.users
      })
  },
  mounted: function () {
    let v = sessionStorage.user
    if (v !== 'undefined') {
      this.user = JSON.parse(v)
    }
  }
}
</script>
