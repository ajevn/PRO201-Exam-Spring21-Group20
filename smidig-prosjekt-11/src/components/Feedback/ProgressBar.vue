<template>
    <div id="progress-bar">
        <div class="relative pt-8 w-2/3 m-auto">

            <!-- Green line -->
            <div id="progress-bar-border" class="overflow-hidden h-1 mb-4 text-xs flex rounded bg-pink-200">
                <div id="progress-bar-width" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
            </div>


            <!-- Images -->
            <div class="progress-bar-done progress-bar-icons" id="progress-bar-home">
                <img src="@/assets/Images/Icons/home-icon.png"  alt="Progress bar, Home button" />
            </div>

            <div class="progress-bar-done progress-bar-icons" id="progress-bar-edit-report">
                <img src="@/assets/Images/Icons/edit-report-icon.png" alt="Progress bar, Edit report" />
            </div>

            <div class="progress-bar-done progress-bar-icons" id="progress-bar-success">
                <img src="@/assets/Images/Icons/report-success-white-icon.png" alt="Progress bar, Report sent" />
            </div>
        </div>

    </div>
</template>


<script>
export default {
    name: 'Home',
    components: {}
};
</script>


<style lang="scss" scoped>
    #progress-bar {
        position: absolute;
        bottom: 0;
        height: 70px;
        width: 100%;
        border-top: 1px solid black;
        background-color: #F8F6F2;

        #progress-bar-border {
            background-color: #848484;
            
            #progress-bar-width {
                width: 50%;
                background-color: #7EB46B;
            }
        }

        .progress-bar-icons {
            background-color: #7EB46B;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: inline-block;
            position: absolute;
            left: 0;
            top: 10px;

            img {
                width: 30px;
                margin: auto;
                vertical-align: middle;
            }
        }

        #progress-bar-edit-report {
            left: 47%;
        }

        #progress-bar-success {
            left: 93%;
            
        }
        
    }

</style>