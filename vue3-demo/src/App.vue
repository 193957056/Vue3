<template lang="">
  <div>
     <h2>父组件{{money}} <button @click="money=1000">发钱</button>
    </h2>
    
    <hr >
    <Son />
  </div>
</template>
<script>
import { provide,ref } from "vue";
import Son from "./Son.vue";
export default {
  name: "App",
  components: {
    Son,
  },
  setup() {
    const money = ref(100)
    const changeMoney = (saleMoney)=>{
        console.log('changeMoney',saleMoney);
        money.value = money.value - saleMoney
    }
    // 将数据提供给后代组件 provide
    provide("money", money);
    provide("changeMoney", changeMoney);


    return { money,changeMoney };
  },
};
</script>
<style lang="">
</style>