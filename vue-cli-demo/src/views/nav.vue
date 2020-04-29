<template>
<div>
<el-container>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <!-- <h5>自定义颜色</h5> -->
    <el-menu
      class="el-menu-vertical-demo"
      @select='selectPath'
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-menu-item index="/index/home">我的主页面</el-menu-item>
        <el-menu-item index="/index/mine">我的个人中心</el-menu-item>
        <el-submenu index="/index/side">
        <template slot="title"><i class="el-icon-menu"></i>信息中心</template>
        <el-menu-item-group>
          <el-menu-item index="/side/new">新建信息</el-menu-item>
          <el-menu-item index="/side/history">历史信息</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    </el-aside>
    </el-container>
    </div>
</template>
<script>
  export default {
    data() {
      return{
        active:'/index/home',
      }
    },
    methods: {
      selectPath(key, keyPath) {
        // this.$router.push({path:key});
        console.log(key);
        console.log(keyPath);
        this.$router.push(key);
      }
    },
    watch:{
      '$route'(to,from){ // 监听路由变化
          this.active = to.path;
          console.log(this.active);
      }
    }
  }
</script>
<style scoped>

</style>