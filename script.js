// Mengambil elemen form dan modal menggunakan DOM
const form = document.getElementById('studentForm');
const modal = document.getElementById('resultModal');
const closeBtn = document.getElementsByClassName('close')[0];

// Event listener untuk form submit
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form submit default
    
    // Mengambil nilai dari setiap input menggunakan DOM
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const angkatan = document.getElementById('angkatan').value;
    
    // Mengambil nilai radio button peminatan
    const peminatanRadio = document.querySelector('input[name="peminatan"]:checked');
    const peminatan = peminatanRadio ? peminatanRadio.value : '';
    
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const alamat = document.getElementById('alamat').value;
    const tanggal = document.getElementById('tanggal').value;
    
    // Validasi form
    if (!nama || !nim || !angkatan || !peminatan || !email || !phone || !alamat || !tanggal) {
        alert('❌ Mohon lengkapi semua field!');
        return;
    }
    
    // Format tanggal menjadi lebih readable
    const dateObj = new Date(tanggal);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = dateObj.toLocaleDateString('id-ID', options);
    
    // Menampilkan hasil menggunakan DOM manipulation
    document.getElementById('resultNama').textContent = nama;
    document.getElementById('resultNim').textContent = nim;
    document.getElementById('resultAngkatan').textContent = angkatan;
    document.getElementById('resultPeminatan').textContent = peminatan;
    document.getElementById('resultEmail').textContent = email;
    document.getElementById('resultPhone').textContent = phone;
    document.getElementById('resultAlamat').textContent = alamat;
    document.getElementById('resultTanggal').textContent = formattedDate;
    
    // Menampilkan modal popup
    modal.style.display = 'block';
    
    // Tambahkan efek konfetti (simulasi)
    setTimeout(() => {
        console.log('🎊 Data berhasil ditampilkan dalam popup!');
    }, 500);
});

// Event listener untuk menutup modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Menutup modal jika user klik di luar modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Menutup modal dengan tombol Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Tambahkan interaktivitas pada input
const inputs = document.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Animasi loading saat halaman dimuat
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});