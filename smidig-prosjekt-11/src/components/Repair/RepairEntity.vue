<template>
    <div id="product-container">
        <div class="ProductImg">
            <img
                class="product-image-sunbell"
                src="@/assets/Images/Parts/sunbellProductImage.png"
                alt="sunbell"
            />
        </div>
        <span
            ><div class="border-solid border-2">{{ this.entitySerialNumber }}</div></span
        >
        <!-- Loops through the selected parts for this repair, and displays their images -->

        <div id="parts-container">
            <img
                v-for="parts in entityParts"
                :key="parts.partNumber"
                class="part-imgs"
                :src="require('@/assets/Images/Parts/' + parts.imgName + '.png')"
                alt="{{parts.partName}}"
            />
        </div>
        <!-- Div to hold both edit and repair -->
        <div class="edit-delete-img">
            <button @click="editRepair" class="duration-75 transform hover:scale-110 motion-reduce:transform-none">
                <img
                    class="edit-delete-img-width"
                    src="@/assets/Images/edit-icon.png"
                    alt="Edit entity button"
                />
            </button>

            <button class="duration-75 transform hover:scale-110 motion-reduce:transform-none">
                <img
                    class="edit-delete-img-width"
                    src="@/assets/Images/delete-icon.png"
                    @click="deleteEntity(this.entity)"
                    alt="Delete button"
                />
            </button>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
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
            this.$store.commit('deleteEntity', this.entitySerialNumber);
            // totalProducts --
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
        height: 5vh;
        width: 3vw;
        margin: auto;
        margin-left: 4vw;
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
            margin-left: 50px;
            margin-right: -4px;
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
