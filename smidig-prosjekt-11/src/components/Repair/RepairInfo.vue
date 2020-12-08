<template>
  <div>
    <div class="ProductImg">
      <img />
    </div>
    <hr />
    <span><input type="text" v-model="serialNumber"/></span>
    <img alt="parts" />
    <button @click="editRepair"><img alt="editbtn" /></button>
    <input type="checkbox" name="approve" />
  </div>
</template>

<script>
export default {
  emits: ['add-repair'],
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
