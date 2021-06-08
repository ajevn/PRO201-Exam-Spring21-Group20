<template>
  <div id="product-container">
    <img
      class="product-img"
      src="@/assets/images/parts/sunbellProductImage.png"
      alt="sunbell"
    />
    <!-- <div class="product-img-container">
        </div> -->

    <div class="serial-container">
      <span class="serial-number">{{ this.entitySerialNumber }}</span>
    </div>

    <!-- Loops through the selected parts for this repair, and displays their images -->

    <div class="parts-container">
      <img
        v-for="part in entityParts"
        :key="part.partNumber"
        class="part-img"
        :src="require('@/assets/images/parts/' + part.imgName + '.png')"
        alt="{{part.partName}}"
      />
    </div>
    <!-- Div to hold both edit and repair -->
    <div class="edit-delete-icons">
      <button class="edit-delete-buttons" @click="editEntity">
        <!-- <img
                    class="edit-delete-img-width"
                    src="@/assets/images/edit-icon.png"
                    alt="Edit entity button"
                /> -->
        <div class="edit-delete-ic-container">
          <icon-base
            iconName="pencil"
            iconColor="#4040D9"
            icon-hover-color="#0101B0"
            iconWidth="100%"
            iconHeight="100%"
          />
        </div>
      </button>

      <button class="edit-delete-buttons" @click="deleteEntity">
        <div class="edit-delete-ic-container">
          <icon-base
            id="delete-ic"
            iconName="cross"
            iconColor="#C93333"
            icon-hover-color="#A80000"
            iconWidth="100%"
            iconHeight="100%"
          />
        </div>
      </button>
    </div>
  </div>
  <hr id="seperator" />
</template>

<script>
import IconBase from "../ui/IconBase.vue";
export default {
  data() {
    return {};
  },
  components: { IconBase },
  props: {
    entityParts: {
      Type: Object
    },
    entitySerialNumber: {
      Type: String
    },
    entityId: {
      Type: Number
    }
  },
  methods: {
    editEntity: function() {
      this.$emit("edit-entity", this.entityId);
    },
    deleteEntity: function() {
      this.$store.commit("deleteEntity", this.entityId);
    }
  }
};
</script>

<style lang="scss">
#product-container {
  // width: 100%;
  height: 100px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: space-between;
}
.product-img {
  margin-left: 50px;
  height: 80%;
  // border: 1px solid black;
}

.serial-container {
  width: 250px;
  // border: 1px solid blue;
  // border: 1px solid blue;

  .serial-number {
    font-size: 1.2rem;
    background-color: #dad2cb;
    border-radius: 8px;
    padding: 10px;
  }
}

input {
  border: 1.5px solid #423048;
  border-radius: 5px;
  background-color: #fffefd;
  color: #050505;
  text-align: center;
  font-weight: bold;
}

.parts-container {
  height: 100%;
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.part-img {
  height: 90%;
  border-radius: 10px;
  background-color: #dad2cb;
  margin-left: 8px;
}

.edit-delete-icons {
  margin-right: 65px;
  width: 100px;
  display: flex;
  justify-content: space-between;

  .edit-delete-ic-container {
    width: 23px;
    height: 23px;
  }
}

@media screen and (min-device-width: 400px) and (max-width: 1280px) {
  .product-img {
    margin-left: 10px;
  }
  .parts-container {
    align-items: center;
    justify-items: center;
    width: 200px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .edit-delete-ic-container {
    width: 23px;
    height: 23px;
  }

  .part-img {
    margin: 3px;
  }

  .serial-container {
    width: 150px;

    .serial-number {
      font-size: 0.8rem;
      background-color: #dad2cb;
      border-radius: 8px;
      padding: 10px;
    }
  }

  .edit-delete-icons {
    margin-right: 40px;
    width: 90px;

    .edit-delete-ic-container {
      width: 18px;
      height: 18px;
    }
  }
}

#seperator {
  margin: auto;
  border-top: 1px solid #cfc8c2;
}
</style>
