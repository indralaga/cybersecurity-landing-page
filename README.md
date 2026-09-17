# Cybersecurity Landing Page

Landing page statis untuk platform keamanan siber dengan tiga produk:

- **Website Scanner** — DAST dengan active dan passive vulnerability detection.
- **Sniper** — auto-exploiter untuk authorized security testing dan pengumpulan evidence.
- **SQLi Exploiter** — validasi SQL injection dan pelaporan dampak menggunakan SQLMap.

## Struktur project

```text
.
├── index.html
├── package.json
├── src/
│   ├── main.js
│   └── styles.css
├── script.js
└── styles.css
```

`src/styles.css` dan `src/main.js` menjadi entry point Vite. File root tetap dipertahankan sebagai fallback/static compatibility.

## Menjalankan secara lokal

Persyaratan: Node.js 18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka URL yang ditampilkan Vite, biasanya `http://localhost:5173`.

## Build production

```bash
npm run build
npm run preview
```

## Catatan keamanan

Konten Sniper dan SQLi Exploiter pada halaman ini bersifat presentasi produk. Implementasi eksploitasi harus dijalankan hanya pada aset yang dimiliki atau telah mendapat izin tertulis untuk diuji.
