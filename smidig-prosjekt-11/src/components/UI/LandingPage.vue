<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let regNumber = ref()
    return { regNumber }
  }
}
</script>

<style scoped></style>
