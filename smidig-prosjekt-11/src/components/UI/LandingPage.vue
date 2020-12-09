<template>
    <div class="w-full h-auto">
        <!-- <div class=" sidebar w-1/5 bg-logoBar bg-opacity-70  ">
            <div class="p-28"></div>
        </div> -->
        <div>
            <slot />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        let regNumber = ref();
        return { regNumber };
    }
};
</script>

<style scoped>
.sidebar {
    height: 85vh;
}
</style>
