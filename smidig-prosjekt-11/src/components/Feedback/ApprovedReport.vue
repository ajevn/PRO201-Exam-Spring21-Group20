<template>
    <div id="approved-report-container" class="text-center">
        <h1>ENTRY SUCCESFUL</h1>
        <img src='@/assets/Images/report-sucess-icon.png' alt="Report succesfully sent">
        <a href="#">
            <div>
                <p>HOME</p>
                <img src='@/assets/Images/home-icon.png'>
            </div>
        </a>
    </div>
</template>


<script>
    export default {
        name: 'Home',
        components: {
        }
    }
</script>

<!-- Adding some scss to style text and position items -->
<style lang="scss" scoped>
    #approved-report-container {
        margin-top: 100px;

        h1 {
            font-size: 50px;
            font-weight: bold;
            color: #7EB46B;
        }

        img {
            margin: auto;
            margin-top: 50px;
        }

        a {
            margin: 0;

            div {
                margin:auto;
                margin-top: 50px;
                width: 250px;
                height: 70px;
                background-color: #423048;
                position: relative;
                border-radius: 5px;

                p {
                    color: #FFFFFF;
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