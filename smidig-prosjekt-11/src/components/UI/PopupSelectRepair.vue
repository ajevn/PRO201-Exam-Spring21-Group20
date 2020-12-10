<template>
    <div id="container" class="text-center">
        <div id="products-container" class="grid-rows-3">
            <h1>PRODUCT</h1>
            <div class="content-center">
                <div id="popup-static-product-style">
                    <img
                        src="../../assets/Images/Parts/sunbellProductImage.png"
                        alt="Product: Sunbell"
                    />
                    <h2>Sunbell</h2>
                </div>
            </div>
            <div id="serialnum-container">
                <hr />
                <h3>SERIAL NUMBER</h3>
                <input type="text" v-model="serialNr" />
            </div>
        </div>
        <div id="parts" class="col-span-2">
            <h1>PARTS</h1>
            <div id="parts-cont-no-change" class="grid grid-flow grid-cols-4 grid-rows-2 gap-5">
                <a class="popup-products" 
                    v-for="product in productImages" :key="product.partNumber"
                    @click="selectPart(product)"
                    >
                    <img
                        :id="product.partNumber"
                        :src="require('@/assets/Images/Parts/' + product.imgName + '.png')"
                    />
                    <h2>
                        {{ product.partName }}
                    </h2>
                </a>
            </div>
        </div>
        
        <!-- Creating space for the close button of the project -->
        <slot />
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
            //let test = document.getElementById(product.id); // <--- NOOB METODE
            //$this.refs.value.partname
            product.isChecked = !product.isChecked;
            let parentEl = event.target.parentElement;

            // To prevent user to change color of the wrong parent
            if (parentEl.id === 'parts-cont-no-change') return;

            if (product.isChecked == true) {
                parentEl.style.backgroundColor = '#7EB46B';
            } else {
                parentEl.style.backgroundColor = ' #F8F6F2';
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
            var newEntity = {
                entitySerialNr: this.serialNr,
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
<style lang="scss" scoped>
#container {
    width: 100%;
    height: 100%;
    user-select: none;
    background-color: #F8F6F2;

    display: grid;
    grid-template-columns: auto 70%;

    h1 {
        margin: 3vh;
        padding-bottom: 2vh;
        font-weight: bold;
        color: #38293C;
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
        grid-column: 1;
        background-color: #F8F6F2;

        // Creating grid for products-container to
        // position both product and serial number
        display: grid;
        grid-template-rows: max-content auto auto;
        height: 100%;

        #popup-static-product-style {
            background-color: #7EB46B;
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
            
            h3 {
                font-weight: bold;
                color: #38293C
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
    }


    #parts {
        grid-column: 2;
        margin: 0 3vw 0 3vw ;
               background-color: #F8F6F2;
    }



    #exit-btn {
        position: absolute;
        top: 0;
        height: 200px;
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
        background-color: #F8F6F2;
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
            background-color: #7EB46B;
        }
    }
}


/* FILTER BLUR */
</style>
