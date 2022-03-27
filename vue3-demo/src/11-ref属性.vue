<template lang="">
  <div>
    <!-- vue2.0 获取单个元素 -->
    <!-- 1.通过ref属性绑定该元素 -->
    <!-- 2.通过this.$refs.box获取元素 -->
    <!-- <div ref="box">我是box</div> -->
    <!-- vue2.0 获取v-for便利的多个元素 -->
    <!-- 1.通过ref属性绑定被遍历元素 -->
    <!-- 2.通过this.$refs.li获取所有遍历元素 -->
    <!-- <ul>
        <li v-for="i in 4" :key="i" ref="li">{{i}}</li>
    </ul> -->

<!-- 单个元素 -->
    <div ref="box">我是box</div>
    <!-- 被遍历的元素 -->
    <ul>
        <li v-for="i in 4" :key="i" :ref="setDom">第{{i}}个</li>
    </ul>

  </div>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  name: "App",
  setup() {
    //   1。获取单个元素
    //   1.1先定义一个空的响应式数据ref定义的
    // 1.2setup中返回该数据，你想获取那个dom元素，在该元素上使用ref属性绑定该数据
    const box = ref(null);
    onMounted(() => {
    //   console.log(box.value);
    });

// 2.获取v-for遍历的元素
// 2.1 定义一个空数组，接受所有的li
// 2.2 定义一个函数，往空数组push DOM
const domList = []
const setDom = (el)=>{
    console.log(el);
    domList.push(el)
   
    
}
 console.log(domList);
    return { box,setDom };
  },
};
</script>
<style lang="">
</style>