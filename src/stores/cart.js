import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

const STORAGE_KEY = 'miantofu_cart_v1'

/**
 * 購物車狀態管理（純前端 localStorage 持久化）
 */
export const useCartStore = defineStore('cart', () => {
  const saved = (() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })()

  const items = ref(Array.isArray(saved) ? saved : [])
  const isDrawerOpen = ref(false)

  // 同步寫入 localStorage
  watch(
    items,
    (val) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
      } catch {
        // 忽略無痕模式或寫入限制
      }
    },
    { deep: true }
  )

  const totalCount = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  function openDrawer() {
    isDrawerOpen.value = true
  }

  function closeDrawer() {
    isDrawerOpen.value = false
  }

  function addItem(product, variant, quantity = 1) {
    const key = `${product.id}__${variant.id}`
    const existing = items.value.find((item) => item.key === key)

    if (existing) {
      existing.quantity += quantity
    } else {
      items.value.push({
        key,
        productId: product.id,
        slug: product.slug,
        name: product.name,
        variantId: variant.id,
        variantName: variant.name,
        price: variant.price,
        image: product.images[0],
        quantity,
      })
    }
    isDrawerOpen.value = true
  }

  function updateQuantity(key, delta) {
    const target = items.value.find((item) => item.key === key)
    if (!target) return
    const nextQty = target.quantity + delta
    if (nextQty <= 0) {
      removeItem(key)
    } else {
      target.quantity = nextQty
    }
  }

  function removeItem(key) {
    items.value = items.value.filter((item) => item.key !== key)
  }

  function clearCart() {
    items.value = []
  }

  return {
    items,
    isDrawerOpen,
    totalCount,
    totalPrice,
    openDrawer,
    closeDrawer,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  }
})

