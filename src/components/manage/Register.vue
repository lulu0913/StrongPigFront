<template>
  <div>
   <form id = "app">
        <img src="/img/P.png" width="72" height="72">
        <h2 class="=form-signin0-heading">Please regist</h2>
        <input class="form-control" v-model="userName" type="text" placeholder="用户名" @blur="blur" @focus="focus" @input="userNameLimit"> <span v-html="msg"></span><br>
        <input class="form-control" v-model="userPassword" type="password" placeholder="密码" @input="userPasswordLimit"><br>
        <button class="btn btn-lg btn-primary btn-block" type="button" @click="register">Regist</button>
    </form>

  </div>
</template>

<script>

export default {
  name: 'BlogLogin',
  // blogHeader、blogFooter组件给申明到components里面然后在template里面使用
  // components: { blogHeader, blogFooter },
  data () {
    return {
      loginInfoVo: { username: '', password: '' },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/login', {
          username: this.loginInfoVo.username,
          password: this.loginInfoVo.password
        })
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/User'})
          }
        })
        .catch(failResponse => {})
    }
  }
}
</script>