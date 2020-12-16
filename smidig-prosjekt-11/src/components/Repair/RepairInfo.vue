<template>
    <!-- Root element -->
    <div :class="{ backdrop: showRepair }">
        <!-- https://forum.vuejs.org/t/popup-how-to-hide-a-popup-by-clicking-outside-of-the-popup-window/59693 -- Mulighet for å trykke utenfor popup for å lukke? -->
        <div id="parts-popup" class="border-2 border-gray-500 shadow-lg" v-if="showRepair == true">
            <popup-select-repair @clicked="closeRepair()">
                <img
                    id="close-repair-btn"
                    class="self-end duration-75 cursor-pointer rounded-full transform hover:scale-110 "
                    src="@/assets/Images/delete-icon.png"
                    v-on:click="closeRepair"
                    alt="close repair tab"
                />
            </popup-select-repair>
        </div>

        <div id="edit-popup" class="border-2 border-gray-500 shadow-lg" v-if="showEdit">
            <popup-edit-repair ref="editref" @clicked="closeEdit()" :serialToEdit="editSerial">
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
                    v-show="showRepair == false"
                    id="plus-btn"
                    class="duration-75 cursor-pointer hover:bg-gray-400 rounded-full transform hover:scale-105"
                    src="@/assets/Images/Icons/plus-icon.png"
                    v-on:click="addRepair()"
                    alt="add new repair"
                />
            </div>
        </section>
    </div>
</template>

<script>
import PopupSelectRepair from '@/components/Repair/PopupSelectRepair.vue';
import RepairEntity from '@/components/Repair/RepairEntity.vue';
import PopupEditRepair from '@/components/Repair/PopupEditRepair.vue';

export default {
    data() {
        return {
            entities: [],
            showRepair: false,
            showEdit: false,
            editSerial: 'EditSerial'
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
        PopupEditRepair
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
    width: 38vw;
    height: 55vh;
    background-color: #f8f6f2;
    border: 1px solid #423048;
}

#close-repair-btn {
    position: absolute;
    height: 50px;
    width: 50px;
    right: 10px;
    top: 10px;
}

#entity-list-container {
    height: 82vh;
    width: 100%;
    overflow-y: scroll;
}
</style>
