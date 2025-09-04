// 引用的不再是vue构造函数,而是一个名为createApp的工厂函数---无需new 直接调用
import { createApp } from 'vue'
import App from './App.vue'
// 类似于之前vue2中的vm,但app比vm更轻量
createApp(App).mount('#app')


// 还可以挂载欸
// setTimeout(() => {
//     App.unmounted('#app')
// }, 3000);



// const vm = new VueElement({
//     render: () => h(App)
// })
// vm.$mount('#app')