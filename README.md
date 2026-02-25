# ISWEB

Repositori ini berisi kumpulan tugas dan kuis untuk mata kuliah Sistem Informasi Web (SIWEB).

## Deskripsi
Proyek ini berisi beberapa tugas dan latihan berbasis HTML/CSS/JavaScript yang dibuat untuk latihan perkuliahan.

## Cara Menjalankan
- Buka file HTML langsung di browser dengan double-click (mis. buka [week3/kuisWeek3.html](week3/kuisWeek3.html)).
- Untuk menjalankan dari server lokal (opsional), jalankan di direktori proyek:

```bash
# Python 3
python -m http.server 8000
```

Lalu buka http://localhost:8000 di browser.

## Struktur Folder (ringkas)
- `Tugas2/` - berisi tugas 2 dan stylesheet terkait
	- `tugas2_162023010.html`
	- `tugas2_soal2_162023010.html`
	- `style.css`, `style2.css`
- `week3/` - kuis dan latihan week 3
	- `kuisWeek3.html`

## Catatan Khusus
- File `week3/kuisWeek3.html` memiliki counter yang disimpan menggunakan `localStorage`. Nilai counter akan tetap ada setelah browser ditutup atau halaman direfresh.
- Untuk mereset nilai counter, buka DevTools pada browser dan hapus key `angka` pada `localStorage`, atau saya bisa tambahkan tombol reset jika Anda mau.

## Lisensi
Lihat file `LICENSE` untuk informasi lisensi proyek.

---
Jika Anda ingin saya menambahkan instruksi lebih lengkap, tombol reset, atau dokumentasi lain, beri tahu saya.