<template>
    <div id="progress-bar">
        <div class="relative pt-8 w-2/3 m-auto">

            <!-- Green line -->
            <div id="progress-bar-border" 
                class="overflow-hidden h-1 mb-4 text-xs flex rounded bg-pink-200"
     
            >
                <div id="progress-bar-width" 
                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                    :class="{ 'progress-bar-successful-line': isSuccessfulReport, 'progress-bar-unsuccessful-line' : isUnsuccessfulReport }" 
                ></div>
            </div>


            <!-- Images -->
            <div class="progress-bar-done progress-bar-icons" id="progress-bar-home">
                <img src="@/assets/Images/Icons/home-icon.png"  alt="Progress bar, Home button" />
            </div>

            <div class="progress-bar-done progress-bar-icons" id="progress-bar-edit-report">
                <img src="@/assets/Images/Icons/edit-report-icon.png" alt="Progress bar, Edit report" />
            </div>

            <div :class="{ 'progress-bar-done': isSuccessfulReport, 'progress-bar-not-done' : isUnsuccessfulReport }" class="progress-bar-icons" id="progress-bar-success">
                <img src="@/assets/Images/Icons/report-success-white-icon.png" alt="Progress bar, Report sent" />
            </div>
        </div>

        <!-- Temporary btn -->
        <router-link id="btn" @click="updateProgressbar()" to="/entry-successful">Halla</router-link>


    </div>
</template>


<script>
export default {
    name: 'Progress bar',
    data: () => {
        return {
            isSuccessfulReport: false,
            isUnsuccessfulReport: true
        }
    },
    methods: {
        updateProgressbar() {
            let url = window.location.href;

            if (url.indexOf("entry-successful") > -1) {
                this.isSuccessfulReport = true
                this.isUnsuccessfulReport = false
            } else {
                this.isSuccessfulReport = false
                this.isUnsuccessfulReport = true
            }
        }
    }
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
                background-color: #7EB46B;
            }
        }

        .progress-bar-icons {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 60%;
                margin: auto;
            }
        }

        #progress-bar-edit-report {
            left: 48%;
        }

        #progress-bar-success {
            left: 97%;
            
        }

        // Classes to change from done and not done steps
        // in the repair prosess
        .progress-bar-done {
            background-color: #7EB46B;
        }

        .progress-bar-not-done {
            background-color: #848484;
        }

        #btn {
            border: 2px solid black;
            position: absolute;
            right: 20px;
            top: 20px;
        }
        
    }

    .progress-bar-unsuccessful-line {
        width: 50%;
    }

    .progress-bar-successful-line {
        width: 100%;
    }

</style>