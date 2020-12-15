<template>
    <div class="home-button">
        <a href="#">
            <div>
                <p>Главная</p>
                <!-- Home -->
                <img src="@/assets/Images/Icons/home-icon.png" alt="Home button" />
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'HomeButton'
};
</script>

<style lang="scss" scoped>
a {
    margin: 0;

    div {
        display: inline-block;
        margin-top: 8vh;
        width: 250px;
        height: 70px;
        background-color: #423048;
        position: relative;
        border-radius: 5px;

        p {
            color: #ffffff;
            font-weight: bold;
            font-size: 30px;
            text-align: left;
            padding: 10px 20px;
        }

        img {
            position: absolute;
            top: 0;
            right: 0;
            margin: 15px;
            width: 16%;
        }
    }
}
</style>
