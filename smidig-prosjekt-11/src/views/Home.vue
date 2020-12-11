<template>
    <div class="home">
        <base-site isDark="true">
            <img src="@/assets/Images/Background/Background.jpg" id="background-image" alt="background" />
            <home-select @click="showModal = true" class="home-select-container" />
        </base-site>
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue';
import HomeSelect from '@/components/Nav/HomeSelect.vue';

export default {
    data() {
        return {};
    },
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
#background-image {
    width: 100vw;
    height: 92vh;
    background-image: url('../assets/Images/Background/Background.jpg');
    filter: grayscale(100%);
    overflow: hidden;
}
</style>
