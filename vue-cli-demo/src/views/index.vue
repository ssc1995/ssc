<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
    <el-header style=" font-size: 16px" >
      <Head/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Nav/>
        </el-aside>
        <el-container>
        <el-main>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
        <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
    </el-container>
  </div>
</template>
<script>
import Nav from '@/views/nav';
import Head from '@/components/Head'
export default {
  components:{Nav,Head}
}
</script>
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: white;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>