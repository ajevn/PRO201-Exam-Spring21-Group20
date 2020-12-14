<template>
    <div
        id="login-container"
        class=" relative container w-full max-w-xs m-auto bg-logoBar rounded p-5 self-center"
    >
        <form @submit.prevent="post">
            <div>
                <label class="block mb-2" for="username">Username</label>
                <input
                    class="w-full p-2 mb-6 border-b-2 border-green-500 outline-none focus:bg-gray-300"
                    v-model="username"
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    required
                />
            </div>
            <div>
                <label class="block mb-2" for="password">Password</label>
                <input
                    class="w-full p-2 mb-6 border-b-2 border-green-500 outline-none focus:bg-gray-300"
                    v-model="password"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                />
            </div>

            <div>
                <input
                    id="login-submit"
                    class="w-full hover:bg-universalGreen text-white font-bold py-2 px-4 mb-6 rounded"
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

<style lang="scss" scoped>
#login-container {
    margin-top: 20vh;

    label {
        font-weight: bold;
        color: #a8d598;
    }

    input {
        color: #433149;
        border-color: #433149;
        font-weight: bold;
    }

    #login-submit {
        background-color: #a8d598;

        &:hover {
            background-color: rgb(231, 241, 227);
        }
    }
}
</style>
