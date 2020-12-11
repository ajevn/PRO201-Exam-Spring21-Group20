<template>
    <div>
        <router-link to="/login" v-if="user == null">
            <button>
                Login
            </button>
        </router-link>
        <button @click="logout" v-else>
            Logout
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

<style lang="scss" scoped>
    button {
        border-radius: 5px;
        padding: 5px 20px;
        background-color: #A8D598;
        font-weight: bold;
        color: #54445A;
        box-shadow: 1px 1px 3px #000000;
    }
</style>