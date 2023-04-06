<?php
if(isset($_GET['namaMakanan']) && isset($_GET['jumlahMakanan']) && isset($_GET['isDrink']) && isset($_GET['namaMinuman']) 
&& isset($_GET['jumlahMinuman'])) {
  // Ambil data dari form
  $namaMakanan = $_GET['namaMakanan'];
  $jumlahMakanan = (int)$_GET['jumlahMakanan'];
  $isDrink = isset($_GET['isDrink']) ? true : false;
  $namaMinuman = $_GET['namaMinuman'];
  $jumlahMinuman = (int)$_GET['jumlahMinuman'];

  // Harga makanan
  $hargaMakanan = 0;
  switch ($namaMakanan) {
    case 'nasigoreng':
      $hargaMakanan = 15000;
      break;
    case 'ayamgeprek':
      $hargaMakanan = 13000;
      break;
    case 'sotoayam':
      $hargaMakanan = 17000;
      break;
    case 'bakso':
      $hargaMakanan = 13000;
      break;
    case 'mieayam':
      $hargaMakanan = 13000;
      break;
  }

  // Harga minuman
  $hargaMinuman = 0;
  if ($isDrink) {
    switch ($namaMinuman) {
      case 'esteh':
        $hargaMinuman = 4000;
        break;
      case 'esjeruk':
        $hargaMinuman = 5000;
        break;
      case 'escampur':
        $hargaMinuman = 8000;
        break;
      case 'essinom':
        $hargaMinuman = 5000;
        break;
      case 'airMineral':
        $hargaMinuman = 4000;
        break;
    }
  }

  // Total harga
  $totalHarga = $hargaMakanan * $jumlahMakanan + $hargaMinuman * $jumlahMinuman;
  $ppn = $totalHarga * 0.11; // PPN 11%
  $totalAkhir = $totalHarga + $ppn;

  // Output
  echo "<p>Anda memesan $jumlahMakanan porsi $namaMakanan seharga Rp. " . number_format($hargaMakanan, 0, ",", ".") . " per porsi.</p>";
  if ($isDrink) {
    echo "<p>Anda juga memesan $jumlahMinuman porsi $namaMinuman seharga Rp. " . number_format($hargaMinuman, 0, ",", ".") . " per porsi.</p>";
  } else {
    echo "<p>Anda tidak memesan minuman.</p>";
  }
  echo "<p>Total harga: Rp. " . number_format($totalHarga, 0, ",", ".") . "</p>";
  echo "<p>PPN 11%: Rp. " . number_format($ppn, 0, ",", ".") . "</p>";
  echo "<p>Total akhir: Rp. " . number_format($totalAkhir, 0, ",", ".") . "</p>";
}
?>
