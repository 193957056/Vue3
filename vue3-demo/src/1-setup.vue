<template>
  <div>
    <h1 @click="say()">{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: "App",
  // 1.组合API的起点，将来的组合API的代码，基本上再这里写
  // 2.setup执行速度是在beforeCreate钩子执行前执行，组建实例创建前
  // 3.函数中不能使用this ==> undefined
  // 4.模版中需要使用的数据和函数，需要在setup中返回
  setup() {
    console.log("setup", this);
    // 数据
    const msg = "hi vue3";
    // 方法
    const say =()=>{
        console.log('hi vue3');
    }
    return { msg ,say};
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
};
</script>
<style lang="">
</style>