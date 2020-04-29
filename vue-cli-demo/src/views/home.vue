<template>
  <div style="height:500px;margin:20px 0;">
    <el-popover
      placement="bottom"
      width="500"
      trigger="hover">
      <el-table>
        <div class="hov"></div>
      </el-table>
      <span slot="reference">小米手机</span>
    </el-popover>
    <el-popover
        placement="bottom"
        width="400"
        trigger="hover">
        <el-table>
          <div class="hov"></div>
        </el-table>
        <span slot="reference">Redmi红米</span>
      </el-popover>
      <el-popover
      placement="bottom"
      width="400"
      trigger="hover">
      <el-table>
        <div class="hov"></div>
      </el-table>
      <span slot="reference">电视</span>
    </el-popover>
    <el-popover
      placement="bottom"
      width="400"
      trigger="hover">
      <el-table>
        <div class="hov"></div>
      </el-table>
      <span slot="reference">笔记本</span>
    </el-popover>
    <el-popover
      placement="bottom"
      width="400"
      trigger="hover">
      <el-table>
        <div class="hov"></div>
      </el-table>
      <span slot="reference">家电</span>
    </el-popover>
    <el-popover
      placement="bottom"
      width="400"
      trigger="hover">
      <el-table>
        <div class="hov"></div>
      </el-table>
      <span slot="reference">路由器</span>
    </el-popover>
    <el-popover
      placement="bottom"
      width="400"
      trigger="hover">
      <el-table>
        <div class="hov"></div>
      </el-table>
      <span slot="reference">智能硬件</span>
    </el-popover>
      <span slot="reference">服务</span>
      <span slot="reference">社区</span>
      <div style="width:200px;float:right;padding-right:400px">
        <el-input placeholder="请输入内容" v-model="input">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
       <div class="block">
        <el-carousel :interval="2000" type="card" height="300px">
          <el-carousel-item v-for="item in list" :key="item.id">
            <!-- <h3 class="medium">{{ item }}</h3> -->
            <img :src="item.src" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
  </div>
</template>
<script>
export default {
    data(){
      return {
        input:'',
        list:[
          {id:1,src:'../../static/pubilc/img/1.jpg'},
          {id:2,src:'../../static/pubilc/img/2.jpg'},
          {id:3,src:'../../static/pubilc/img/3.jpg'},
          {id:4,src:'../../static/pubilc/img/4.jpg'},
          {id:5,src:'../../static/pubilc/img/5.jpg'},
          {id:6,src:'../../static/pubilc/img/6.jpg'},
          {id:7,src:'../../static/pubilc/img/7.jpg'},
          {id:8,src:'../../static/pubilc/img/8.jpg'},
        ]
      }
    }
}
</script>
<style scoped>
  .hov{
    width: 80%;
    height: 100px;
  }
   .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
    width: 130px;
  }
  span{
    font-size: 20px;
    color: tomato;
  }

  .el-carousel__item{
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

</style>