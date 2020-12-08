<template>
    <div id="progress-bar">
        <div class="relative pt-5">
        <div id="progress-bar-border" class="overflow-hidden h-1 mb-4 text-xs flex rounded bg-pink-200 w-2/3 m-auto">
            <div id="progress-bar-width" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
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
                width: 30%;
                background-color: #7EB46B;
            }
        }
    }

</style>