import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import TrialView from '../views/TrialView.vue'
import StoresView from '../views/StoresView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '永吉床墊｜闆娘幫你選床｜永和中正店' },
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
      meta: { title: '展示床款｜永吉床墊｜永和中正店' },
    },
    {
      path: '/product/:slug',
      name: 'product-detail',
      component: ProductDetailView,
      meta: { title: '床款介紹｜永吉床墊｜永和中正店' },
    },
    {
      path: '/about',
      name: 'about',
      component: TrialView,
      meta: { title: '認識闆娘｜永吉床墊｜永和中正店' },
    },
    {
      path: '/stores',
      name: 'stores',
      component: StoresView,
      meta: { title: '聯絡我們・永和中正店｜永吉床墊' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
