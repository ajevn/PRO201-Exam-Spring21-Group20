<template>
    <div class=" relative container w-full max-w-xs m-auto bg-logoBar rounded p-5 self-center">
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
    </div>
</template>
<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const username = ref('');
        const password = ref('');
        const user = computed(() => {
            return store.getters.getUserId;
        });
        function post() {
            login(username.value);
            router.push({ name: 'Home' });
        }
        function login(userId) {
            //submit to database
            store.commit('login', userId);
        }

        return {
            username,
            password,
            post,
            user
        };
    }
};
</script>
