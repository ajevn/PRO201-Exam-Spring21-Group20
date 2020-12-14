<template>
    <div id="button-div" class="rounded-lg shadow-lg ring-2 ring-black ring-opacity-50">
        <div>
            <router-link
                tag="button"
                to="/repair"
                type="button"
                class="font-standardText rounded-full button shadow-lg ring-4 ring-black ring-opacity-50 hover:bg-white home-repair-ico-src home-ico-style"
            >
                Ремонт </router-link
            ><!-- Repair -->
        </div>
        <div>
            <button
                type="button"
                class="font-standardText rounded-full button shadow-lg ring-4 ring-black ring-opacity-50 hover:bg-white home-learn-ico-src home-ico-style"
            >
                Электронное </button
            ><!-- E-learning -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {}
};
</script>

<style scoped>
#button-div {
    padding: 0px 1vw;
    height: 21.2vh;
    width: 20vw;
    background-color: #405c6a;
}
.button {
    background-color: #9fd18d;
    border: none;
    display: inline block;
    padding: 8px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5em;
    font-weight: bold;
    color: #423048;
    margin: 4px 2px;
    cursor: pointer;
    width: 100%;
    height: 50px;
    margin-top: 10%;
    outline: none;
}
.home-repair-ico-src {
    background-image: url('../../assets/Images/Icons/landing_repair.png');
}
.home-learn-ico-src {
    background-image: url('../../assets/Images/Icons/landing_elearn.png');
}
.home-ico-style {
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 35px;
}
</style>
