<template>
    <div>
        <router-link to="/login" v-if="user == null">
            <button>
                login
            </button>
        </router-link>
        <button @click="logout" v-else>
            logout
        </button>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const user = computed(() => {
            return store.getters.getUserId;
        });
        const logout = () => store.commit('logout');

        return { user, logout };
    }
};
</script>
