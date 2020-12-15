<template>
    <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
    <div class="base">
        <header>
            <div id="logo-bar" class="md:w-auto bg-logoBar" v>
                <div class="image-container">
                    <hamburger-icon @click="toggleSidebar" />

                    <router-link to="/">
                        <img id="logo-img" src="@/assets/Images/brightLogo.png" alt="Bright" />
                    </router-link>

                </div>

                <div id="employee-div">
                    <h1 class="font-standardText text-secondary">Employee, {{ user || 'x' }}</h1>
                </div>
            </div>
        </header>

        <hamburger :class="{ showburger: sideBarVisible, hideburger: !sideBarVisible }" ref="hamburger">
        </hamburger>
        
        <slot />
        <footer>
            <div id="footer-div" class="absolute">
                <small class="font-standardText white-text">
                    Copyright &copy; 2020 - Smidig-Prosjekt Gruppe 11
                </small>
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
            this.$refs.hamburger.updateloginValues();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
button {
    cursor: pointer;
}

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

    img {
        height: 90%;
        margin-top: 5px;
    }
}
.white-text {
    color: white;
}
#employee-div {
    position: absolute;
    right: 20px;
    height: 8vh;
    width: 200px;

    h1 {
        position: absolute;
        bottom: 1vh;
        font-size: 20px;
        white-space: nowrap;
    }
}

#footer-div {
    left: 1vw;
    bottom: 1vh;
}

// Removes blue outline of hamburgerbar
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
