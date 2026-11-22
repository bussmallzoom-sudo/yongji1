<script setup>
import { RouterLink } from 'vue-router'
import { ShoppingBag } from 'lucide-vue-next'
import { formatNTD } from '../data/products'
import { useCartStore } from '../stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const cart = useCartStore()

function quickAdd() {
  const defaultVariant = props.product.variants[0]
  if (defaultVariant) {
    cart.addItem(props.product, defaultVariant, 1)
  }
}
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

      <div class="pt-3 border-t border-[#f5f5f5] flex items-center justify-between gap-2">
        <div>
          <span class="text-xs font-bold text-[#4a7c59]">{{ formatNTD(product.basePrice) }}</span>
        </div>

        <div class="flex items-center gap-2">
          <button
            @click="quickAdd"
            class="p-2.5 rounded-full bg-[#f5f5f5] hover:bg-[#4a7c59] text-[#3c3c3c] hover:text-white transition-colors cursor-pointer"
            title="快速加入購物車（預設規格）"
            aria-label="快速加入購物車"
          >
            <ShoppingBag class="w-4 h-4" />
          </button>
          <RouterLink
            :to="`/product/${product.slug}`"
            class="px-4 py-2 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-xs font-bold transition-colors"
          >
            選規格
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
</template>
