<template>
    <div class="relative container w-full max-w-xs m-auto bg-logoBar rounded p-5 self-center">
        <form @submit.prevent="post">
            <div>
                <label class="block mb-2 text-indigo-500" for="username">Username</label>
                <input
                    class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300"
                    v-model="username"
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    required
                />
            </div>
            <div>
                <label class="block mb-2 text-indigo-500" for="password">Password</label>
                <input
                    class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300"
                    v-model="password"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                />
            </div>

            <div>
                <input
                    class="w-full bg-green hover:bg-secondary text-white font-bold py-2 px-4 mb-6 rounded"
                    type="submit"
                />
            </div>
        </form>
        <button @click="logout">logout</button>
    </div>
</template>
<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();
        const username = ref('');
        const password = ref('');
        const user = computed(() => {
            return store.getters.getUserId;
        });
        console.log(user.value);
        function post() {
            console.log(user);
            console.log(`${username.value} + ${password.value}`);
            login(username.value);
        }
        function login(userId) {
            store.commit('login', userId);
        }
        function logout() {
            store.commit('logout');
        }

        return {
            username,
            password,
            post,
            user,
            logout
        };
    }
};
</script>
