<template>
    <div class="home">
        <base-site>
            <home-select class="home-select-container" />
        </base-site>
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue';
import HomeSelect from '@/components/Nav/HomeSelect.vue';

export default {
    name: 'Home',
    components: {
        BaseSite,
        HomeSelect
    }
};
</script>

<style scoped>
.home-select-container {
    position: absolute;
    left: 41vw;
    top: 40vh;
}
</style>
