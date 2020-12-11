<template>
    <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
    <div class="base">
        <header>
            <div id="logo-bar" class="md:w-auto bg-logoBar" v>
                <div class="image-container">
                    <hamburger-icon @click="toggleSidebar" />

                    <div class="logo-wrapper">
                        <router-link to="/">
                            <img id="logo-img" src="@/assets/Images/brightLogo.png" />
                        </router-link>
                    </div>
                </div>

                <div id="employee-div">
                    <h1 class="font-standardText text-secondary">Employee, {{ user || 'x' }}</h1>
                </div>
            </div>
        </header>


        <hamburger 
            :class="{showburger: sideBarVisible, hideburger: !sideBarVisible}"></hamburger>

        <slot />
        <footer>
            <div id="footer-div" class="absolute">
                <small class="font-standardText">Copyright &copy; 2020 - Smidig-Prosjekt Gruppe 11</small>
            </div>
        </footer>
    </div>
</template>

<script>
import Hamburger from '@/components/Nav/Hamburger.vue';
import HamburgerIcon from '@/components/UI/HamburgerIcon.vue';
import LoginButton from '@/components/Login/LoginButton.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    components: {
        Hamburger
    },
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
            Hamburger,
            HamburgerIcon,
            LoginButton,
            user,
            goHome
        };
    },
    data() {
        return {
            sideBarVisible: false
        };
    },
    methods: {
        toggleSidebar() {
            const sideBarBool = this.sideBarVisible;
            this.sideBarVisible = !sideBarBool;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
button {
    cursor: pointer;
}

/* old version  */
#logo-bar {
    width: 100vw;
    height: 8vh;
    display: grid;
    grid-template-rows: max-content auto max-content;
}
.image-container {
    position: absolute;
    height: 8vh;
    width: 410px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 30px;

    .logo-wrapper {
        display: inline;
        width: 350px;

        img {
            height: 90%;
            margin-top: 5px;
        }
    }
}

#employee-div {
    position: absolute;
    right: 0px;
    height: 8vh;
    width: 200px;

    h1 {
        position: absolute;
        display: inline-block;
        right: 15px;
        margin-top: 40px;

        font-size: 20px;
    }
}

#footer-div {
    left: 1vw;
    bottom: 1vh;
}

/* remove blue outline */
button:focus {
    outline: 0;
}

.showburger {
    transition: all 0.3s;
    opacity: 1;
    left: 0vw;
    visibility: visible;
}

.hideburger {
    transition: all 0.3s;
    opacity: 0;
    left: -8vw;
    visibility: hidden;
}


</style>
