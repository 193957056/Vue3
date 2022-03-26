<template lang="">
    <div class="container">
        <div>{{name}}</div>
        <div>{{age}}</div>
        <button @click="updateName">修改数据</button>
    </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    const obj = reactive({
      name: "yama",
      age: 10,
    });
    // 结构或者展开响应式数据对象
    // const {name,age} = obj
    // console.log(name,age);
    // const obj2 = {...obj}
    // console.log(obj2);
    // 以上方式导致数据就不是响应式数据了
    const obj3 = toRefs(obj)
    console.log(obj3);
    const updateName = ()=>{
        // obj3.name.value = 'zl'
        obj.name = 'zl'
    }
    return { ...obj3,updateName };
  },
};
</script>
<style lang="">
</style>