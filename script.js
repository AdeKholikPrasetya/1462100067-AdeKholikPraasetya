// Mengambil elemen HTML yang diperlukan
const namaMakanan = document.getElementById('namaMakanan');
const hargaMakanan = document.getElementById('hargaMakanan');
const namaMinuman = document.getElementById('namaMinuman');
const hargaMinuman = document.getElementById('hargaMinuman');
const jumlahMakanan = document.getElementById('jumlahMakanan');
const jumlahMinuman = document.getElementById('jumlahMinuman');
// const totalHarga = document.getElementById('totalHarga');
// const bayar = document.getElementById('bayar');
// const kembalian = document.getElementById('kembalian');
// const ppn = document.getElementById("ppn");

// Harga makanan dan minuman
const hargaMakananList = {
  nasigoreng: 15000,
  ayamgeprek: 13000,
  sotoayam: 17000,
  bakso: 13000,
  mieayam: 13000,
};

const hargaMinumanList = {
  esteh: 4000,
  esjeruk: 5000,
  escampur: 8000,
  esssinom: 5000,
  airMineral: 4000,
};

// Menampilkan harga makanan saat dipilih
namaMakanan.addEventListener('change', function () {
  const harga = hargaMakananList[this.value];
  if (harga) {
    hargaMakanan.innerHTML = '<h5>Rp. ' + harga + '</h5>';
  } else {
    hargaMakanan.innerHTML = '<h5>Rp. 0</h5>';
  }

  // hitungTotalHarga();
});

// Menampilkan harga minuman saat dipilih
namaMinuman.addEventListener('change', function () {
  const harga = hargaMinumanList[this.value];
  if (harga) {
    hargaMinuman.innerHTML = '<h5>Rp. ' + harga + '</h5>';
  } else {
    hargaMinuman.innerHTML = '<h5>Rp. 0</h5>';
  }

  // hitungTotalHarga();
});

// // Menghitung total harga
// function hitungTotalHarga() {
//   const hargaMakananValue = hargaMakanan.innerText.replace('Rp. ', '');
//   const hargaMinumanValue = hargaMinuman.innerText.replace('Rp. ', '');
//   const jumlahMakananValue = parseInt(jumlahMakanan.value);
//   const jumlahMinumanValue = parseInt(jumlahMinuman.value);
//   const total = (hargaMakananValue * jumlahMakananValue) + (hargaMinumanValue * jumlahMinumanValue);
//   const totalPPN = total * 0.11;
//   const totalAkhir = total + totalPPN;

//   // totalHarga.innerHTML = 'Total Harga : Rp. ' + total;
//   // ppn.innerHTML = 'PPN (11%) : Rp. ' + totalPPN;
//   // document.getElementById('totalAkhir').innerHTML = 'Total Akhir : Rp. ' + totalAkhir;

//   hitungKembalian(totalAkhir);
// }

// // Menghitung kembalian
// function hitungKembalian(total) {
//   const bayarValue = parseInt(bayar.value);
//   const kembalianValue = bayarValue - total;

//   if (isNaN(bayarValue)) {
//   kembalian.innerHTML = '<h5> Rp. 0</h5>';
//   return;
//   }

//   kembalian.innerHTML = '<h5> Rp. ' + kembalianValue + '</h5>';
// }

// Mengembalikan nilai hargaMakanan dan hargaMinuman ke harga awal saat halaman dimuat ulang
window.addEventListener('load', function () {
  hargaMakanan.innerHTML = '<h5>Rp. 0</h5>';
  hargaMinuman.innerHTML = '<h5>Rp. 0</h5>';
});
