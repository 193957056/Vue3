<template lang="">
  <div>
    <h2>子组件{{money}}<button @click="fn">消费20</button>
    </h2>

    <hr >
    <GrandSon/>
  </div>
  
</template>
<script>
import { inject } from 'vue'
import GrandSon from './GrandSon.vue'
export default {
  name:"Son",
  components:{
    GrandSon
  },
  setup(){
    // 接受祖先组件提供的数据
  const money = inject('money')
  const changeMoney = inject('changeMoney')
  const fn = ()=>{
    changeMoney(20)
  }
  
    return {money,changeMoney,fn}
  }
}
</script>
<style lang="">
  
</style>