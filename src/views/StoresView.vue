<script setup>
import { ref } from 'vue'
import { MapPin, Clock, Phone, CheckCircle2, X, Calendar } from 'lucide-vue-next'
import { LINE_URL, STORE_MAP_URL, STORE_PHONE_TEL, STORES } from '../data/products'

const bookingStore = ref(null)
const bookingName = ref('')
const bookingDate = ref('')
const bookingSuccess = ref(false)

function openBooking(store) {
  bookingStore.value = store
  bookingSuccess.value = false
}

function submitBooking() {
  if (!bookingName.value.trim() || !bookingDate.value) return
  bookingSuccess.value = true
}

function closeBooking() {
  bookingStore.value = null
  bookingName.value = ''
  bookingDate.value = ''
  bookingSuccess.value = false
}
</script>

<template>
  <div class="w-full px-6 sm:px-12 lg:px-20 py-12 bg-white">
    <!-- 標頭 -->
    <div class="bg-[#f5f5f5] rounded-3xl p-8 sm:p-10 mb-10 border border-[#e5e7eb]">
      <span class="text-xs font-bold tracking-widest text-[#4a7c59] uppercase">CONTACT & SHOWROOM</span>
      <h1 class="text-3xl sm:text-4xl font-black text-[#3c3c3c] mt-1">聯絡我們・永和中正店</h1>
      <p class="text-sm text-[#79726c] mt-2">
        床墊沒有絕對的好壞，只有適不適合！歡迎先透過電話或 LINE（h668899）詢問闆娘，再來永和中正店慢慢試躺比較。
      </p>
    </div>

    <!-- 門市卡片（永和中正店） -->
    <div class="max-w-4xl mx-auto">
      <article
        v-for="store in STORES"
        :key="store.id"
        class="bg-white rounded-3xl border border-[#e5e7eb] overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-sm"
      >
        <div class="md:col-span-6 bg-[#f5f5f5] relative min-h-[260px]">
          <img :src="store.image" :alt="store.name" class="w-full h-full object-cover" />
          <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 text-[#4a7c59] text-xs font-bold">
            {{ store.region }}
          </span>
        </div>

        <div class="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-[#3c3c3c]">{{ store.name }}</h2>

            <div class="space-y-2.5 text-sm text-[#79726c]">
              <div class="flex items-start gap-2">
                <MapPin class="w-4 h-4 text-[#4a7c59] shrink-0 mt-0.5" />
                <span>{{ store.address }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Clock class="w-4 h-4 text-[#4a7c59] shrink-0" />
                <span>{{ store.hours }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Phone class="w-4 h-4 text-[#4a7c59] shrink-0" />
                <a :href="STORE_PHONE_TEL" class="text-[#3c3c3c] font-bold hover:text-[#4a7c59]">{{ store.phone }}</a>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 pt-2">
              <span
                v-for="feat in store.features"
                :key="feat"
                class="px-3 py-1 rounded-full bg-[#eef5f0] text-[#4a7c59] text-xs font-medium"
              >
                {{ feat }}
              </span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2.5">
            <a
              :href="LINE_URL"
              target="_blank"
              rel="noopener"
              class="flex-1 text-center py-3 px-4 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm font-bold transition-colors"
            >
              LINE 預約試躺
            </a>
            <a
              :href="STORE_MAP_URL"
              target="_blank"
              rel="noopener"
              class="py-3 px-5 rounded-full bg-[#f5f5f5] hover:bg-[#e5e6e0] text-[#3c3c3c] text-sm font-bold transition-colors"
            >
              Google 地圖
            </a>
            <button
              @click="openBooking(store)"
              class="w-full py-2.5 px-4 rounded-full border border-[#e5e7eb] hover:border-[#4a7c59] text-[#79726c] hover:text-[#4a7c59] text-xs font-bold transition-colors cursor-pointer"
            >
              站內模擬預約表單
            </button>
          </div>
        </div>
      </article>
    </div>

    <!-- 預約彈窗 -->
    <transition name="fade">
      <div
        v-if="bookingStore"
        class="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4"
      >
        <div class="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-5">
          <button
            @click="closeBooking"
            class="absolute top-5 right-5 p-1.5 rounded-full hover:bg-[#f5f5f5] text-[#79726c] cursor-pointer"
          >
            <X class="w-5 h-5" />
          </button>

          <div v-if="bookingSuccess" class="text-center py-6 space-y-3">
            <CheckCircle2 class="w-12 h-12 text-[#4a7c59] mx-auto" />
            <h3 class="text-xl font-bold text-[#3c3c3c]">預約成功（模擬）！</h3>
            <p class="text-sm text-[#79726c]">
              已為 <strong>{{ bookingName }}</strong> 保留 {{ bookingDate }} 於
              <strong>{{ bookingStore.name }}</strong> 的試躺時段。
            </p>
            <button
              @click="closeBooking"
              class="mt-2 px-6 py-2.5 rounded-full bg-[#4a7c59] text-white text-sm font-bold cursor-pointer"
            >
              完成
            </button>
          </div>

          <template v-else>
            <div>
              <div class="inline-flex items-center gap-1.5 text-xs font-bold text-[#4a7c59]">
                <Calendar class="w-4 h-4" /> 線上預約試躺
              </div>
              <h3 class="text-xl font-bold text-[#3c3c3c] mt-1">{{ bookingStore.name }}</h3>
              <p class="text-xs text-[#79726c] mt-1">{{ bookingStore.address }}</p>
            </div>

            <form @submit.prevent="submitBooking" class="space-y-3">
              <div>
                <label class="block text-xs font-bold text-[#3c3c3c] mb-1">您的姓名</label>
                <input
                  v-model="bookingName"
                  type="text"
                  required
                  placeholder="請輸入姓名"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-[#e5e7eb] text-sm focus:outline-none focus:border-[#4a7c59]"
                />
              </div>
              <div>
                <label class="block text-xs font-bold text-[#3c3c3c] mb-1">期望參觀日期</label>
                <input
                  v-model="bookingDate"
                  type="date"
                  required
                  class="w-full px-3.5 py-2.5 rounded-xl border border-[#e5e7eb] text-sm focus:outline-none focus:border-[#4a7c59]"
                />
              </div>
              <button
                type="submit"
                class="w-full py-3 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm font-bold transition-colors cursor-pointer"
              >
                確認送出預約
              </button>
            </form>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>
