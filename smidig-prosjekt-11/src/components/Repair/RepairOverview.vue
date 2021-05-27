<template>
  <div id="overview-container">
    <label class="product-label font-standardText">Product</label>
    <label class="serial-label font-standardText">Serial Number</label>
    <label class="part-label font-standardText">Parts</label>
    <div class="edit-delete-container">
      <label class="edit-label font-standardText">Edit</label>
      <label class="delete-label font-standardText">Delete</label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#overview-container {
  background-color: #7eb46b;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    color: #273422;
    font-weight: bold;
    text-align: center;
    display: inline-block;
  }

  .product-label {
    margin-left: 50px;
    width: 83px;
  }

  .serial-label {
    width: 250px;
  }

  .part-label {
    width: 40vw;
  }

  .edit-delete-container {
    margin-right: 65px;
    display: flex;
    justify-content: space-between;
    width: 100px;
    label {
      position: relative;
    }
  }

  .edit-label {
    left: -20px;
  }

  @media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
    .font-standardText {
      font-size: 12px;
    }

    .edit-label {
      left: -10px;
    }

    .delete-label {
      right: -12px;
    }
  }
}
</style>
