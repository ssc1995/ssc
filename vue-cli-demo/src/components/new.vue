<template>
    <div>
        <p>我的新闻中心</p>
        <el-row>
            <el-button plain @click='plainBtn'>朴素按钮点击传递数据</el-button>
            <el-button type="primary" plain disabled>主要按钮</el-button>
            <el-button type="success" plain disabled>成功按钮</el-button>
            <el-button type="info" plain disabled>信息按钮</el-button>
            <el-button type="warning" plain disabled>警告按钮</el-button>
        <el-button type="danger" round @click="getModel">危险按钮</el-button>
        </el-row>
        <div class="demo-image__lazy">
          <el-image v-for="good in goods" :key="good.id" :src="good.img" :alt="good.title" :lazy='true'></el-image>
        </div>
    </div>
</template>
<script>
import { Loading,Notification } from 'element-ui';
import Event from '@/event.js';
export default {
    data() {
        return {
        value:'',
        goods:{},
        item:'我是new传来的'
        }
    },
    beforeCreate() {  //实例创建之前的过渡动画效果
      Loading.service({ fullscreen: true,text:"拼命加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.8)"});
    },

    mounted() {  // 实例挂载之后  动画关闭效果
      let loadingInstance1 = Loading.service({ fullscreen: true });
      loadingInstance1.close();
    },



    methods:{
      getModel() {
        this.getGoods().then(()=>this.getList()).catch(err=>{
          console.log(err);
        });
      },

      getGoods(){
        return new Promise((resolve,reject)=>{
          this.$axios.post("/vue/goodlist",{params:{ id:1}},
          ).then(res=>{
            this.goods=res.data.result;
            console.log(666);
            resolve(this.goods);
            // console.log(this.goods);
        })
        .catch(err=>{
          // console.log(err)
          Notification.error({  // 全局提醒  catch捕获异常
            title: '提示',
            message: '请求发送失败!',
          });

        })
      })  
    },

    getList() {
      this.$axios.post('/vue/xinxi').then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(111111)
      })
    },

    plainBtn(){
      // console.log(Event.$emit);
      Event.$emit('sendNew',this.item)
    }
  }
}
</script>
<style scoped>
.demo-image__lazy{
  height: 500px;
}
</style>