<template>
  <div>
    <h1>Welcome <span v-if="user">{{ user.name }}</span> to JUST DO IT </h1>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      user: undefined
    }
  },
  created: function () {
    fetch('https://3000-e803d580-d89d-4ec9-8ab4-bfee0aad972c.ws-eu01.gitpod.io/api/users')
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
