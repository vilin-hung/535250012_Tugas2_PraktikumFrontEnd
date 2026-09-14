// mengambil elemen HTML yang akan dipakai JS (DOM)
const card = document.getElementById('card');
const buttonShow = document.getElementById('buttonShow');
const buttonErase = document.getElementById('buttonErase');

// fungsi untuk menampilkan data
function showData() {
  card.style.display = 'block';
}

// fungsi untuk menghapus data yang pernah ditampilkan
function eraseData() {
  card.style.display = 'none';
}

// event click: fungsi berjalan saat tombol diklik
buttonShow.addEventListener('click', showData);
buttonErase.addEventListener('click', eraseData);
