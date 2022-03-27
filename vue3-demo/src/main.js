// 导入createApp函数从vue中
import { createApp } from 'vue'
// 创建一个根组件App.vue倒入至main
import App from './App.vue'
// 使用creteApp创建应用实例
const app = createApp(App)
    // 应用实例挂在到#app容器中


// vue2.0 Vue.mixin({全局混入的选项对象})
// vue3.0 app.mixin({全局混入的选项对象})
app.mixin({
    // 再任何组件 dom准备好的时候 打印一句话
    mounted() {
        console.log(this.$el, "dom准备好啦");
    }
})
app.mount('#app')