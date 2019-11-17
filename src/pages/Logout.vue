<template>
  <div class="full-width center-content">
    You are logged out
  </div>
</template>
<script>
export default {
  mounted: function () {
    sessionStorage.user = 'undefined'
    this.$router.push('/')
  }
}
</script>
