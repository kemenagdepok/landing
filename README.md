# Landing Page - Kantor Kementerian Agama Kota Depok

![Status](https://img.shields.io/badge/status-active-success.svg) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)

Selamat datang di repositori resmi **Landing Page Kantor Kementerian Agama Kota Depok**. Website ini dirancang sebagai portal informasi publik yang responsif, modern, dan mudah diakses untuk memberikan pelayanan terbaik bagi masyarakat Kota Depok.

## 🌐 Demo Website
Kunjungi website secara langsung melalui tautan berikut:
👉 **[https://kemenagdepok.github.io/landing/](https://kemenagdepok.github.io/landing/)**

## 📖 Daftar Isi
- [Fitur Utama](#-fitur-utama)
- [Struktur Halaman](#-struktur-halaman)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Cara Instalasi & Penggunaan](#-cara-instalasi--penggunaan)
- [Struktur Folder](#-struktur-folder)
- [Kontributor](#-kontributor)

---

## 🚀 Fitur Utama

* **Desain Responsif:** Tampilan optimal di semua perangkat (Desktop, Tablet, Mobile).
* **Navigasi Interaktif:** Menu *dropdown* yang rapi dan *mobile-friendly* dengan tombol hamburger.
* **Informasi Lengkap:** Menyajikan profil, sejarah, struktur organisasi, dan data keagamaan terkini.
* **Akses Layanan:** Tautan langsung ke layanan publik seperti Haji, KUA, dan Pendidikan Islam.
* **Statistik Visual:** Data keagamaan ditampilkan dalam bentuk kartu statistik yang menarik.
* **Kontak Terpadu:** Formulir pengiriman pesan dan peta lokasi yang terintegrasi.

## 📂 Struktur Halaman

Website ini terdiri dari beberapa halaman statis yang saling terhubung:

1.  **Beranda (`index.html`):** Halaman utama dengan *Hero Section* foto Kepala Kantor dan akses cepat ke layanan.
2.  **Profil:**
    * **Tentang Kami (`profil.html`):** Penjelasan singkat mengenai tugas dan fungsi kantor.
    * **Visi & Misi (`visi-misi.html`):** Arah dan tujuan strategis instansi.
    * **Sejarah & Dasar Hukum (`sejarah.html`):** Jejak rekam perjalanan dan landasan hukum operasional.
    * **Struktur Organisasi (`struktur.html`):** Bagan organisasi dan daftar pejabat struktural.
    * **Tugas & Fungsi (`tupoksi.html`):** Rincian tugas pokok dan fungsi berdasarkan PMA.
    * **Makna Lambang (`lambang.html`):** Filosofi logo Kemenag beserta link unduhan aset (PNG/CDR/EPS).
    * **Data Keagamaan (`data-keagamaan.html`):** Statistik jumlah pemeluk agama dan rumah ibadah (Tahun 2024).
3.  **Layanan (`layanan.html`):** Daftar lengkap layanan publik (Haji, Bimas Islam, Kristen, Katolik, Pendidikan).
4.  **Berita (`berita.html`):** Portal pengalihan ke situs berita resmi Kemenag Jabar.
5.  **Kontak (`kontak.html`):** Informasi alamat, telepon, email, dan formulir kontak.

## 🛠 Teknologi yang Digunakan

* **HTML5:** Struktur semantik halaman web.
* **CSS3:** Styling kustom (`style.css`) dengan pendekatan *Clean & Flat Design*.
* **JavaScript (Vanilla):** Logika sederhana untuk *load* komponen Header/Footer (`main.js`).
* **Font Awesome:** Ikon vektor untuk mempercantik antarmuka.
* **Google Fonts:** Tipografi menggunakan font *Poppins*.

## 💻 Cara Instalasi & Penggunaan

Karena website ini bersifat statis (HTML/CSS/JS), Anda tidak memerlukan instalasi *backend* atau *database* khusus.

### Persyaratan:
* Browser modern (Chrome, Firefox, Edge, Safari).
* Koneksi internet (untuk memuat font dan ikon dari CDN).
* *Live Server* (Disarankan untuk pengembangan lokal agar fitur `fetch` Header/Footer berjalan).

### Langkah-langkah (Lokal):
1.  **Clone Repositori:**
    ```bash
    git clone [https://github.com/kemenagdepok/landing.git](https://github.com/kemenagdepok/landing.git)
    ```
2.  **Buka Folder:** Masuk ke direktori proyek.
3.  **Jalankan Server Lokal:**
    * Jika menggunakan VS Code, klik kanan pada `index.html` lalu pilih **"Open with Live Server"**.
    * Atau buka file `index.html` melalui browser (namun Header/Footer mungkin tidak muncul karena kebijakan CORS browser pada protokol `file://`).

## 📂 Struktur Folder

```text
landing/
├── gambar/             # Aset gambar (foto pejabat, bagan, dll)
├── unduh/              # File unduhan (logo vector)
├── index.html          # Halaman Utama
├── style.css           # Stylesheet Global
├── main.js             # Script Global (Header/Footer Loader)
├── header.html         # Komponen Header (Navbar)
├── footer.html         # Komponen Footer
├── profil.html         # Halaman Profil
├── layanan.html        # Halaman Layanan
├── ... (file html lainnya)
├── favicon.ico         # Ikon Website
└── README.md           # Dokumentasi Proyek
