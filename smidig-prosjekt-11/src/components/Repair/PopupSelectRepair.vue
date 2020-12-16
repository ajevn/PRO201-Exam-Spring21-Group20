<template>
    <div id="container" class="text-center rounded-lg">
        <!-- PRODUCT-DIV -->
        <div id="products-container" class="grid-rows-3 ">
            <h1>Product</h1>
            <div class="content-center">
                <div id="popup-static-product-style">
                    <img src="@/assets/Images/Parts/sunbellProductImage.png" alt="Product: Sunbell" />
                    <h2>Sunbell</h2>
                </div>
            </div>

            <hr />

            <div id="serialnum-container">
                <h3>SERIAL NUMBER</h3>

                <input
                    ref="inputSerialNumber"
                    v-on:keydown="serialInputIsEmpty = false"
                    v-bind:class="{ serialInputEmpty: serialInputIsEmpty }"
                    type="text"
                    :v-model="serialNr"
                    placeholder="Example: 1234 5678"
                />
            </div>
        </div>
        <!-- PARTS-DIV -->
        <div id="parts" class="col-span-2">
            <modal-error-message v-if="showModal == true" @close="showModal = false">
                <template v-slot:body>{{ modalTextBody }}</template>
                <!-- Serial Number Already Exists -->
            </modal-error-message>

            <h1>Parts</h1>
            <div id="parts-cont-no-change" class="grid grid-flow grid-cols-4 grid-rows-2 gap-5 ">
                <a
                    class="popup-products"
                    v-for="product in productImages"
                    :key="product.partNumber"
                    @click="selectPart(product)"
                >
                    <img
                        class="duration-75 transform rounded-md hover:scale-105 "
                        :id="product.partNumber"
                        :src="require('@/assets/Images/Parts/' + product.imgName + '.png')"
                    />
                    <h2>{{ product.partName }}</h2>
                </a>
            </div>
        </div>

        <!-- Creating space for the close button of the project -->
        <slot />
        <button
            class="font-standardText duration-75 transform rounded-md hover:scale-105 motion-reduce:transform-none bg-logoBar"
            id="next-btn"
            @click="submitPartsSelected"
        >
            <h3 style="color: white;">Submit</h3>
        </button>
    </div>
</template>

<script>
import ModalErrorMessage from '@/components/Modals/ModalErrorMessage.vue';

