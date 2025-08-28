## Deskripsi

API backend yang dibangun menggunakan Node.js dan Express.

## Cara Menjalankan

1. Pastikan Anda berada di direktori `server`.
2. Install dependensi dengan perintah:
   npm install
3. Jalankan server dengan perintah:
   npm start || npm run dev
4. Server akan berjalan di localhost:5000.
5. Jalankan server dengan perintah:
   npm start || npm run dev

## NOTES

ada beberapa config yang masih tidak selesai dikerjakan, jadi jika aplikasi BE ingin dijalankan harap menambahkan code ini di app.js

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
