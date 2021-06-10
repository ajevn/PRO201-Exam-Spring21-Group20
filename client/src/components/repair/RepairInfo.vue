<template>
  <!-- Root element -->
  <div :class="{ backdrop: showRepair || showEdit }">
    <!-- https://forum.vuejs.org/t/popup-how-to-hide-a-popup-by-clicking-outside-of-the-popup-window/59693 -- Mulighet for å trykke utenfor popup for å lukke? -->
    <div id="parts-popup" v-if="showRepair === true">
      <popup-select-repair @onCloseRepair="closeRepair()" />
    </div>

    <div id="edit-popup" v-if="showEdit">
      <popup-edit-repair
        ref="editref"
        @clicked="closeEdit()"
        :idToEdit="editId"
      >
      </popup-edit-repair>
    </div>

    <!-- Grid system for submitted models -->
    <section id="entity-list-container" ref="repairsContainer">
      <div>
        <div v-for="entity in entities" :key="entity.id">
          <repair-entity
            @edit-entity="editRepair($event)"
            :entityParts="entity.parts"
            :entityId="entity.id"
            :entitySerialNumber="
              entity.entitySerialNr.length >= 1
                ? entity.entitySerialNr
                : 'No Serial Number'
            "
          >
          </repair-entity>
        </div>

        <div class="plus-icon-container">
          <button
            type="button"
            v-on:click="addRepair()"
            @keydown.enter="addRepair()"
          >
            <icon-base
              v-show="showRepair === false"
              id="plus-btn"
              ref="plusbtn"
              iconName="plus"
              iconColor="#2C2A29"
              icon-hover-color="#787370"
              iconWidth="100%"
              iconHeight="100%"
            />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PopupSelectRepair from "@/components/repair/PopupSelectRepair.vue";
import RepairEntity from "@/components/repair/RepairEntity.vue";
import PopupEditRepair from "@/components/repair/PopupEditRepair.vue";
import IconBase from "../ui/IconBase.vue";

export default {
  data() {
    return {
      entities: [],
      showRepair: false,
      showEdit: false,
      editId: -1
    };
  },
  created() {
    this.entities = this.$store.getters.getEntities;
  },
  mounted() {
    if (this.entities.length === 0) {
      this.showRepair = true;
    }
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
    editRepair(id) {
      this.editId = id;
      this.$store.commit("updateBtn", true);
      //Function to render selected entity parts
      //this.$refs.editref.renderSelects();

      this.showEdit = true;
    },
    addRepair() {
      // show new overlay
      //document.activeElement.blur();
      this.showRepair = true;
      this.$store.commit("updateBtn", true);
    },
    closeRepair() {
      // show new overlay
      this.showRepair = false;
      this.$store.commit("updateBtn", false);
      // Updates entities from state manually
      this.entities = this.$store.getters.getEntities;
    },
    closeEdit() {
      // show new overlay
      this.showEdit = false;
      this.$store.commit("updateBtn", false);
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

.plus-icon-container {
  width: 50px;
  height: 50px;
  margin: 2.5vh auto;
  cursor: pointer;
}

#plus-btn {
  //margin: 2.5vh auto;
  height: 50px;
  width: 3vw;
  //outline: none;
  border-radius: 50%;
  cursor: pointer;
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
  border-radius: 10px;
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

#entity-list-container {
  height: 82vh;
  width: 100%;
  overflow-y: scroll;
}

@media only screen and (min-device-width: 600px) and (max-width: 1280px) and (orientation: landscape) {
  #parts-popup {
    width: 75vw;
    height: 55vh;
  }

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
