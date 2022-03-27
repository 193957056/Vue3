<template lang="">
    <div>
        <div>坐标</div>
        <div>x:{{x}}</div>
        <div>y:{{y}}</div>
        <hr>
         <div>{{count}} <button @click="add">累加1</button></div>
    </div>
</template>
<script>
import { reactive,onMounted,toRefs, onUnmounted,ref } from 'vue'
const useMouse = ()=>{
    // 1.记录鼠标坐标
        // 1.1 申明一个响应式数据，他是一个对象，包含x y

        const mouse = reactive({
            x:0,
            y:0
        })
        // 修改响应式数据
        const move = (e)=>{
            // console.log(e.pageX);
            // console.log(e.pageY);
            mouse.x = e.pageX
            mouse.y = e.pageY
        
        
    }
    // 1.2 等dom渲染完毕 去监听事件
    onMounted(() => {
            document.addEventListener('mousemove',move)
            
        })
        // 1.4 组建消耗，删除组件
        onUnmounted(() => {
            document.removeEventListener('mousemove',move)
            
        })
        return mouse 
}
export default {
    name:'App',
    setup() {
        const mouse = useMouse()

        // 2.数字累加
        const count = ref(0)
        const add = ()=>{
            count.value ++
        }




        return {...toRefs(mouse),add,count}
    }
}
</script>
<style lang="">
    
</style>