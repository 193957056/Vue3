<template lang="">
  <div>
        <h1>子组件</h1>
        <h1>{{money}}</h1>
        <button @click="changeMoney">花钱50</button>
        
  </div>
</template>
<script>
import {onMounted} from 'vue'
export default {
  name:"Son",
  // 子组件接受父组件数据使用props即可
  props:{
    money:{
      type:Number,
      default:0
    }
  },
  // props 父组件数据
  // emit触发自定义事件的函数
  setup(props, {emit}){
    // 获取父组件数据money
    console.log(props.money)
    // onMounted(() => {
    //   console.log(props.money)
    // });
    const changeMoney = ()=>{
      // 消费50元
      // 通知父组件，money需要变成50
    emit('update:money',50)
    }

    return {changeMoney}
  }
}
</script>
<style lang="">
  
</style>