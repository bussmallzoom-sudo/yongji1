<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Phone, Menu, X, ChevronDown, Store, MessageCircle } from 'lucide-vue-next'
import { LINE_URL, STORE_PHONE_TEL } from '../data/products'

const route = useRoute()
const mobileMenuOpen = ref(false)
const activeDropdown = ref(null)

// 展示床款清單（名稱待確認後更新）
const navDropdowns = [
  {
    id: 'mattress',
    label: '主力床墊',
    items: [
      { name: '01 精選展示床款', to: '/product/yongji-model-01', image: '/images/milo.jpg' },
      { name: '02 精選展示床款', to: '/product/yongji-model-02', image: '/images/venus.jpg' },
      { name: '03 精選展示床款', to: '/product/yongji-model-03', image: '/images/sleep-elf.jpg' },
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

function handleKeydown(e) {
  if (e.key === 'Escape') {
    activeDropdown.value = null
    mobileMenuOpen.value = false
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <!-- 固定頂部 56px 純白導覽列，Y 字永吉標誌＋拿掉購物車與搜尋 -->
  <header
    class="fixed left-0 right-0 top-0 z-50 bg-white text-[#3c3c3c] font-light tracking-wide"
    @mouseleave="activeDropdown = null"
  >
    <div class="h-14 border-b border-[#e5e7eb] relative z-50 bg-white">
      <div class="w-full px-4 sm:px-8 lg:px-12 h-full flex items-center justify-between gap-4">
        <!-- 左側：永吉 Y 字森綠標誌 + 永吉床墊 -->
        <RouterLink
          to="/"
          @click="closeMenus"
          class="flex items-center gap-2.5 shrink-0"
        >
          <span class="w-7 h-7 rounded-lg bg-[#4a7c59] text-white font-black text-sm flex items-center justify-center">
            Y
          </span>
          <span class="text-base font-bold tracking-wider text-[#3c3c3c]">永吉床墊</span>
        </RouterLink>

        <!-- 中間：導覽項目 -->
        <nav class="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-normal text-[#3c3c3c]">
          <RouterLink
            to="/shop"
            @click="closeMenus"
            @mouseenter="activeDropdown = null"
            class="inline-flex items-center gap-1 text-[#4a7c59] hover:text-[#3a6346] font-medium transition-colors"
          >
            <Store class="w-3.5 h-3.5" />
            <span>展示床款</span>
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
            認識闆娘
          </RouterLink>
          <RouterLink
            to="/stores"
            @click="closeMenus"
            @mouseenter="activeDropdown = null"
            class="hover:text-[#4a7c59] transition-colors"
            :class="{ 'text-[#4a7c59] font-medium': route.path === '/stores' }"
          >
            永和中正店
          </RouterLink>
        </nav>

        <!-- 最右側：電話撥號 + 「LINE 問闆娘」按鈕（已移除購物車與搜尋圖示） -->
        <div class="flex items-center gap-3 shrink-0">
          <a
            :href="STORE_PHONE_TEL"
            class="p-1.5 text-[#3c3c3c] hover:text-[#4a7c59] transition-colors"
            title="撥打永和中正店 02-8941-4197"
            aria-label="電話聯絡"
          >
            <Phone class="w-[18px] h-[18px]" stroke-width="1.6" />
          </a>

          <a
            :href="LINE_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-xs font-bold transition-colors"
          >
            <MessageCircle class="w-3.5 h-3.5" />
            <span>LINE 問闆娘</span>
          </a>

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
          全部展示床款
        </RouterLink>
        <RouterLink to="/product/yongji-model-01" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm">
          01 精選展示床款
        </RouterLink>
        <RouterLink to="/product/yongji-model-02" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm">
          02 精選展示床款
        </RouterLink>
        <RouterLink to="/product/yongji-model-03" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm">
          03 精選展示床款
        </RouterLink>
        <RouterLink to="/about" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm">
          認識闆娘
        </RouterLink>
        <RouterLink to="/stores" @click="closeMenus" class="block px-3 py-2 rounded-lg hover:bg-[#f5f5f5] text-sm">
          永和中正店
        </RouterLink>
      </div>
    </transition>
  </header>
  <div class="h-14"></div>
</template>
