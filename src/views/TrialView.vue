<script setup>
import { RouterLink } from 'vue-router'
import { MessageCircle, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-vue-next'
import { LINE_URL } from '../data/products'
</script>

<template>
  <div class="w-full px-6 sm:px-12 lg:px-20 py-14 sm:py-20 bg-white space-y-16">
    <!-- 標頭 -->
    <section class="text-center space-y-4 max-w-3xl mx-auto">
      <span class="inline-block px-4 py-1 rounded-full bg-[#eef5f0] text-[#4a7c59] text-xs font-bold tracking-widest">
        ABOUT YGBED
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-[#3c3c3c]">
        先拿掉不適合的，再留下舒服的
      </h1>
      <p class="text-sm sm:text-base text-[#79726c] leading-relaxed">
        永吉床墊深耕台灣多年，以「誠信、專業、服務」為核心價值。我們不急著推銷，而是陪你從現在睡得不習慣的地方聊起，縮小範圍再到店慢慢比較；材質會解釋、差異會陪你試，真正要留下的，是每天都願意躺回去的感受。
      </p>
    </section>

    <!-- 三大核心原則 -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div class="bg-[#f5f5f5] p-8 rounded-[32px] space-y-3">
        <div class="w-12 h-12 rounded-2xl bg-white text-[#4a7c59] flex items-center justify-center">
          <MessageCircle class="w-6 h-6" />
        </div>
        <h3 class="text-lg font-bold text-[#3c3c3c]">先聊感受，不用先背材質</h3>
        <p class="text-sm text-[#79726c] leading-relaxed">
          不必先懂複雜的硬度或材質名詞，只要說出現在睡起來哪裡不習慣，闆娘陪你整理比較方向。
        </p>
      </div>

      <div class="bg-[#f5f5f5] p-8 rounded-[32px] space-y-3">
        <div class="w-12 h-12 rounded-2xl bg-white text-[#4a7c59] flex items-center justify-center">
          <ShieldCheck class="w-6 h-6" />
        </div>
        <h3 class="text-lg font-bold text-[#3c3c3c]">誠信・價格透明報價</h3>
        <p class="text-sm text-[#79726c] leading-relaxed">
          我們堅持真材實料，不虛標、不誇大，不同尺寸與床款以門市及 LINE 實際報價為準。
        </p>
      </div>

      <div class="bg-[#f5f5f5] p-8 rounded-[32px] space-y-3">
        <div class="w-12 h-12 rounded-2xl bg-white text-[#4a7c59] flex items-center justify-center">
          <HeartHandshake class="w-6 h-6" />
        </div>
        <h3 class="text-lg font-bold text-[#3c3c3c]">不急著賣你，先陪你選對</h3>
        <p class="text-sm text-[#79726c] leading-relaxed">
          出發前可先用 LINE 確認當期展示床款與預約時段，再到永和中正店用相同姿勢慢慢比較。
        </p>
      </div>
    </section>

    <!-- 底部 CTA -->
    <div class="text-center pt-4 flex flex-wrap justify-center gap-3">
      <a
        :href="LINE_URL"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm font-bold transition-colors"
      >
        <span>LINE 問闆娘（h668899）</span>
        <ArrowRight class="w-4 h-4" />
      </a>
      <RouterLink
        to="/stores"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#f5f5f5] hover:bg-[#e5e6e0] text-[#3c3c3c] text-sm font-bold transition-colors"
      >
        <span>前往永和中正店試躺</span>
      </RouterLink>
    </div>
  </div>
</template>
