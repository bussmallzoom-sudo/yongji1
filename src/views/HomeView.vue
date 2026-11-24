<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Tag,
  MessageCircle,
  Check,
  X,
  HeartHandshake,
} from 'lucide-vue-next'
import { PRODUCTS, LINE_URL, STORE_ADDRESS, STORE_PHONE_DISPLAY, formatNTD } from '../data/products'

const mainMattress = PRODUCTS[0]
const selectedVariant = ref(mainMattress.variants[1])
const shortlistProducts = PRODUCTS

const springsTrack = ref(null)
const sensesTrack = ref(null)

function scrollTrack(trackEl, direction) {
  if (!trackEl) return
  trackEl.scrollBy({ left: direction * 420, behavior: 'smooth' })
}

// 獨立筒與硬床睡感介紹（已移除未確認規格數字與法規禁用字）
const springCards = [
  {
    num: '01',
    tag: '偏硬支撐',
    title: '紮實挺拔、不易下陷',
    desc: '適合習慣傳統硬床或喜歡翻身輕鬆好施力的人，躺下去整個人被穩穩托住。',
    image: '/images/milo.jpg',
    wide: true,
  },
  {
    num: '02',
    tag: '均衡適中',
    title: '貼合與支撐的平衡點',
    desc: '不會過軟塌陷，也不會硬到壓迫肩膀，適合軟硬拿不定的人當作試躺基準。',
    image: '/images/venus.jpg',
  },
  {
    num: '03',
    tag: '雙人低干擾',
    title: '獨立受力・減少晃動',
    desc: '每顆彈簧獨立受力，減少伴侶翻身或上下床時的彼此干擾。',
    image: '/images/sleep-elf.jpg',
  },
  {
    num: '04',
    tag: '一對一試躺',
    title: '滿足兩人不同軟硬需求',
    desc: '夫妻兩人的睡感不同，可以一起到店用相同順序比較，找出彼此都舒服的交集。',
    image: '/images/store-showroom.png',
  },
]

// 選床三步驟（先聊感受 → 縮小選項 → 慢慢試躺）
const sensesCards = [
  {
    num: '01',
    tag: '先聊感受',
    title: '說說現在睡起來哪裡不習慣',
    desc: '不需要先背材質或硬度名詞！先告訴闆娘目前睡的床、常見睡姿與最在意的問題，從真實體感出發。',
    image: '/images/product-pillow.png',
    wide: true,
  },
  {
    num: '02',
    tag: '縮小選項',
    title: '先看三張，不用一次看三十張',
    desc: '把複雜規格變成能感受的差異，先挑出三張門市展示床款示範比較節奏。',
    image: '/images/milo.jpg',
  },
  {
    num: '03',
    tag: '慢慢試躺',
    title: '用同樣姿勢比較，再放心決定',
    desc: '材質會解釋、差異會陪你試；真正要留下的，是每天都願意躺回去的舒服感受。',
    image: '/images/store-showroom.png',
  },
]

