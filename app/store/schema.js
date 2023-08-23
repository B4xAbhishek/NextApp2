const authSchema = {
  LoginData: [],
  language: "en",
  Network: true,
};

const homeSchema = {
  products: [],
  productDetail: {},
  categories: [],
  subCategories: [],
  MyAds: [],
  lastpage: 0,
  lastpagefav: 0,
  categoryid: 0,
  favorites: [],
  activeCategory: 0,
  isFavorite: false,
  query: "",
  subcatId: 0,
  apptoken: null
};

const categorySchema = {
  feeds: [],
};

const adSchema = {
  photos: [],
};

const messageSchema = {
  messages: [],
  usermessages: [],
  unreadcount: 0
};

const profileSchema = {
  user: [],
  aboutcompany: {},
  country: [],
  code: [],
  territory: [],
  terms: [],
  faq: [],
  privacy: []
};

export const Schemas = {
  USER: authSchema,
  HOME: homeSchema,
  CATEGORY: categorySchema,
  AD: adSchema,
  MESSAGE: messageSchema,
  PROFILE: profileSchema,
};
