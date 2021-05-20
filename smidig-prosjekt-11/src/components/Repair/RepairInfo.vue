<template>
  <!-- Root element -->
  <div :class="{ backdrop: showRepair || showEdit }">
    <!-- https://forum.vuejs.org/t/popup-how-to-hide-a-popup-by-clicking-outside-of-the-popup-window/59693 -- Mulighet for å trykke utenfor popup for å lukke? -->
    <div id="parts-popup" v-if="showRepair === true">
      <popup-select-repair @clicked="closeRepair()">
        <icon-base
          class="close-repair-ic"
          iconName="cross"
          iconColor="darkred"
          v-on:click="closeRepair"
        />
      </popup-select-repair>
    </div>

    <div id="edit-popup" v-if="showEdit">
      <popup-edit-repair
        ref="editref"
        @clicked="closeEdit()"
        :serialToEdit="editSerial"
      >
      </popup-edit-repair>
    </div>

    <!-- Grid system for submitted models -->
    <section id="entity-list-container" ref="repairsContainer">
      <div>
        <div v-for="entity in entities" :key="entity.entitySerialNr">
          <repair-entity
            @edit-entity="editRepair($event)"
            :entitySerialNumber="entity.entitySerialNr"
            :entityParts="entity.parts"
          >
          </repair-entity>
        </div>

        <img
          v-show="showRepair === false"
          id="plus-btn"
          src="@/assets/Images/Icons/plus-icon.png"
          v-on:click="addRepair()"
          alt="add new repair"
        />
      </div>
    </section>
  </div>
</template>

<script>
import PopupSelectRepair from "@/components/Repair/PopupSelectRepair.vue";
import RepairEntity from "@/components/Repair/RepairEntity.vue";
import PopupEditRepair from "@/components/Repair/PopupEditRepair.vue";
import IconBase from "../UI/IconBase.vue";

export default {
  data() {
    return {
      entities: [],
      showRepair: false,
      showEdit: false,
      editSerial: "EditSerial"
    };
  },
  created() {
    this.entities = this.$store.getters.getEntities;
  },
  // Using updated lifecycle hook to scroll to bottom of div when re-rendering page
  updated() {
    this.$nextTick(() => this.scrollToEnd());
  },
  components: {
    PopupSelectRepair,
    RepairEntity,
    PopupEditRepair,
    IconBase
  },
  methods: {
    editRepair(serial) {
      this.editSerial = serial;

      //Function to render selected entity parts
      //this.$refs.editref.renderSelects();

      this.showEdit = true;
    },
    addRepair() {
      // show new overlay
      this.showRepair = true;
      //alert(this.editSerial)
    },
    closeRepair() {
      // show new overlay
      this.showRepair = false;
      // Updates entities from state manually
      this.entities = this.$store.getters.getEntities;
    },
    closeEdit() {
      // show new overlay
      this.showEdit = false;
      // Updates entities from state manually
      this.entities = this.$store.getters.getEntities;
    },
    // Function for scrolling to end after adding repair
    scrollToEnd() {
      const container = this.$refs.repairsContainer;
      container.scrollTop = container.scrollHeight;
    }
  }
};
</script>

<style lang="scss" scoped>
.backdrop {
  background-color: rgba(0, 0, 0, 0.3);
}

#plus-btn {
  margin: 2.5vh auto;
  width: 3vw;
  outline: none;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition-duration: 75ms;
  }
}

#parts-popup {
  background-color: #f8f6f2;
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  margin-left: auto;
  margin-right: auto;
  width: 65vw;
  height: 60vh;
  border: 1px solid #423048;
}

#edit-popup {
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
  height: 55vh;
  background-color: #f8f6f2;
  border: 1px solid #423048;
  border-radius: 5px;
}

#close-repair-btn {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 50%;

  &:hover {
    transform: scale(1.15);
    transition-duration: 75ms;
  }
}

.icon-container {
  width: 30px;
  height: 30px;
}

.close-repair-ic {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}

#entity-list-container {
  height: 82vh;
  width: 100%;
  overflow-y: scroll;
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  #close-repair-btn {
    height: 15px;
    width: 15px;
  }

  #entity-list-container {
    height: 71vh;
  }

  #plus-btn {
    width: 4vw;
  }

  #edit-popup {
    width: 55vw;
  }
}
</style>