// 常見問題（已修正法規用語並暫隱待闆娘確認之服務條款）
const activeFaqTab = ref('到店前必看')
const faqTabs = ['到店前必看', '硬床與支撐', '門市與試躺']
const faqMap = {
  到店前必看: [
    {
      q: '01 第一次到店，要怎麼開始試躺？',
      a: '可先用 LINE（h668899）告訴闆娘目前睡的床、常見睡姿、使用人數與最在意的問題，確認永和中正店與時段後，再到店從少量候選床款開始比較。',
    },
    {
      q: '02 不知道自己喜歡硬床還是軟床，也可以問嗎？',
      a: '可以！你不需要先懂材質或硬度名詞，只要描述現在的床睡起來哪裡不習慣，闆娘會協助整理比較方向，「不急著賣你，先陪你選對」。',
    },
    {
      q: '03 夫妻兩人的睡感不同，怎麼選？',
      a: '先把兩人的睡姿體感、與彼此最不能接受的感受分開說清楚，再一起到店用相同順序比較，可先透過 LINE（h668899）說明需求。',
    },
    {
      q: '04 哪些床款目前可以試躺？',
      a: '展示床與現貨可能調整，出發前請先透過 LINE（h668899）確認當期展示床款與可預約時段。',
    },
    {
      q: '05 最新尺寸、價格與配送條件怎麼確認？',
      a: '不同床款與尺寸的條件可能不同，價格以門市與 LINE 報價為準，請以 LINE 對話中提供的當期資料為準。',
    },
  ],
  硬床與支撐: [
    {
      q: 'Q. 獨立筒床墊有硬床嗎？',
      a: '有的！永吉提供多款偏硬睡感的獨立筒床款，支撐紮實、不易下陷，歡迎來永和中正店實際試躺比較。',
    },
    {
      q: 'Q. 有適合孩子／青少年的偏硬床款嗎？',
      a: '有的，我們有適合孩子與青少年睡感的偏硬床款，特色是偏硬、支撐紮實、不易下陷，建議帶孩子一起到店試躺感受。',
    },
  ],
  門市與試躺: [
    {
      q: 'Q. 獨立筒床墊床邊是不是很軟？坐在床邊會滑落嗎？',
      a: '我們的展示床款都有加強床邊支撐，坐在床邊穿鞋或起身都很穩固安心、不易滑落，歡迎到店親自坐坐看。',
    },
    {
      q: 'Q. 到店前需要先預約嗎？',
      a: '建議先透過 LINE（h668899）或撥打 02-8941-4197 與闆娘確認時段，我們能預留充足時間一對一陪你比較，不急著推銷。',
    },
  ],
}

const chatOpen = ref(false)
</script>

