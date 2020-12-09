<template>
    <div id="container" class="grid grid-cols-3 text-center">
        <div id="products-container">
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
                <div>
                    <img
                        class="rounded-lg shadow-lg border-2 border-green-700 border-opacity-75 hover:bg-universalGreen"
                        src="../../assets/Images/Parts/batteryPackLightUnitComplete-removebg-preview.png"
                        alt=""
                    />
                    <h2>Start+</h2>
                </div>
            </div>
        </div>
        <div id="parts" class="col-span-2">
            <h1>PARTS</h1>
            <div class="grid grid-flow grid-cols-4 grid-rows-3 gap-10">
                <div v-for="product in productImages" :key="product">
                    <img
                        :id="product.id"
                        :src="require('@/assets/Images/Parts/' + product.imgName + '.png')"
                        class="rounded shadow-lg border-2 border-green-700 border-opacity-75 hover:bg-universalGreen"
                        @click="pushProducts(product)"
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
            id: 'Variabelnavn',
            productImages: [
                {
                    id: 'Solarpanel',
                    partName: 'Solar Panel',
                    imgName: 'solarPanelCompleteWithCable-removebg-preview',
                    isChecked: false
                },
                {
                    id: 'Battery',
                    partName: 'Battery',
                    imgName: 'battery-removebg-preview',
                    isChecked: false
                },
                {
                    id: 'Gummi',
                    partName: 'Seal',
                    imgName: 'powerSwitchCoverNew-removebg-preview',
                    isChecked: false
                },
                {
                    id: 'noe',
                    partName: 'USB Connector',
                    imgName: 'directUsbPort-removebg-preview',
                    isChecked: false
                },
                {
                    id: 'ledning',
                    partName: 'Neck plus light',
                    imgName: 'batteryPackLightUnitComplete-removebg-preview',
                    isChecked: false
                },
                {
                    id: 'Torx-5',
                    partName: 'Torx-5',
                    imgName: 'batteryBoxTorx5-removebg-preview',
                    isChecked: false
                },
                {
                    id: 'Torx-6',
                    partName: 'Torx-6',
                    imgName: 'batteryBoxTorx6-removebg-preview',
                    isChecked: false
                }
            ],
            partsChosen: []
        };
    },
    methods: {
        pushProducts(product) {
            //let test = document.getElementById(product.id); // <--- NOOB METODE
            //$this.refs.value.partname

            product.isChecked = !product.isChecked;
            //console.log(product.isChecked)
            console.log(product.id);
            for (let i = 0; i < this.partsChosen.length; i++) {
                var isChecked = false;
                if (product === this.partsChosen[i]) {
                    isChecked = true;
                    this.partsChosen.splice(i);
                    //test.style.background = "green"
                }
            }
            if (!isChecked) {
                this.partsChosen.push(product);
                for (var x in this.partsChosen) {
                    console.log(this.partsChosen[x]);
                    //product.style.background = "white"
                }
            }
            return;
        },
        submitPartsSelected() {
            // Midlertidig
            // EMITTE INFORMASJON TIL PARENT COMPONENT
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
#parts {
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
