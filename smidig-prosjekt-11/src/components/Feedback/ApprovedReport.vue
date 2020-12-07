<template>
    <div id="approved-report-container" class="text-center">
        <h1>ENTRY SUCCESFUL</h1>
        <img src='@/assets/Images/report-sucess-icon.png'>
    </div>
</template>


<script>
    export default {
        name: 'Home',
        components: {
        }
    }
</script>

<style lang="scss" scoped>
    #approved-report-container {

        h1 {
            font-size: 50px;
            font-weight: bold;
            color: #7EB46B;
        }

        img {
            margin: auto;
            margin-top: 50px;
        }
    }
</style>