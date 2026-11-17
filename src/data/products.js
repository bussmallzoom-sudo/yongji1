/**
 * 永吉床墊產品分類定義（對應 yongji.tw 真實分類）
 */
export const CATEGORIES = [
  { id: 'all', name: '全部商品', desc: '100% 台灣工廠直營・價格透明' },
  { id: 'mattress', name: '台灣製床墊', desc: '誠信品質・專為台灣人打造的好床' },
  { id: 'youke', name: '德國優客床墊系列', desc: '以經驗的洗鍊，創造未來' },
  { id: 'iris', name: '美國伊麗絲名床', desc: '科技支撐與極致舒眠體驗' },
  { id: 'bedding', name: '精製床包組', desc: 'MIT 精製天絲四件式床包組' },
]

/**
 * 永吉床墊真實商品資料（來源：https://www.yongji.tw/）
 */
export const PRODUCTS = [
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
      '100% 台灣工廠師傅手工製作，下訂後約 7 個工作天製作完成',
      '強力泡棉護邊強化結構，床墊利用面積提升 16%',
      '除少數偏遠地區外，免運費・四樓以下免樓層費',
      '買一張免費協助回收清運一張舊床墊',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 13800 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 15800 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 18800 },
      { id: 'king', name: '雙人特大 6×7 尺（可客製）', size: '180 × 212 cm', price: 21800 },
    ],
    specs: [
      { label: '彈簧結構', value: '縮小彈簧徑距，5 尺床墊放入 1,116 顆獨立筒彈簧' },
      { label: '護邊設計', value: '強力泡棉護邊強化，床邊穩固不滑落' },
      { label: '客製尺寸', value: '支援方形／長方形訂做（最大 212×212 cm），以對應尺寸計價不另收費' },
      { label: '產地與製作', value: '100% 台灣製造，下訂後現做約 7 個工作天' },
    ],
    description:
      '將獨立筒彈簧縮小並提高密度，在一張 5 尺床墊中放入 1,116 顆彈簧，創造出接近傳統聯結式床墊的硬挺支撐力，同時保有獨立筒多點服貼、翻身低干擾的優點。',
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
      '強力泡棉護邊設計，坐床沿一樣穩固安心',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 13800 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 15800 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 18800 },
    ],
    specs: [
      { label: '彈簧線徑', value: '2.4mm 加粗硬式獨立筒彈簧' },
      { label: '配送服務', value: '免運費・四樓以下免樓層費・免費回收舊床' },
    ],
    description:
      '永吉經典硬式獨立筒代表作！以加粗 2.4mm 鋼線打造扎實撐托力，適合腰背需要強勁支撐、或成長中兒童與青少年的護脊需求。',
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
    images: ['/images/product-mattress.png', '/images/hero-bedroom.png'],
    highlights: [
      '內含天然乳膠層，服貼身形釋放肩頸壓力',
      '台灣製床師傅層層把關，價格透明不虛標',
      '享有免運費與舊床墊免費清運服務',
    ],
    variants: [
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 16800 },
      { id: 'queen', name: '雙人加大 6×6.2 尺', size: '180 × 188 cm', price: 19800 },
    ],
    specs: [
      { label: '核心結構', value: '天然乳膠舒適層 + 獨立筒彈簧' },
      { label: '產地', value: '100% 台灣工廠直營製造' },
    ],
    description:
      '結合天然乳膠的柔彈包覆與獨立筒的穩定支撐，讓平價也能擁有媲美專櫃等級的高品質睡眠體驗。',
  },
  {
    id: 'yongji-anxin-baby',
    slug: 'yongji-anxin-baby',
    name: '安心寶貝護脊床墊',
    subtitle: '專為成長期兒童與學生設計｜透氣安全無毒材料',
    category: 'mattress',
    badge: '親子推薦',
    firmness: '護脊適中偏硬',
    warrantyYears: 10,
    basePrice: 14800,
    images: ['/images/edge-reading.png', '/images/product-mattress.png'],
    highlights: [
      '從 8 歲到 18 歲皆擁有充足脊椎支撐',
      '強力泡棉護邊，孩子坐臥床緣安全不滑落',
      '支援客製化尺寸訂做，不額外加收訂做費',
    ],
    variants: [
      { id: 'single', name: '單人加大 3.5×6.2 尺', size: '105 × 188 cm', price: 12800 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 14800 },
    ],
    specs: [
      { label: '適用年齡', value: '兒童與青少年成長期護脊首選' },
      { label: '護邊結構', value: '強力泡棉四周護邊強化' },
    ],
    description:
      '守護孩子發育期的脊椎曲線，採用穩定支撐結構搭配安全透氣表布，讓爸媽放心、孩子每晚安穩成長。',
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
    images: ['/images/hero-bedroom.png', '/images/product-mattress.png'],
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
      { label: '價格區間', value: 'NT$ 18,190 – NT$ 29,960' },
    ],
    description:
      '德國優客床墊系列以嚴謹工藝與人體工學支撐著稱，帶來沉穩而貼合的睡眠體驗。',
  },
  {
    id: 'yongji-gh-500',
    slug: 'yongji-gh-500',
    name: '德國優客 GH-500 旗艦床墊',
    subtitle: '德國優客高階系列｜高密度舒適層與深層釋壓結構',
    category: 'youke',
    badge: '旗艦推薦',
    firmness: '極致釋壓支撐',
    warrantyYears: 10,
    basePrice: 27050,
    images: ['/images/product-mattress.png'],
    highlights: [
      '優客高階工藝配置，兼具包覆感與支撐度',
      '價格完全透明公開，板橋門市提供實床試躺',
    ],
    variants: [
      { id: 'single', name: '單人規格', size: '依尺寸選購', price: 27050 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 35800 },
      { id: 'queen', name: '雙人加大／特大', size: '180 × 188 cm 起', price: 44550 },
    ],
    specs: [
      { label: '系列名稱', value: '德國優客床墊系列 GH-500' },
      { label: '價格區間', value: 'NT$ 27,050 – NT$ 44,550' },
    ],
    description:
      '為追求飯店級睡感的使用者打造，層層精密內材分散體壓，讓身體在睡眠中徹底釋放疲憊。',
  },
  {
    id: 'yongji-iris-es',
    slug: 'yongji-iris-es',
    name: '美國伊麗絲名床 ES-科技床',
    subtitle: '美國伊麗絲經典科技支撐｜深層穩定舒眠',
    category: 'iris',
    badge: '伊麗絲名床',
    firmness: '科技平衡支撐',
    warrantyYears: 10,
    basePrice: 28560,
    images: ['/images/hero-bedroom.png'],
    highlights: [
      '美國伊麗絲名床經典科技床款',
      '板橋門市現場可預約專人試躺比較',
    ],
    variants: [
      { id: 'single', name: '單人規格', size: '依尺寸選購', price: 28560 },
      { id: 'double', name: '標準雙人 5×6.2 尺', size: '150 × 188 cm', price: 37800 },
      { id: 'queen', name: '雙人加大／特大', size: '180 × 188 cm 起', price: 47040 },
    ],
    specs: [
      { label: '品牌系列', value: 'Eclipse 美國伊麗絲名床' },
      { label: '價格區間', value: 'NT$ 28,560 – NT$ 47,040' },
    ],
    description:
      '搭載美國伊麗絲專利護脊科技與透氣舒適層，帶來穩定、低干擾的國際名床睡眠體驗。',
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
      'MIT 台灣精製工藝，透氣柔滑適合台灣氣候',
    ],
    variants: [
      { id: 'sky', name: '標準雙人 5 尺｜昨日晴空', size: '床包×1 + 枕套×2 + 被套×1', price: 2980 },
      { id: 'xiyu', name: '標準雙人 5 尺｜希語', size: '床包×1 + 枕套×2 + 被套×1', price: 2980 },
      { id: 'gentleman', name: '標準雙人 5 尺｜紳士品格', size: '床包×1 + 枕套×2 + 被套×1', price: 2980 },
      { id: 'sake', name: '雙人加大 6 尺｜清酒', size: '床包×1 + 枕套×2 + 被套×1', price: 3380 },
    ],
    specs: [
      { label: '內容物', value: '床包 × 1、薄被套 × 1、信封枕套 × 2' },
      { label: '產地', value: 'MIT 台灣精製天絲布料' },
    ],
    description:
      '觸覺是五感舒眠的重要關鍵！選用親膚柔軟的 MIT 精製天絲布料，搭配永吉床墊的舒適支撐，在家就能創造五星級睡眠儀式。',
  },
]

/**
 * 永吉床墊真實體驗門市資料
 */
export const STORES = [
  {
    id: 'banqiao-showroom',
    region: '新北板橋',
    name: '永吉床墊｜板橋旗艦體驗門市',
    address: '新北市板橋區四川路一段 85 號',
    hours: '歡迎來電或透過 LINE 預約試躺時段',
    phone: '02-2951-2738',
    features: ['台灣工廠直營價格透明', '全系列獨立筒／乳膠床墊試躺', '支援最大 212×212cm 客製尺寸諮詢'],
    image: '/images/store-showroom.png',
  },
]

/**
 * 格式化新台幣金額
 */
export function formatNTD(amount) {
  return `NT$ ${Number(amount).toLocaleString('zh-TW')}`
}
