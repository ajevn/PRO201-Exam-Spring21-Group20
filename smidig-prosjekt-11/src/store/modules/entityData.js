const state = {
  entityArray: []
};

const mutations = {
  addEntity(state, entity) {
    state.entityArray.push(entity);
  },
  deleteEntity(state, payload) {
    //Deletes entity based on entity position in entityArray
    const entityArray = state.entityArray;
    let indexPos = entityArray.findIndex(
      entity => entity.entitySerialNr === payload
    );

    state.entityArray.splice(indexPos, 1);
  },
  editEntity(state, entity) {
    let success = false;
    for (const item of state.entityArray) {
      if (item.id === entity.id) {
        item.entitySerialNr = entity.entitySerialNr;
        item.parts = entity.parts;
        success = true;
        break;
      }
    }
    if (!success)
      console.log(
        "unable to locate existing records with matching id, changes will not be saved"
      );
  }
};

const getters = {
  getEntities(state) {
    return state.entityArray;
  },
  getNumOfEntities(state) {
    return state.entityArray.length;
  },
  getEntityById: state => id => {
    return state.entityArray.find(entity => entity.id === id);
  }
};

export default {
  state,
  mutations,
  getters
};
