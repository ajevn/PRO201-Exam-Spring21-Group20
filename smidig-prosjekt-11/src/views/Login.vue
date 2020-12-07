<template>
  <div class="login">
    <base-site>
      <nav-bar />
      <div class="container w-full max-w-xs m-auto bg-green-500 rounded p-5 self-center">
        <form @submit.prevent="post" method="post">
          <div>
            <label class="block mb-2 text-indigo-500" for="username">Username</label>
            <input
              class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
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
              class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              v-model="password"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
          </div>

          <div>
            <input
              class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            />
          </div>
        </form>
      </div>
    </base-site>
  </div>
</template>

<script>
import BaseSite from '@/components/UI/BaseSite.vue'
import NavBar from '../components/Nav/navBar.vue'
import { ref } from 'vue'
import navBar from '../../../../PRO201-1-20H/smidig-prosjekt-11/src/components/navBar.vue'

export default {
  components: { navBar },
  name: 'login',
  setup() {
    const username = ref('')
    const password = ref('')

    const post = () => {
      //post to server
      console.log(username.value + ' ' + password.value)
      username.value = ''
      password.value = ''
    }

    return {
      username,
      password,
      BaseSite,
      NavBar,
      post
    }
  }
}
</script>

<style scoped></style>
