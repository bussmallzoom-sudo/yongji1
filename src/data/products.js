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
 * 產品展示資料（已移除法規禁用字與待確認規格，價格以門市與 LINE 報價為準）
 */
export const PRODUCTS = [
  {
    id: 'yongji-model-01',
    slug: 'yongji-model-01',
    name: '精選展示床款 01',
    subtitle: '先說你的睡感，闆娘幫你評估適不適合試躺',
    category: 'featured',
    badge: '01 門市展示',
    firmness: '均衡支撐・歡迎到店試躺',
    images: ['/images/milo.jpg', '/images/venus.jpg', '/images/sleep-elf.jpg'],
    highlights: [
      '先聊感受、縮小選項，適合拿不定軟硬度的睡眠需求',
      '展示尺寸與當期價格，歡迎透過 LINE（h668899）或到店確認',
      '到店可用相同姿勢慢慢比較，再放心決定',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 0 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 0 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 0 },
      { id: 'king', name: '雙人特大 6×7 尺', size: '180 × 212 cm', price: 0 },
    ],
    specs: [
      { label: '試躺建議', value: '適合「軟硬拿不定」或首次到店試躺者作為基準床款比較' },
      { label: '邊緣支撐', value: '床緣穩固設計，坐在床邊穿鞋或起身不易滑落' },
      { label: '尺寸與價格', value: '展示尺寸與當期價格，請以門市與 LINE（h668899）報價為準' },
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
    images: ['/images/venus.jpg', '/images/milo.jpg', '/images/sleep-elf.jpg'],
    highlights: [
      '適合「兩人感受不同」的雙人共睡比較',
      '獨立筒各別受力，減少翻身時的彼此干擾',
      '展示尺寸與當期報價，請透過 LINE（h668899）預約確認',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 0 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 0 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 0 },
    ],
    specs: [
      { label: '推薦族群', value: '夫妻雙人共睡、淺眠怕翻身晃動者' },
      { label: '睡感特色', value: '兼顧側睡服貼與仰睡穩定支撐，降低雙人共睡干擾' },
      { label: '尺寸與價格', value: '價格以門市與 LINE（h668899）報價為準' },
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
    firmness: '偏硬、支撐紮實、不易下陷',
    images: ['/images/sleep-elf.jpg', '/images/milo.jpg', '/images/venus.jpg'],
    highlights: [
      '適合長輩喜歡偏硬、好翻身，或習慣挺拔睡感的使用者',
      '躺下去整個人被穩穩托住，起身坐床沿穩固好施力',
      '可先透過 LINE（h668899）說明需求，確認後再到店比較',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 0 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 0 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 0 },
    ],
    specs: [
      { label: '推薦族群', value: '長輩喜歡偏硬、好翻身，或偏好紮實睡感者' },
      { label: '睡感描述', value: '偏硬、支撐紮實、不易下陷，躺下去整個人被穩穩托住' },
      { label: '價格說明', value: '價格以門市與 LINE（h668899）報價為準' },
    ],
    description:
      '替長輩選床不用靠猜測！先整理平常睡眠習慣與起身需求，偏硬、支撐紮實、不易下陷的睡感讓長輩翻身與起身都更輕鬆。',
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
 * 格式化價格提示（目前統一以門市與 LINE 報價為準）
 */
export function formatNTD(amount) {
  if (!amount || Number(amount) <= 0) {
    return '價格以門市與 LINE 報價為準'
  }
  return `NT$ ${Number(amount).toLocaleString('zh-TW')}`
}
