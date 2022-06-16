import { createApp, onMounted } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('drag', {
  mounted (el, binding) {
    el.onmousedown = (mouse) => {
      console.log(mouse)
      // 鼠标按下的位置
      const mouseXStart = mouse.clientX
      const mouseYStart = mouse.clientY
      console.log("按下开始", mouseXStart, mouseYStart)
      // 当前滑块位置
      const rectLeft = el.offsetLeft
      const rectTop = el.offsetTop
      document.onmousemove = (e) => {
        // 鼠标移动的位置
        const mouseXEnd = e.clientX
        const mouseYEnd = e.clientY
        const moveX = mouseXEnd - mouseXStart + rectLeft
        const moveY = mouseYEnd - mouseYStart + rectTop
        console.log(rectLeft, rectTop)
        el.style["top"] = moveY + "px"
        el.style["left"] = moveX + "px"
      }
      document.onmouseup = () => {
        console.log("鼠标抬起")
        // 取消事件
        document.onmousemove = null
      }
    }


  }
})
app.mount('#app')
