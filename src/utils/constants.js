export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const DEFAULT_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_medium.jpg";
export const IMAGE_AVATAR =
  "https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzEwNGQ1ZWNmOGVlNDdiODAwMDRjNzM3OTA1ZDI0ZSIsIm5iZiI6MTc1MzI0ODY5OS41MDMsInN1YiI6IjY4ODA3M2JiZGFhODY5ZWQ2NTE2YWVkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.24KW7JwNIjOZnDkfOGuNCwjkCGiLVfOvVFbLFpjjiYo",
    // + import.meta.env.REACT_APP_TMDB_KEY,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const lang = {
  en: {
    search: "Search",
    // searchPlaceholder: "What would you like to search today?",
    searchPlaceholder:
      "Enter comma seperated movies like Jaat, Dangal, Bahubali, Animal, Pushpa",
  },
  hindi: {
    search: "खोज",
    // searchPlaceholder: "आज आप क्या खोजना चाहेंगे?",
    searchPlaceholder:
      "जाट, दंगल, बाहुबली, एनिमल, पुष्पा जैसी अल्पविराम से अलग की गई फिल्में दर्ज करें",
  },
  spanish: {
    search: "buscar",
    // searchPlaceholder: "¿Qué te gustaría buscar hoy?",
    searchPlaceholder:
      "Ingrese películas separadas por comas como Jaat, Dangal, Bahubali, Animal, Pushpa",
  },
};

export const OPENAI_API_KEY = import.meta.env.REACT_APP_OPENAI_API_KEY;
