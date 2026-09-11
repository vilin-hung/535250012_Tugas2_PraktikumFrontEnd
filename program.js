// mengambil elemen HTML yang akan dipakai JS (DOM)
const result = document.getElementById('result');
const buttonShow = document.getElementById('buttonShow');
const buttonErase = document.getElementById('buttonErase');

// fungsi untuk menampilkan data
function showData() {
  result.innerHTML = `
    <p><strong>Nama: </strong>Vianlienra Hung</p>
    <p><strong>NIM: </strong>535250012</p>
    <p><strong>Program Studi: </strong>Teknik Informatika</p>
  `;
}

// fungsi untuk menghapus data yang pernah ditampilkan
function eraseData() {
  result.innerHTML = '<p>Data dihapus.</p>';
}

// event click: fungsi berjalan saat tombol diklik
buttonShow.addEventListener('click', showData);
buttonErase.addEventListener('click', eraseData);
