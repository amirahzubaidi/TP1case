// Mendapatkan elemen tombol
const toggleThemeBtn = document.getElementById('toggle-theme-btn');

// Menambahkan event listener untuk mengubah tema
toggleThemeBtn.addEventListener('click', () => {
    // Mengubah kelas body antara 'light-theme' dan 'dark-theme'
    document.body.classList.toggle('dark-theme');
});
