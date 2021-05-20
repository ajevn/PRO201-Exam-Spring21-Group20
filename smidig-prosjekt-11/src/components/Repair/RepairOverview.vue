<template>
  <div id="overview-container">
    <label class="font-standardText">Product</label>
    <label class="font-standardText">Serial Number</label>
    <label class="font-standardText">Parts</label>
    <div id="edit-delete-label">
      <label class="font-standardText">Edit</label>
      <label class="font-standardText">Delete</label>
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
  display: grid;
  grid-template-columns: 1fr 1fr 40% 1fr 20px;
  align-items: center;

  label {
    color: #273422;
    font-weight: bold;
    text-align: center;
    display: inline-block;
  }

  #edit-delete-label {
    grid-column: 4;
    display: inline-block;
    text-align: center;

    label {
      margin-left: 30px;
    }
  }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  .font-standardText {
    font-size: 12px;
  }
}
</style>
