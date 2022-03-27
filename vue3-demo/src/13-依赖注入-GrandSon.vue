<template lang="">
  <div>
    <h2>孙组件{{money}}
    </h2>
    <hr >
    
  </div>
  
</template>
<script>
import { inject } from 'vue'

export default {
  name:"GrandSon",
  setup(){
    const money = inject('money')
    // 数据谁定义谁修改
    return {money}
  }
  
}
</script>
<style lang="">
  
</style>