export const en: object = {
  language: "en",
  locale: "en-US",
  common: {
    between_date: " to ",
    article: "article",
    property: "property",
    astrology: "astrology",
    planet: "planet",
    zodiac: "zodiac",
    major_arcana: "major arcana",
    common: "common",
  },
  site: {
    name: "Fate in your hands",
    title: "Fate in your hands",
    recommend_ads: {
      title: "Recommend for you",
    },
    page_ads: {
      message_html: `Analyze <span class="font-bold italic">Astrology</span> and <span class="font-bold italic">Tarot</span> to figure out who you are.`,
    },
  },
  meta: {
    home: "Get your free birth chart and tarot reading today! Our astrology calculator provides you with a unique cosmic energy reading that reveals how the planets influence your life path, personality, and daily decisions. Discover your true self with our free tarot and astrology calculator site.",
    menu: "List articles about Astrology and Tarot.",
    result:
      "Analyze Astrology and Tarot/Matrix of Destiny to figure out who you are. Fate in your hands have got own research to give you good suggestions.",
  },
  menu_list: {
    resource_for: "Resource for ",
  },
  header: {
    menu: {
      articles: {
        title: "articles",
      },
    },
  },
  banner: {
    left: {
      title: "How to know yourself?",
      content: `<div class="text-justify">
        <span class="font-semibold">Astrology/Zodiac</span> predicts mundane
        events based on the assumption that celestial bodies determine or indicate
        changes in the sublunar world and affects destinies of individuals.
      </div>
      <div class="text-justify">
        <span class="font-semibold">Tarot/Matrix of Destiny</span> is a
        numerological calculation that helps you find out your way and shows how
        your life will unfold based on your birth date.
      </div>
      <div class="text-justify">
        Based on that we can understand more about your strengths, weaknesses,
        purpose...etc in life.
      </div>`,
    },
    right: {
      title: "How to improve yourself?",
      content: `<div class="text-justify">
      The materials and objects around us can have a profound impact on our
      physical, mental health, our energy and well-being...etc. For example,
      certain crystals are believed to have healing properties that can help
      balance our chakras and promote physical and emotional healing. Similarly,
      the colors in our environment can affect our mood and energy levels.
    </div>
    <div class="text-justify">
      It’s important to be mindful of the materials and objects in our
      environment and how they might be affecting us energetically, and
      <span class="font-semibold">Fate in your hands</span> have got own
      research to give you good suggestions.
    </div>`,
    },
  },
  date_data_form: {
    title: "Data Calculator",
    birth_date_time: "Birth (date & time)",
    min: "min",
    location: "Location",
    country: "Country",
    discover: "Discover",
  },
  properties: {
    "001": "physical",
    "002": "love",
    "003": "luck",
    "004": "energy",
    "005": "mental health",
    "006": "attraction",
    "007": "wisdom",
    "008": "control",
    "009": "creativity",
    "010": "influence",
    "011": "charisma",
    "012": "intuition",
    physical: "Physical",
    love: "Love",
    luck: "Luck",
    energy: "Energy",
    mental_health: "Mental Health",
    attraction: "Attraction",
    wisdom: "Wisdom",
    control: "Control",
    creativity: "Creativity",
    influence: "Influence",
    charisma: "Charisma",
    intuition: "Intuition",
  },
  month: {
    1: {
      short: "Jan",
    },
    2: {
      short: "Feb",
    },
    3: {
      short: "Mar",
    },
    4: {
      short: "Apr",
    },
    5: {
      short: "May",
    },
    6: {
      short: "Jun",
    },
    7: {
      short: "Jul",
    },
    8: {
      short: "Aug",
    },
    9: {
      short: "Sep",
    },
    10: {
      short: "Oct",
    },
    11: {
      short: "Nov",
    },
    12: {
      short: "Dec",
    },
  },
  result: {
    title: (target: string) => `Report for ${target}`,
    summary: {
      title: "I. Personal Report Summary",
      scroll_explain: "(Scroll down to learn more)",
    },
    astrology: {
      title: "II. Natal Chart Report",
      name: "name",
      sign: "sign",
    },
    energy: {
      title: "III. Energies Matrix Destiny Report",
      h2_title: ({
        date,
        energy,
        energy_name,
      }: {
        date: string;
        energy: string;
        energy_name: string;
      }) =>
        `From ${date} you are under the influence of energy level ${energy}, represented by ${energy_name}.`,
      h2_title_raw: ({
        date,
        energy,
        energy_name,
      }: {
        date: string;
        energy: string;
        energy_name: string;
      }) =>
        `From <span class="italic font-medium">${date}</span> you are under the influence of energy level <span class="font-medium text-red-600">${energy}</span>, represented by <span class="font-bold">${energy_name}</span>.`,
    },
  },
  astrology: {
    message: {
      announcement: (pos: string) => `Your ${pos} is: `,
      get_ac:
        "To determine the Ascendant, it is necessary to have the exact time of birth.",
    },
    position: {
      sun: "sun",
      moon: "moon",
      mercury: "mercury",
      venus: "venus",
      mars: "mars",
      jupiter: "jupiter",
      saturn: "saturn",
      uranus: "uranus",
      neptune: "neptune",
      pluto: "pluto",
      north_node: "north node",
      lilith: "lilith",
      ascendant: "ascendant",
    },
    sign: {
      aries: "aries",
      taurus: "taurus",
      gemini: "gemini",
      cancer: "cancer",
      leo: "leo",
      virgo: "virgo",
      libra: "libra",
      scorpio: "scorpio",
      sagittarius: "sagittarius",
      capricorn: "capricorn",
      aquarius: "aquarius",
      pisces: "pisces",
    },
  },
  tarot: {
    major_arcana: {
      "1": "The Fool",
      "2": "The Magician",
      "3": "The High Priestess",
      "4": "The Empress",
      "5": "The Emperor",
      "6": "The Hierophant",
      "7": "The Lovers",
      "8": "The Chariot",
      "9": "Strength",
      "10": "The Hermit",
      "11": "Wheel of Fortune",
      "12": "Justice",
      "13": "The Hanged Man",
      "14": "Death",
      "15": "Temperance",
      "16": "The Devil",
      "17": "The Tower",
      "18": "The Star",
      "19": "The Moon",
      "20": "The Sun",
      "21": "Judgement",
      "22": "The World",
    },
  },
};
