<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import {
  Check,
  ShieldCheck,
  Truck,
  Factory,
  Plus,
  Minus,
  ShoppingBag,
  ChevronRight,
} from 'lucide-vue-next'
import { PRODUCTS, formatNTD } from '../data/products'
import { useCartStore } from '../stores/cart'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()
const cart = useCartStore()

const product = computed(() => {
  return PRODUCTS.find((p) => p.slug === route.params.slug) || PRODUCTS[0]
})

const selectedImageIndex = ref(0)
const selectedVariant = ref(product.value.variants[0])
const quantity = ref(1)

watch(
  product,
  (newProd) => {
    selectedImageIndex.value = 0
    selectedVariant.value = newProd.variants[0]
    quantity.value = 1
  },
  { immediate: true }
)

const relatedProducts = computed(() =>
  PRODUCTS.filter((p) => p.id !== product.value.id).slice(0, 3)
)

function handleAddToCart() {
  cart.addItem(product.value, selectedVariant.value, quantity.value)
}
</script>

<template>
  <div class="w-full px-6 sm:px-12 lg:px-20 py-10 bg-white">
    <nav class="flex items-center gap-2 text-xs text-[#79726c] mb-8">
      <RouterLink to="/" class="hover:text-[#3c3c3c]">首頁</RouterLink>
      <ChevronRight class="w-3.5 h-3.5" />
      <RouterLink to="/shop" class="hover:text-[#3c3c3c]">全部商品</RouterLink>
      <ChevronRight class="w-3.5 h-3.5" />
      <span class="text-[#3c3c3c] font-bold">{{ product.name }}</span>
    </nav>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
      <div class="lg:col-span-7 space-y-4">
        <div class="aspect-4/3 rounded-3xl overflow-hidden bg-[#f5f5f5] border border-[#e5e7eb]">
          <img
            :src="product.images[selectedImageIndex] || product.images[0]"
            :alt="product.name"
            class="w-full h-full object-cover"
          />
        </div>

        <div v-if="product.images.length > 1" class="flex gap-3">
          <button
            v-for="(img, idx) in product.images"
            :key="idx"
            @click="selectedImageIndex = idx"
            class="w-24 aspect-4/3 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer"
            :class="selectedImageIndex === idx ? 'border-[#4a7c59]' : 'border-transparent opacity-60 hover:opacity-100'"
          >
            <img :src="img" :alt="product.name" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <div class="lg:col-span-5 space-y-6">
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <span
              v-if="product.badge"
              class="px-3 py-1 rounded-full bg-[#eef5f0] text-[#4a7c59] text-xs font-bold"
            >
              {{ product.badge }}
            </span>
            <span class="text-xs font-medium text-[#79726c]">{{ product.firmness }}</span>
          </div>

          <h1 class="text-2xl sm:text-3xl font-black text-[#3c3c3c]">{{ product.name }}</h1>
          <p class="text-sm text-[#79726c]">{{ product.subtitle }}</p>
        </div>

        <div class="text-3xl font-black text-[#3c3c3c]">
          {{ formatNTD(selectedVariant.price) }}
        </div>

        <p class="text-sm text-[#3c3c3c]/85 leading-relaxed">
          {{ product.description }}
        </p>

        <div class="space-y-3 pt-2">
          <div class="flex items-center justify-between text-xs">
            <span class="font-bold text-[#3c3c3c]">選擇規格尺寸</span>
            <span class="text-[#79726c]">尺寸：{{ selectedVariant.size }}</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              v-for="variant in product.variants"
              :key="variant.id"
              @click="selectedVariant = variant"
              class="p-3 rounded-2xl border text-left transition-all cursor-pointer"
              :class="
                selectedVariant.id === variant.id
                  ? 'border-[#4a7c59] bg-[#eef5f0] ring-1 ring-[#4a7c59]'
                  : 'border-[#e5e7eb] bg-white hover:border-[#79726c]'
              "
            >
              <div class="font-bold text-xs text-[#3c3c3c]">{{ variant.name }}</div>
              <div class="text-xs text-[#79726c] mt-0.5">{{ formatNTD(variant.price) }}</div>
            </button>
          </div>
        </div>

        <div class="flex items-center gap-3 pt-2">
          <div class="inline-flex items-center border border-[#e5e7eb] rounded-full bg-white px-2 py-1.5">
            <button
              @click="quantity = Math.max(1, quantity - 1)"
              class="p-2 hover:text-[#4a7c59] cursor-pointer"
              aria-label="減少數量"
            >
              <Minus class="w-4 h-4" />
            </button>
            <span class="px-4 text-sm font-bold">{{ quantity }}</span>
            <button
              @click="quantity++"
              class="p-2 hover:text-[#4a7c59] cursor-pointer"
              aria-label="增加數量"
            >
              <Plus class="w-4 h-4" />
            </button>
          </div>

          <button
            @click="handleAddToCart"
            class="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm font-bold transition-all cursor-pointer"
          >
            <ShoppingBag class="w-4 h-4" />
            <span>加入購物車・{{ formatNTD(selectedVariant.price * quantity) }}</span>
          </button>
        </div>

        <div class="bg-[#f5f5f5] rounded-2xl p-5 space-y-2.5 border border-[#e5e7eb]">
          <div
            v-for="(item, idx) in product.highlights"
            :key="idx"
            class="flex items-start gap-2.5 text-xs sm:text-sm text-[#3c3c3c]"
          >
            <Check class="w-4 h-4 text-[#4a7c59] shrink-0 mt-0.5" />
            <span>{{ item }}</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2 text-center pt-2">
          <div class="p-3 rounded-2xl bg-white border border-[#e5e7eb]">
            <Factory class="w-4 h-4 text-[#4a7c59] mx-auto mb-1" />
            <div class="text-xs font-bold text-[#3c3c3c]">台灣工廠現做</div>
          </div>
          <div class="p-3 rounded-2xl bg-white border border-[#e5e7eb]">
            <ShieldCheck class="w-4 h-4 text-[#4a7c59] mx-auto mb-1" />
            <div class="text-xs font-bold text-[#3c3c3c]">結構保固</div>
          </div>
          <div class="p-3 rounded-2xl bg-white border border-[#e5e7eb]">
            <Truck class="w-4 h-4 text-[#4a7c59] mx-auto mb-1" />
            <div class="text-xs font-bold text-[#3c3c3c]">免運・舊床回收</div>
          </div>
        </div>
      </div>
    </div>

    <section class="mt-16 pt-12 border-t border-[#e5e7eb]">
      <h2 class="text-xl font-black text-[#3c3c3c] mb-6">商品詳細規格</h2>
      <div class="bg-white rounded-3xl border border-[#e5e7eb] overflow-hidden">
        <div
          v-for="(spec, idx) in product.specs"
          :key="idx"
          class="grid grid-cols-1 sm:grid-cols-12 px-6 py-4 text-sm border-b last:border-b-0 border-[#f5f5f5]"
        >
          <div class="sm:col-span-3 font-bold text-[#79726c]">{{ spec.label }}</div>
          <div class="sm:col-span-9 text-[#3c3c3c] mt-1 sm:mt-0">{{ spec.value }}</div>
        </div>
      </div>
    </section>

    <section class="mt-16">
      <h2 class="text-xl font-black text-[#3c3c3c] mb-6">更多永吉推薦商品</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="item in relatedProducts" :key="item.id" :product="item" />
      </div>
    </section>
  </div>
</template>
