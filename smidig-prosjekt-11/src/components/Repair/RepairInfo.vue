<template>
  <div id="product-container">
    <div class="ProductImg">
      <img class="product-image-sunbell" src="@/assets/Images/Parts/sunbellProductImage.png"/>
    </div>
    <span><input type="text" v-model="serialNumber"/></span>
    <img alt="parts" />
    <button @click="editRepair"><img alt="editbtn" /></button>

    <!-- Not needed in this page -->
    <!--<input type="checkbox" name="approve" />-->

    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      serialNumber: '',
      parts: []
    }
  },
  methods: {
    editRepair() {
      // show repair overlay
    }
  }
}
</script>

<style lang="scss" scoped>
  #product-container {
    width: 100%;
    height: 100px;
    align-items: center;
    text-align: center;
    display: grid;
    grid-template-columns: auto auto 30% auto;
    grid-template-rows: auto 2px;

    .product-image-sunbell {
      width: 55px;
      margin: auto;
    }

    hr {
      grid-column: 1/-1;
      grid-row: 2;
      width: 90%;
      margin: auto;
      border-top: 1px solid black;
    }
  }
</style>
