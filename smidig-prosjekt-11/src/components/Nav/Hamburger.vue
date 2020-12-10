<template>
    <div class="hamburger-menu">
        <hamburger-button 
        v-for='(but, index) in buttons' 
        v-bind:key='index'
        :bValue='but.bValue'
        :icon='but.icon'
        :link='but.link'>
        </hamburger-button>
    </div>
</template>

<script>
import HamburgerButton from '../UI/HamburgerButton.vue'

export default {
    name: 'Hamburger',
    components: {HamburgerButton},
    data() {
    return {
        buttons: [
            {
                bValue: 'User',
                icon: "certificate-icon.png",
                link: '/repair'
            },
            {
                bValue: 'Certifications',
                icon: 'user-person-icon.png',
                link: '/entry-successful'
            }
        ]
    }
}
}


</script>

<style>

.hamburger-menu {
    z-index: 999;
    position: absolute;
    /*background-color: #423048;*/
	background-color: #848484;
	opacity: 0.9;
    /* margin-top: 3vh;
    margin-left: 3vh; */
    height: 85vh;
    width: 20vw;
    
    display: flex;
    flex-direction: column;
}


/*
logoBar: '#405C6A',
secondary: '#3490dc',
green: '#9FD18D'
purple: 423048;

primary: '#3490dc',
secondary: '#9FD18D',
danger: '#e3342f'
*/

</style>