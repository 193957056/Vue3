<template lang="">
  <div>
    <!-- 如果你想获取原生事件对象 -->
    <!-- 如果绑定事件函数 fn fn(e){e就是事件对象} -->
<!-- 如果绑定的是js表达式 此时提供一个默认的变量 $event  -->
    <h1 @click="$event">父组件{{count}}</h1>
    <hr>
    <!-- 如果你想获取原生事件对象 -->
    <!-- 如果绑定事件函数 fn fn(data){data触发自定义事件的传参} -->
    <!-- 如果绑定的是js表达式 此时 $event代表触发自定义事件的传参 -->
    <!-- <son :modelValue="count" @update:modelValue="count=$event"/> -->
    <son v-model="count"/>

  </div>
</template>
<script>
import son from './son.vue'
import {ref} from 'vue'
export default {
  name:'App',
  components:{
    son
  },
  setup(){
    const count = ref(0)
    return {count}
  }
}
</script>
<style lang="">
  
</style>