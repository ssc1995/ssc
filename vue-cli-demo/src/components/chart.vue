<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <p>{{date}}</p>
    <el-button type="warning" plain @click="change">警告按钮</el-button>
  </div>
</template>
<script>

export default {
  name: 'hello',
  props:{
    date:Number,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // date1:0
    }
  },
  mounted(){
    this.drawLine();
    console.log(this);
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
    },
    change() {
      console.log(this.date)
    }
  },
}
</script>