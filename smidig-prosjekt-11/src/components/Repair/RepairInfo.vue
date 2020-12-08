<template>
    <!-- Root element -->
    <div>
        <!-- https://forum.vuejs.org/t/popup-how-to-hide-a-popup-by-clicking-outside-of-the-popup-window/59693 -- Mulighet for å trykke utenfor popup for å lukke? -->
        <div
            id="parts-popup"
            class="border-2 border-gray-500 shadow-lg rounded-md bg-gray-300"
            v-show="showRepair == true"
        >
            <img
                id="close-repair-btn"
                class="self-end cursor-pointer hover:bg-gray-400 rounded-full transform hover:translate-y-0.5 hover:translate-x-0.5"
                src="@/assets/Images/delete-icon.png"
                v-on:click="closeRepair"
            />
        </div>
        <div>
            <div id="product-container">
                <div class="ProductImg">
                    <img class="product-image-sunbell" src="@/assets/Images/Parts/sunbellProductImage.png" />
                </div>
                <span><input type="text" v-model="serialNumber"/></span>
                <img class="part-imgs" src="@/assets/Images/Parts/battery-removebg-preview.png" alt="parts" />

                <!-- Div to hold both edit and repair -->
                <div class="edit-delete-img">
                    <button @click="editRepair">
                        <img
                            class="edit-delete-img-width"
                            src="@/assets/Images/edit-icon.png"
                            alt="editbtn"
                        />
                    </button>

                    <button>
                        <img
                            class="edit-delete-img-width"
                            src="@/assets/Images/delete-icon.png"
                            alt="editbtn"
                        />
                    </button>
                </div>
                <!-- Not needed in this page -->
                <!--<input type="checkbox" name="approve" />-->

                <hr />
            </div>

            <div id="product-container">
                <div class="ProductImg">
                    <img class="product-image-sunbell" src="@/assets/Images/Parts/sunbellProductImage.png" />
                </div>
                <span><input type="text" v-model="serialNumber"/></span>
                <img class="part-imgs" src="@/assets/Images/Parts/battery-removebg-preview.png" alt="parts" />

                <!-- Div to hold both edit and repair -->
                <div class="edit-delete-img">
                    <button @click="editRepair">
                        <img
                            class="edit-delete-img-width"
                            src="@/assets/Images/edit-icon.png"
                            alt="editbtn"
                        />
                    </button>

                    <button>
                        <img
                            class="edit-delete-img-width"
                            src="@/assets/Images/delete-icon.png"
                            alt="editbtn"
                        />
                    </button>
                </div>
                <!-- Not needed in this page -->
                <!--<input type="checkbox" name="approve" />-->

                <hr />
            </div>

            <div id="product-container">
                <div class="ProductImg">
                    <img class="product-image-sunbell" src="@/assets/Images/Parts/sunbellProductImage.png" />
                </div>
                <span><input type="text" v-model="serialNumber"/></span>
                <img class="part-imgs" src="@/assets/Images/Parts/battery-removebg-preview.png" alt="parts" />

                <!-- Div to hold both edit and repair -->
                <div class="edit-delete-img">
                    <button @click="editRepair">
                        <img
                            class="edit-delete-img-width"
                            src="@/assets/Images/edit-icon.png"
                            alt="editbtn"
                        />
                    </button>

                    <button>
                        <img
                            class="edit-delete-img-width"
                            src="@/assets/Images/delete-icon.png"
                            alt="editbtn"
                        />
                    </button>
                </div>
                <!-- Not needed in this page -->
                <!--<input type="checkbox" name="approve" />-->

                <hr />
            </div>

            <div id="product-container">
                <div class="ProductImg">
                    <img class="product-image-sunbell" src="@/assets/Images/Parts/sunbellProductImage.png" />
                </div>
                <span><input type="text" v-model="serialNumber"/></span>
                <img class="part-imgs" src="@/assets/Images/Parts/battery-removebg-preview.png" alt="parts" />

                <!-- Div to hold both edit and repair -->
                <div class="edit-delete-img">
                    <button @click="editRepair">
                        <img
                            class="edit-delete-img-width"
                            src="@/assets/Images/edit-icon.png"
                            alt="editbtn"
                        />
                    </button>

                    <button>
                        <img
                            class="edit-delete-img-width"
                            src="@/assets/Images/delete-icon.png"
                            alt="editbtn"
                        />
                    </button>
                </div>
                <!-- Not needed in this page -->
                <!--<input type="checkbox" name="approve" />-->

                <hr />
            </div>

            <img
                v-show="showRepair == false"
                id="plus-btn"
                class="cursor-pointer hover:bg-gray-400 rounded-full transform hover:translate-y-0.5 hover:translate-x-0.5"
                src="@/assets/Images/Icons/plus-icon.png"
                v-on:click="addRepair()"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            entity: {
                id: '',
                serialNumber: '',
                parts: []
            },
            showRepair: false
        };
    },
    methods: {
        editRepair() {
            // show entity-spesific repair overlay
        },
        addRepair() {
            // show new overlay
            this.showRepair = true;
        },
        closeRepair() {
            // show new overlay
            this.showRepair = false;
        }
    }
};
</script>

<style lang="scss" scoped>
#parts-popup {
    position: absolute;
    width: 66vw;
    height: 70vh;
    left: 17vw;
}
#product-container {
    width: 100%;
    height: 100px;
    align-items: center;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 40% 1fr 20px;
    grid-template-rows: auto 2px;

    .product-image-sunbell {
        width: 55px;
        margin: auto;
    }

    input {
        border: 1.5px solid #423048;
        border-radius: 5px;
        background-color: #fffefd;
        color: #050505;
        text-align: center;
        font-weight: bold;
    }

    .part-imgs {
        width: 55px;
        margin: auto;
    }

    .edit-delete-img {
        grid-column: 4;

        .edit-delete-img-width {
            width: 20px;
            margin-left: 35px;
            margin-right: 15px;
        }
    }

    hr {
        grid-column: 1/-1;
        grid-row: 2;
        width: 93%;
        margin: auto;
        border-top: 0.5px solid #707070;
    }
}
#plus-btn {
    margin: auto;
    margin-top: 3vh;
    outline: none;
}
</style>
