/**
 * 永吉床墊產品分類定義（僅保留三款主力床墊）
 */
export const CATEGORIES = [
  { id: 'all', name: '全部床款', desc: '先看三張主力，不用一次看三十張' },
]

/**
 * 產品資料（僅保留 米羅、維納斯、睡精靈 三款，使用對應實圖）
 */
export const PRODUCTS = [
  {
    id: 'yongji-milo',
    slug: 'yongji-milo',
    name: '米羅',
    subtitle: '先說你的睡感，再看它值不值得試',
    category: 'featured',
    badge: '01 主力床款',
    firmness: '均衡支撐',
    warrantyYears: 10,
    basePrice: 15800,
    images: ['/images/milo.jpg', '/images/venus.jpg', '/images/sleep-elf.jpg'],
    highlights: [
      '先聊感受、縮小選項，適合拿不定軟硬度的睡眠需求',
      '100% 台灣工廠直營製作，強力泡棉護邊穩固不滑落',
      '展示尺寸與當期優惠，歡迎透過 LINE 或到店確認試躺',
      '免運費・四樓以下免樓層費・買一張免費回收舊床一張',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 13800 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 15800 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 18800 },
      { id: 'king', name: '雙人特大 6×7 尺（可客製）', size: '180 × 212 cm', price: 21800 },
    ],
    specs: [
      { label: '試躺建議', value: '適合「軟硬拿不定」或首次到店試躺者作為基準床款比較' },
      { label: '護邊設計', value: '強力泡棉護邊強化，床墊利用面積提升 16%' },
      { label: '客製尺寸', value: '支援方形／長方形訂做（最大 212×212 cm），不另收訂做費' },
      { label: '產地與製作', value: '100% 台灣製造，下訂後現做約 7 個工作天' },
    ],
    description:
      '米羅是許多人到店比較的第一張基準床。不先背複雜的材質名詞，只要告訴闆娘你現在的床睡起來哪裡不習慣，躺上米羅就能立刻感受到貼合與支撐的平衡點。',
  },
  {
    id: 'yongji-venus',
    slug: 'yongji-venus',
    name: '維納斯',
    subtitle: '展示尺寸與價格，以當期確認為準',
    category: 'featured',
    badge: '02 主力床款',
    firmness: '柔中帶撐・雙人低干擾',
    warrantyYears: 10,
    basePrice: 18800,
    images: ['/images/venus.jpg', '/images/milo.jpg', '/images/sleep-elf.jpg'],
    highlights: [
      '專為「兩人感受不同」打造，翻身互不干擾',
      '獨立筒各別受力，同時兼顧側睡服貼與仰睡腰部撐托',
      '展示尺寸與價格以當期確認為準，可先 LINE 預約試躺時段',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 16800 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 18800 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 21800 },
    ],
    specs: [
      { label: '推薦族群', value: '夫妻雙人共睡、淺眠怕翻身晃動者' },
      { label: '結構特色', value: '低干擾獨立筒 + 親膚透氣舒適層 + 強力泡棉護邊' },
      { label: '配送服務', value: '免運費・四樓以下免樓層費・免費回收舊床' },
    ],
    description:
      '當兩個人對軟硬度的感受不同時，維納斯往往是最容易找到共識的交集床款。安穩吸收翻身震動，讓彼此在同張床上都能睡得深沉。',
  },
  {
    id: 'yongji-sleep-elf',
    slug: 'yongji-sleep-elf',
    name: '睡精靈',
    subtitle: '先聊需求，再決定是否列入試躺',
    category: 'featured',
    badge: '03 主力床款',
    firmness: '紮實偏硬・高支撐',
    warrantyYears: 10,
    basePrice: 16800,
    images: ['/images/sleep-elf.jpg', '/images/milo.jpg', '/images/venus.jpg'],
    highlights: [
      '專為替長輩選床、或喜歡挺拔支撐感的使用者調校',
      '起身與坐床沿支撐穩定，腰背不易下陷',
      '可先透過 LINE 說明長輩睡姿與習慣，確認後再到店比較',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 14800 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 16800 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 19800 },
    ],
    specs: [
      { label: '推薦族群', value: '長輩護脊需求、習慣傳統偏硬睡感者' },
      { label: '護邊強化', value: '強力泡棉護邊，長輩坐床沿起身更加穩固省力' },
    ],
    description:
      '替長輩選床不用靠猜測！先整理平常睡眠習慣與起身需求，睡精靈以穩定不塌陷的紮實結構，給予脊椎與腰部最踏實的承托。',
  },
]

/**
 * 永吉床墊體驗門市資料（永和中正店 + 板橋旗艦門市）
 */
export const STORES = [
  {
    id: 'yonghe-zhongzheng',
    region: '新北永和',
    name: '永吉床墊｜永和中正店（闆娘駐店）',
    address: '新北市永和區中正路（出發前請先透過 LINE 確認展示與預約時段）',
    hours: '採 LINE 預約制・先聊需求再安心慢慢試躺',
    phone: '02-2951-2738',
    features: ['闆娘一對一縮小選床範圍', '米羅／維納斯／睡精靈主力展示', '不急著推銷・實際躺過再決定'],
    image: '/images/store-showroom.png',
  },
  {
    id: 'banqiao-showroom',
    region: '新北板橋',
    name: '永吉床墊｜板橋旗艦體驗門市',
    address: '新北市板橋區四川路一段 85 號',
    hours: '歡迎來電或透過 LINE 預約試躺時段',
    phone: '02-2951-2738',
    features: ['台灣工廠直營價格透明', '米羅／維納斯／睡精靈試躺比較', '支援最大 212×212cm 客製尺寸諮詢'],
    image: '/images/milo.jpg',
  },
]

/**
 * 格式化新台幣金額
 */
export function formatNTD(amount) {
  return `NT$ ${Number(amount).toLocaleString('zh-TW')}`
}
