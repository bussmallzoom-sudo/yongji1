<script setup>
import { RouterLink } from 'vue-router'
import { MapPin, Phone } from 'lucide-vue-next'
import { LINE_URL, STORE_ADDRESS, STORE_MAP_URL, STORE_PHONE_DISPLAY, STORE_PHONE_TEL } from '../data/products'
</script>

<template>
  <!-- 淺灰暖底頁尾，顯示永吉床墊永和中正店資訊 -->
  <footer class="bg-[#eae8e4] text-[#3c3c3c] py-16">
    <div class="w-full px-6 sm:px-12 lg:px-20">
      <div class="grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-[#d4d0c8]">
        <!-- 品牌簡介 -->
        <div class="col-span-2 md:col-span-4 space-y-3">
          <div class="text-lg font-bold tracking-tight text-[#3c3c3c]">永吉床墊 YGBED</div>
          <p class="text-xs sm:text-sm text-[#79726c] leading-relaxed max-w-xs">
            永吉床墊永和中正店，以「誠信、專業、服務」為核心，闆娘一對一陪你選床，到店實際試躺再決定。
          </p>
        </div>

        <!-- 主力展示床款 -->
        <div class="col-span-1 md:col-span-2 space-y-2.5 text-sm">
          <div class="font-bold text-[#3c3c3c]">展示床款</div>
          <ul class="space-y-2 text-xs sm:text-sm text-[#79726c]">
            <li><RouterLink to="/product/yongji-model-01" class="hover:text-[#4a7c59]">01 精選展示床款</RouterLink></li>
            <li><RouterLink to="/product/yongji-model-02" class="hover:text-[#4a7c59]">02 精選展示床款</RouterLink></li>
            <li><RouterLink to="/product/yongji-model-03" class="hover:text-[#4a7c59]">03 精選展示床款</RouterLink></li>
          </ul>
        </div>

        <!-- 品牌與服務 -->
        <div class="col-span-1 md:col-span-2 space-y-2.5 text-sm">
          <div class="font-bold text-[#3c3c3c]">品牌資訊</div>
          <ul class="space-y-2 text-xs sm:text-sm text-[#79726c]">
            <li><RouterLink to="/about" class="hover:text-[#4a7c59]">認識闆娘</RouterLink></li>
            <li><RouterLink to="/stores" class="hover:text-[#4a7c59]">永和中正店</RouterLink></li>
            <li><a :href="LINE_URL" target="_blank" rel="noopener" class="hover:text-[#4a7c59]">LINE 問闆娘 (h668899)</a></li>
          </ul>
        </div>

        <!-- 永和中正店資訊 -->
        <div class="col-span-2 md:col-span-4 space-y-3">
          <div class="text-sm font-bold text-[#3c3c3c]">永和中正店</div>
          <div class="space-y-2 text-xs sm:text-sm text-[#79726c]">
            <div class="flex items-start gap-2">
              <MapPin class="w-4 h-4 text-[#4a7c59] shrink-0 mt-0.5" />
              <span>{{ STORE_ADDRESS }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Phone class="w-4 h-4 text-[#4a7c59] shrink-0" />
              <a :href="STORE_PHONE_TEL" class="hover:text-[#4a7c59] font-medium">{{ STORE_PHONE_DISPLAY }}</a>
            </div>
          </div>
          <div class="pt-1 flex flex-wrap gap-2">
            <a
              :href="STORE_PHONE_TEL"
              class="px-5 py-2 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-xs font-medium transition-colors"
            >
              立即致電
            </a>
            <a
              :href="STORE_MAP_URL"
              target="_blank"
              rel="noopener"
              class="px-5 py-2 rounded-full bg-white border border-[#d4d0c8] hover:border-[#4a7c59] text-[#3c3c3c] text-xs font-medium transition-colors"
            >
              Google 地圖導航
            </a>
          </div>
        </div>
      </div>

      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#79726c]">
        <span>© 2026 永吉床墊 YGBED｜新北市永和區中正路18號</span>
        <span>誠信・專業・服務・價格以門市與 LINE 報價為準</span>
      </div>
    </div>
  </footer>
</template>
