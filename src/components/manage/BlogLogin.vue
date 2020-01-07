<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{el}}</p>
    <form>
        <input v-model="username" placeholder="名称" style="width:200px"><br>
        <input v-model="password" placeholder="价格" style="width:200px"><br>
        <button type="primary" @click="addUser">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BlogLogin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      price: '',
      el:''
    }
  },
  methods: {
    addUser() {
      let username = this.username;
      let password = this.password;
      this.$axios.post('/api/user/addUser', {
        username: username,
        password: password
      }).then((response) => {
        console.log(response);
      })
    },

  }
}
</script>
