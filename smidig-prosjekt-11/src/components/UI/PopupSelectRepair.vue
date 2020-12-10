<template>
    <div id="container" class="grid grid-cols-3 text-center">
        <div id="products-container" class="grid-rows-3">
            <h1>PRODUCT</h1>
            <div class="grid grid-cols-2 content-center">
                <div>
                    <img
                        src="../../assets/Images/Parts/sunbellProductImage.png"
                        alt=""
                        class="rounded-lg shadow-lg border-2 border-green-700 border-opacity-75 hover:bg-universalGreen"
                    />
                    <h2>Sunbell</h2>
                </div>
            </div>
            <div id="serialnum-container">
                <hr />
                <label>Serial Number: </label>
                <input ref="inputSerialNumber" type="text" :v-model="serialNr" placeholder="Serial Number" />
            </div>
        </div>
        <div id="parts" class="col-span-2">
            <h1>PARTS</h1>
            <div class="grid grid-flow grid-cols-4 grid-rows-3 gap-10">
                <div v-for="product in productImages" :key="product.partNumber">
                    <img
                        :id="product.partNumber"
                        :src="require('@/assets/Images/Parts/' + product.imgName + '.png')"
                        class="rounded shadow-lg border-2 border-green-700 border-opacity-75
                    hover:bg-universalGreen"
                        @click="selectPart(product)"
                    />
                    <h2>
                        {{ product.partName }}
                    </h2>
                </div>
            </div>
        </div>
        <div id="exit-btn" @click="closePopup"></div>
        <button class="bg-universalGreen" id="next-btn" @click="submitPartsSelected">NEXT</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            serialNr: {
                Type: Number,
                Required: true
            },
            productImages: [
                {
                    partNumber: '1',
                    partName: 'Solar Panel',
                    imgName: 'solarPanelCompleteWithCable-removebg-preview',
                    isChecked: false,
                    serialNumber: ""
                },
                {
                    partNumber: '2',
                    partName: 'Battery',
                    imgName: 'battery-removebg-preview',
                    isChecked: false,
                    serialNumber: ""
                },
                {
                    partNumber: '3',
                    partName: 'Seal',
                    imgName: 'powerSwitchCoverNew-removebg-preview',
                    isChecked: false,
                    serialNumber: ""
                },
                {
                    partNumber: '4',
                    partName: 'USB Connector',
                    imgName: 'directUsbPort-removebg-preview',
                    isChecked: false,
                    serialNumber: ""
                },
                {
                    partNumber: '5',
                    partName: 'Neck plus light',
                    imgName: 'batteryPackLightUnitComplete-removebg-preview',
                    isChecked: false,
                    serialNumber: ""
                },
                {
                    partNumber: '6',
                    partName: 'Torx-5',
                    imgName: 'batteryBoxTorx5-removebg-preview',
                    isChecked: false,
                    serialNumber: ""
                },
                {
                    partNumber: '7',
                    partName: 'Torx-6',
                    imgName: 'batteryBoxTorx6-removebg-preview',
                    isChecked: false,
                    serialNumber: ""
                }
            ],
            partsChosen: []
        };
    },
    methods: {
        selectPart(product) {
            //let test = document.getElementById(product.id); // <--- NOOB METODE
            //$this.refs.value.partname
            product.isChecked = !product.isChecked;
            if (product.isChecked == true) {
                event.target.style.backgroundColor = '#7EB46B';
            } else {
                event.target.style.backgroundColor = 'White';
            }
            //console.log(product.isChecked)
            return;
        },

        submitPartsSelected() {
            for (let i = 0; i < this.productImages.length; i++) {
                if (this.productImages[i].isChecked) {
                    this.partsChosen.push(this.productImages[i]);
                }
            }
            //this.serialNr =  this.$refs.inputSerialNumber.value; 
            let newEntity = {
                entitySerialNr: this.$refs.inputSerialNumber.value,
                parts: this.partsChosen
            };
            this.$store.commit('addEntity', newEntity);
            this.$emit('clicked');
        }
    },
    name: 'PopupSelect',
    props: {
        pictures: Array
    }
    // emits
};
</script>
<style scoped>
#container {
    width: 100%;
    height: 100%;
    user-select: none;
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
    /*background: green;*/
}

#products-container {
    border-right: 1px solid black;
}
h1 {
    margin: 3vh;
    padding-bottom: 2vh;
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

/* FILTER BLUR */
</style>
