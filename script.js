// Ambil elemen tombol pemicu dark mode
const themeToggleBtn = document.getElementById('theme-toggle');

// Cek apakah pengguna pernah menyimpan preferensi tema sebelumnya
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggleBtn) {
        themeToggleBtn.textContent = '☀️ Light Mode';
    }
}

// Tambahkan event listener saat tombol diklik
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Simpan status tema ke localStorage dan ubah teks tombol
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
    });
}