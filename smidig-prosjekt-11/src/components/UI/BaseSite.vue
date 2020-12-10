<template>
    <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
    <div class="base">
        <header>
            <div id="logo-bar" class="md:w-auto bg-logoBar" v>
                <div class="image-container">
                
                <button type="button" @click="showSideBar"  class="burger-button" title="Menu">
                    <span class="burger-bar burger-bar--1"></span>
                    <span class="burger-bar burger-bar--2"></span>
                    <span class="burger-bar burger-bar--3"></span> 
                </button>

            
                <router-link to="/">
                    <img 
                    id="logo-img" 
                    src="@/assets/Images/brightLogo.png" />
                </router-link>
            </div>

                <div id="employee-div">
                    <h1 class="font-standardText text-secondary">Employee, {{ user || 'x' }}</h1>
                </div>
            </div>
        </header>
        
        <hamburger v-if="sideBarVisible"></hamburger>
        
        
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
            LoginButton,
            user,
            goHome
        };
    },
    data() {
        return {
            sideBarVisible: true
        }
        
    }, 
    methods: {
        showSideBar () {
            const sideBarBool = this.sideBarVisible
            this.sideBarVisible = !sideBarBool
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button {
  cursor: pointer;
}

/* old version  */
#logo-bar {
    height: 75px;
    display: grid;
    grid-template-rows: max-content auto max-content;   
}

 #logo-img {
    display: inline-block;
    margin-left: 1.5vh;
    height: 60%;
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

#footer-div {
    left: 1vw;
    bottom: 1vh;
}

/* remove blue outline */
button:focus {
  outline: 0;
}

.burger-button {
    height: 5rem;
    width: 5rem;
    background-color: transparent;
    pointer-events: all;
    transition: all .5s;

} 

.burger-bar {
  background-color: #130f40;
  position: absolute;
  right: 0;
  left: 1rem;
  height: 0.4em;
  width: 2.8em;
  border-radius: 2px;
    transition: all .5s;

}

.burger-bar--1 {
    top: 1.2rem;
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
    top: 2rem;
    transform-origin: 100% 50%;
    transform: scaleX(0.8);
}

.burger-bar--3 {
    top: 2.8rem;
    transform: translateY(6px);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.burger-button:hover span{
      background-color: #A0D28E;
}


</style>
