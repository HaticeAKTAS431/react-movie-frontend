# Movie App - React & Vite Frontend

Bu proje, **The Movie Database (TMDB)** API'sini kullanarak popüler filmleri listeleyen, arama yapmanıza olanak tanıyan ve favori filmlerinizi yönetebileceğiniz modern bir React web uygulamasıdır.

## 🚀 Özellikler

- **Popüler Filmleri Listeleme:** TMDB API aracılığıyla en güncel popüler filmleri anasayfada görüntüler.
- **Film Arama:** Arama çubuğunu kullanarak dilediğiniz filmi başlığına göre arayabilirsiniz.
- **Sayfalandırma (Pagination):** "Daha Fazla Yükle" butonu ve dinamik kaydırma desteği ile daha fazla filme erişim sağlar.
- **Giriş Yap (Login) Sayfası:** Kullanıcı girişi için tasarlanmış şık bir form arayüzü.
- **Favorilerim Sayfası:** Beğendiğiniz filmleri bir araya getirebileceğiniz özel bir sayfa düzeni.
- **Duyarlı (Responsive) Tasarım:** Tailwind CSS v4 ve Bootstrap ile tüm cihazlarda (mobil, tablet, masaüstü) mükemmel görünüm.

## 🛠️ Kullanılan Teknolojiler

- **React 18 & Vite:** Hızlı derleme ve bileşen tabanlı modern arayüz geliştirme.
- **Tailwind CSS v4:** Hızlı, esnek ve modern yardımcı sınıflarla stil yönetimi.
- **Bootstrap & React Bootstrap:** Hazır ve uyumlu arayüz bileşenleri.
- **React Router Dom v7:** Sayfalar arası geçiş ve yönlendirme yönetimi.
- **FontAwesome & React Icons:** Zengin ikon kütüphaneleri.

## 📦 Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edin:

1. **Projeyi Klonlayın:**
   ```bash
   git clone https://github.com/HaticeAKTAS431/react-movie-frontend.git
   cd react-movie-frontend
   ```

2. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```
   *Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.*

4. **Projeyi Derleyin (Production Build):**
   ```bash
   npm run build
   ```

## 🔑 TMDB API Bağlantısı
Uygulama, veri çekmek için hazır bir TMDB API key'i kullanmaktadır. Kendi API anahtarınızı kullanmak isterseniz `src/services/api.js` içerisindeki `API_KEY` değişkenini güncelleyebilirsiniz.
