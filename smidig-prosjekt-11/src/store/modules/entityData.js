const state = {
  idIncrementor: 0,
  entityArray: []
};

const mutations = {
  addEntity(state, entity) {
    //entity.id = this.idIncrementor
    state.entityArray.push(entity);
    //this.idIncrementor++;
  },
  deleteEntity(state, payload) {
    //Delets entity based on entity position in entityArray
    var entityArray = state.entityArray;
    let indexPos = entityArray.findIndex(
      entity => entity.entitySerialNr === payload
    );

    state.entityArray.splice(indexPos, 1);
  },
  editEntity(state, entity) {
    let success = false;
    for (var i = 0; i < state.entityArray.length; i++) {
      if (state.entityArray[i].id === entity.id) {
        state.entityArray[i].entitySerialNr = entity.entitySerialNr;
        state.entityArray[i].parts = entity.parts;
        success = true;
        break;
      }
    }
    if (!success) {
      console.log(
        "unable to locate existing records with matching id, changes will not be saved"
      );
    } else {
      console.log("data was saved");
    }

    //let oldIndex = state.entityArray.findIndex(entity => entity.entitySerialNr === oldSN);
    //state.entityArray[oldIndex] = newEntity;
  }
};

const getters = {
  getEntities(state) {
    return state.entityArray;
  },
  getEntityBySerial: state => srNr => {
    return state.entityArray.find(entity => entity.entitySerialNr === srNr);
  },
  getProducts(state) {
    return state.products;
  },
  getNumOfEntities(state) {
    return state.entityArray.length;
  }
};

export default {
  state,
  mutations,
  getters
};
