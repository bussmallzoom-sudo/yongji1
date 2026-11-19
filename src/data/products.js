/**
 * 永吉床墊產品分類定義（融合主力候選床與永吉全系列）
 */
export const CATEGORIES = [
  { id: 'all', name: '全部商品', desc: '先看三張主力，再依需求挑選' },
  { id: 'featured', name: '主力推薦床款', desc: '米羅・維納斯・睡精靈' },
  { id: 'mattress', name: '台灣製獨立筒', desc: '100% 台灣製造・硬床護脊首選' },
  { id: 'youke', name: '德國優客系列', desc: '以經驗的洗鍊，創造未來' },
  { id: 'bedding', name: '精製床包組', desc: 'MIT 精製天絲四件式床包組' },
]

/**
 * 產品資料（以最新提供之主力床款為主軸，並保留永吉經典系列）
 */
export const PRODUCTS = [
  {
    id: 'yongji-milo',
    slug: 'yongji-milo',
    name: '米羅',
    subtitle: '先說你的睡感，再看它值不值得試｜均衡支撐・入門首選',
    category: 'featured',
    badge: '主力推薦 01',
    firmness: '適中均衡支撐',
    warrantyYears: 10,
    basePrice: 15800,
    images: ['/images/product-mattress.png', '/images/hero-bedroom.png'],
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
    subtitle: '夫妻雙人共眠交集首選｜低干擾獨立筒 × 細膩包覆感',
    category: 'featured',
    badge: '主力推薦 02',
    firmness: '柔中帶撐・雙人低干擾',
    warrantyYears: 10,
    basePrice: 18800,
    images: ['/images/hero-bedroom.png', '/images/product-mattress.png'],
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
    subtitle: '先聊需求再決定是否列入試躺｜紮實護脊 × 長輩與硬床愛好者推薦',
    category: 'featured',
    badge: '主力推薦 03',
    firmness: '紮實偏硬・高支撐',
    warrantyYears: 10,
    basePrice: 16800,
    images: ['/images/edge-reading.png', '/images/product-mattress.png'],
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
  {
    id: 'yongji-hard-1085',
    slug: 'yongji-hard-1085',
    name: '1085 強化硬式獨立筒床墊',
    subtitle: '5 尺放入 1,116 顆彈簧｜高支撐護脊・綿密服貼硬床',
    category: 'mattress',
    badge: '護脊熱銷',
    firmness: '強化偏硬',
    warrantyYears: 10,
    basePrice: 15800,
    images: ['/images/product-mattress.png', '/images/hero-bedroom.png'],
    highlights: [
      '縮小彈簧徑距，5 尺床墊放入 1,116 顆獨立筒彈簧',
      '接近傳統聯結式床墊的硬挺躺感，同時保有獨立筒服貼優點',
      '免運費・四樓以下免樓層費・免費回收清運舊床墊',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 13800 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 15800 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 18800 },
    ],
    specs: [
      { label: '彈簧結構', value: '5 尺床墊放入 1,116 顆獨立筒彈簧' },
      { label: '產地', value: '100% 台灣工廠直營製造' },
    ],
    description:
      '將獨立筒彈簧縮小並提高密度，創造出接近傳統床墊的硬挺支撐力，同時保有獨立筒多點服貼、翻身低干擾的優點。',
  },
  {
    id: 'yongji-black-knight',
    slug: 'yongji-black-knight',
    name: '黑武士獨立筒床墊',
    subtitle: '2.4mm 加粗硬式獨立筒 × 透氣舒適層｜撐腰首選',
    category: 'mattress',
    badge: '工廠推薦',
    firmness: '硬式支撐',
    warrantyYears: 10,
    basePrice: 15800,
    images: ['/images/hero-bedroom.png', '/images/product-mattress.png'],
    highlights: [
      '線徑加粗至 2.4mm 高碳鋼線，支撐性極佳',
      '適合青少年（8–18 歲）護脊與習慣偏硬睡感族群',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 13800 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 15800 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 18800 },
    ],
    specs: [
      { label: '彈簧線徑', value: '2.4mm 加粗硬式獨立筒彈簧' },
    ],
    description:
      '以加粗 2.4mm 鋼線打造扎實撐托力，適合腰背需要強勁支撐、或成長中兒童與青少年的護脊需求。',
  },
  {
    id: 'yongji-longpin-2',
    slug: 'yongji-longpin-2',
    name: '龍品二代乳膠獨立筒床墊',
    subtitle: '天然乳膠舒壓層 × 獨立筒支撐｜平價高 CP 值之選',
    category: 'mattress',
    badge: '人氣款',
    firmness: 'Q彈適中',
    warrantyYears: 10,
    basePrice: 16800,
    images: ['/images/product-mattress.png'],
    highlights: [
      '內含天然乳膠層，服貼身形釋放肩頸壓力',
      '台灣製床師傅層層把關，價格透明不虛標',
    ],
    variants: [
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 16800 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 19800 },
    ],
    specs: [
      { label: '核心結構', value: '天然乳膠舒適層 + 獨立筒彈簧' },
    ],
    description:
      '結合天然乳膠的柔彈包覆與獨立筒的穩定支撐，讓平價也能擁有媲美專櫃等級的高品質睡眠體驗。',
  },
  {
    id: 'yongji-gh-528',
    slug: 'yongji-gh-528',
    name: '德國優客 GH-528 床墊',
    subtitle: '德國優客床墊系列｜經驗的洗鍊，打造細膩舒眠躺感',
    category: 'youke',
    badge: '優客系列',
    firmness: '德系工藝支撐',
    warrantyYears: 10,
    basePrice: 18190,
    images: ['/images/hero-bedroom.png'],
    highlights: [
      '德國優客經典熱銷型號，多尺寸透明標價',
      '均衡分散身體重量，久睡不腰痠',
    ],
    variants: [
      { id: 'single', name: '標準單人／單人加大', size: '依尺寸選購', price: 18190 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 23800 },
      { id: 'queen', name: '雙人加大／特大', size: '180 × 188 cm 起', price: 29960 },
    ],
    specs: [
      { label: '系列名稱', value: '德國優客床墊系列 GH-528' },
    ],
    description:
      '德國優客床墊系列以嚴謹工藝與人體工學支撐著稱，帶來沉穩而貼合的睡眠體驗。',
  },
  {
    id: 'yongji-tencel-sheets',
    slug: 'yongji-tencel-sheets',
    name: 'MIT 精製天絲 5 尺四件式床包組（昨日晴空）',
    subtitle: '一組搞定｜床包＋枕套＋被套全配・親膚絲滑',
    category: 'bedding',
    badge: 'MIT 天絲',
    firmness: '絲滑親膚',
    warrantyYears: 1,
    basePrice: 2980,
    images: ['/images/product-pillow.png', '/images/hero-bedroom.png'],
    highlights: [
      '換上新床包，睡出好心情！一組搞定全室寢具',
      '多款質感花色：昨日晴空、希語、晚香暗幽、紳士品格、清酒',
    ],
    variants: [
      { id: 'sky', name: '標準雙人 5 尺｜昨日晴空', size: '床包×1 + 枕套×2 + 被套×1', price: 2980 },
      { id: 'xiyu', name: '標準雙人 5 尺｜希語', size: '床包×1 + 枕套×2 + 被套×1', price: 2980 },
      { id: 'sake', name: '雙人加大 6 尺｜清酒', size: '床包×1 + 枕套×2 + 被套×1', price: 3380 },
    ],
    specs: [
      { label: '內容物', value: '床包 × 1、薄被套 × 1、信封枕套 × 2' },
    ],
    description:
      '選用親膚柔軟的 MIT 精製天絲布料，搭配永吉床墊的舒適支撐，在家就能創造五星級睡眠儀式。',
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
    features: ['台灣工廠直營價格透明', '全系列獨立筒／乳膠床墊試躺', '支援最大 212×212cm 客製尺寸諮詢'],
    image: '/images/hero-bedroom.png',
  },
]

/**
 * 格式化新台幣金額
 */
export function formatNTD(amount) {
  return `NT$ ${Number(amount).toLocaleString('zh-TW')}`
}
