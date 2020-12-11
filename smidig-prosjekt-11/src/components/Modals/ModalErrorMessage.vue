<template>
  <modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">custom header</h3>
    </modal>
</template>

<script>
export default {

}
</script>

<style>

</style>