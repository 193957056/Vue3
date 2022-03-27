<template lang="">
  <div>
    <p>{{count}}</p>
    <button @click="add">改数据
    </button>
<hr>
     <p>{{obj.name}}</p>
     <p>{{obj.age}}</p>
     <p>{{obj.brand.name}}</p>


    <button @click="addAge">增加年龄
    </button>
     <button @click="updateBrandName">修改品牌的名字
    </button>
  </div>
</template>
<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "App",
  setup() {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    const obj = reactive({
      name: "yama",
      age: 19,
      brand:{
          id:1,
          name:'宝马'
      }
    });
    const addAge  = ()=>{
        obj.age++;
    }
    const updateBrandName = ()=>{
        obj.brand.name = '奔驰'
    }

    // 当你需要监听数据的变化 就可以使用watch
    // 1.监听一个ref数据
    // 1.1 第一个参数 需要监听的目标
    // 1.2 第二个参数 改变后触发的函数
    // watch(count, (newVal, oldVal) => {
    //   console.log("新值" + newVal, "旧值" + oldVal);
    // });

    // 2.监听一个reactive数据
    watch(obj, (newVal, oldVal) => {
    //   console.log("新值" + newVal.age, "旧值" + oldVal.age);
        console.log('监听数据改变了');

    },{
        // 深度监听
        deep:true,
        // 默认执行
        immediate:true
    });
    watch(()=>obj.brand,()=>{
        console.log('122监听数据改变了');

    },{
        deep:true
    })

    // 3.监听多个数据的变化
    // watch([count,obj],()=>{
    //     console.log('监听多个数据的改变');
    // })

    // 4.监听对象中某一个属性的变化 例如 obj.age
    // 需要写成函数返回该属性的方法才能监听到
    // watch(()=>obj.age,()=>{
    //     console.log('监听age的改变');
    // })

    

    return { add, count ,obj,addAge,updateBrandName};
  },
};
</script>
<style lang="">
</style>