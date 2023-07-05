export const jp: object = {
  language: "ja",
  locale: "ja-JP",
  common: {
    between_date: "から",
    article: "記事",
    property: "プロパティ",
    astrology: "占星術",
    planet: "惑星",
    zodiac: "黄道十二星座",
    major_arcana: "大アルカナ",
    common: "共通",
  },
  site: {
    name: "手の中の運命（Fate in your hands）",
    title: "手の中の運命（Fate in your hands）",
    recommend_ads: {
      title: "あなたにお勧め",
    },
    page_ads: {
      message_html: `あなたが誰であるかを特定するために、<span class="font-bold italic">占星術</span>と<span class="font-bold italic">タロット</span>を分析します。`,
    },
  },
  meta: {
    home: "今すぐ無料の誕生チャートとタロット占い 無料を受け取ってください！当社の占星術計算機は、惑星があなたの人生の道、人格、そして日々の決定にどのように影響を与えるかを明らかにするユニークな宇宙エネルギー読み取りを提供します。無料のタロット占いと占星術計算機サイトで自分自身を発見してください。",
    menu: "アストロロジーとタロットに関する記事をリストアップしてください。",
    result:
      "自分自身を知るために占星術とタロット/運命のマトリックスを分析します。手の中の運命（Fate in your hands）は自分自身で調べた結果から良い提案をしてくれます。",
  },
  menu_list: {
    resource_for: "〜のための資源",
  },
  header: {
    menu: {
      articles: {
        title: "記事",
      },
    },
  },
  banner: {
    left: {
      title: "自分自身を知る方法は？",
      content: `<div class="text-justify">
        <span class="font-semibold">占星術/黄道十二星座は、</span> 天体が下界の世界に変化を決定または示すという前提に基づいて、世俗的な出来事を予測します。これは個人の運命に影響を与えます。
      </div>
      <div class="text-justify">
        <span class="font-semibold">タロット/運命のマトリックスは、</span> あなたの生年月日に基づいて、あなたの進むべき道を見つけ、あなたの人生がどのように展開されるかを示す数秘術の計算です。
      </div>
      <div class="text-justify">
        それに基づいて、あなたの強み、弱み、目的などについてもっと理解することができます。
      </div>`,
    },
    right: {
      title: "自分自身を改善する方法は？",
      content: `<div class="text-justify">
      私たちの周りの材料や物体は、私たちの身体的、精神的健康、エネルギー、幸福などに深い影響を与えることができます。例えば、特定のクリスタルには、私たちのチャクラをバランスさせ、身体的および感情的な癒しを促進すると信じられています。同様に、私たちの環境の色は、私たちの気分やエネルギーレベルに影響を与えることができます。 
    </div>
    <div class="text-justify">
      私たちの環境にある材料や物体が私たちにどのようにエネルギー的に影響しているかについて注意することが重要であり、
      <span class="font-semibold">手の中の運命（Fate in your hands）</span>は自分自身で調べた結果から良い提案をしてくれます。
    </div>`,
    },
  },
  date_data_form: {
    title: "データ計算機",
    birth_date_time: "出生（日付と時刻）",
    min: "分",
    location: "場所",
    country: "国",
    discover: "発見する",
  },
  properties: {
    "001": "物理的な",
    "002": "愛すること",
    "003": "運勢",
    "004": "エネルギー",
    "005": "精神的健康",
    "006": "魅力",
    "007": "知恵",
    "008": "制御すること",
    "009": "創造性",
    "010": "影響力",
    "011": "カリスマ的な魅力",
    "012": "直感力",
    physical: "物理的な",
    love: "愛すること",
    luck: "運勢",
    energy: "エネルギー",
    mental_health: "精神的健康",
    attraction: "魅力",
    wisdom: "知恵",
    control: "制御すること",
    creativity: "創造性",
    influence: "影響力",
    charisma: "カリスマ的な魅力",
    intuition: "直感力",
  },
  month: {
    1: {
      short: "1月",
    },
    2: {
      short: "2月",
    },
    3: {
      short: "3月",
    },
    4: {
      short: "4月",
    },
    5: {
      short: "5月",
    },
    6: {
      short: "6月",
    },
    7: {
      short: "7月",
    },
    8: {
      short: "8月",
    },
    9: {
      short: "9月",
    },
    10: {
      short: "10月",
    },
    11: {
      short: "11月",
    },
    12: {
      short: "12月",
    },
  },
  result: {
    title: (target: string) => `${target}の報告書`,
    summary: {
      title: "I. 個人レポートの要約",
      scroll_explain: "（もっと詳しく知るには下にスクロールしてください）",
    },
    astrology: {
      title: "II. 出生図レポート",
      name: "名前",
      sign: "サイン",
    },
    energy: {
      title: " III. エネルギーマトリックス運命レポート",
      h2_title: ({
        date,
        energy,
        energy_name,
      }: {
        date: string;
        energy: string;
        energy_name: string;
      }) =>
        `${date}まで、あなたは${energy_name}によって表されるエネルギーレベル${energy}の影響下にあります。`,
      h2_title_raw: ({
        date,
        energy,
        energy_name,
      }: {
        date: string;
        energy: string;
        energy_name: string;
      }) =>
        `<span class="italic font-medium">${date}</span>まで、あなたは<span class="font-semibold text-red-600">${energy_name}</span>によって表されるエネルギーレベル<span class="font-semibold">${energy}</span>の影響下にあります。`,
    },
  },
  astrology: {
    message: {
      announcement: (pos: string) => `あなたの${pos}は：`,
      get_ac: "昇星を決定するには、出生時刻を正確に知る必要があります。",
    },
    position: {
      sun: "太陽",
      moon: "月",
      mercury: "水星",
      venus: "金星",
      mars: "火星",
      jupiter: "木星",
      saturn: "土星",
      uranus: "天王星",
      neptune: "海王星",
      pluto: "冥王星",
      north_node: "北ノード",
      lilith: "リリス",
      ascendant: "昇順",
    },
    sign: {
      aries: "牡羊座",
      taurus: "牡牛座",
      gemini: "双子座",
      cancer: "蟹座",
      leo: "獅子座",
      virgo: "乙女座",
      libra: "天秤座",
      scorpio: "蠍座",
      sagittarius: "射手座",
      capricorn: "山羊座",
      aquarius: "水瓶座",
      pisces: "魚座",
    },
  },
  tarot: {
    major_arcana: {
      "1": "道化師",
      "2": "魔術師",
      "3": "女教皇",
      "4": "皇后",
      "5": "皇帝",
      "6": "教皇",
      "7": "恋人",
      "8": "戦車",
      "9": "力",
      "10": "隠者",
      "11": "運命の輪",
      "12": "正義",
      "13": "吊るされた男",
      "14": "死神",
      "15": "節制",
      "16": "悪魔",
      "17": "塔",
      "18": "星",
      "19": "月",
      "20": "太陽",
      "21": "審判",
      "22": "世界",
    },
  },
};
