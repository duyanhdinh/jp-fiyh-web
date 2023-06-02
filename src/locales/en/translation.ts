export const dictionary: object = {
  language: "en",
  site: {
    name: "Fate in your hands",
    title: "Fate in your hands",
    recommend_ads: {
      title: "Recommend for you",
    },
  },
  menu_list: {
    resource_for: "Resource for",
  },
  header: {
    menu: {
      articles: {
        title: "articles",
      },
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
    "001": "Physical",
    "002": "Love",
    "003": "Luck",
    "004": "Energy",
    "005": "Mental Health",
    "006": "Attraction",
    "007": "Wisdom",
    "008": "Control",
    "009": "Creativity",
    "010": "Influence",
    "011": "Charisma",
    "012": "Intuition",
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
  energy: {},
};
