<template>
    <div class="w-full h-auto">
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
