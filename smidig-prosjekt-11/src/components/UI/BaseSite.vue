<template>
    <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
    <div class="base">
        <header>
            <div id="logo-bar" class="md:w-auto bg-logoBar" v>
                <router-link to="/">
                    <img id="logo-img" class="relative" src="@/assets/Images/brightLogo.png" />
                </router-link>
                <div id="employee-div">
                    <h1 class="font-standardText text-secondary">Employee, {{ user || 'x' }}</h1>
                </div>
                <login-button class="pl-20" />
            </div>
        </header>
        <slot />
        <footer>
            <div id="footer-div" class="absolute">
                <small class="font-standardText">Copyright &copy; 2020 - Smidig-Prosjekt Gruppe 11</small>
            </div>
        </footer>
    </div>
</template>

<script>
import LoginButton from '@/components/Login/LoginButton.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    name: 'LogoBar',
    setup() {
        const store = useStore();
        const router = useRouter();
        const user = computed(() => {
            return store.getters.getUserId;
        });
        function goHome() {
            router.push({ name: 'home' });
        }
        return {
            LoginButton,
            user,
            goHome
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo-bar {
    height: 13vh;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto max-content;
}
#logo-img {
    margin: auto;
    margin-left: 1.5vh;
    height: 65%;
    grid-column: 1;
    grid-row: 1;
}
#footer-div {
    left: 1vw;
    bottom: 1vh;
}
#employee-div {
    grid-column: 2;
    grid-row: 1;
    margin: auto;
    margin-right: 2.5vh;
}

#employee-div h1 {
    font-size: 20px;
}
</style>
