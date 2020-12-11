<template>
    <div class="hamburger-menu">
        <hamburger-button
            v-for="(but, index) in buttons"
            v-bind:key="index"
            :bValue="but.bValue"
            :icon="but.icon"
            :link="but.link"
            :alt="but.alt"
        >
        </hamburger-button>
        <div class="triangle"></div>
        <div class="hamburger-button font-standardText">
            <login-button class="button-wrapper" />
        </div>
    </div>
</template>

<script>
import HamburgerButton from '@/components/UI/HamburgerButton.vue';
import LoginButton from '@/components/Login/LoginButton.vue';
export default {
    name: 'Hamburger',
    setup() {
        return {
            LoginButton,
            HamburgerButton
        };
    },
    data() {
        return {
            buttons: [
                {
                    bValue: 'User',
                    icon: 'user-person-icon.png',
                    link: '/repair',
                    alt: 'User icon'
                },
                {
                    bValue: 'Certifications',
                    icon: 'certificate-icon.png',
                    link: '/entry-successful',
                    alt: 'Certifications icon'
                }
            ]
        };
    }
};
</script>

<style>
.hamburger-menu {
    z-index: 999;
    position: absolute;

    background-color: #405c6a;
    opacity: 0.9;
    height: auto;
    width: 200px;
    top: 75px;
    border-radius: 7px;

    margin-top: 2vh;
    margin-left: 1.5vh;
    padding-bottom: 3vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    /*background-color: #423048;*/
}

.triangle {
    position: absolute;
    left: 14px;
    top: -18px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 19.5px 30px 19.5px;
    border-color: transparent transparent #405c6a transparent;
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
