<template>
    <div id="product-container">
        <div class="ProductImg">
            <img class="product-image-sunbell" src="@/assets/Images/Parts/sunbellProductImage.png" />
        </div>
        <span><input type="text" v-model="serialNumber"/></span>
        <img class="part-imgs" src="@/assets/Images/Parts/battery-removebg-preview.png" alt="parts" />

        <!-- Div to hold both edit and repair -->
        <div class="edit-delete-img">
            <button @click="editRepair">
                <img class="edit-delete-img-width" src="@/assets/Images/edit-icon.png" alt="editbtn" />
            </button>

            <button>
                <img class="edit-delete-img-width" src="@/assets/Images/delete-icon.png" alt="editbtn" />
            </button>
        </div>
        <!-- Not needed in this page -->
        <!--<input type="checkbox" name="approve" />-->

        <hr />
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            serialNumber: '',
            parts: []
        };
    },
    methods: {
        editRepair() {
            // show repair overlay
        }
    }
};
</script>

<style lang="scss" scoped>
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
</style>
