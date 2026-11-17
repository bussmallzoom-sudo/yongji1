<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  ChevronLeft,
  ChevronRight,
  Factory,
  MapPin,
  Tag,
  Truck,
  Check,
  ShoppingBag,
  MessageCircle,
  X,
} from 'lucide-vue-next'
import { PRODUCTS, formatNTD } from '../data/products'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const mainMattress = PRODUCTS[0] // 1085 強化硬式獨立筒床墊
const selectedVariant = ref(mainMattress.variants[1])
const otherProducts = PRODUCTS.slice(1, 7)

// 橫向滑動容器 refs
const springsTrack = ref(null)
const sensesTrack = ref(null)

function scrollTrack(trackEl, direction) {
  if (!trackEl) return
  trackEl.scrollBy({ left: direction * 420, behavior: 'smooth' })
}

// 永吉獨立筒與硬床科技（來自 yongji.tw 真實內容）
const springCards = [
  {
    num: '01',
    tag: '硬式獨立筒',
    title: '2.4mm 加粗鋼線支撐',
    desc: '採用線徑加粗至 2.4mm 的高碳鋼線，是張支撐性非常足夠的獨立筒硬床，也適合 8～18 歲成長期兒童與青少年護脊。',
    image: '/images/product-mattress.png',
    wide: true,
  },
  {
    num: '02',
    tag: '極度硬式獨立筒',
    title: '傳統硬挺 × 獨立筒服貼',
    desc: '接近傳統聯結式床墊的硬挺躺感，又同時保有獨立筒床墊貼合身形、分散壓力、互不干擾的優點。',
    image: '/images/hero-bedroom.png',
  },
  {
    num: '03',
    tag: '1085 強化硬式獨立筒',
    title: '5 尺放入 1,116 顆彈簧',
    desc: '將彈簧縮小、顆數增加，創造出接近傳統床墊的扎實硬度，因彈簧多、支撐點多，擁有綿密的服貼感。',
    image: '/images/product-bedframe.png',
  },
  {
    num: '04',
    tag: '蜂巢式 vs 直排式',
    title: '滿足不同體型軟硬需求',
    desc: '蜂巢式排列能在同尺寸內容納更多彈簧、睡起來更硬挺；每顆彈簧獨立受力，分別支撐身體不同部位。',
    image: '/images/store-showroom.png',
  },
]

// 永吉「打造五感舒眠」（來自 yongji.tw 首頁真實內容）
const sensesCards = [
  {
    num: '01',
    tag: '觸覺與支撐',
    title: '親膚床單 × 永吉舒適支撐',
    desc: '選用親膚柔軟的 MIT 精製天絲床單與枕套，搭配永吉床墊依人體工學測試的彈性支撐，創造五星級睡眠儀式。',
    image: '/images/product-pillow.png',
    wide: true,
  },
  {
    num: '02',
    tag: '視覺與溫度',
    title: '暖黃柔光・25°C 最適睡眠溫度',
    desc: '睡前避免強光，選用柔和暖黃燈並保持室溫約 25°C 左右，幫助身體自然進入放鬆狀態。',
    image: '/images/hero-bedroom.png',
  },
  {
    num: '03',
    tag: '聽覺與嗅覺',
    title: '白噪音與淡淡薰衣草雪松香氣',
    desc: '輕音樂或白噪音可幫助放鬆，搭配淡淡的薰衣草或雪松香氣，有助於安定情緒、加快入睡速度。',
    image: '/images/store-showroom.png',
  },
]

