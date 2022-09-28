import { createApp, onMounted } from 'vue'
import App from './App.vue'
import { checkArray } from './check';
const app = createApp(App)

app.directive("permission", {
  mounted (el, binding) {
    let permission = binding.value // 获取到 v-permission的值
    console.log(permission);
    if (permission) {
      let hasPermission = checkArray(permission)
      if (!hasPermission) { // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
});

app.mount('#app')
