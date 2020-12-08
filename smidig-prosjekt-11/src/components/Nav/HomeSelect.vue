<template>
    <div id="button-div">
        <div>
            <button
                type="button"
                class="rounded-full button shadow-lg ring-4 ring-gray-300 ring-opacity-50 hover:bg-logoBar"
            >
                Repair
            </button>
        </div>
        <div>
            <button
                type="button"
                class="rounded-full button shadow-lg ring-4 ring-gray-300 ring-opacity-50 hover:bg-logoBar"
            >
                E-Learning
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {}
};
</script>

<style scoped>
#button-div {
    height: 25vh;
    width: 35vh;
}
.button {
    background-color: #72b506;
    border: none;
    display: inline block;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    width: 100%;
    margin-top: 10%;
}
</style>