// 永吉真實常見問題 FAQ（四大分類切換）
const activeFaqTab = ref('硬床與護脊')
const faqTabs = ['硬床與護脊', '訂做與尺寸', '配送與回收', '彈簧與結構']
const faqMap = {
  硬床與護脊: [
    {
      q: 'Q. 獨立筒床墊有硬床嗎？',
      a: '有的，推薦您獨立筒床墊中偏硬躺感的 3 張床：\n• 硬式獨立筒：採用線徑加粗至 2.4mm 的鋼線，支撐性非常足夠。\n• 極度硬式獨立筒：接近傳統聯結式的硬挺躺感，同時保有獨立筒服貼分散壓力的優點。\n• 1085 強化硬式獨立筒：5 尺床墊放入 1,116 顆彈簧，支撐點多、綿密服貼的硬床。',
    },
    {
      q: 'Q. 有兒童護脊獨立筒床墊嗎？',
      a: '市面上的兒童護脊床墊是將獨立筒彈簧鋼線加粗以增加硬度，永吉「硬式獨立筒床墊」便是一張可以讓小朋友從 8 歲～18 歲都擁有足夠支撐的護脊床墊。',
    },
  ],
  訂做與尺寸: [
    {
      q: 'Q. 可訂做床墊尺寸嗎？會比較貴嗎？',
      a: '沒問題！永吉床墊提供方形、長方形床墊尺寸訂做，最大可訂做 212 公分 × 212 公分的獨立筒床墊。\n訂做床墊以對應尺寸計價，客製化床墊不會加收額外的訂做費用，價格不會比較高。',
    },
    {
      q: 'Q. 購買後多久可以收到床墊呢？',
      a: '每張床墊都是下訂後才開始製作，從訂購到收到床墊，約需 7 個工作天的製作時間，完成製作後即可為您安排配送。',
    },
  ],
  配送與回收: [
    {
      q: 'Q. 運費與樓層費怎麼算？可以回收舊床嗎？',
      a: '在永吉買床墊，除少數偏遠地區皆享有「免運費、四樓以下免樓層費」，並可「免費回收清運舊床墊」（買一張免費回收一張）。',
    },
  ],
  彈簧與結構: [
    {
      q: 'Q. 獨立筒床墊跟傳統床墊有什麼不同？',
      a: '傳統連結式床墊彈簧相連，晃動干擾較大且腰部易有空洞；獨立筒每顆彈簧各別獨立受力、不會互相牽連，干擾性低且更符合人體工學。',
    },
    {
      q: 'Q. 獨立筒床墊床邊是不是很軟？坐在床邊會滑落嗎？',
      a: '永吉每一張床墊都有使用「強力泡棉護邊」作為床邊強化的支撐結構，讓床墊利用面積提升了 16%，翻身睡到床邊不會滑落，坐在床邊也非常穩固安心。',
    },
    {
      q: 'Q. 蜂巢式獨立筒跟直排式獨立筒的差別？',
      a: '蜂巢式獨立筒就像蜂巢排列，在相同尺寸內容納的彈簧較多；在同樣線徑與直徑下，蜂巢式排列會比直排式睡起來更硬挺。',
    },
  ],
}

const chatOpen = ref(false)
</script>

