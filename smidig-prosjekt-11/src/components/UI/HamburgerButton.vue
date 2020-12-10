<template>
    <div class="hamburger-button rounded-r-3xl font-standardText">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'HamburgerButton',
    components: {},
    
    props: {
        buttonValue: String,
        icon: String,
        link: String
    }
}



</script>

<style>

.hamburger-button {
    position: absolute;
    width: 100%; /*width: 30vh;*/
    height: 8vh;
    background-color: #fff; /*background-color: #9FD18D;*/
    margin-top: 3vh;
    /*margin-left: 1.5vh;*/
    
    text-align: center;
	font-size: 1.5em; /*font-size: 25px;*/
    box-sizing: border-box;
    padding-top: 1.8vh;
    padding-bottom: 1.8vh;
}
</style>