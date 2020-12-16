<template>
    <!-- Root element -->
    <div :class="{ backdrop: showRepair }">
        <!-- https://forum.vuejs.org/t/popup-how-to-hide-a-popup-by-clicking-outside-of-the-popup-window/59693 -- Mulighet for å trykke utenfor popup for å lukke? -->
        <div id="parts-popup" class="border-2 border-gray-500 shadow-lg" v-if="showRepair == true">
            <popup-select-repair @clicked="closeRepair()">
                <img
                    id="close-repair-btn"
                    class="self-end cursor-pointer rounded-full transform hover:translate-y-0.5 hover:translate-x-0.5"
                    src="@/assets/Images/delete-icon.png"
                    v-on:click="closeRepair"
                    alt="close repair tab"
                />
            </popup-select-repair>
        </div>
        <!-- Grid system for submitted models -->
        <section id="entity-list-container" ref="repairsContainer">
            <div>
                <div v-for="entity in entities" :key="entity.entitySerialNr">
                    <repair-entity
                        :entitySerialNumber="entity.entitySerialNr"
                        :entityParts="entity.parts"
                    ></repair-entity>
                </div>

                <img
                    v-show="showRepair == false"
                    id="plus-btn"
                    class="cursor-pointer hover:bg-gray-400 rounded-full transform hover:translate-y-0.5 hover:translate-x-0.5"
                    src="@/assets/Images/Icons/plus-icon.png"
                    v-on:click="addRepair()"
                    alt="add new repair"
                />
            </div>
        </section>
    </div>
</template>

<script>
import PopupSelectRepair from '@/components/UI/PopupSelectRepair.vue';
import RepairEntity from '@/components/Repair/RepairEntity.vue';
export default {
    data() {
        return {
            entities: [],
            showRepair: false
        };
    },
    created() {
        this.entities = this.$store.getters.getEntities;
    },
    // Using updated lifecycle hook to scroll to bottom of div when re-rendering page
    updated() {
        this.$nextTick(() => this.scrollToEnd());
    },
    components: { PopupSelectRepair, RepairEntity },
    methods: {
        editRepair() {
            // show entity-spesific repair overlay
        },
        addRepair() {
            // show new overlay
            this.showRepair = true;
        },
        closeRepair() {
            // show new overlay
            this.showRepair = false;
            // Updates entities from state manually
            this.entities = this.$store.getters.getEntities;
        },
        // Function for scrolling to bottom of a div
        scrollToEnd: function() {
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
    margin: 2.5vh auto 2.5vh auto;
    width: 3vw;
    outline: none;
}
#parts-popup {
    background-color: white;
    position: absolute;
    width: 65vw;
    height: 60vh;
    top: 20%;
    left: 15vw;
    border: 1px solid #423048;
}

#close-repair-btn {
    position: absolute;
    right: 10px;
    top: 10px;
}

#entity-list-container {
    height: 82vh;
    width: 100%;
    overflow-y: scroll;
}
</style>