<template>
  <div class="bg-white text-[#3c3c3c]">
    <!-- 第二層：產品專屬子導覽列（滿版寬度，森綠按鈕） -->
    <div class="sticky top-14 z-40 bg-white/95 backdrop-blur-md border-b border-[#e5e7eb]">
      <div class="w-full px-4 sm:px-8 lg:px-12 h-14 flex items-center justify-between gap-3">
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <a href="#story" class="px-4 py-1.5 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] bg-white text-xs text-[#3c3c3c] whitespace-nowrap transition-colors">
            品牌精神
          </a>
          <a href="#springs" class="px-4 py-1.5 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] bg-white text-xs text-[#3c3c3c] whitespace-nowrap transition-colors">
            獨立筒硬床
          </a>
          <a href="#edge" class="px-4 py-1.5 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] bg-white text-xs text-[#3c3c3c] whitespace-nowrap transition-colors">
            泡棉護邊
          </a>
          <a href="#pricing" class="px-4 py-1.5 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] bg-white text-xs text-[#3c3c3c] whitespace-nowrap transition-colors">
            價格透明
          </a>
          <a href="#faq" class="px-4 py-1.5 rounded-full border border-[#d1d5db] hover:border-[#4a7c59] bg-white text-xs text-[#3c3c3c] whitespace-nowrap transition-colors">
            常見問題
          </a>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <span class="hidden md:inline text-xs text-[#79726c]">
            台灣工廠下訂現做 <strong class="text-[#3c3c3c] font-medium">約 7 個工作天</strong> 安排配送
          </span>
          <a href="#pricing" class="px-6 py-1.5 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-xs font-medium transition-colors">
            立即選購
          </a>
        </div>
      </div>
    </div>

    <!-- Hero 主視覺：全版滿屏動態影片 -->
    <section class="relative w-full h-[calc(100vh-112px)] min-h-[540px] overflow-hidden bg-[#d8d5ce]">
      <video
        autoplay
        muted
        loop
        playsinline
        poster="/images/hero-bedroom.png"
        class="w-full h-full object-cover object-center"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/25"></div>

      <div class="absolute inset-0 flex flex-col items-center justify-end pb-14 sm:pb-24 px-4 text-center select-none">
        <p class="text-base sm:text-2xl xl:text-3xl font-normal text-white tracking-wider drop-shadow-sm mb-2 sm:mb-4">
          選對床墊，人生才會真正開始放鬆
        </p>
        <h1 class="text-[34px] sm:text-6xl lg:text-8xl xl:text-[108px] font-black text-white tracking-[0.08em] sm:tracking-[0.14em] leading-none drop-shadow-sm">
          YONGJI BEDDING
        </h1>
      </div>
    </section>

    <!-- SEC 1：置中購買按鈕 + 四欄森綠手繪線條 Icon -->
    <section v-reveal class="bg-white py-16 sm:py-24">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a
          href="#pricing"
          class="inline-block px-10 py-3 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm sm:text-base font-medium transition-colors"
        >
          逛逛床墊
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
              <h3 class="text-base sm:text-xl lg:text-[22px] font-bold text-[#3c3c3c] leading-snug">誠信・專業・服務</h3>
              <p class="text-xs sm:text-sm text-[#79726c]">真材實料，不虛標不誇大</p>
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
              <h3 class="text-base sm:text-xl lg:text-[22px] font-bold text-[#3c3c3c] leading-snug">100% 台灣製造<br />工廠直送</h3>
              <p class="text-xs sm:text-sm text-[#79726c]">多年製床師傅手工精製</p>
            </div>
          </div>

          <div class="flex flex-col items-center space-y-3 sm:space-y-4">
            <svg class="w-16 h-16 sm:w-22 sm:h-22 text-[#5e8f6d]" viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M11 16c11-2 23-2 34 0 2 8 2 16 0 24-11 2-23 2-34 0-2-8-2-16 0-24z" />
              <path d="M9 14l3 3M47 14l-3 3M9 42l3-3M47 42l-3-3" />
              <text x="28" y="29" text-anchor="middle" fill="currentColor" stroke="none" font-size="9.5" font-weight="700">212×212</text>
              <text x="28" y="37" text-anchor="middle" fill="currentColor" stroke="none" font-size="6.5" font-weight="700">CUSTOM</text>
            </svg>
            <div class="space-y-1">
              <h3 class="text-base sm:text-xl lg:text-[22px] font-bold text-[#3c3c3c] leading-snug">客製化尺寸訂做</h3>
              <p class="text-xs sm:text-sm text-[#79726c]">不加收額外訂做費用</p>
            </div>
          </div>

          <div class="flex flex-col items-center space-y-3 sm:space-y-4">
            <svg class="w-16 h-16 sm:w-22 sm:h-22 text-[#5e8f6d]" viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M28 8v9M24 13l4 4 4-4" />
              <path d="M12 22c10 4 22 4 32 0v18c-10 4-22 4-32 0V22z" />
              <text x="28" y="34" text-anchor="middle" fill="currentColor" stroke="none" font-size="8.5" font-weight="700">FREE</text>
            </svg>
            <div class="space-y-1">
              <h3 class="text-base sm:text-xl lg:text-[22px] font-bold text-[#3c3c3c] leading-snug">免運・舊床免費回收</h3>
              <p class="text-xs sm:text-sm text-[#79726c]">四樓以下免樓層費</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEC 2：品牌精神與故事（淡綠柔霧漸層 + 40px 圓角白卡） -->
    <section id="story" class="relative py-20 sm:py-28 bg-gradient-to-b from-white via-[#eef5f0] to-white overflow-hidden">
      <div class="w-full px-4 sm:px-10 lg:px-16">
        <div class="relative flex flex-col items-center justify-center text-center py-8 sm:py-12">
          <span aria-hidden="true" class="select-none pointer-events-none text-6xl sm:text-[120px] lg:text-[160px] font-extralight tracking-[0.12em] text-[#dce7df]/80 leading-none">
            Yongji
          </span>
          <h2 class="absolute text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">永吉品牌精神</h2>
        </div>

        <p class="text-center text-sm sm:text-base text-[#3c3c3c] mb-12 sm:mb-16">誠信・專業・服務｜價格透明。</p>

        <div v-reveal class="bg-white rounded-[40px] shadow-sm border border-[#e5e7eb]/60 px-6 py-10 sm:px-16 sm:py-16 max-w-6xl mx-auto space-y-12">
          <div class="max-w-2xl mx-auto">
            <img src="/images/evolution-illustration.png" alt="永吉床墊製床工藝插畫" class="w-full h-auto rounded-2xl" />
          </div>

          <div class="max-w-xl mx-auto space-y-6 text-sm sm:text-[15px] text-[#3c3c3c] leading-[1.9] font-normal">
            <p>
              永吉床墊，深耕台灣多年，是一間以「誠信、專業、服務」為核心價值的在地床墊品牌。
            </p>
            <p>
              我們深信，一張好床墊，能改變一個人的生活品質。<br />
              從原料挑選到製造，每一道工序都堅持 <strong>100% 台灣製造</strong>，不虛標、不誇大，確保每位顧客都能安心入眠。
            </p>
            <p class="font-bold text-[#4a7c59] text-base">「我們用平實的價格，打造不平凡的睡眠體驗。」</p>
            <p>
              每一張床墊，皆由多年經驗的製床師傅手工精製而成，<br class="hidden sm:inline" />
              層層把關支撐力與舒適度，從諮詢到售後提供最誠懇、快速的協助，<br class="hidden sm:inline" />
              讓您買得安心、躺得放心、睡得開心。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SEC 3：好眠秘訣 + 水平向右橫移熟睡影片 -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="w-full px-4 sm:px-10 lg:px-16 text-center">
        <div class="relative flex flex-col items-center justify-center py-6 sm:py-10 min-h-[84px] overflow-hidden">
          <span aria-hidden="true" class="select-none pointer-events-none text-[42px] sm:text-[110px] lg:text-[145px] font-extralight tracking-[0.1em] text-[#dce7df]/75 leading-none whitespace-nowrap">
            Good Sleep
          </span>
          <h2 class="absolute text-2xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">好眠秘訣</h2>
        </div>

        <p class="text-sm sm:text-base text-[#3c3c3c] max-w-2xl mx-auto leading-[1.9] mt-2">
          一天有三分之一的時間在床上度過，一張對的床墊，不只是支撐身體的地方，更是讓你重新充電的基地。<br />
          永吉床墊依人體工學設計，從彈性、支撐到透氣度都經過測試，讓你每天醒來都像剛重生一樣輕盈。
        </p>

        <div class="mt-12 rounded-[32px] overflow-hidden border border-[#e5e7eb] bg-[#f5f5f5]">
          <video
            autoplay
            muted
            loop
            playsinline
            poster="/images/product-mattress.png"
            class="w-full max-h-[680px] object-cover"
          >
            <source src="/videos/hybrid-pan.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

    <!-- SEC 4：Springs 獨立筒硬床系列（橫向滑動） -->
    <section id="springs" class="py-20 sm:py-28 bg-white overflow-hidden border-t border-[#f5f5f5]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div class="relative flex flex-col items-center justify-center py-6">
          <span aria-hidden="true" class="select-none pointer-events-none text-6xl sm:text-[120px] font-extralight tracking-[0.12em] text-[#dce7df]/75 leading-none">
            Springs
          </span>
          <h2 class="absolute text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">獨立筒與硬床系列</h2>
        </div>
        <p class="text-base sm:text-lg font-medium text-[#3c3c3c]">獨立筒床墊也有硬挺好支撐。</p>
        <p class="text-sm sm:text-base text-[#79726c] max-w-2xl mx-auto leading-[1.9]">
          獨立筒每顆彈簧各別獨立受力，不會互相牽連、干擾性低，可分別支撐身體不同部位，<br />
          滿足不同身材體型對軟硬度的需求。
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

    <!-- SEC 5：Senses 打造五感舒眠（橫向滑動） -->
    <section class="py-20 sm:py-28 bg-white overflow-hidden border-t border-[#f5f5f5]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div class="relative flex flex-col items-center justify-center py-6">
          <span aria-hidden="true" class="select-none pointer-events-none text-6xl sm:text-[120px] font-extralight tracking-[0.12em] text-[#dce7df]/75 leading-none">
            Senses
          </span>
          <h2 class="absolute text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">打造「五感舒眠」</h2>
        </div>
        <p class="text-base sm:text-lg font-medium text-[#3c3c3c]">真正的好眠，不只是床墊的事。</p>
        <p class="text-sm sm:text-base text-[#79726c] max-w-2xl mx-auto leading-[1.9]">
          從燈光、氣味到音樂，每個細節都在悄悄影響你的入睡速度。搭配永吉床墊的舒適支撐，創造屬於你的五星級睡眠儀式。
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

    <!-- SEC 6：Edge Support 強力泡棉護邊 + 母女坐床沿共讀大圖 -->
    <section id="edge" v-reveal class="py-20 sm:py-28 bg-white border-t border-[#f5f5f5]">
      <div class="w-full px-6 sm:px-12 lg:px-20">
        <div class="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div class="relative flex flex-col items-center justify-center py-6">
            <span aria-hidden="true" class="select-none pointer-events-none text-6xl sm:text-[120px] font-extralight tracking-[0.12em] text-[#dce7df]/75 leading-none">
              Support
            </span>
            <h2 class="absolute text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">強力泡棉護邊</h2>
          </div>
          <p class="text-base sm:text-lg font-medium text-[#3c3c3c]">床墊利用面積提升 16%，坐在床邊也非常穩固安心。</p>
          <p class="text-sm text-[#79726c] leading-relaxed">
            永吉每一張獨立筒床墊皆採用強力泡棉護邊作為床邊強化結構，睡覺翻身睡到床邊也不會滑落。
          </p>
        </div>

        <div class="mb-10 rounded-[32px] overflow-hidden border border-[#e5e7eb] bg-[#f5f5f5]">
          <img
            src="/images/edge-reading.png"
            alt="強力泡棉護邊 坐床沿穩固不塌陷"
            class="w-full max-h-[620px] object-cover"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-[#f5f5f5] rounded-[28px] p-8 space-y-3">
            <span class="text-xs font-bold text-[#4a7c59]">01</span>
            <h3 class="text-xl font-bold text-[#3c3c3c]">使用面積提升 16%</h3>
            <p class="text-sm text-[#79726c] leading-relaxed">
              床沿支撐全面強化，睡到床邊依然平穩踏實，不用擔心滾落或邊緣下陷。
            </p>
          </div>
          <div class="bg-[#f5f5f5] rounded-[28px] p-8 space-y-3">
            <span class="text-xs font-bold text-[#4a7c59]">02</span>
            <h3 class="text-xl font-bold text-[#3c3c3c]">親子共讀好坐不滑落</h3>
            <p class="text-sm text-[#79726c] leading-relaxed">
              孩子坐在床邊穿衣或看繪本，床墊邊框穩固支撐，安全又舒適。
            </p>
          </div>
          <div class="bg-[#f5f5f5] rounded-[28px] p-8 space-y-3">
            <span class="text-xs font-bold text-[#4a7c59]">03</span>
            <h3 class="text-xl font-bold text-[#3c3c3c]">結構耐用不易變形</h3>
            <p class="text-sm text-[#79726c] leading-relaxed">
              減少長期坐臥床沿造成彈簧外擴的風險，延長整張床墊的使用壽命。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SEC 7：Experience 四張 40px 圓角白卡 -->
    <section v-reveal class="bg-[#F5F5F5] py-20 sm:py-28">
      <div class="w-full px-6 sm:px-12 lg:px-20">
        <div class="relative flex flex-col items-center justify-center text-center py-6 mb-10 min-h-[88px] overflow-hidden">
          <span aria-hidden="true" class="select-none pointer-events-none text-[42px] sm:text-[110px] font-extralight tracking-[0.1em] text-[#dce7df] leading-none whitespace-nowrap">
            Experience
          </span>
          <h2 class="absolute px-2 text-xl sm:text-4xl font-black text-[#4a7c59] tracking-wider leading-snug">
            用平實的價格，打造不平凡的睡眠體驗
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <RouterLink
            to="/about"
            class="flex items-center gap-x-4 gap-y-3 rounded-[40px] bg-white p-7 md:flex-col md:px-6 md:py-9 md:text-center hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#f5f5f5] text-[#4a7c59] flex items-center justify-center shrink-0">
              <Factory class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#3c3c3c]">100% 台灣工廠直營</h3>
              <p class="text-xs sm:text-sm text-[#79726c] mt-1">下訂後現做，約 7 個工作天即可安排配送。</p>
            </div>
          </RouterLink>

          <RouterLink
            to="/stores"
            class="flex items-center gap-x-4 gap-y-3 rounded-[40px] bg-white p-7 md:flex-col md:px-6 md:py-9 md:text-center hover:shadow-md transition-shadow"
          >
            <div class="w-12 h-12 rounded-2xl bg-[#f5f5f5] text-[#4a7c59] flex items-center justify-center shrink-0">
              <MapPin class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#3c3c3c]">板橋體驗門市</h3>
              <p class="text-xs sm:text-sm text-[#79726c] mt-1">新北市板橋區四川路一段 85 號，歡迎親自試躺比較。</p>
            </div>
          </RouterLink>

          <div class="flex items-center gap-x-4 gap-y-3 rounded-[40px] bg-white p-7 md:flex-col md:px-6 md:py-9 md:text-center">
            <div class="w-12 h-12 rounded-2xl bg-[#f5f5f5] text-[#4a7c59] flex items-center justify-center shrink-0">
              <Tag class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#3c3c3c]">價格透明不虛標</h3>
              <p class="text-xs sm:text-sm text-[#79726c] mt-1">客製尺寸依對應規格計價，絕不另收訂做費用。</p>
            </div>
          </div>

          <div class="flex items-center gap-x-4 gap-y-3 rounded-[40px] bg-white p-7 md:flex-col md:px-6 md:py-9 md:text-center">
            <div class="w-12 h-12 rounded-2xl bg-[#f5f5f5] text-[#4a7c59] flex items-center justify-center shrink-0">
              <Truck class="w-6 h-6" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#3c3c3c]">免運費・舊床回收</h3>
              <p class="text-xs sm:text-sm text-[#79726c] mt-1">四樓以下免樓層費，買一張免費協助清運舊床一張。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 規格與價錢快速選購區 (#pricing) -->
    <section id="pricing" v-reveal class="py-20 sm:py-28 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center space-y-2 mb-12">
          <h2 class="text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">價格透明・熱門尺寸選購</h2>
          <p class="text-sm sm:text-base text-[#79726c]">挑選你的床架尺寸，免運費・四樓以下免樓層費</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#f5f5f5] rounded-[36px] p-6 sm:p-10">
          <div class="md:col-span-6">
            <img src="/images/product-mattress.png" alt="1085 強化硬式獨立筒床墊" class="w-full aspect-4/3 object-cover rounded-3xl bg-white" />
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
                <span class="text-xs text-[#79726c] block">工廠直營透明價</span>
                <span class="text-2xl sm:text-3xl font-black text-[#3c3c3c]">{{ formatNTD(selectedVariant.price) }}</span>
              </div>

              <button
                @click="cart.addItem(mainMattress, selectedVariant, 1)"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm font-bold transition-colors cursor-pointer"
              >
                <ShoppingBag class="w-4 h-4" />
                <span>加入購物車</span>
              </button>
            </div>

            <div class="flex flex-wrap gap-4 text-xs text-[#79726c]">
              <span class="inline-flex items-center gap-1"><Check class="w-3.5 h-3.5 text-[#4a7c59]" /> 100% 台灣製造</span>
              <span class="inline-flex items-center gap-1"><Check class="w-3.5 h-3.5 text-[#4a7c59]" /> 舊床免費清運</span>
              <RouterLink to="/product/yongji-hard-1085" class="text-[#4a7c59] hover:underline font-medium">
                查看完整商品規格 ›
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEC 8：Collection 永吉床墊商品一覽 -->
    <section class="py-16 sm:py-24 bg-[#F5F5F5]">
      <div class="w-full px-6 sm:px-12 lg:px-20">
        <div class="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div class="relative flex flex-col items-center justify-center py-6 min-h-[88px] overflow-hidden">
            <span aria-hidden="true" class="select-none pointer-events-none text-[42px] sm:text-[105px] font-extralight tracking-[0.12em] text-[#dce7df] leading-none whitespace-nowrap">
              Collection
            </span>
            <h2 class="absolute px-2 text-xl sm:text-4xl font-black text-[#4a7c59] tracking-wider leading-snug">
              永吉床墊・德國優客・精製床包一覽
            </h2>
          </div>
          <RouterLink to="/shop" class="inline-block px-6 py-2 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-xs font-bold transition-colors">
            瀏覽全部商品
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RouterLink
            v-for="item in otherProducts"
            :key="item.id"
            :to="`/product/${item.slug}`"
            class="group bg-white rounded-[28px] overflow-hidden border border-[#e5e7eb] hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div class="aspect-4/3 overflow-hidden bg-[#f5f5f5]">
              <img :src="item.images[0]" :alt="item.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-[#4a7c59]">{{ item.badge || item.firmness }}</span>
                <span class="text-sm font-black text-[#3c3c3c]">{{ formatNTD(item.basePrice) }} 起</span>
              </div>
              <h3 class="text-lg font-bold text-[#3c3c3c] group-hover:text-[#4a7c59] transition-colors">{{ item.name }}</h3>
              <p class="text-xs text-[#79726c] line-clamp-2">{{ item.subtitle }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- SEC 9：FAQ 解決你對床墊的疑問（四大分類 Tab 切換） -->
    <section id="faq" class="py-20 sm:py-28 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex flex-col items-center justify-center text-center py-6 mb-8">
          <span aria-hidden="true" class="select-none pointer-events-none text-6xl sm:text-[110px] font-extralight tracking-[0.12em] text-[#dce7df]/75 leading-none">
            FAQ
          </span>
          <h2 class="absolute text-3xl sm:text-4xl font-black text-[#4a7c59] tracking-wider">解決你對床墊的疑問</h2>
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

    <!-- 右下角森綠圓形浮動客服氣泡 -->
    <div class="fixed bottom-5 right-5 z-40">
      <div v-if="chatOpen" class="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-[#e5e7eb] p-4 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-[#3c3c3c]">永吉床墊諮詢小幫手</span>
          <button @click="chatOpen = false" class="text-[#79726c] hover:text-[#3c3c3c] cursor-pointer"><X class="w-4 h-4" /></button>
        </div>
        <p class="text-xs text-[#79726c] leading-relaxed">
          不知道床墊怎麼選嗎？歡迎直接加 LINE 諮詢，或來板橋四川路一段 85 號親自試躺！
        </p>
        <div class="flex gap-2">
          <a
            href="https://line.me/ti/p/bNhOSn8xqz"
            target="_blank"
            rel="noopener"
            class="flex-1 text-center py-1.5 rounded-full bg-[#4a7c59] text-white text-xs font-medium"
          >
            LINE 線上諮詢
          </a>
          <RouterLink to="/stores" @click="chatOpen = false" class="flex-1 text-center py-1.5 rounded-full bg-[#f5f5f5] hover:bg-[#e5e6e0] text-xs font-medium text-[#3c3c3c]">
            門市資訊
          </RouterLink>
        </div>
      </div>

      <button
        @click="chatOpen = !chatOpen"
        class="w-12 h-12 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 cursor-pointer ml-auto"
        aria-label="線上諮詢"
      >
        <MessageCircle class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>
