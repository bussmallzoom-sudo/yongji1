import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style.css'

const app = createApp(App)

/**
 * 輕量捲動進場動畫指令 v-reveal
 */
app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal-init')
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal-active')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('reveal-active')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    observer.observe(el)
  },
})

app.use(createPinia())
app.use(router)
app.mount('#app')
