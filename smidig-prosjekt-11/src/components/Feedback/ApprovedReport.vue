<template>
    <div id="approved-report-container" class="text-center">
        <h1>ENTRY SUCCESSFUL</h1>
        <img src="@/assets/Images/Icons/report-success-icon.png" alt="Report succesfully sent" />
        <!-- Importing homebtn -->
        <home-button></home-button>
    </div>
</template>

<script>
import HomeButton from '@/components/UI/HomeButton.vue';
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
    h1 {
        font-size: 50px;
        margin-top: 10vh;
        font-weight: bold;
        color: #7eb46b;
    }

    img {
        margin: auto;
        margin-top: 8vh;
        width: 18vw;
    }
}
</style>
