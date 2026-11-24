<script setup>
import { RouterLink } from 'vue-router'
import { MessageCircle } from 'lucide-vue-next'
import { LINE_URL, formatNTD } from '../data/products'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="group bg-white rounded-3xl border border-[#e5e7eb] overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <!-- 商品圖片區 -->
    <RouterLink :to="`/product/${product.slug}`" class="relative aspect-4/3 overflow-hidden bg-[#f5f5f5] block">
      <img
        :src="product.images[0]"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <span
        v-if="product.badge"
        class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#4a7c59] text-xs font-bold shadow-xs"
      >
        {{ product.badge }}
      </span>
    </RouterLink>

    <!-- 商品資訊區 -->
    <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
      <div>
        <div class="text-xs text-[#79726c] mb-1.5">
          <span>{{ product.firmness }}</span>
        </div>

        <RouterLink :to="`/product/${product.slug}`" class="block">
          <h3 class="text-lg font-bold text-[#3c3c3c] group-hover:text-[#4a7c59] transition-colors">
            {{ product.name }}
          </h3>
        </RouterLink>
        <p class="text-xs text-[#79726c] mt-1 line-clamp-2 leading-relaxed">
          {{ product.subtitle }}
        </p>
      </div>

      <div class="pt-3 border-t border-[#f5f5f5] flex flex-wrap items-center justify-between gap-2">
        <span class="text-xs font-bold text-[#4a7c59]">{{ formatNTD(product.basePrice) }}</span>

        <div class="flex items-center gap-2">
          <a
            :href="LINE_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-xs font-bold transition-colors"
          >
            <MessageCircle class="w-3.5 h-3.5" />
            <span>LINE 問這張床</span>
          </a>
          <RouterLink
            :to="`/product/${product.slug}`"
            class="px-3.5 py-2 rounded-full bg-[#f5f5f5] hover:bg-[#eef5f0] text-[#3c3c3c] hover:text-[#4a7c59] text-xs font-bold transition-colors"
          >
            看介紹
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
</template>
