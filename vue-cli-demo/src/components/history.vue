
<template>
<div>
    <Chart :date="date"/>
    <h2 v-text="msg"></h2>
    <h3>{{year}}年{{month}}月{{day}}日  {{hour}}:{{min}}:{{m}}</h3>
</div>
</template>

<script>
import Chart from './chart';
import Event from '@/event.js';
export default {
  data() {
    return {
      date:new Date(),
      msg:"原始数据",
      year:new Date().getFullYear(),
      month:new Date().getMonth()+1,
      day:new Date().getDay(),
      hour:new Date().getHours(),
      min:new Date().getMinutes(),
      m:new Date().getSeconds(),

    }
  },
  components:{
    Chart
  },

  mounted() {
    this.setMsg();
  },

  methods:{
    setMsg(){
      Event.$on('sendNew',payload=>{
      // console.log(payload);
      this.msg = payload;
      // console.log(this.msg);
    })
  }
  },
}
</script>