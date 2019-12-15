<template>
  <div>
    <b-form
      v-if="show"
      @submit="onSubmit"
      @reset="onReset"
    >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        />
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your Name:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
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

      <b-form-group
        id="input-group-3"
        label="Sport:"
        label-for="input-3"
      >
        <b-form-select
          id="input-3"
          v-model="form.sport"
          :options="sports"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group
          id="checkboxes-4"
          v-model="form.checked"
        >
          <b-form-checkbox value="me">
            Check me out
          </b-form-checkbox>
          <b-form-checkbox value="that">
            Check that out
          </b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
      >
        Submit
      </b-button>
      <b-button
        type="reset"
        variant="danger"
      >
        Reset
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        password: '',
        sport: null,
        checked: []
      },
      sports: [{ text: 'Select One', value: null }, 'Nike', 'adidas', 'Puma'],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      this.$axios.post('/users', this.form)
        .then(response => { alert(response.data.data.message) })
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.sport = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
