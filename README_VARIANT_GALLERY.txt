PANDUAN FITUR DETAIL PRODUK + PILIHAN WARNA

Versi ini menambahkan:
1. Tombol "Lihat Detail & Pilih Warna"
2. Modal detail produk
3. Galeri gambar produk
4. Pilihan warna/varian
5. Keranjang menyimpan warna yang dipilih
6. Pesanan WhatsApp mencantumkan warna/varian

CARA MEMASUKKAN FOTO PRODUK PER WARNA

1. Masukkan foto ke folder:
   images/products/

2. Contoh nama file untuk produk gamis:
   gamis-pink-dusty.jpg
   gamis-cream.jpg
   gamis-sage-green.jpg
   gamis-maroon.jpg
   gamis-hitam.jpg

3. Buka script.js, cari produk:
   name:"Gamis Premium Daily Wear"

4. Cari bagian variants:
   variants:[
     {name:"Pink Dusty",swatch:"#d98da8",image:"images/products/gamis-pink-dusty.jpg"},
     {name:"Cream",swatch:"#ead7bd",image:"images/products/gamis-cream.jpg"}
   ]

5. Pastikan nama file di script.js sama persis dengan nama file gambar.

CONTOH TAMBAH WARNA BARU

{name:"Navy",swatch:"#1f2a44",image:"images/products/gamis-navy.jpg"}

Lalu masukkan file gambar:
images/products/gamis-navy.jpg

Catatan:
Jika gambar belum ada atau nama file salah, tampilan tetap tidak pecah karena ada fallback visual.
