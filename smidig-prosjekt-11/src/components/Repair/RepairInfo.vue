<template>
    <!-- Root element -->
    <div>
        <!-- https://forum.vuejs.org/t/popup-how-to-hide-a-popup-by-clicking-outside-of-the-popup-window/59693 -- Mulighet for å trykke utenfor popup for å lukke? -->
        <div id="parts-popup" class="border-2 border-gray-500 shadow-lg" v-if="showRepair == true">
            <popup-select-repair @clicked="closeRepair()"></popup-select-repair>
            <img
                id="close-repair-btn"
                class="self-end cursor-pointer rounded-full transform hover:translate-y-0.5 hover:translate-x-0.5"
                src="@/assets/Images/delete-icon.png"
                v-on:click="closeRepair"
            />
        </div>
        <!-- Grid system for submitted models -->
        <section id="entity-list-container">
            <div>
                <div v-for="entity in entities" :key="entity.entitySerialNr">
                    <repair-entity :entityParts="entity.parts"></repair-entity>
                </div>

                <img
                    v-show="showRepair == false"
                    id="plus-btn"
                    class="cursor-pointer hover:bg-gray-400 rounded-full transform hover:translate-y-0.5 hover:translate-x-0.5"
                    src="@/assets/Images/Icons/plus-icon.png"
                    v-on:click="addRepair()"
                />
            </div>
        </section>
    </div>
</template>

<script>
import PopupSelectRepair from '@/components/UI/PopupSelectRepair.vue';
import RepairEntity from '@/components/UI/RepairEntity.vue';

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
        }
    },
    watch: {
        entities: function() {
            console.log('entites updated from watch');
        }
        // REACT TO STATE CHANGE -- RUN GET ENTITIES METHOd
    }
};
</script>

<style lang="scss" scoped>
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
    position: relative;
    left: 63.3vw;
    bottom: 59.5vh;
}
#entity-list-container {
    height: 75vh;
    width: 100%;
    overflow-y: scroll;
}
</style>
