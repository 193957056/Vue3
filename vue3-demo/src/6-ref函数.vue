<template lang="">
    <div>
        <div>{{name}}</div>
        <div>{{age}}</div>
        <button @click="updateName">修改数据</button>
    </div>
</template>
<script>
import {ref} from 'vue'
export default {
    name:'App',
    setup() {
        const name = ref('yama')
        console.log(name);
        const age = ref(19)
        console.log(age);
const updateName = ()=>{
name.value = 'zl'
}
        return {name,age,updateName}
    }
    // ref常用于定义简单数据类型的响应式数据
    // 其实也可以定义复杂类型的响应式数据
}
</script>
<style lang="">
    
</style>