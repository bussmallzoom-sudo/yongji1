<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import {
  Check,
  MessageCircle,
  MapPin,
  Sparkles,
  ChevronRight,
} from 'lucide-vue-next'
import { PRODUCTS, LINE_URL, formatNTD } from '../data/products'
import ProductCard from '../components/ProductCard.vue'

const route = useRoute()

const product = computed(() => {
  return PRODUCTS.find((p) => p.slug === route.params.slug) || PRODUCTS[0]
})

const selectedImageIndex = ref(0)
const selectedVariant = ref(product.value.variants[0])

watch(
  product,
  (newProd) => {
    selectedImageIndex.value = 0
    selectedVariant.value = newProd.variants[0]
  },
  { immediate: true }
)

const relatedProducts = computed(() =>
  PRODUCTS.filter((p) => p.id !== product.value.id).slice(0, 3)
)
</script>

<template>
  <div class="w-full px-6 sm:px-12 lg:px-20 py-10 bg-white">
    <nav class="flex items-center gap-2 text-xs text-[#79726c] mb-8">
      <RouterLink to="/" class="hover:text-[#3c3c3c]">首頁</RouterLink>
      <ChevronRight class="w-3.5 h-3.5" />
      <RouterLink to="/shop" class="hover:text-[#3c3c3c]">展示床款</RouterLink>
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

        <div class="text-xl sm:text-2xl font-black text-[#4a7c59]">
          {{ formatNTD(selectedVariant.price) }}
        </div>

        <p class="text-sm text-[#3c3c3c]/85 leading-relaxed">
          {{ product.description }}
        </p>

        <div class="space-y-3 pt-2">
          <div class="flex items-center justify-between text-xs">
            <span class="font-bold text-[#3c3c3c]">常見尺寸參考</span>
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
              <div class="text-xs text-[#79726c] mt-0.5">{{ variant.size }}</div>
            </button>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a
            :href="LINE_URL"
            target="_blank"
            rel="noopener"
            class="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm font-bold transition-all"
          >
            <MessageCircle class="w-4 h-4" />
            <span>LINE 問闆娘／預約試躺</span>
          </a>
          <RouterLink
            to="/stores"
            class="py-3.5 px-6 rounded-full bg-[#f5f5f5] hover:bg-[#e5e6e0] text-[#3c3c3c] text-sm font-bold transition-colors"
          >
            門市位置
          </RouterLink>
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
            <MessageCircle class="w-4 h-4 text-[#4a7c59] mx-auto mb-1" />
            <div class="text-xs font-bold text-[#3c3c3c]">先聊感受再試躺</div>
          </div>
          <div class="p-3 rounded-2xl bg-white border border-[#e5e7eb]">
            <MapPin class="w-4 h-4 text-[#4a7c59] mx-auto mb-1" />
            <div class="text-xs font-bold text-[#3c3c3c]">永和中正店體驗</div>
          </div>
          <div class="p-3 rounded-2xl bg-white border border-[#e5e7eb]">
            <Sparkles class="w-4 h-4 text-[#4a7c59] mx-auto mb-1" />
            <div class="text-xs font-bold text-[#3c3c3c]">以門市報價為準</div>
          </div>
        </div>
      </div>
    </div>

    <section class="mt-16 pt-12 border-t border-[#e5e7eb]">
      <h2 class="text-xl font-black text-[#3c3c3c] mb-6">床款說明與試躺重點</h2>
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
      <h2 class="text-xl font-black text-[#3c3c3c] mb-6">其他展示床款</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard v-for="item in relatedProducts" :key="item.id" :product="item" />
      </div>
    </section>
  </div>
</template>
