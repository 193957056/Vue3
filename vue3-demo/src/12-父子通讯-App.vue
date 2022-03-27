<template lang="">
  <div>
        <h1>父组件</h1>
        <h1>{{money}}</h1>

        <hr>
        <!-- <Son :money="money" @change-Money="updateMoney"/> -->
        <Son v-model:money="money"/>
        
  </div>
</template>
<script>
import Son from './Son.vue'
import {ref} from 'vue'
export default {
  name:"App",
  components:{
      Son
  },
//   父组件的数据传递给子组件
setup(){
    const money = ref(100)
    
    const updateMoney = (newMoney) =>{
        console.log(newMoney);
        money.value = newMoney
    }



    return {money,updateMoney}

}
}
</script>
<style lang="">
  
</style>