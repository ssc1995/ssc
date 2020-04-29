<template>
    <div>
        <p class="myColor">这是我的个人中心</p>
        <button @click="gotoMine">点击修改样式</button>
        <p>{{num | myMoney}}</p>
        <transition>
        </transition>
        <p>{{item}}</p>
        <p class="bb" :class=" {aa:isRed} ">修改样式的地方</p>

        <p>{{anglar}}</p>
        <input type="text" :value="anglar" @input="change"/>
        <p>
        </p>
        <ul>
            <audio :src="changeSrc" autoplay controls></audio>
            <li v-for="(item,index) in list" :key='item.id' :class="{active:index==listIndex}" @click="changeColor(index)">
                <h2>{{item.id}} -- {{item.name}}</h2>
            </li>
        </ul>
        <div>
            <button @click="changeArr">点击翻转数组</button>
            <ul>
                <li v-for="item in arr" :key="item.name">
                    <h3>{{item.name}} -- {{item.city}}</h3>
                </li>
            </ul>
            <h1>{{numb}}</h1>
        </div>
    </div>

</template>
<script>

var list  = [
    {id:1,name:'张国荣',songSrc:'../../static/pubilc/01.mp3'},
    {id:2,name:'刘德华',songSrc:'../../static/pubilc/02.mp3'},
    {id:3,name:'胡彦兵',songSrc:'../../static/pubilc/03.mp3'},
]


// import Head from "@/components/Head"
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
export default {
    data(){
        return{
            msg:"我要去汉萨",
            num:12,
            item:'',
            isRed:false,
            anglar:'Holleworld',
            list,
            listIndex:0,
            Timer:null, // 定时器的名称
        }    
    },
    components:{
        // Head,
    },
    computed:{  // computed函数默认只有getter方法  
                // 通过对changeSrc的监听来实现src的路径切换 
                // return会把得到的数自动
                // 填充到 changeSrc中
        changeSrc() {
            console.log(this.list[this.listIndex].songSrc)
            return this.list[this.listIndex].songSrc;
        },
        ...mapState(['arr','numb'])

    },

    mounted() {
    },

    methods:{
        gotoMine() {
            this.isRed = !this.isRed,
            // this.$router.push('/home')
            console.log(this.isRed)
        },
        parentFn(payload){
            this.item = payload;
        },
        getNum(){
            this.num++;
        },
        change(e) {
            this.anglar = e.target.value
        },
        changeColor(index){
            // this.listIndex = index;
            setTimeout(() => {  // 在vue中设置定时器  
                this.listIndex = index;
            }, 1000);
        },

        changeArr(){
            console.log(this.arr)
            this.$store.commit('changName',100);
        }
        
    },
    filters:{  // 过滤器 在要渲染的参数上面进行一系列的操作
        myMoney(value) {
            return "$" + value;
        }
    },
    mounted(){
          this.Timer =  setInterval(()=> { // 设置计时器 // 每间隔一秒钟  num+1
            this.num++;
        },1000)
    },
    updated() {
        console.log(this.num);
        if(this.num == 20){
            clearInterval(this.Timer);
        }

    },
    destroyed() {
        
    }
}
</script>
<style scoped>
*{
    padding:0;
    margin:0;
}
li{
    list-style: none;
}

.myColor{
    color:red;
    /* background-color:pink; */
}
.bb{
    color: royalblue;
}
.aa{
    color: greenyellow;
}
.active{
    background-color: greenyellow;
    color: coral;
}
</style>
