<template lang="">
    <div>
        <div>{{obj.name}}</div>
        <div>{{obj.age}}</div>
        <button @click="updateName">修改数据</button>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
    name:'App',
    setup() {
        // 普通数据
        // const obj = {
        //     name:'yama',
        //     age:18

        // }
        const obj = reactive({
            name:'yama',
            age:18
        })
        // 修改名字
        const updateName = ()=>{
            console.log('updateName')
            obj.name = 'zl',
            obj.age = 20
        }

        return {obj, updateName }
    }
}
</script>
<style lang="">
    
</style>