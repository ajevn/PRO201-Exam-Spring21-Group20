<template>
    <div id="container" class="text-center rounded-lg">
        <div id="serialnum-container">
            <h3>SERIAL NUMBER</h3>

            <input
                ref="inputSerialNumber"
                v-on:keydown="serialInputIsEmpty = false"
                v-bind:class="{ serialInputEmpty: serialInputIsEmpty }"
                :value="serialToEdit"
                placeholder="Example: 1234 5678"
            />
        </div>
        <!-- PARTS-DIV -->
        <div id="parts" class="col-span-2">
            <modal-error-message v-if="showModal == true" @close="showModal = false">
                <template v-slot:body>{{ modalTextBody }}</template>
                <!-- Serial Number Already Exists -->
            </modal-error-message>

            <h1>Parts</h1>
            <div id="parts-cont-no-change" class="grid grid-flow grid-cols-4 grid-rows-2 gap-5">
                <a
                    class="popup-products"
                    v-for="product in productImages"
                    :key="product.partNumber"
                    :class="{ checked: product.isChecked }"
                    @click="selectPart(product)"
                >
                    <img
                        :id="product.partNumber"
                        :src="require('@/assets/Images/Parts/' + product.imgName + '.png')"
                    />
                    <h2></h2>
                    <!--{{ product.partName }} -->
                </a>
            </div>
        </div>

        <img
            id="close-repair-btn"
            class="self-end cursor-pointer rounded-full transform hover:translate-y-0.5 hover:translate-x-0.5"
            src="@/assets/Images/delete-icon.png"
            v-on:click="closePopup"
            alt="close repair tab"
        />

        <button class="bg-universalGreen" id="next-btn" @click="submitPartsSelected">NEXT</button>
    </div>
</template>

<script>
import ModalErrorMessage from '@/components/Modals/ModalErrorMessage.vue';

export default {
    name: 'PopupEdit',
    props: {
        pictures: {
            type: Array
        },
        serialToEdit: {
            type: String,
            default: ''
        }
    },
    emits: ['clicked'],
    components: {
        ModalErrorMessage
    },
    data() {
        return {
            id: -1, //fetched in renderSelects()
            serialInputIsEmpty: false,
            selectedEntitySerialNumber: 'noneselected',
            modalTextBody: '',
            showModal: false,
            inputSerial: {
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
                    partName: 'Torx-6',
                    imgName: 'batteryBoxTorx6-removebg-preview',
                    isChecked: false
                }
            ],
            partsChosen: []
        };
    },
    methods: {
        selectPart(product) {
            product.isChecked = !product.isChecked;
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
                this.partsChosen = [];
                this.serialInputIsEmpty = true;
                //Please input serial number
                this.modalTextBody = 'Please input serial number';
                this.showModal = true;
                return;
            } else if (this.partsChosen.length == 0) {
                //Please choose part
                this.modalTextBody = 'Please choose part';
                this.showModal = true;
                return;
            }

            const editedEntity = {
                id: this.id,
                entitySerialNr: serialNr,
                parts: this.partsChosen
            };

            const stateEntities = this.$store.getters.getEntities;
            let exists = -1;
            for (let i = 0; i < stateEntities.length; i++) {
                if (stateEntities[i].id !== this.id && stateEntities[i].entitySerialNr === serialNr) {
                    exists = 1;
                }
            }

            if (exists == -1) {
                this.serialInputIsEmpty = true;
                this.$store.commit('editEntity', editedEntity);
                this.closePopup();
            } else {
                //Serial nr doesnt exist
                this.modalTextBody = 'Serial nr doesnt exist';
                this.showModal = true;
                this.partsChosen = [];
            }
        },
        closePopup() {
            this.$emit('clicked');
        },
        renderSelects() {
            const entity = this.$store.getters.getEntityBySerial(this.serialToEdit);
            // Get id in order to pass it to entityData.js later when submitting
            this.id = entity.id;
            const currentEntityParts = entity.parts;

            currentEntityParts.forEach(part => {
                this.productImages[part.partNumber - 1].isChecked = true;
            });
        }
    },
    mounted() {
        // THis may run again while exited which may cause problems
        this.renderSelects();
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
        margin: 1vh;
        padding-bottom: 1.5vh;
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

    #serialnum-container {
        position: absolute;
        grid-row: 3;
        left: 40px;
        bottom: 30px;

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
        }
    }

    #close-repair-btn {
        position: absolute;
        height: 70px;
        width: 70px;
        right: 10px;
        top: 10px;
    }

    #parts {
        position: absolute;
        // border: 3px solid blue;
        grid-column: 2;
        margin: 30px;
        background-color: #f8f6f2;
    }
    #next-btn {
        width: 85px;
        height: 45px;
        position: absolute;
        right: 30px;
        bottom: 30px;
        border: 1px solid black;
        border-radius: 2px;
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

    .checked {
        background-color: #7eb46b;
    }
}
</style>
