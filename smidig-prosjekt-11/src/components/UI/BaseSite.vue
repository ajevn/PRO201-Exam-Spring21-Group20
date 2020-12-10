<template>
    <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
    <div class="base">
        <header>
            <div id="logo-bar" class="md:w-auto bg-logoBar" v>
                <div class="image-container">
                
                <button type="button" @click="showSideBar"  class="burger-button" title="Menu">
                    <span class="hidden">Toggle menu</span>
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
                <login-button class="pl-20" />
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

/* remove blue outline */
button:focus {
  outline: 0;
}

 .burger-button {
    position: absolute;
    top:0;
    height: 5rem;
    width: 5rem;
    display: block;
    background-color: transparent;
    pointer-events: all;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
} 

.burger-bar {
  background-color: #130f40;
  position: absolute;
  right: 0;
  left: 0;
  height: 0.5em;
  width: 3em;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6
    s cubic-bezier(0.165, 0.84, 0.44, 1); 
}

.burger-bar--1 {
    top: 2em;
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
    top: 3rem;
    transform-origin: 100% 50%;
    transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.burger-bar--3 {
    top: 4rem;
    transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #fff;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}




/* old version  */
#logo-bar {
    height: 13vh;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto max-content;   
}
.image-container {
    position: relative;
    width: 40vh;
    height: 80%;
    top: 1.5vh;
    left: 1.5vh;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
#hamburger-icon {
    height: 5vh;
    width: auto;
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
