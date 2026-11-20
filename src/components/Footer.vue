<script setup>
import { RouterLink } from 'vue-router'
import { MapPin, Phone } from 'lucide-vue-next'
</script>

<template>
  <!-- 淺灰暖底頁尾，顯示永吉床墊真實門市與產品連結 -->
  <footer class="bg-[#eae8e4] text-[#3c3c3c] py-16">
    <div class="w-full px-6 sm:px-12 lg:px-20">
      <div class="grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b border-[#d4d0c8]">
        <!-- 品牌簡介 -->
        <div class="col-span-2 md:col-span-4 space-y-3">
          <div class="text-lg font-bold tracking-tight text-[#3c3c3c]">永吉床墊 ygbed</div>
          <p class="text-xs sm:text-sm text-[#79726c] leading-relaxed max-w-xs">
            深耕台灣多年，以「誠信、專業、服務」為核心價值。100% 台灣工廠直營，價格透明不虛標，由多年經驗製床師傅精製而成。
          </p>
        </div>

        <!-- 產品系列 -->
        <div class="col-span-1 md:col-span-2 space-y-2.5 text-sm">
          <div class="font-bold text-[#3c3c3c]">主力床款</div>
          <ul class="space-y-2 text-xs sm:text-sm text-[#79726c]">
            <li><RouterLink to="/product/yongji-milo" class="hover:text-[#4a7c59]">01 米羅</RouterLink></li>
            <li><RouterLink to="/product/yongji-venus" class="hover:text-[#4a7c59]">02 維納斯</RouterLink></li>
            <li><RouterLink to="/product/yongji-sleep-elf" class="hover:text-[#4a7c59]">03 睡精靈</RouterLink></li>
          </ul>
        </div>

        <!-- 品牌與服務 -->
        <div class="col-span-1 md:col-span-2 space-y-2.5 text-sm">
          <div class="font-bold text-[#3c3c3c]">品牌資訊</div>
          <ul class="space-y-2 text-xs sm:text-sm text-[#79726c]">
            <li><RouterLink to="/about" class="hover:text-[#4a7c59]">關於永吉</RouterLink></li>
            <li><RouterLink to="/stores" class="hover:text-[#4a7c59]">板橋體驗門市</RouterLink></li>
            <li><a href="https://line.me/ti/p/bNhOSn8xqz" target="_blank" rel="noopener" class="hover:text-[#4a7c59]">LINE 線上諮詢</a></li>
          </ul>
        </div>

        <!-- 板橋展示中心資訊 -->
        <div class="col-span-2 md:col-span-4 space-y-3">
          <div class="text-sm font-bold text-[#3c3c3c]">板橋展示中心</div>
          <div class="space-y-2 text-xs sm:text-sm text-[#79726c]">
            <div class="flex items-start gap-2">
              <MapPin class="w-4 h-4 text-[#4a7c59] shrink-0 mt-0.5" />
              <span>新北市板橋區四川路一段 85 號</span>
            </div>
            <div class="flex items-center gap-2">
              <Phone class="w-4 h-4 text-[#4a7c59] shrink-0" />
              <a href="tel:0229512738" class="hover:text-[#4a7c59] font-medium">02-2951-2738</a>
            </div>
          </div>
          <div class="pt-1 flex gap-2">
            <a
              href="tel:0229512738"
              class="px-5 py-2 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-xs font-medium transition-colors"
            >
              立即致電
            </a>
            <a
              href="https://maps.app.goo.gl/91c7Z7x5Tju12Jrg8"
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
        <span>© 2026 永吉床墊 ygbed｜新北板橋・永和台灣工廠直營</span>
        <span>誠信・專業・服務・價格透明</span>
      </div>
    </div>
  </footer>
</template>