<template>
  <div class="bg-white text-[#3c3c3c]">
    <!-- 第二層：產品專屬子導覽列 -->
    <div class="sticky top-14 z-40 bg-white/95 backdrop-blur-md border-b border-[#e5e7eb]">
      <div class="w-full px-4 sm:px-8 lg:px-12 h-14 flex items-center justify-between gap-3">
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <a href="#story" class="px-4 py-1.5 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] bg-white text-xs text-[#3c3c3c] whitespace-nowrap transition-colors">
            怎麼選床
          </a>
          <a href="#collection" class="px-4 py-1.5 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] bg-white text-xs text-[#3c3c3c] whitespace-nowrap transition-colors">
            主力床墊
          </a>
          <a href="#springs" class="px-4 py-1.5 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] bg-white text-xs text-[#3c3c3c] whitespace-nowrap transition-colors">
            睡感介紹
          </a>
          <a href="#edge" class="px-4 py-1.5 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] bg-white text-xs text-[#3c3c3c] whitespace-nowrap transition-colors">
            床邊支撐
          </a>
          <a href="#faq" class="px-4 py-1.5 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] bg-white text-xs text-[#3c3c3c] whitespace-nowrap transition-colors">
            常見問題
          </a>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <span class="hidden xl:inline text-xs text-[#79726c]">
            不急著賣你，先陪你選對・<strong class="text-[#3c3c3c] font-medium">永和中正店（{{ STORE_ADDRESS }}）</strong>
          </span>
        </div>
      </div>
    </div>

    <!-- Hero 主視覺：獨立左文右影版型（去眠豆腐感，預留右側替換為闆娘本人照片） -->
    <section class="bg-[#f5f5f5] border-b border-[#e5e7eb]">
      <div class="w-full px-6 sm:px-12 lg:px-20 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-5 space-y-6">
          <span class="inline-block px-4 py-1.5 rounded-full bg-[#eef5f0] text-[#4a7c59] text-xs font-bold tracking-wider">
            永吉床墊｜永和中正店
          </span>

          <h1 class="text-4xl sm:text-5xl xl:text-[56px] font-black text-[#3c3c3c] leading-[1.15] tracking-tight">
            買床不用懂，<br />
            <span class="text-[#4a7c59]">問闆娘就對</span>
          </h1>

          <p class="text-sm sm:text-base text-[#79726c] leading-relaxed max-w-lg">
            說說現在睡得不習慣的地方，闆娘陪你縮小範圍，再到店慢慢比較。<br class="hidden sm:inline" />
            不急著賣你，先陪你選對。
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a
              :href="LINE_URL"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm font-bold transition-colors"
            >
              <MessageCircle class="w-4 h-4" />
              <span>LINE 問闆娘（h668899）</span>
            </a>
            <RouterLink
              to="/stores"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#d1d5db] hover:border-[#4a7c59] text-[#3c3c3c] text-sm font-bold transition-colors"
            >
              預約到店試躺
            </RouterLink>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="rounded-[32px] overflow-hidden border border-[#e5e7eb] bg-white shadow-sm aspect-16/10">
            <video
              autoplay
              muted
              loop
              playsinline
              preload="auto"
              class="w-full h-full object-cover object-center"
            >
              <source src="/videos/hero-loop.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>

    <!-- SEC 1：置中按鈕 + 四欄森綠手繪線條 Icon（哪一種最像你？） -->
    <section v-reveal class="bg-white py-16 sm:py-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a
          href="#collection"
          class="inline-block px-10 py-3 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm sm:text-base font-medium transition-colors"
        >
          先看三張主力床
        </a>

        <div class="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          <div class="flex flex-col items-center space-y-3 sm:space-y-4">
            <svg class="w-16 h-16 sm:w-22 sm:h-22 text-[#5e8f6d]" viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <rect x="10" y="10" width="9" height="36" rx="1.5" />
              <path d="M10 17h4M10 24h3M10 31h4M10 38h3" />
              <path d="M25 14h6v28l-3 4-3-4V14z" />
              <path d="M25 20h6" />
              <path d="M38 18l4-8 4 8v28h-8V18z" />
              <path d="M38 24h8" />
            </svg>
            <div class="space-y-1">
              <h3 class="text-base sm:text-xl lg:text-[22px] font-bold text-[#3c3c3c] leading-snug">01 軟硬拿不定</h3>
              <p class="text-xs sm:text-sm text-[#79726c]">從現在的睡感聊起</p>
            </div>
          </div>

          <div class="flex flex-col items-center space-y-3 sm:space-y-4">
            <svg class="w-16 h-16 sm:w-22 sm:h-22 text-[#5e8f6d]" viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M28 8v9M24 13l4 4 4-4" />
              <path d="M12 22c10 4 22 4 32 0v18c-10 4-22 4-32 0V22z" />
              <text x="28" y="34" text-anchor="middle" fill="currentColor" stroke="none" font-size="8.5" font-weight="700">COUPLE</text>
            </svg>
            <div class="space-y-1">
              <h3 class="text-base sm:text-xl lg:text-[22px] font-bold text-[#3c3c3c] leading-snug">02 兩人感受不同</h3>
              <p class="text-xs sm:text-sm text-[#79726c]">找彼此都舒服的交集</p>
            </div>
          </div>

          <div class="flex flex-col items-center space-y-3 sm:space-y-4">
            <svg class="w-16 h-16 sm:w-22 sm:h-22 text-[#5e8f6d]" viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 16c11-2 23-2 34 0 2 8 2 16 0 24-11 2-23 2-34 0-2-8-2-16 0-24z" />
              <path d="M9 14l3 3M47 14l-3 3M9 42l3-3M47 42l-3-3" />
              <text x="28" y="29" text-anchor="middle" fill="currentColor" stroke="none" font-size="9.5" font-weight="700">CARE</text>
              <text x="28" y="37" text-anchor="middle" fill="currentColor" stroke="none" font-size="6.5" font-weight="700">FAMILY</text>
            </svg>
            <div class="space-y-1">
              <h3 class="text-base sm:text-xl lg:text-[22px] font-bold text-[#3c3c3c] leading-snug">03 替長輩選床</h3>
              <p class="text-xs sm:text-sm text-[#79726c]">先整理真正的使用需求</p>
            </div>
          </div>

          <div class="flex flex-col items-center space-y-3 sm:space-y-4">
            <svg class="w-16 h-16 sm:w-22 sm:h-22 text-[#5e8f6d]" viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 25L28 11l18 14v20H10V25z" />
              <rect x="17" y="29" width="22" height="11" rx="1.5" />
              <rect x="20" y="25" width="7" height="4" rx="1" />
              <rect x="29" y="25" width="7" height="4" rx="1" />
              <path d="M36 13h5l-4 5h5" />
            </svg>
            <div class="space-y-1">
              <h3 class="text-base sm:text-xl lg:text-[22px] font-bold text-[#3c3c3c] leading-snug">04 直接到店試躺</h3>
              <p class="text-xs sm:text-sm text-[#79726c]">先確認展示與時段</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEC 2：認識闆娘與選床理念（已移除淡色英文浮水印與小熊插畫） -->
    <section id="story" class="scroll-mt-28 py-20 sm:py-28 bg-gradient-to-b from-white via-[#eef5f0] to-white">
      <div class="w-full px-4 sm:px-10 lg:px-16">
        <div class="text-center space-y-3 mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-4xl font-black text-[#4a7c59] tracking-wider leading-snug">
            不是先背材質，是先把需求問對
          </h2>
          <p class="text-sm sm:text-base text-[#3c3c3c]">
            說說現在睡得不習慣的地方，闆娘陪你縮小範圍，再到店慢慢比較。
          </p>
        </div>

        <div v-reveal class="bg-white rounded-[40px] shadow-sm border border-[#e5e7eb]/60 px-6 py-10 sm:px-16 sm:py-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-6">
            <img src="/images/store-showroom.png" alt="永吉床墊永和中正店體驗空間" class="w-full aspect-4/3 object-cover rounded-3xl" />
          </div>

          <div class="lg:col-span-6 space-y-6 text-sm sm:text-[15px] text-[#3c3c3c] leading-[1.9] font-normal">
            <p>
              <strong>「先拿掉不適合的，再留下舒服的。」</strong><br />
              來永吉不用先背一堆材質或硬度名詞，只要把你現在睡得不習慣的地方說出來，我們陪你一步一步縮小範圍。
            </p>
            <p>
              永吉床墊深耕台灣多年，堅持 <strong>誠信、專業、服務</strong>。<br />
              每一張床墊皆以實品試躺體驗為主，不虛標、不誇大。
            </p>
            <p class="font-bold text-[#4a7c59] text-base">「不急著賣你，先陪你選對。」</p>
            <p>
              材質會解釋、差異會陪你試；真正要留下的，是每天都願意躺回去的感受。<br class="hidden sm:inline" />
              先在線上跟闆娘聊聊需求（LINE：h668899），再預約到永和中正店安心慢慢躺。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SEC 3：選對床墊，真正開始放鬆 + 水平向右橫移熟睡影片 -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="w-full px-4 sm:px-10 lg:px-16 text-center">
        <div class="space-y-3">
          <h2 class="text-2xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">選對床墊，真正開始放鬆</h2>
          <p class="text-sm sm:text-base text-[#3c3c3c] max-w-3xl mx-auto leading-[1.9]">
            一天有三分之一的時間在床上度過，一張對的床墊，<br class="hidden sm:inline" />
            不只是支撐身體的地方，更是讓你下班回家好好放鬆的基地。
          </p>
        </div>

        <div class="mt-12 rounded-[32px] overflow-hidden border border-[#e5e7eb] bg-[#f5f5f5]">
          <video
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            class="w-full max-h-[680px] object-cover"
          >
            <source src="/videos/hybrid-pan.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

    <!-- SEC 4：睡感與獨立筒介紹（已拿掉淡色英文浮水印與未確認數字） -->
    <section id="springs" class="scroll-mt-28 py-20 sm:py-28 bg-white overflow-hidden border-t border-[#f5f5f5]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 class="text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">不同睡感與獨立筒選擇</h2>
        <p class="text-base sm:text-lg font-medium text-[#3c3c3c]">偏硬、均衡或低干擾，親自躺過最準確。</p>
        <p class="text-sm sm:text-base text-[#79726c] max-w-3xl mx-auto leading-[1.9]">
          獨立筒每顆彈簧各別獨立受力，不會互相牽連、干擾性低，<br class="hidden sm:inline" />
          滿足不同身材體型與雙人共眠對軟硬度的需求。
        </p>
      </div>

      <div class="mt-12 w-full">
        <div ref="springsTrack" class="flex gap-5 overflow-x-auto no-scrollbar px-6 sm:px-12 lg:px-20 snap-x snap-mandatory">
          <div
            v-for="card in springCards"
            :key="card.num"
            :class="card.wide ? 'w-[320px] sm:w-[498px] xl:w-[686px]' : 'w-[240px] sm:w-[300px] xl:w-[386px]'"
            class="shrink-0 snap-start bg-[#f5f5f5] rounded-[28px] overflow-hidden flex flex-col justify-between"
          >
            <div class="p-7 sm:p-9 space-y-2">
              <span class="text-xs font-bold text-[#4a7c59]">{{ card.num }} {{ card.tag }}</span>
              <h3 class="text-xl sm:text-2xl font-bold text-[#3c3c3c]">{{ card.title }}</h3>
              <p class="text-xs sm:text-sm text-[#79726c] leading-relaxed">{{ card.desc }}</p>
            </div>
            <img :src="card.image" :alt="card.title" class="w-full h-56 sm:h-68 object-cover" />
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 flex justify-end gap-2">
          <button @click="scrollTrack(springsTrack, -1)" class="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#e5e6e0] flex items-center justify-center cursor-pointer" aria-label="向左"><ChevronLeft class="w-5 h-5" /></button>
          <button @click="scrollTrack(springsTrack, 1)" class="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#e5e6e0] flex items-center justify-center cursor-pointer" aria-label="向右"><ChevronRight class="w-5 h-5" /></button>
        </div>
      </div>
    </section>

    <!-- SEC 5：闆娘陪你選床三步驟 -->
    <section class="py-20 sm:py-28 bg-white overflow-hidden border-t border-[#f5f5f5]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 class="text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">闆娘陪你選床三步驟</h2>
        <p class="text-base sm:text-lg font-medium text-[#3c3c3c]">不必一次看三十張，先把感受說對最重要。</p>
        <p class="text-sm sm:text-base text-[#79726c] max-w-3xl mx-auto leading-[1.9]">
          從現在這張床睡起來哪裡不舒服開始聊起，<br class="hidden sm:inline" />
          把複雜的規格變成你躺上去就能感受的差異。
        </p>
      </div>

      <div class="mt-12 w-full">
        <div ref="sensesTrack" class="flex gap-5 overflow-x-auto no-scrollbar px-6 sm:px-12 lg:px-20 snap-x snap-mandatory">
          <div
            v-for="card in sensesCards"
            :key="card.num"
            :class="card.wide ? 'w-[320px] sm:w-[498px] xl:w-[686px]' : 'w-[240px] sm:w-[300px] xl:w-[386px]'"
            class="shrink-0 snap-start bg-[#f5f5f5] rounded-[28px] overflow-hidden flex flex-col justify-between"
          >
            <div class="p-7 sm:p-9 space-y-2">
              <span class="text-xs font-bold text-[#4a7c59]">{{ card.num }} {{ card.tag }}</span>
              <h3 class="text-xl sm:text-2xl font-bold text-[#3c3c3c]">{{ card.title }}</h3>
              <p class="text-xs sm:text-sm text-[#79726c] leading-relaxed">{{ card.desc }}</p>
            </div>
            <img :src="card.image" :alt="card.title" class="w-full h-56 sm:h-68 object-cover" />
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 flex justify-end gap-2">
          <button @click="scrollTrack(sensesTrack, -1)" class="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#e5e6e0] flex items-center justify-center cursor-pointer" aria-label="向左"><ChevronLeft class="w-5 h-5" /></button>
          <button @click="scrollTrack(sensesTrack, 1)" class="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#e5e6e0] flex items-center justify-center cursor-pointer" aria-label="向右"><ChevronRight class="w-5 h-5" /></button>
        </div>
      </div>
    </section>

    <!-- SEC 6：床邊支撐結構 + 母女坐床沿共讀大圖 -->
    <section id="edge" v-reveal class="scroll-mt-28 py-20 sm:py-28 bg-white border-t border-[#f5f5f5]">
      <div class="w-full px-6 sm:px-12 lg:px-20">
        <div class="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 class="text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">床邊支撐強化</h2>
          <p class="text-base sm:text-lg font-medium text-[#3c3c3c]">坐在床邊也非常穩固安心，不易滑落。</p>
          <p class="text-sm text-[#79726c] leading-relaxed">
            重視床邊結構支撐，無論翻身睡到床邊，或坐在床沿陪孩子閱讀都很踏實。
          </p>
        </div>

        <div class="mb-10 rounded-[32px] overflow-hidden border border-[#e5e7eb] bg-[#f5f5f5]">
          <img
            src="/images/edge-reading.png"
            alt="床邊支撐強化 坐床沿穩固不塌陷"
            class="w-full max-h-[620px] object-cover"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-[#f5f5f5] rounded-[28px] p-8 space-y-3">
            <span class="text-xs font-bold text-[#4a7c59]">01</span>
            <h3 class="text-xl font-bold text-[#3c3c3c]">翻身到床邊也平穩</h3>
            <p class="text-sm text-[#79726c] leading-relaxed">
              床沿支撐全面強化，睡到床邊依然平穩踏實，不用擔心滾落或邊緣下陷。
            </p>
          </div>
          <div class="bg-[#f5f5f5] rounded-[28px] p-8 space-y-3">
            <span class="text-xs font-bold text-[#4a7c59]">02</span>
            <h3 class="text-xl font-bold text-[#3c3c3c]">親子共讀好坐不滑落</h3>
            <p class="text-sm text-[#79726c] leading-relaxed">
              孩子坐在床邊穿衣或看繪本，床緣穩固支撐，安全又舒適。
            </p>
          </div>
          <div class="bg-[#f5f5f5] rounded-[28px] p-8 space-y-3">
            <span class="text-xs font-bold text-[#4a7c59]">03</span>
            <h3 class="text-xl font-bold text-[#3c3c3c]">起身施力更輕鬆</h3>
            <p class="text-sm text-[#79726c] leading-relaxed">
              長輩早上起床先坐在床緣時有足夠支撐力，起身更加穩定安心。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SEC 7：Experience 四張 40px 圓角白卡 -->
    <section v-reveal class="bg-[#F5F5F5] py-20 sm:py-28">
      <div class="w-full px-6 sm:px-12 lg:px-20">
        <div class="text-center mb-10">
          <h2 class="px-2 text-2xl sm:text-4xl font-black text-[#4a7c59] tracking-wider leading-snug">
            到永和中正店，實際躺過再決定
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <a
            :href="LINE_URL"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-x-4 gap-y-3 rounded-[40px] bg-white p-7 md:flex-col md:px-6 md:py-9 md:text-center hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#f5f5f5] text-[#4a7c59] flex items-center justify-center shrink-0">
              <MessageCircle class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#3c3c3c]">LINE 問闆娘縮小範圍</h3>
              <p class="text-xs sm:text-sm text-[#79726c] mt-1">先用 LINE（h668899）說需求確認時段，不急著推銷。</p>
            </div>
          </a>

          <RouterLink
            to="/stores"
            class="flex items-center gap-x-4 gap-y-3 rounded-[40px] bg-white p-7 md:flex-col md:px-6 md:py-9 md:text-center hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#f5f5f5] text-[#4a7c59] flex items-center justify-center shrink-0">
              <MapPin class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#3c3c3c]">永和中正店體驗</h3>
              <p class="text-xs sm:text-sm text-[#79726c] mt-1">{{ STORE_ADDRESS }}（{{ STORE_PHONE_DISPLAY }}），歡迎來慢慢比較。</p>
            </div>
          </RouterLink>

          <RouterLink
            to="/about"
            class="flex items-center gap-x-4 gap-y-3 rounded-[40px] bg-white p-7 md:flex-col md:px-6 md:py-9 md:text-center hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#f5f5f5] text-[#4a7c59] flex items-center justify-center shrink-0">
              <HeartHandshake class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#3c3c3c]">誠信・專業・服務</h3>
              <p class="text-xs sm:text-sm text-[#79726c] mt-1">不先背材質名詞，先把你的真實睡眠需求問對。</p>
            </div>
          </RouterLink>

          <div class="flex items-center gap-x-4 gap-y-3 rounded-[40px] bg-white p-7 md:flex-col md:px-6 md:py-9 md:text-center">
            <div class="w-12 h-12 rounded-2xl bg-[#f5f5f5] text-[#4a7c59] flex items-center justify-center shrink-0">
              <Tag class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#3c3c3c]">門市與 LINE 報價</h3>
              <p class="text-xs sm:text-sm text-[#79726c] mt-1">不同尺寸與床款條件請以門市及 LINE 當期報價為準。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 規格與價錢快速選購區 (#pricing) -->
    <section id="pricing" v-reveal class="py-20 sm:py-28 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center space-y-2 mb-12">
          <h2 class="text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">常見尺寸與報價諮詢</h2>
          <p class="text-sm sm:text-base text-[#79726c]">尺寸和當期優惠，歡迎 LINE 問闆娘</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#f5f5f5] rounded-[36px] p-6 sm:p-10">
          <div class="md:col-span-6">
            <img src="/images/milo.jpg" alt="永吉精選展示床墊" class="w-full aspect-4/3 object-cover rounded-3xl bg-white" />
          </div>

          <div class="md:col-span-6 space-y-6">
            <div>
              <h3 class="text-2xl font-black text-[#3c3c3c]">{{ mainMattress.name }}</h3>
              <p class="text-xs sm:text-sm text-[#79726c] mt-1">{{ mainMattress.subtitle }}</p>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
              <button
                v-for="v in mainMattress.variants"
                :key="v.id"
                @click="selectedVariant = v"
                class="p-3 rounded-2xl border text-left transition-all cursor-pointer"
                :class="selectedVariant.id === v.id ? 'bg-white border-[#4a7c59] ring-2 ring-[#4a7c59]/30' : 'bg-white/60 border-transparent hover:bg-white'"
              >
                <div class="text-xs font-bold text-[#3c3c3c]">{{ v.name }}</div>
                <div class="text-[11px] text-[#79726c] mt-0.5">{{ v.size }}</div>
              </button>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#e5e7eb]">
              <div>
                <span class="text-xs text-[#79726c] block">報價說明</span>
                <span class="text-base sm:text-lg font-black text-[#4a7c59]">{{ formatNTD(selectedVariant.price) }}</span>
              </div>

              <a
                :href="LINE_URL"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm font-bold transition-colors"
              >
                <MessageCircle class="w-4 h-4" />
                <span>LINE 詢問報價</span>
              </a>
            </div>

            <div class="flex flex-wrap gap-4 text-xs text-[#79726c]">
              <span class="inline-flex items-center gap-1"><Check class="w-3.5 h-3.5 text-[#4a7c59]" /> 永和中正店現場試躺</span>
              <span class="inline-flex items-center gap-1"><Check class="w-3.5 h-3.5 text-[#4a7c59]" /> 闆娘一對一協助選床</span>
              <RouterLink to="/product/yongji-model-01" class="text-[#4a7c59] hover:underline font-medium">
                查看詳細說明 ›
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEC 8：Collection 先看三張展示床款 -->
    <section id="collection" class="scroll-mt-28 py-16 sm:py-24 bg-[#F5F5F5]">
      <div class="w-full px-6 sm:px-12 lg:px-20">
        <div class="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 class="px-2 text-2xl sm:text-4xl font-black text-[#4a7c59] tracking-wider leading-snug">
            先看三張主力，不用一次看三十張
          </h2>
          <p class="text-xs sm:text-sm text-[#79726c]">
            實際展示床款與價格以永和中正店及 LINE（h668899）報價為準，歡迎先聊聊再試躺
          </p>
          <RouterLink to="/shop" class="inline-block px-6 py-2 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-xs font-bold transition-colors">
            瀏覽展示床款
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="item in shortlistProducts"
            :key="item.id"
            class="group bg-white rounded-[28px] overflow-hidden border border-[#e5e7eb] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <RouterLink :to="`/product/${item.slug}`" class="block">
              <div class="aspect-4/3 overflow-hidden bg-[#f5f5f5]">
                <img :src="item.images[0]" :alt="item.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-6 pb-3 space-y-2">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-xs font-bold text-[#4a7c59]">{{ item.badge || item.firmness }}</span>
                  <span class="text-[11px] font-medium text-[#79726c]">{{ formatNTD(item.basePrice) }}</span>
                </div>
                <h3 class="text-lg font-bold text-[#3c3c3c] group-hover:text-[#4a7c59] transition-colors">{{ item.name }}</h3>
                <p class="text-xs text-[#79726c] line-clamp-2">{{ item.subtitle }}</p>
              </div>
            </RouterLink>
            <div class="px-6 pb-6 pt-2 flex items-center gap-2">
              <a
                :href="LINE_URL"
                target="_blank"
                rel="noopener"
                class="px-4 py-2 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] text-xs font-bold text-[#3c3c3c] hover:text-[#4a7c59] transition-colors"
              >
                LINE 問這張床
              </a>
              <RouterLink
                :to="`/product/${item.slug}`"
                class="px-4 py-2 rounded-full bg-[#f5f5f5] hover:bg-[#eef5f0] text-xs font-medium text-[#79726c] hover:text-[#4a7c59] transition-colors"
              >
                看介紹
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEC 9：FAQ 還沒到店前，你可能會先問 -->
    <section id="faq" class="scroll-mt-28 py-20 sm:py-28 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">還沒到店前，你可能會先問</h2>
        </div>

        <div class="flex flex-wrap justify-center gap-2 mb-10">
          <button
            v-for="tab in faqTabs"
            :key="tab"
            @click="activeFaqTab = tab"
            class="px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            :class="activeFaqTab === tab ? 'bg-[#4a7c59] text-white' : 'bg-[#f5f5f5] text-[#79726c] hover:text-[#3c3c3c]'"
          >
            {{ tab }}
          </button>
        </div>

        <div class="space-y-6">
          <div
            v-for="item in faqMap[activeFaqTab]"
            :key="item.q"
            class="bg-[#f5f5f5] rounded-[24px] p-6 sm:p-7 space-y-2.5"
          >
            <h3 class="text-sm sm:text-base font-bold text-[#3c3c3c]">{{ item.q }}</h3>
            <p class="text-xs sm:text-sm text-[#79726c] leading-relaxed whitespace-pre-line">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 不用先做功課，問闆娘就好 -->
    <section class="py-16 sm:py-20 bg-[#eef5f0]">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 class="text-2xl sm:text-4xl font-black text-[#3c3c3c]">不用先做功課，問闆娘就好</h2>
        <p class="text-sm sm:text-base text-[#79726c] leading-relaxed">
          從「現在這張床睡起來……」開始就可以。<br class="hidden sm:inline" />
          說說你在意的睡感，闆娘幫你縮小範圍再預約到店試躺。
        </p>
        <div class="flex flex-wrap justify-center gap-3 pt-2">
          <a
            :href="LINE_URL"
            target="_blank"
            rel="noopener"
            class="px-8 py-3 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm font-bold transition-colors"
          >
            LINE 問闆娘（h668899）
          </a>
          <RouterLink
            to="/stores"
            class="px-8 py-3 rounded-full bg-white border border-[#d1d5db] hover:border-[#4a7c59] text-[#3c3c3c] text-sm font-bold transition-colors"
          >
            查看永和中正店位置
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 右下角森綠圓形浮動諮詢氣泡 -->
    <div class="fixed bottom-5 right-5 z-40">
      <div v-if="chatOpen" class="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-[#e5e7eb] p-4 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-[#3c3c3c]">LINE 問闆娘｜ID：h668899</span>
          <button @click="chatOpen = false" class="text-[#79726c] hover:text-[#3c3c3c] cursor-pointer"><X class="w-4 h-4" /></button>
        </div>
        <p class="text-xs text-[#79726c] leading-relaxed">
          從現在這張床睡起來哪裡不習慣開始就可以！闆娘幫你先縮小範圍，再預約到永和中正店（{{ STORE_ADDRESS }}）慢慢躺。
        </p>
        <div class="flex gap-2">
          <a
            :href="LINE_URL"
            target="_blank"
            rel="noopener"
            class="flex-1 text-center py-1.5 rounded-full bg-[#4a7c59] text-white text-xs font-medium"
          >
            LINE 問闆娘
          </a>
          <RouterLink to="/stores" @click="chatOpen = false" class="flex-1 text-center py-1.5 rounded-full bg-[#f5f5f5] hover:bg-[#e5e6e0] text-xs font-medium text-[#3c3c3c]">
            門市導覽
          </RouterLink>
        </div>
      </div>

      <button
        @click="chatOpen = !chatOpen"
        class="w-12 h-12 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 cursor-pointer ml-auto"
        aria-label="LINE 問闆娘"
      >
        <MessageCircle class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>
