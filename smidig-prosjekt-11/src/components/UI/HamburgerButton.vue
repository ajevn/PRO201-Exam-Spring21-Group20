<template>
    <div class="hamburger-button">
        <router-link :to="this.link">
            <div class="button-wrapper">      
                {{ this.bValue }}
                <img :src="require(`@/assets/Images/Icons/${this.icon}`)">
            </div>
        </router-link>            
    </div>

</template>

<script>
export default {
    name: 'HamburgerButton',
    components: {},
    
    props: {
        bValue: String,
        icon: String,
        link: String
    }
}
</script>

<style>

.hamburger-button {
    position: relative;
    width: 30vh;
    height: 8vh;
    background-color: #9FD18D;;
    margin-top: 3vh;
    margin-left: 1.5vh;
    
    text-align: center;
    font-size: 25px;   
    box-sizing: border-box;

}

.button-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    
    padding-top: 1.8vh;
    padding-bottom: 1.8vh;
    
    display:flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
}


</style>