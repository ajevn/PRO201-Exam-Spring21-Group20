<template>
    <div id="product-container">
        <div class="ProductImg">
            <img class="product-image-sunbell" src="@/assets/Images/Parts/sunbellProductImage.png" />
        </div>
        <span
            ><div class="border-solid border-2">{{ this.entitySerialNumber }}</div></span
        >

        <div id="parts-container">
            <img
                v-for="parts in entityParts"
                :key="parts.partNumber"
                class="part-imgs"
                :src="require('@/assets/Images/Parts/' + parts.imgName + '.png')"
                alt="parts"
            />
        </div>
        <!-- Div to hold both edit and repair -->
        <div class="edit-delete-img">
            <button @click="editRepair">
                <img class="edit-delete-img-width" src="@/assets/Images/edit-icon.png" alt="Edit entity button" />
            </button>

            <button>
                <img class="edit-delete-img-width" src="@/assets/Images/delete-icon.png" @click="deleteEntity(this.entity)" alt="Delete button" />
            </button>
        </div>
        <!-- Not needed in this page -->
        <!--<input type="checkbox" name="approve" />-->

        <hr />
    </div>
</template>

<script>
export default {
    props: {
        entityParts: {
            Type: Object
        },
        entitySerialNumber: {
            Type: String
        }
    },
    methods: {
        deleteEntity: function() {
            console.log("Serial nr submitted: " + this.entitySerialNumber)
            this.$store.commit('deleteEntity', this.entitySerialNumber);
        }
    }
};
</script>

<style lang="scss">
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
        height: 3.5vh;
        width: 2.5vw;
        margin: auto;
        margin-left: auto;
        margin-right: auto;
    }

    #parts-container {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 100%;
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
</style>
