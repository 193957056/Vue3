// 导入createApp函数从vue中
import { createApp } from 'vue'
// 创建一个根组件App.vue倒入至main
import App from './App.vue'
// 使用creteApp创建应用实例
const app = createApp(App)
    // 应用实例挂在到#app容器中
app.mount('#app')