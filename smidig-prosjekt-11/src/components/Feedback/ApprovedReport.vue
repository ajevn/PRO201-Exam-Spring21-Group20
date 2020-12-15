<template>
    <div id="approved-report-container" class="text-center">
        <h1>ENTRY SUCCESSFUL</h1>
        <img src="@/assets/Images/Icons/report-success-icon.png" alt="Report succesfully sent" />

        <home-button></home-button>
    </div>
</template>

<script>
import HomeButton from '../UI/HomeButton.vue';
export default {
    name: 'Home',
    setup() {
        return {
            HomeButton
        };
    }
};
</script>

<!-- Adding some scss to style text and position items -->
<style lang="scss" scoped>
#approved-report-container {
    margin-top: 100px;

    h1 {
        font-size: 50px;
        font-weight: bold;
        color: #7eb46b;
    }

    img {
        margin: auto;
        margin-top: 75px;
    }

    a {
        margin: 0;

        div {
            display: inline-block;
            margin-top: 75px;
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
                width: 40px;
            }
        }
    }
}
</style>
