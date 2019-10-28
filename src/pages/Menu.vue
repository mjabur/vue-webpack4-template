<template>
  <div>
    <h2> MENU</h2>
    <ul>
      <li
        v-for="product in menu"
        :key="product"
      >
        <div
          class="card mb-3"
          style="max-width: 540px;"
        >
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                :src="product.img"
                class="card-img"
                alt="image"
              >
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div
                  class="alert alert-info"
                  role="alert"
                >
                  <h5>{{ product.name }}</h5>
                </div>
                <p class="card-text">
                  {{ product.text }}
                </p>
                <input
                  v-model.number="product.quantity"
                  type="number"
                >
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="product.quantity += 1"
                >
                  Add to cart
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="product.quantity -= 1"
                >
                  Remove item
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      menu: []
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/pwtwz')
      .then(response => response.json())
      .then(json => {
        this.menu = json.products
      })
  }
}
</script>
