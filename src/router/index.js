import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import TrialView from '../views/TrialView.vue'
import StoresView from '../views/StoresView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: '永吉' },
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
      meta: { title: '全部商品｜永吉' },
    },
    {
      path: '/product/:slug',
      name: 'product-detail',
      component: ProductDetailView,
      meta: { title: '商品詳情｜永吉' },
    },
    {
      path: '/about',
      name: 'about',
      component: TrialView,
      meta: { title: '關於我們｜永吉' },
    },
    {
      path: '/stores',
      name: 'stores',
      component: StoresView,
      meta: { title: '聯絡我們・板橋門市｜永吉' },
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
