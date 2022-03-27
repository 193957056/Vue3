<template lang="">
    <div>
    <div>今年：{{age}}</div>
    <div>后年：{{newAge}}</div>
    <!-- 使用v-model绑定计算属性 -->
    <input type='text' v-model="newAge">
    </input>
    </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  name: "App",
  setup() {
    // 1.计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到一个新的数据
    const age = ref(16);
    // const newAge = computed(()=>{
    //     // 该函数的返回值就是计算属性的值
    //     return age.value+2
    // })

    // 计算属性高级用法
    const newAge = computed({
      // get函数，获取计算属性的值
      get() {
        return age.value + 2;
      },
      //   set函数，当你给计算属性设置值当时候触发
      set(value) {
        // console.log(value);
        age.value = value - 2
      },
    });

    return { age, newAge };
  },
};
</script>
<style lang="">
</style>