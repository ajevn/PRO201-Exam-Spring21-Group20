<template>
    <div id="container" class="grid grid-cols-3 text-center bg-red-200">
        <div id="products-container">
            <h1>PRODUCT</h1>
            <div class="grid grid-cols-2 content-center">
                <div>
                    <img src="../../assets/Images/Parts/sunbellProductImage.png" alt="" />
                    <h2><b>Sunbell</b></h2>
                </div>
                <div>
                    <img
                        src="../../assets/Images/Parts/batteryPackLightUnitComplete-removebg-preview.png"
                        alt=""
                    />
                    <h2><b>Start+</b></h2>
                </div>
            </div>
        </div>
        <div id="parts" class="col-span-2">
            <h1>PARTS</h1>
            <div class="grid grid-cols-4">
                <div v-for="product in productImages" :key="product">
                    <img
                        :id="product.id"
                        :src="require('@/assets/Images/Parts/' + product.imgName + '.png')"
                        @click="pushProducts(product)"
                    />
                </div>
            </div>
        </div>
        <div id="exit-btn" @click="closePopup"></div>
        <button id="next-btn" @click="submitPartsSelected">NEXT</button>
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
                    imgName: 'solarPanelCompleteWithCable-removebg-preview',
                    isChecked: false
                },
                {
                    id: 'Battery',
                    imgName: 'battery-removebg-preview',
                    isChecked: false
                },
                {
                    id: 'Gummi',
                    imgName: 'powerSwitchCoverNew-removebg-preview',
                    isChecked: false
                },
                {
                    id: 'noe',
                    imgName: 'directUsbPort-removebg-preview',
                    isChecked: false
                },
                {
                    id: 'ledning',
                    imgName: 'batteryPackLightUnitComplete-removebg-preview',
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
img {
    width: 8vw;
    max-width: 125px;
    height: 12vh;
    border: 1px solid black;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    /*background: green;*/
}
img:hover {
    background: rgb(61, 98, 119);
}
#products-container {
    border-right: 1px solid black;
}
#parts {
}
h1 {
    margin: 3vh;
}
#exit-btn {
    width: 40px;
    height: 40px;
    position: absolute;
    font-size: 25px;
    right: 0px;
    top: 0px;
    cursor: pointer;
}
#exit-btn:hover {
    background: rgb(187, 44, 44);
}
#next-btn {
    width: 85px;
    height: 45px;
    position: absolute;
    right: 30px;
    bottom: 30px;
    background: green;
    border: 1px solid black;
    border-radius: 2px;
}

/* FILTER BLUR */
</style>
