<template>
    <div id="button-div" class="rounded-lg shadow-lg ring-2 ring-black ring-opacity-50">
        <router-link
            tag="button"
            to="/repair"
            type="button"
            class="font-standardText button shadow-lg home-repair-ico-src home-ico-style transform hover:scale-105 motion-reduce:transform-none"
        >
            <h4>Repair</h4>
        </router-link>

        <router-link
            tag="button"
            to="/#"
            type="button"
            class="font-standardText button shadow-lg home-learn-ico-src home-ico-style transform hover:scale-105 motion-reduce:transform-none"
        >
            <h4>E-learning</h4>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {}
};
</script>

<style lang="scss" scoped>
#button-div {
    padding: 0px 1vw;
    height: 20vh;
    width: 20vw;
    background-color: #405c6a;
}
.button {
    background-color: #9fd18d;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    border: 2px solid #433149;
    border-radius: 10px;
    color: #423048;
    cursor: pointer;
    width: 100%;
    height: 30%;
    margin: auto;
    margin-top: 7%;
    outline: none;

    &:hover {
        background-color: white;
    }

    h4 {
        margin-top: 2%;
    }
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
    background-size: 10%;
}
</style>
