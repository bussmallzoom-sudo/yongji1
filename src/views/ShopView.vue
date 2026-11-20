<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search, SlidersHorizontal } from 'lucide-vue-next'
import { PRODUCTS, CATEGORIES } from '../data/products'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()
const router = useRouter()

const activeCategory = ref(route.query.category || 'all')
const searchQuery = ref(route.query.q || '')
const sortBy = ref('featured')

watch(
  () => [route.query.category, route.query.q],
  ([newCat, newQ]) => {
    activeCategory.value = newCat || 'all'
    if (typeof newQ === 'string') {
      searchQuery.value = newQ
    }
  }
)

function selectCategory(catId) {
  activeCategory.value = catId
  if (catId === 'all') {
    router.replace({ path: '/shop' })
  } else {
    router.replace({ path: '/shop', query: { category: catId } })
  }
}

const filteredProducts = computed(() => {
  let list = [...PRODUCTS]

  if (activeCategory.value !== 'all') {
    list = list.filter((p) => p.category === activeCategory.value)
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    )
  }

  if (sortBy.value === 'price-asc') {
    list.sort((a, b) => a.basePrice - b.basePrice)
  } else if (sortBy.value === 'price-desc') {
    list.sort((a, b) => b.basePrice - a.basePrice)
  }

  return list
})
</script>

<template>
  <div class="w-full px-6 sm:px-12 lg:px-20 py-12 bg-white">
    <div class="bg-[#f5f5f5] rounded-3xl p-8 sm:p-10 mb-10 border border-[#e5e7eb]">
      <span class="text-xs font-bold tracking-widest text-[#4a7c59]">YGBED STORE</span>
      <h1 class="text-3xl sm:text-4xl font-black text-[#3c3c3c] mt-1">永吉床墊・全館商品</h1>
      <p class="text-sm text-[#79726c] mt-2">
        100% 台灣工廠直營，誠信品質、價格透明。除少數偏遠地區外皆享免運費、四樓以下免樓層費。
      </p>
    </div>

    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
      <div class="flex flex-wrap gap-2">
        <button
          v-for="cat in CATEGORIES"
          :key="cat.id"
          @click="selectCategory(cat.id)"
          class="px-4 py-2 rounded-full text-sm font-bold transition-all cursor-pointer"
          :class="
            activeCategory === cat.id
              ? 'bg-[#4a7c59] text-white shadow-sm'
              : 'bg-white border border-[#e5e7eb] text-[#79726c] hover:text-[#3c3c3c] hover:border-[#4a7c59]'
          "
        >
          {{ cat.name }}
        </button>
      </div>

      <div class="flex flex-wrap sm:flex-nowrap items-center gap-3">
        <div class="relative flex-1 sm:w-60">
          <Search class="w-4 h-4 text-[#79726c] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜尋獨立筒、乳膠、優客、床包..."
            class="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-[#e5e7eb] text-sm focus:outline-none focus:border-[#4a7c59]"
          />
        </div>

        <div class="inline-flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-full px-3.5 py-2">
          <SlidersHorizontal class="w-4 h-4 text-[#79726c]" />
          <select
            v-model="sortBy"
            class="text-sm font-medium text-[#3c3c3c] bg-transparent focus:outline-none cursor-pointer"
          >
            <option value="featured">推薦排序</option>
            <option value="price-asc">價格：低到高</option>
            <option value="price-desc">價格：高到低</option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>

    <div v-else class="text-center py-20 bg-[#f5f5f5] rounded-3xl border border-[#e5e7eb] space-y-3">
      <p class="text-lg font-bold text-[#3c3c3c]">找不到符合條件的商品</p>
      <p class="text-sm text-[#79726c]">試著清除搜尋關鍵字或切換其他分類看看吧。</p>
      <button
        @click="searchQuery = ''; selectCategory('all')"
        class="mt-2 px-5 py-2 rounded-full bg-[#4a7c59] text-white text-sm font-bold cursor-pointer"
      >
        顯示全部商品
      </button>
    </div>
  </div>
</template>
