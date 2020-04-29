<template>
<div>
    <el-input
    placeholder="请输入账号"
    v-model="input"
    style="width:200px;margin:50px"
    clearable>
    </el-input>
    <el-input style="width:200px"  placeholder="请输入密码" v-model="password" show-password></el-input>
     <el-button type="primary" style="margin-left:50px" @click="click">确认登录</el-button>
</div>
</template>
<script>
  export default {
    data() {
      return {
        input: '',
        password:'',
      }
    },
    methods:{
        click(){
            localStorage.setItem('user',{name:this.input,pwd:this.password});
            this.$router.push({name:'home'});
        }
    }
  }
</script>
<style scoped>

</style>