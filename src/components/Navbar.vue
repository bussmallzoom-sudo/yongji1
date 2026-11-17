<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ShoppingBag, Search, Phone, Menu, X, ChevronDown, Store } from 'lucide-vue-next'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const route = useRoute()
const router = useRouter()
const mobileMenuOpen = ref(false)
const activeDropdown = ref(null)
const searchOpen = ref(false)
const searchKeyword = ref('')

function submitSearch() {
  const q = searchKeyword.value.trim()
  searchOpen.value = false
  if (q) {
    router.push({ path: '/shop', query: { q } })
  } else {
    router.push({ path: '/shop' })
  }
}

function handleKeydown(e) {
  if (e.key === 'Escape') {
    activeDropdown.value = null
    searchOpen.value = false
    mobileMenuOpen.value = false
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

// 僅保留 yongji.tw 真實擁有的產品分類項目（無內容項目暫時隱藏）
const navDropdowns = [
  {
    id: 'mattress',
    label: '床墊',
    items: [
      { name: '1085 強化硬式獨立筒', to: '/product/yongji-hard-1085', image: '/images/product-mattress.png' },
      { name: '黑武士獨立筒床墊', to: '/product/yongji-black-knight', image: '/images/hero-bedroom.png' },
      { name: '龍品二代乳膠床墊', to: '/product/yongji-longpin-2', image: '/images/product-mattress.png' },
      { name: '安心寶貝護脊床墊', to: '/product/yongji-anxin-baby', image: '/images/edge-reading.png' },
    ],
  },
  {
    id: 'bedding',
    label: '床包組',
    items: [
      { name: 'MIT 精製天絲床包組（昨日晴空）', to: '/product/yongji-tencel-sheets', image: '/images/product-pillow.png' },
      { name: '瀏覽全部寢具', to: '/shop?category=bedding', image: '/images/hero-bedroom.png' },
    ],
  },
  {
    id: 'youke',
    label: '優客床墊系列',
    items: [
      { name: '德國優客 GH-528', to: '/product/yongji-gh-528', image: '/images/hero-bedroom.png' },
      { name: '德國優客 GH-500 旗艦', to: '/product/yongji-gh-500', image: '/images/product-mattress.png' },
      { name: '美國伊麗絲 ES-科技床', to: '/product/yongji-iris-es', image: '/images/hero-bedroom.png' },
    ],
  },
]

const currentMenu = computed(() =>
  navDropdowns.find((m) => m.id === activeDropdown.value) || null
)

function closeMenus() {
  mobileMenuOpen.value = false
  activeDropdown.value = null
}
</script>

<template>
  <!-- 固定頂部 56px 純白導覽列，綠色強調色 -->
  <header
    class="fixed left-0 right-0 top-0 z-50 bg-white text-[#3c3c3c] font-light tracking-wide"
    @mouseleave="activeDropdown = null"
  >
    <div class="h-14 border-b border-[#e5e7eb] relative z-50 bg-white">
      <div class="w-full px-4 sm:px-8 lg:px-12 h-full flex items-center justify-between gap-4">
        <!-- 左側：森林綠立體床墊 Logo + 永吉床墊 -->
        <RouterLink
          to="/"
          @click="closeMenus"
          class="flex items-center gap-2 shrink-0"
        >
          <svg class="w-6 h-6 text-[#4a7c59]" viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M14 3L24 8.5V19.5L14 25L4 19.5V8.5L14 3Z" />
            <path d="M4 8.5L14 14L24 8.5" />
            <path d="M14 14V25" />
            <path d="M9 5.75L19 11.25" opacity="0.6" />
            <path d="M19 5.75L9 11.25" opacity="0.6" />
          </svg>
          <span class="text-base font-bold tracking-wider text-[#3c3c3c]">永吉床墊</span>
        </RouterLink>

        <!-- 中右：僅顯示有真實內容的導覽項目 -->
        <nav class="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-normal text-[#3c3c3c]">
          <RouterLink
            to="/shop"
            @click="closeMenus"
            @mouseenter="activeDropdown = null"
            class="inline-flex items-center gap-1 text-[#4a7c59] hover:text-[#3a6346] font-medium transition-colors"
          >
            <Store class="w-3.5 h-3.5" />
            <span>商店</span>
          </RouterLink>

          <div
            v-for="menu in navDropdowns"
            :key="menu.id"
            class="py-4"
            @mouseenter="activeDropdown = menu.id"
          >
            <button
              type="button"
              class="inline-flex items-center gap-0.5 hover:text-[#4a7c59] transition-colors cursor-pointer"
              :class="{ 'text-[#4a7c59] font-medium': activeDropdown === menu.id }"
            >
              <span>{{ menu.label }}</span>
              <ChevronDown
                class="w-3.5 h-3.5 text-[#79726c] transition-transform"
                :class="{ 'rotate-180': activeDropdown === menu.id }"
              />
            </button>
          </div>

          <RouterLink
            to="/about"
            @click="closeMenus"
            @mouseenter="activeDropdown = null"
            class="hover:text-[#4a7c59] transition-colors"
            :class="{ 'text-[#4a7c59] font-medium': route.path === '/about' }"
          >
            關於我們
          </RouterLink>
          <RouterLink
            to="/stores"
            @click="closeMenus"
            @mouseenter="activeDropdown = null"
            class="hover:text-[#4a7c59] transition-colors"
            :class="{ 'text-[#4a7c59] font-medium': route.path === '/stores' }"
          >
            聯絡我們・體驗門市
          </RouterLink>
        </nav>

        <!-- 最右側：電話聯絡、購物車、搜尋 -->
        <div class="flex items-center gap-3.5 shrink-0">
          <a
            href="tel:0229512738"
            class="p-1 text-[#3c3c3c] hover:text-[#4a7c59] transition-colors"
            title="撥打板橋門市 02-2951-2738"
            aria-label="電話聯絡"
          >
            <Phone class="w-[18px] h-[18px]" stroke-width="1.5" />
          </a>

          <button
            @click="cart.openDrawer"
            class="relative p-1 text-[#3c3c3c] hover:text-[#4a7c59] transition-colors cursor-pointer"
            aria-label="開啟購物車"
          >
            <ShoppingBag class="w-[18px] h-[18px]" stroke-width="1.5" />
            <span
              v-if="cart.totalCount > 0"
              class="absolute -top-1 -right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-[#4a7c59] text-white text-[10px] font-bold flex items-center justify-center"
            >
              {{ cart.totalCount }}
            </span>
          </button>

          <button
            type="button"
            @click="searchOpen = !searchOpen; activeDropdown = null"
            class="p-1 text-[#3c3c3c] hover:text-[#4a7c59] transition-colors cursor-pointer"
            aria-label="搜尋商品"
          >
            <Search class="w-[18px] h-[18px]" stroke-width="1.5" />
          </button>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-1 text-[#3c3c3c] cursor-pointer"
            aria-label="切換選單"
          >
            <X v-if="mobileMenuOpen" class="w-5 h-5" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- 頂部即時搜尋列 -->
    <transition name="fade">
      <div
        v-if="searchOpen"
        class="fixed left-0 right-0 top-14 z-40 bg-white border-b border-[#e5e7eb] shadow-md py-4 px-4 sm:px-8"
      >
        <form @submit.prevent="submitSearch" class="max-w-3xl mx-auto flex items-center gap-3">
          <Search class="w-4 h-4 text-[#79726c] shrink-0" />
          <input
            v-model="searchKeyword"
            type="text"
            autofocus
            placeholder="搜尋商品（例如：硬式獨立筒、乳膠、優客、天絲床包）..."
            class="flex-1 py-1.5 text-sm text-[#3c3c3c] bg-transparent focus:outline-none"
          />
          <button
            type="submit"
            class="px-5 py-1.5 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            搜尋
          </button>
          <button
            type="button"
            @click="searchOpen = false"
            class="p-1.5 text-[#79726c] hover:text-[#3c3c3c] cursor-pointer"
            aria-label="關閉搜尋"
          >
            <X class="w-4 h-4" />
          </button>
        </form>
      </div>
    </transition>

    <!-- 全寬圖片卡片式 Mega Menu -->
    <transition name="fade">
      <div
        v-if="currentMenu"
        class="hidden lg:block fixed left-0 right-0 top-14 z-40"
      >
        <div class="bg-white border-b border-[#e5e7eb] shadow-md py-7">
          <div class="max-w-[1200px] mx-auto px-6 flex items-start gap-6 overflow-x-auto no-scrollbar">
            <RouterLink
              v-for="item in currentMenu.items"
              :key="item.to"
              :to="item.to"
              @click="closeMenus"
              class="group w-36 shrink-0 space-y-2.5"
            >
              <div class="w-36 h-32 rounded-xl overflow-hidden bg-[#f5f5f5] border border-[#e5e7eb]">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div class="text-xs text-[#79726c] group-hover:text-[#4a7c59] transition-colors">
                {{ item.name }}
              </div>
            </RouterLink>
          </div>
        </div>
        <div
          @mouseenter="activeDropdown = null"
          class="h-screen w-full bg-white/60 backdrop-blur-md"
        ></div>
      </div>
    </transition>

    <!-- 手機版展開選單 -->
    <transition name="fade">
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-b border-[#e5e7eb] px-4 py-4 space-y-2 shadow-lg">
        <RouterLink to="/shop" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm text-[#4a7c59] font-medium">
          商店
        </RouterLink>
        <RouterLink to="/shop?category=mattress" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm">
          台灣製床墊
        </RouterLink>
        <RouterLink to="/shop?category=bedding" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm">
          精製床包組
        </RouterLink>
        <RouterLink to="/shop?category=youke" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm">
          優客床墊系列
        </RouterLink>
        <RouterLink to="/about" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm">
          關於我們
        </RouterLink>
        <RouterLink to="/stores" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm">
          聯絡我們・體驗門市
        </RouterLink>
      </div>
    </transition>
  </header>
  <div class="h-14"></div>
</template>
