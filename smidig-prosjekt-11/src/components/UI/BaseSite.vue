<template>
    <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
    <div class="base">
        <header>
            <div id="logo-bar" class="md:w-auto bg-logoBar" v>
                <img id="logo-img" class="relative" src="@/assets/Images/brightLogo.png" />
                <div id="employee-div">
                    <h1 class="font-standardText text-secondary">Employee, Name</h1>
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
import LoginButton from '@/components/UI/LoginButton.vue';
export default {
    name: 'LogoBar',
    setup() {
        return {
            LoginButton
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