export default {
    name: 'PopupSelect',
    props: {
        pictures: Array
    },
    emits: ['clicked'],
    components: {
        ModalErrorMessage
    },
    data() {
        return {
            serialInputIsEmpty: false,
            modalTextBody: '',
            showModal: false,
            serialNr: {
                Type: Number,
                Required: true
            },

            productImages: [
                {
                    partNumber: '1',
                    partName: 'Solar Panel',
                    imgName: 'solarPanelCompleteWithCable-removebg-preview',
                    isChecked: false
                },
                {
                    partNumber: '2',
                    partName: 'Battery',
                    imgName: 'battery-removebg-preview',
                    isChecked: false
                },
                {
                    partNumber: '3',
                    partName: 'Seal',
                    imgName: 'powerSwitchCoverNew-removebg-preview',
                    isChecked: false
                },
                {
                    partNumber: '4',
                    partName: 'USB Connector',
                    imgName: 'directUsbPort-removebg-preview',
                    isChecked: false
                },
                {
                    partNumber: '5',
                    partName: 'Neck plus light',
                    imgName: 'batteryPackLightUnitComplete-removebg-preview',
                    isChecked: false
                },
                {
                    partNumber: '6',
                    partName: 'Torx-5',
                    imgName: 'batteryBoxTorx5-removebg-preview',
                    isChecked: false
                },
                {
                    partNumber: '7',
                    partName: 'PCBA',
                    imgName: 'pcbaRevD2.6-removebg-preview',
                    isChecked: false
                }
            ],
            partsChosen: []
        };
    },
    methods: {
        selectPart(product) {
            product.isChecked = !product.isChecked; // Flips the boolean value, true->false, false->true

            const parentEl = event.target.parentElement;

            // To prevent user to change color of the wrong parent
            if (parentEl.id === 'parts-cont-no-change') return;

            if (product.isChecked == true) {
                parentEl.style.backgroundColor = '#7EB46B';
            } else {
                parentEl.style.backgroundColor = ' #F8F6F2';
            }
            return;
        },

        submitPartsSelected() {
            // Adding the marked parts to the partsChosen-array
            for (let i = 0; i < this.productImages.length; i++) {
                if (this.productImages[i].isChecked) {
                    this.partsChosen.push(this.productImages[i]);
                }
            }

            const serialNr = this.$refs.inputSerialNumber.value;
            if (serialNr == '') {
                // No serial number provided
                this.partsChosen = [];
                this.serialInputIsEmpty = true;
                this.modalTextBody = 'Please Input Serial Number';
                this.showModal = true;
                return;
            } else if (serialNr.length > 20) {
                // Serial number too long
                this.modalTextBody = 'Serial number length must be less than 20';
                this.showModal = true;
                return;
            } else if (isNaN(serialNr)) {
                // Serial number must be numeric
                this.modalTextBody = 'Serial number can only contain numbers';
                this.showModal = true;
                return;
            } else if (this.partsChosen.length == 0) {
                // Please choose part
                this.modalTextBody = 'Please Select Parts';
                this.showModal = true;
                return;
            }

            const stateEntities = this.$store.getters.getEntities;

            // Get first available unique id
            let newId = 0;
            const takenIds = [];
            for (let i = 0; i < stateEntities.length; i++) {
                takenIds[stateEntities[i].id] = true;
            }
            for (let i = 0; i <= stateEntities.length; i++) {
                if (!takenIds[i]) {
                    newId = i;
                    break;
                }
            }

            //Creates object which later is injected into Vue state
            const newEntity = {
                id: newId,
                entitySerialNr: serialNr,
                parts: this.partsChosen
            };

            const exists = stateEntities.findIndex(
                entity => entity.entitySerialNr === newEntity.entitySerialNr
            );
            // Check for serialnumber
            // Validation for serialnumber should prob be added
            if (exists == -1) {
                this.serialInputIsEmpty = true;
                this.$store.commit('addEntity', newEntity);
                this.closePopup();
            } else {
                this.modalTextBody = 'Serial Number Already Exists';
                this.showModal = true;
                this.partsChosen = [];
            }
        },
        closePopup() {
            this.$emit('clicked');
        }
    }
};
</script>
<style lang="scss" scoped>
#container {
    width: 100%;
    height: 100%;
    user-select: none;
    background-color: #f8f6f2;
    display: grid;
    grid-template-columns: auto 70%;

    h1 {
        font-size: 1.5em;
        margin: 3vh;
        padding-bottom: 2vh;
        font-weight: bold;
        color: #38293c;
    }

    img {
        width: 8vw;
        max-width: 125px;
        height: 11vh;
        cursor: pointer;
        padding: 10px 10px 10px 10px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    }

    #products-container {
        border-right: 1px solid black;
        grid-column: 1;
        background-color: #f8f6f2;

        // Creating grid for products-container to
        // position both product and serial number
        display: grid;
        grid-template-rows: max-content 35% 2px auto;
        height: 100%;

        #popup-static-product-style {
            background-color: #7eb46b;
            width: 15vh;
            height: 15vh;
            margin: auto;

            h2 {
                font-weight: bold;
                font-size: 17px;
            }

            img {
                -webkit-user-drag: none;
                cursor: default;
            }
        }

        #serialnum-container {
            grid-row: 3;
            margin-top: 30px;

            h3 {
                font-weight: bold;
                color: #38293c;
            }

            .serialInputEmpty {
                box-shadow: 0px 0px 8px #cc0000;
            }

            input {
                border: 1.5px solid #423048;
                border-radius: 5px;
                background-color: #fffefd;
                color: #050505;
                text-align: center;
                font-weight: bold;
                font-style: italic;
            }
        }
    }

    #parts {
        grid-column: 2;
        margin: 0 3vw 0 3vw;
        background-color: #f8f6f2;
    }

    #next-btn {
        width: 85px;
        height: 45px;
        position: absolute;
        right: 30px;
        bottom: 30px;
        border: 1px solid black;
    }

    .popup-products {
        background-color: #f8f6f2;
        width: 15vh;
        height: 15vh;

        h2 {
            cursor: pointer;
            font-weight: bold;
            font-size: 17px;
        }


        img {
            -webkit-user-drag: none;
        }

        &:hover {
            background-color: #7eb46b;
        }
    }
}
</style>
