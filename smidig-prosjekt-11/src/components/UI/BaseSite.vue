<template>
    <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
    <div class="base">
        <header>
            <div id="logo-bar" class="md:w-auto bg-logoBar" v>
                <div class="image-container">
                
                    <img 
                    id="hamburger-icon"
                    @click="showSideBar"  
                    src="@/assets/Images/Icons/hamburger-icon.png" />
                    
                    <img 
                    id="logo-img" 
                    src="@/assets/Images/brightLogo.png" />
                    <!-- class="relative w-1/7 h-3/5"  -->
                </div>
                
                
                <div id="employee-div">
                    <h1 class="text-secondary">Employee, Name</h1>
                </div>
                <nav-bar class="nav-bar" />
            </div>
        </header>
        
        <hamburger v-if="sideBarVisible"></hamburger>
        
        
        <slot />
        <footer>
            <div id="footer-div" class="absolute">
                <small>Copyright &copy; 2020 - Smidig-Prosjekt Gruppe 11</small>
            </div>
        </footer>
    </div>
</template>

<script>
import NavBar from '@/components/Nav/NavBar.vue';
import Hamburger from '@/components/Nav/Hamburger.vue';
export default {
    components: { 
        NavBar,
        Hamburger 
    },
    name: 'LogoBar',
    setup() {
        return {
            NavBar,
            Hamburger
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
#logo-bar {
    height: 15vh;
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
    height: 8vh;
}

.nav-bar {
    position: relative;
    display: inline-block;
    bottom: 4vh;
    left: 3vh;
}
#footer-div {
    left: 1vw;
    bottom: 1vh;
}
#employee-div {
    position: relative;
    text-align: right;
    padding-right: 1.7vw;
    bottom: 1vh;
}
</style>
