<template lang="">
  <div>
    <p>子组件{{modelValue}}<button @click="fn">改变数据</button></p>
  </div>
</template>
<script>
export default {
  name:'son',
  props:{
    modelValue:{
      type : Number,
      default:0
    }
  },
  setup(props,{emit}){
    const fn = ()=>{
      emit('update:modelValue',100)
    }
    return {fn}
  }
}
</script>
<style lang="">
  
</style>