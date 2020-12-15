<template>
    <div class="home">
        <base-site>
            <div id="home-select-container">
                            <home-select @click="showModal = true" class="home-select-container" />
            </div>
            <img src="@/assets/Images/Background/Background.jpg" id="background-image" alt="background" />
        </base-site>
    </div>
</template>

<script>
// @ is an alias to /src
import BaseSite from '@/components/UI/BaseSite.vue';
import HomeSelect from '@/components/Nav/HomeSelect.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    data() {
        return {};
    },
    name: 'Home',
    setup() {
        const store = useStore();
        const router = useRouter();

        if (store.getters.getUserId == null) router.push({ name: 'LoginPage' });

        return {
            BaseSite,
            HomeSelect
        };
    }
};
</script>

<style lang="scss" scoped>

// Adding div around element to center home-select-component
#home-select-container {
    width: 100%;
    height: 92%;
    position: absolute;
    z-index: 2;
    margin: auto;

    .home-select-container {
        margin: auto;
        position: relative;
        top: 37%;
    }
}


#background-image {
    width: 100vw;
    height: 92vh;
    background-image: url('../assets/Images/Background/Background.jpg');
    filter: grayscale(100%);
    overflow: hidden;
}
</style>
