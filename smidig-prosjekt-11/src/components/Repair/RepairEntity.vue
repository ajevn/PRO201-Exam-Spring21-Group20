<template>
  <div id="product-container">
    <div class="ProductImg">
      <img
        class="product-image-sunbell"
        src="@/assets/Images/Parts/sunbellProductImage.png"
        alt="sunbell"
      />
    </div>
    <span>
      <div id="product-serial-number">
        {{ this.entitySerialNumber }}
      </div>
    </span>

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
      <button class="edit-delete-buttons" @click="editEntity(this.entity)">
        <!-- <img
            class="edit-delete-img-width"
            src="@/assets/Images/edit-icon.png"
            alt="Edit entity button"
        /> -->
        <!-- <icon-base
            class="edit-delete-img-width"
            iconName="cross"
            iconColor="darkred"
            
        /> -->
      </button>

      <button class="edit-delete-buttons" @click="deleteEntity(this.entity)">
        <img
          class="edit-delete-img-width"
          id="delete-img"
          src="@/assets/Images/delete-icon.png"
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
  //component: { IconBase },
  props: {
    entityParts: {
      Type: Object
    },
    entitySerialNumber: {
      Type: String
    }
  },
  methods: {
    editEntity: function() {
      this.$emit("edit-entity", this.entitySerialNumber);
    },
    deleteEntity: function() {
      this.$store.commit("deleteEntity", this.entitySerialNumber);
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
  grid-template-columns: 1fr 1fr 40% 17vw 20px;
  grid-template-rows: auto 2px;

  .product-image-sunbell {
    width: 55px;
    margin: auto;
  }

  #product-serial-number {
    border: 1px solid #c6c6c6;
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
    margin: auto auto auto 4vw;
  }

  #part-image-separator {
    border-right: 1px solid #dedede;
    margin-right: -10px; /* size of gutter */
    padding-right: 10px; /* size of gutter */
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
      border: 1px solid blue;
      width: 20px;
      margin: 5px;
    }

    .edit-delete-buttons:hover {
      transform: scale(1.15);
      transition-duration: 50ms;
    }

    #delete-img {
      margin-left: 40px;
    }
  }

  button {
    outline: none;
  }

  hr {
    grid-column: 1/-1;
    grid-row: 2;
    width: 93%;
    margin: auto;
    border-top: 0.5px solid #707070;
  }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  #product-container {
    height: 80px;

    .product-image-sunbell {
      width: 45px;
    }

    #product-serial-number {
      font-size: 12px;
      width: 25vh;
    }

    .edit-delete-img {
      .edit-delete-img-width {
        width: 15px;
      }
    }
  }
}
</style>
