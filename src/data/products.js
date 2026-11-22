/**
 * 永吉床墊產品分類定義（正確床款清單待 11/25 到店確認後更新）
 */
export const CATEGORIES = [
  { id: 'all', name: '全部展示床款', desc: '款式與價格以門市及 LINE 報價為準' },
]

export const LINE_URL = 'https://line.me/ti/p/~h668899'
export const STORE_PHONE_DISPLAY = '02-8941-4197'
export const STORE_PHONE_TEL = 'tel:0289414197'
export const STORE_ADDRESS = '新北市永和區中正路18號'
export const STORE_MAP_URL = 'https://www.google.com/maps/search/?api=1&query=新北市永和區中正路18號'

/**
 * 產品展示資料（暫以門市展示款呈現，價格以門市與 LINE 報價為準）
 */
export const PRODUCTS = [
  {
    id: 'yongji-model-01',
    slug: 'yongji-model-01',
    name: '精選展示床款 01',
    subtitle: '先說你的睡感，闆娘幫你評估適不適合試躺',
    category: 'featured',
    badge: '01 門市展示',
    firmness: '歡迎到店體驗軟硬度',
    warrantyYears: 10,
    basePrice: 0,
    images: ['/images/milo.jpg', '/images/venus.jpg', '/images/sleep-elf.jpg'],
    highlights: [
      '先聊感受、縮小選項，適合拿不定軟硬度的睡眠需求',
      '100% 台灣工廠直營製作，強力泡棉護邊穩固不滑落',
      '展示尺寸與當期價格，歡迎透過 LINE（h668899）或到店確認',
      '免運費・四樓以下免樓層費・買一張免費回收舊床一張',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 0 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 0 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 0 },
      { id: 'king', name: '雙人特大 6×7 尺（可客製）', size: '180 × 212 cm', price: 0 },
    ],
    specs: [
      { label: '試躺建議', value: '適合「軟硬拿不定」或首次到店試躺者作為基準床款比較' },
      { label: '護邊設計', value: '強力泡棉護邊強化，床墊利用面積提升 16%' },
      { label: '客製尺寸', value: '支援方形／長方形訂做（最大 212×212 cm），不另收訂做費' },
      { label: '產地與製作', value: '100% 台灣製造，價格以門市與 LINE 報價為準' },
    ],
    description:
      '不先背複雜的材質名詞，只要告訴闆娘你現在的床睡起來哪裡不習慣，到店試躺就能直接感受貼合與支撐的平衡點。正確款式與價格歡迎洽詢門市或闆娘 LINE（h668899）。',
  },
  {
    id: 'yongji-model-02',
    slug: 'yongji-model-02',
    name: '精選展示床款 02',
    subtitle: '展示尺寸與價格，以門市與 LINE 報價為準',
    category: 'featured',
    badge: '02 門市展示',
    firmness: '雙人低干擾體驗',
    warrantyYears: 10,
    basePrice: 0,
    images: ['/images/venus.jpg', '/images/milo.jpg', '/images/sleep-elf.jpg'],
    highlights: [
      '適合「兩人感受不同」的雙人共睡比較',
      '獨立筒各別受力，同時兼顧側睡服貼與仰睡腰部撐托',
      '展示尺寸與當期報價，請透過 LINE（h668899）預約確認',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 0 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 0 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 0 },
    ],
    specs: [
      { label: '推薦族群', value: '夫妻雙人共睡、淺眠怕翻身晃動者' },
      { label: '結構特色', value: '低干擾獨立筒 + 親膚透氣舒適層 + 強力泡棉護邊' },
      { label: '價格與配送', value: '價格以門市與 LINE 報價為準｜免運費・舊床免費回收' },
    ],
    description:
      '當兩個人對軟硬度的感受不同時，歡迎先在 LINE 說明各自睡姿與在意的地方，再到永和中正店一起試躺找出彼此都舒服的交集。',
  },
  {
    id: 'yongji-model-03',
    slug: 'yongji-model-03',
    name: '精選展示床款 03',
    subtitle: '先聊需求，再決定是否列入試躺',
    category: 'featured',
    badge: '03 門市展示',
    firmness: '高支撐護脊體驗',
    warrantyYears: 10,
    basePrice: 0,
    images: ['/images/sleep-elf.jpg', '/images/milo.jpg', '/images/venus.jpg'],
    highlights: [
      '適合替長輩選床、或喜歡挺拔支撐感的使用者',
      '起身與坐床沿支撐穩定，腰背不易下陷',
      '可先透過 LINE（h668899）說明需求，確認後再到店比較',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 0 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 0 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 0 },
    ],
    specs: [
      { label: '推薦族群', value: '長輩護脊需求、習慣傳統偏硬睡感者' },
      { label: '護邊強化', value: '強力泡棉護邊，長輩坐床沿起身更加穩固省力' },
      { label: '價格說明', value: '價格以門市與 LINE 報價為準' },
    ],
    description:
      '替長輩選床不用靠猜測！先整理平常睡眠習慣與起身需求，透過穩固不塌陷的結構給予脊椎與腰部最踏實的承托。',
  },
]

/**
 * 永吉床墊體驗門市資料（永和中正店）
 */
export const STORES = [
  {
    id: 'yonghe-zhongzheng',
    region: '新北永和',
    name: '永吉床墊｜永和中正店',
    address: '新北市永和區中正路18號',
    hours: '採預約／歡迎先透過 LINE（h668899）確認時段',
    phone: '02-8941-4197',
    features: ['闆娘一對一縮小選床範圍', '多款展示床款現場試躺', '不急著推銷・實際躺過再決定'],
    image: '/images/store-showroom.png',
  },
]

/**
 * 格式化新台幣金額（若尚未標定價格則回傳門市與 LINE 報價提示）
 */
export function formatNTD(amount) {
  if (!amount || Number(amount) <= 0) {
    return '價格以門市與 LINE 報價為準'
  }
  return `NT$ ${Number(amount).toLocaleString('zh-TW')}`
}
