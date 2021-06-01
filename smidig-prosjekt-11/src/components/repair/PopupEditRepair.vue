<template>
  <div class="edit-repair-container">
    <!-- PARTS-DIV -->
    <div class="part-container">
      <modal-error-message v-if="showModal === true" @close="showModal = false">
        <template v-slot:body>{{ modalTextBody }}</template>
        <!-- Serial Number Already Exists -->
      </modal-error-message>

      <h1>Parts</h1>
      <div class="part-grid">
        <div
          class="part-grid-item"
          v-for="product in productImages"
          :key="product.partNumber"
          @click="selectPart(product)"
        >
          <img
            class="part-icon"
            :id="product.partNumber"
            :class="{ partchecked: product.isChecked }"
            :src="require('@/assets/images/parts/' + product.imgName + '.png')"
            alt="{{product.partName}}"
          />
          <h2>{{ product.partName }}</h2>
        </div>
      </div>
    </div>

    <div class="serial-container">
      <h3>Serial number</h3>

      <input
        ref="inputSerialNumber"
        v-on:keydown="serialInputIsEmpty = false"
        v-bind:class="{ serialInputEmpty: serialInputIsEmpty }"
        :value="serial"
        placeholder="Example: 1234 5678"
      />
    </div>
    <div class="close-container-ic">
      <icon-base
        class="close-repair-ic"
        iconName="cross"
        iconColor="#C93333"
        icon-hover-color="#A80000"
        iconWidth="100%"
        iconHeight="100%"
        v-on:click="closePopup"
      />
    </div>

    <div class="submit-container-ic">
      <icon-base
        class="submit-ic"
        iconName="checkmark"
        iconColor="#7EB46B"
        icon-hover-color="#006400"
        @click="submitPartsSelected"
        iconWidth="100%"
        iconHeight="100%"
      />
    </div>
  </div>
</template>

<script>
import ModalErrorMessage from "@/components/modals/ModalErrorMessage.vue";
import IconBase from "../ui/IconBase.vue";

export default {
  name: "PopupEdit",
  props: {
    pictures: {
      type: Array
    },
    idToEdit: {
      type: Number
    }
  },
  emits: ["clicked"],
  components: {
    ModalErrorMessage,
    IconBase
  },
  data() {
    return {
      id: -1, //fetched in renderSelects()
      serial: -1,
      serialInputIsEmpty: false,
      selectedEntitySerialNumber: "noneselected",
      modalTextBody: "",
      showModal: false,
      inputSerial: {
        Type: Number,
        Required: true
      },
      productImages: [
        {
          partNumber: "1",
          partName: "Lamp",
          imgName: "ic-part-lamp",
          isChecked: false
        },
        {
          partNumber: "2",
          partName: "12V charger",
          imgName: "ic-part-adapter-charger",
          isChecked: false
        },
        {
          partNumber: "3",
          partName: "Battery",
          imgName: "ic-part-battery",
          isChecked: false
        },
        {
          partNumber: "4",
          partName: "Power button",
          imgName: "ic-part-button",
          isChecked: false
        },
        {
          partNumber: "5",
          partName: "Light bulb",
          imgName: "ic-part-lightbulb",
          isChecked: false
        },
        {
          partNumber: "6",
          partName: "Screen",
          imgName: "ic-part-screen",
          isChecked: false
        },
        {
          partNumber: "7",
          partName: "Socket charger",
          imgName: "ic-part-socket-charger",
          isChecked: false
        },
        {
          partNumber: "8",
          partName: "Solar panel",
          imgName: "ic-part-solar-panel",
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
      this.partsChosen = [];
      for (let i = 0; i < this.productImages.length; i++) {
        if (this.productImages[i].isChecked) {
          this.partsChosen.push(this.productImages[i]);
        }
      }

      let serialNr = this.$refs.inputSerialNumber.value.trim();

      if (serialNr.length > 20) {
        // Serial number too long
        this.modalTextBody = "Serial number length must be less than 20";
        this.showModal = true;
        return;
      } else if (isNaN(serialNr) || serialNr === " ") {
        // Serial number must be numeric
        this.modalTextBody = "Serial number can only contain numbers";
        this.showModal = true;
        return;
      } else if (this.partsChosen.length === 0) {
        // Please choose part
        this.modalTextBody = "Please choose part";
        this.showModal = true;
        return;
      }

      const editedEntity = {
        id: this.id,
        entitySerialNr: serialNr,
        parts: this.partsChosen
      };

      this.serialInputIsEmpty = true;
      this.$store.commit("editEntity", editedEntity);
      this.closePopup();
    },
    closePopup() {
      this.$emit("clicked");
    },
    renderSelects() {
      const entity = this.$store.getters.getEntityById(this.idToEdit);
      // Get id in order to pass it to entityData.js later when submitting
      this.id = entity.id;
      this.serial = entity.entitySerialNr;
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
.edit-repair-container {
  width: 100%;
  height: 100%;
  user-select: none;
  background-color: #f8f6f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  text-align: center;

  .part-container {
    height: 100%;
    position: relative;
    background-color: #f8f6f2;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding-top: 10px;
    border-radius: 10px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2c2a29;
    margin: 0 auto;
  }

  .part-grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 0 20px;
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;

    .part-grid-item {
      background-color: #f8f6f2;
      width: 75%;
      cursor: pointer;
      display: flex;
      flex-direction: column;

      h2 {
        font-weight: bold;
        font-size: 1rem;
      }

      .part-icon {
        border-radius: 10px;
        background-color: #dad2cb;
        flex: 1;
        align-self: center;
        -webkit-user-drag: none;
      }

      &:hover img {
        background-color: #7eb46b;
      }

      .partchecked {
        background-color: #7eb46b;
      }
    }
  }

  .serial-container {
    padding: 5px;

    h3 {
      font-weight: bold;
      color: #38293c;
    }

    .serialInputEmpty {
      box-shadow: 0 0 8px #cc0000;
    }

    input {
      border: 1.5px solid #2c2a29;
      border-radius: 5px;
      background-color: #fffefd;
      color: #050505;
      text-align: center;
      font-weight: bold;
    }
  }

  .submit-container-ic {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 20px;
    bottom: 10px;

    .submit-ic {
      cursor: pointer;
    }
  }

  .close-container-ic {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10px;
    top: 10px;

    .close-repair-ic {
      cursor: pointer;
      width: 40px;
      height: 40px;
    }
  }
}

@media only screen and (min-device-width: 600px) and (max-width: 1280px) and (orientation: landscape) {
  .edit-repair-container {
    h1 {
      font-size: 1.3rem;
    }

    .part-grid {
      gap: 0 5px;
      .part-grid-item {
        h2 {
          font-size: 0.6rem;
        }
      }
    }

    .serial-container {
      h3 {
        font-size: 14px;
      }
      input {
        font-size: 10px;
      }
    }

    .submit-container-ic {
      width: 25px;
      height: 25px;

      .submit-ic {
        width: 25px;
        height: 25px;
      }
    }

    .close-container-ic {
      width: 20px;
      height: 20px;

      .close-repair-ic {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
