export type Philosophy = {
  icon: string;
  name: string;
  tag: string;
  desc: string;
  color: string;
};

export const philosophies: Philosophy[] = [
  {
    icon: "🌱",
    name: "蒙特梭利",
    tag: "環境創設",
    desc: "將個世界縮細到小朋友嘅尺寸，等佢喺「準備好嘅環境」入面自由探索、主動成長。",
    color: "from-mint to-sky",
  },
  {
    icon: "🪜",
    name: "皮亞傑",
    tag: "認知階梯",
    desc: "尊重每個發展階段嘅思維特點，啱嘅時間俾啱嘅刺激，一步一步行上去。",
    color: "from-sun to-peach",
  },
  {
    icon: "🤝",
    name: "維高斯基",
    tag: "動態支援",
    desc: "喺「最近發展區」搭起棚架，多少少挑戰、多少少陪伴，潛能就咁被喚醒。",
    color: "from-sky to-grape",
  },
  {
    icon: "🎨",
    name: "瑞吉歐",
    tag: "多元表達",
    desc: "小朋友有一百種語言。畫畫、唱歌、搭建、扮演……每一種都係佢哋思考嘅形狀。",
    color: "from-peach to-grape",
  },
  {
    icon: "💞",
    name: "孫瑞雪",
    tag: "愛與自由",
    desc: "有規則嘅自由，有界限嘅愛。俾足安全感，先至敢做自己、長成自己。",
    color: "from-coral to-sun",
  },
  {
    icon: "🌈",
    name: "全面發展",
    tag: "五育並重",
    desc: "德、智、體、群、美五育並進，培養健康、自信、識生活又識學習嘅小朋友。",
    color: "from-grape to-mint",
  },
];

export type Stage = {
  id: string;
  slug: string;
  age: string;
  title: string;
  emoji: string;
  color: string;
  accent: string;
  play: string[];
  learn: string[];
  watch: string[];
};

export const stages: Stage[] = [
  {
    id: "baby",
    slug: "baby-stage",
    age: "0 – 3 歲",
    title: "感官萌芽期",
    emoji: "🍼",
    color: "from-[#ffe5d9] to-[#ffd6e8]",
    accent: "#ff8a7a",
    play: [
      "抓握、疊高高、敲打——大肌肉同小手協調",
      "躲貓貓、照鏡，建立自我同依附感",
      "觸感波、布書、音樂搖鈴刺激五感",
    ],
    learn: [
      "喺重複中建立安全感同信任",
      "聽兒歌、睇繪本，種下語言種子",
      "認識身體、表情同基本情緒詞",
    ],
    watch: [
      "夠瞓係大腦發育嘅黃金時間",
      "高質素陪伴 > 高科技玩具",
      "少螢幕，多攬抱同真實互動",
    ],
  },
  {
    id: "kid",
    slug: "kid-stage",
    age: "3 – 6 歲",
    title: "想像力爆發期",
    emoji: "🎨",
    color: "from-[#e9f7d9] to-[#d9f0ff]",
    accent: "#95e1c8",
    play: [
      "角色扮演、煮飯仔，演練社交劇本",
      "拼圖、積木、泥膠，發展空間同創造力",
      "戶外跑跳、攀爬、踩車，練平衡同膽量",
    ],
    learn: [
      "喺遊戲中認識數量、形狀同顏色",
      "親子共讀培養專注同詞彙量",
      "學習等待、輪流、分享嘅社交規則",
    ],
    watch: [
      "保護好奇心，少講「唔准」多問「點解」",
      "容許犯錯，過程比結果更重要",
      "規律作息，建立秩序感同安全感",
    ],
  },
  {
    id: "junior",
    slug: "junior-stage",
    age: "6 – 10 歲",
    title: "能力建構期",
    emoji: "🚀",
    color: "from-[#e6e0ff] to-[#ffeccf]",
    accent: "#b8a4f0",
    play: [
      "團隊運動、棋類，學合作同策略",
      "科學實驗、手作項目，動手解難",
      "樂器、繪畫、舞蹈，深耕一樣熱愛",
    ],
    learn: [
      "建立良好閱讀同自主學習習慣",
      "培養邏輯思維同時間管理能力",
      "理解規則、責任同同理他人",
    ],
    watch: [
      "成績以外，更要保護自信同抗逆力",
      "鼓勵發問同獨立思考，唔係標準答案",
      "適度放手，等小朋友承受自然後果",
    ],
  },
];

export type Food = {
  emoji: string;
  name: string;
  benefit: string;
  slug: string;
};

export const growFoods: Food[] = [
  { emoji: "🥛", name: "奶同乳製品", benefit: "鈣質 × 蛋白質，骨骼長度同密度嘅基石", slug: "milk-calcium" },
  { emoji: "🥚", name: "雞蛋", benefit: "優質蛋白同膽鹼，肌肉同大腦同步發育", slug: "egg-protein" },
  { emoji: "🐟", name: "深海魚", benefit: "Omega-3 同維生素 D，幫手吸收鈣質、保護視力", slug: "fish-good-fat" },
  { emoji: "🥦", name: "深綠色蔬菜", benefit: "鎂、鉀同維生素 K，骨骼新陳代謝好幫手", slug: "veg-fiber" },
  { emoji: "🍚", name: "飯麵主食", benefit: "優質澱粉質提供每日跑跳玩嘅充足能量", slug: "rice-energy" },
  { emoji: "🍊", name: "新鮮生果", benefit: "維生素 C 幫手合成膠原蛋白，令骨骼更強韌", slug: "fruit-vitamin" },
];
