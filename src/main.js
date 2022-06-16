import { createApp, onMounted } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.directive('lazy', {
  mounted (el, binding) {
    var observer = new IntersectionObserver(e => {
      console.log(e)
      if (e[0].isIntersecting) {
        el.src = binding.value
        console.log(el.src)
        observer.unobserve(el)
      }
    })
    observer.observe(el)
  }
})

app.mount('#app')
