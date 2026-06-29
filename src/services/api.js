const API_KEY = "8d0d7828ba639af94fd823367cd7392b";
const BASE_URL = "https://api.themoviedb.org/3"; // API'nin temel URL'si

// Popüler filmleri getiren fonksiyon
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
    return []; // Hata durumunda boş array döndürüyoruz
  }
};

// Film araması yapan fonksiyon
export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to search movies:", error);
    return []; // Hata durumunda boş array döndürüyoruz
  }
};

// Tüm filmleri sayfalandırarak getiren fonksiyon
export const getAllMovies = async (startPage = 1, pageCount = 5) => {
  let allMovies = [];
  let page = startPage;

  try {
    while (page <= startPage + pageCount - 1) {
      const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`
      );

      if (!response.ok) {
        console.warn(`HTTP Error on page ${page}: ${response.status}`);
        break; // Döngüyü sonlandır
      }

      const data = await response.json();
      allMovies = [...allMovies, ...data.results];
      page++;
    }
  } catch (error) {
    console.error(`Failed to fetch movies from page ${page}:`, error.message);
  }

  return allMovies;
};

// Sayfa başlatma ve ekleme işlemleri için iki sayfa yükleme fonksiyonu
 
export const getMoviesPage = async (pageNumber) => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${pageNumber}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    // Yanıtın 'results' dizisinin mevcut olup olmadığını kontrol edelim
    if (!data.results || !Array.isArray(data.results)) {
      console.error("API yanıtı beklenen 'results' dizisini içermiyor", data);
      return { results: [], total_pages: 0 }; // Boş bir dizi döndür
    }

    return data; // 'results' ve 'total_pages' ile birlikte döndür
  } catch (error) {
    console.error("Failed to fetch page data:", error);
    return { results: [], total_pages: 0 }; // Hata durumunda boş bir dizi döndürüyoruz
  }
};
