<template>
  <div>
    <div class="container-fluid">
      <b-card
        overlay
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefaa3JBxwbykwfb9TbV7JEin6PdHVrShyO_iOFQQaSwKhXELb&s"
        img-alt="Card Image"
        text-variant="black"
        title="WELCOME TO THE OFFICIAL WEBSITE OF JUST DO IT "
      >
        <b-card-text>
          `
          The World of Sport
        </b-card-text>
      </b-card>
    </div>
    <b-container
      fluid
      class="p-4 bg-dark"
    >
      <b-row>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://sc01.alicdn.com/kf/HTB12aCyhAOWBuNjSsppq6xPgpXae/football-shirt-maker-wholesale-soccer-t-shirts.jpg_350x350.jpg"
            alt="Image 1"
          />
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="http://www.pigskincanada.com/assets/images/volleyballkitspike.jpg"
            alt="Image 2"
          />
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://image.made-in-china.com/202f0j00UAkEGdmyAHgu/Custom-College-Basketball-Uniforms-Cheap-Blank-Basketball-Jerseys-for-Printing.jpg"
            alt="Image 3"
          />
        </b-col>
      </b-row>
    </b-container>
    <div class="full-width center-content">
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-email"
          label="Email:"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            required
            placeholder="Your email address"
          />
        </b-form-group>
        <b-form-group
          id="input-group-password"
          label="Password:"
          label-for="input-password"
        >
          <b-input
            id="input-password"
            v-model="form.password"
            type="password"
            required
            placeholder="Your password"
          />
        </b-form-group>
        <b-button
          type="submit"
          variant="primary"
        >
          Log in
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      },
      users: []
    }
  },
  methods: {
    onSubmit () {
      fetch('https://api.myjson.com/bins/18xv8i')
        .then(response => response.json())
        .then(json => {
          this.users = json.users
        })
        .then(() => {
          let email = this.form.email
          let password = this.form.password
          sessionStorage.user = JSON.stringify(this.users.find(function (user) {
            return ((user.email === email) && (user.password === password))
          }))
          console.log(sessionStorage.user)
          this.$router.push('/Login')
        })
    }
  }
}
</script>
