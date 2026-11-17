<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle2, Truck } from 'lucide-vue-next'
import { useCartStore } from '../stores/cart'
import { formatNTD } from '../data/products'

const cart = useCartStore()
const orderCompleted = ref(false)
const customerName = ref('')
const customerPhone = ref('')

function handleEsc(e) {
  if (e.key === 'Escape' && cart.isDrawerOpen) {
    resetAndClose()
  }
}

onMounted(() => window.addEventListener('keydown', handleEsc))
onUnmounted(() => window.removeEventListener('keydown', handleEsc))

function submitMockOrder() {
  if (!customerName.value.trim() || !customerPhone.value.trim()) return
  orderCompleted.value = true
  cart.clearCart()
}

function resetAndClose() {
  orderCompleted.value = false
  customerName.value = ''
  customerPhone.value = ''
  cart.closeDrawer()
}
</script>

<template>
  <transition name="fade">
    <div
      v-if="cart.isDrawerOpen"
      @click="resetAndClose"
      class="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs"
    ></div>
  </transition>

  <transition name="slide-right">
    <aside
      v-if="cart.isDrawerOpen"
      class="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
    >
      <div class="px-6 py-4 bg-white border-b border-[#e5e7eb] flex items-center justify-between">
        <div class="flex items-center gap-2">
          <ShoppingBag class="w-5 h-5 text-[#4a7c59]" />
          <h2 class="text-lg font-bold text-[#3c3c3c]">我的購物車 ({{ cart.totalCount }})</h2>
        </div>
        <button
          @click="resetAndClose"
          class="p-1.5 rounded-full hover:bg-[#f5f5f5] text-[#79726c] transition-colors cursor-pointer"
          aria-label="關閉購物車"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <div v-if="orderCompleted" class="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
        <div class="w-16 h-16 rounded-full bg-[#eef5f0] text-[#4a7c59] flex items-center justify-center">
          <CheckCircle2 class="w-9 h-9" />
        </div>
        <h3 class="text-xl font-bold text-[#3c3c3c]">模擬訂單已成立！</h3>
        <p class="text-sm text-[#79726c] leading-relaxed">
          感謝 <strong>{{ customerName }}</strong> 的選購！<br />
          此為純前端展示環境，未進行實際扣款與配送。
        </p>
        <button
          @click="resetAndClose"
          class="mt-4 px-6 py-2.5 rounded-full bg-[#4a7c59] text-white text-sm font-bold hover:bg-[#3a6346] transition-colors cursor-pointer"
        >
          繼續逛逛
        </button>
      </div>

      <div v-else-if="cart.items.length === 0" class="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
        <div class="w-16 h-16 rounded-2xl bg-[#f5f5f5] text-[#79726c] flex items-center justify-center">
          <ShoppingBag class="w-8 h-8" />
        </div>
        <div>
          <h3 class="text-base font-bold text-[#3c3c3c]">購物車目前是空的</h3>
          <p class="text-sm text-[#79726c] mt-1">挑一張適合您的永吉好床或床包組吧！</p>
        </div>
        <RouterLink
          to="/shop"
          @click="cart.closeDrawer"
          class="px-6 py-2.5 rounded-full bg-[#4a7c59] text-white text-sm font-bold hover:bg-[#3a6346] transition-colors"
        >
          前往探索商品
        </RouterLink>
      </div>

      <template v-else>
        <div class="px-6 py-2.5 bg-[#eef5f0] text-xs text-[#3c3c3c] flex items-center gap-2 border-b border-[#e5e7eb]">
          <Truck class="w-4 h-4 text-[#4a7c59] shrink-0" />
          <span>免運費・四樓以下免樓層費・免費回收舊床一張</span>
        </div>

        <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-[#f5f5f5]">
          <div
            v-for="item in cart.items"
            :key="item.key"
            class="flex gap-4 bg-white p-3.5 rounded-2xl border border-[#e5e7eb]"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-20 h-20 rounded-xl object-cover bg-[#f5f5f5] shrink-0"
            />
            <div class="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-2">
                  <RouterLink
                    :to="`/product/${item.slug}`"
                    @click="cart.closeDrawer"
                    class="font-bold text-sm text-[#3c3c3c] hover:text-[#4a7c59] truncate"
                  >
                    {{ item.name }}
                  </RouterLink>
                  <button
                    @click="cart.removeItem(item.key)"
                    class="text-[#79726c] hover:text-red-500 transition-colors cursor-pointer"
                    aria-label="移除商品"
                  >
                    <Trash2 class="w-4 h-4" />
                  </button>
                </div>
                <p class="text-xs text-[#79726c] mt-0.5">{{ item.variantName }}</p>
              </div>

              <div class="flex items-center justify-between mt-3">
                <div class="inline-flex items-center border border-[#e5e7eb] rounded-full bg-[#f5f5f5]">
                  <button
                    @click="cart.updateQuantity(item.key, -1)"
                    class="p-1.5 hover:text-[#4a7c59] cursor-pointer"
                    aria-label="減少數量"
                  >
                    <Minus class="w-3.5 h-3.5" />
                  </button>
                  <span class="px-2.5 text-xs font-bold">{{ item.quantity }}</span>
                  <button
                    @click="cart.updateQuantity(item.key, 1)"
                    class="p-1.5 hover:text-[#4a7c59] cursor-pointer"
                    aria-label="增加數量"
                  >
                    <Plus class="w-3.5 h-3.5" />
                  </button>
                </div>
                <span class="text-sm font-bold text-[#3c3c3c]">
                  {{ formatNTD(item.price * item.quantity) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-6 bg-white border-t border-[#e5e7eb] space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-[#79726c]">小計（價格透明・免運費）</span>
            <span class="text-xl font-black text-[#3c3c3c]">{{ formatNTD(cart.totalPrice) }}</span>
          </div>

          <form @submit.prevent="submitMockOrder" class="space-y-2.5">
            <div class="grid grid-cols-2 gap-2">
              <input
                v-model="customerName"
                type="text"
                required
                placeholder="收件人姓名"
                class="px-3 py-2 rounded-xl border border-[#e5e7eb] text-sm focus:outline-none focus:border-[#4a7c59]"
              />
              <input
                v-model="customerPhone"
                type="tel"
                required
                placeholder="聯絡電話"
                class="px-3 py-2 rounded-xl border border-[#e5e7eb] text-sm focus:outline-none focus:border-[#4a7c59]"
              />
            </div>
            <button
              type="submit"
              class="w-full py-3 rounded-full bg-[#4a7c59] hover:bg-[#3a6346] text-white text-sm font-bold transition-colors cursor-pointer"
            >
              送出模擬訂單
            </button>
          </form>
        </div>
      </template>
    </aside>
  </transition>
</template>
