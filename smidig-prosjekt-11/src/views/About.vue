<template>
  <div class="about">
    <base-site></base-site>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue'

export default {
  name: 'Home',
  components: {
    BaseSite
  }
}
</script>

<style scoped></style>
