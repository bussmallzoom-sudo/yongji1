<script setup>
import { PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard.vue'
</script>

<template>
  <div class="w-full px-6 sm:px-12 lg:px-20 py-12 bg-white">
    <div class="bg-[#f5f5f5] rounded-3xl p-8 sm:p-10 mb-10 border border-[#e5e7eb]">
      <span class="text-xs font-bold tracking-widest text-[#4a7c59]">YGBED SHOWROOM</span>
      <h1 class="text-3xl sm:text-4xl font-black text-[#3c3c3c] mt-1">永吉床墊・展示床款一覽</h1>
      <p class="text-sm text-[#79726c] mt-2">
        先看三張主力床款示範比較節奏；實際展示與當期報價，歡迎透過 LINE（h668899）詢問闆娘或預約永和中正店試躺。
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="product in PRODUCTS" :key="product.id" :product="product" />
    </div>
  </div>
</template>
