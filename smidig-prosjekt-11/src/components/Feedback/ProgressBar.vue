<template>
    <div id="progress-bar-border-top">
        <div id="progress-bar">
            <div class="relative pt-8 w-3/5 m-auto">
                <!-- Green line -->
                <div id="progress-bar-border" class="overflow-hidden h-1 mb-4 text-xs flex rounded bg-pink-200">
                    <!-- Setting class if isSuccessfulReport and/or isUnsuccessfulReport is true -->
                    <div
                        id="progress-bar-width"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                        :class="{
                            'progress-bar-successful-line': isSuccessfulReport,
                            'progress-bar-unsuccessful-line': isUnsuccessfulReport
                        }"
                    ></div>
                </div>

                <!-- Images -->
                <div class="progress-bar-done progress-bar-icons" id="progress-bar-home">
                    <img src="@/assets/Images/Icons/home-icon.png" alt="Progress bar, Home button" />
                </div>

                <div class="progress-bar-done progress-bar-icons" id="progress-bar-edit-report">
                    <img src="@/assets/Images/Icons/edit-report-icon.png" alt="Progress bar, Edit report" />
                </div>

                <!-- Setting class if isSuccessfulReport and/or isUnsuccessfulReport is true -->
                <div
                    :class="{
                        'progress-bar-done': isSuccessfulReport,
                        'progress-bar-not-done': isUnsuccessfulReport
                    }"
                    class="progress-bar-icons"
                    id="progress-bar-success"
                >
                    <img
                        src="@/assets/Images/Icons/report-success-white-icon.png"
                        alt="Progress bar, Report sent"
                    />
                </div>
            </div>
           
            
            <!-- Button to go back to previous page -->
            <router-link :to="'/' + prevBtn">
                <img
                    class="progress-bar-btns"
                    id="back-btn"
                    src="@/assets/Images/Icons/forward-back-icon.png"
                    alt="Go to previous page"
                />
            </router-link>
            
            <!-- Button to go to next page -->
            <!-- Setting class if isSuccessfulReport is true -->
            <router-link :to="'/' + nextBtn" :class="{ 'next-btn-none': isSuccessfulReport }">
                <img
                    class="progress-bar-btns"
                    id="forward-btn"
                    src="@/assets/Images/Icons/forward-back-icon.png"
                    alt="Go to previous page"
                />
            </router-link>
            <div id="total-products"><b>Total Products: {{numberOfEntities}}</b></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Progress bar',
    data() {
        return {
            isSuccessfulReport: false,
            isUnsuccessfulReport: true,
            prevBtn: 'repair',
            nextBtn: 'entry-successful',
            numberOfEntities: this.$store.getters.getNumOfEntities,
        };
    },

    // Implementing Lifecycle hooks to change classes
    // depending on url
    created: function() {
        let url = window.location.href;

        if (url.indexOf('entry-successful') > -1) {
            this.isSuccessfulReport = true;
            this.isUnsuccessfulReport = false;
            this.prevBtn = 'repair';
        } else {
            this.isSuccessfulReport = false;
            this.isUnsuccessfulReport = true;
            this.prevBtn = '#';
        }
    }
};
</script>

<style lang="scss" scoped>

#progress-bar-border-top {
        position: absolute;
        bottom: 0;
        height: 70px;
        width: 100%;
        border-top: 1px solid black;
        background-color: #f8f6f2;

    #progress-bar {
        position: relative;
        margin: auto;
        width: 60%;

        #progress-bar-border {
            background-color: #848484;

            #progress-bar-width {
                background-color: #7eb46b;
            }
        }

        .progress-bar-icons {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 14px;
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
            left: 98%;
        }

        // Classes to change from done and not done steps
        // in the repair prosess
        .progress-bar-done {
            background-color: #7eb46b;
        }

        .progress-bar-not-done {
            background-color: #848484;
        }

        // Buttons to go back and forward
        .progress-bar-btns {
            position: absolute;
            width: 45px;
        }

        #back-btn {
            left: 15px;
            top: 15px;
        }

        #forward-btn {
            right: 10px;
            top: 5px;
            transform: rotate(180deg);
        }
    }
}



.progress-bar-unsuccessful-line {
    width: 50%;
}

.progress-bar-successful-line {
    width: 100%;
}

.next-btn-none {
    display: none;
}

#total-products{
    position: absolute;
    right: 50px;
    bottom: -10px;
}

</style>
