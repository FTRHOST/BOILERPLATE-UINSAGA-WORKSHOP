import React from 'react';

// Komponen Navbar berfungsi sebagai navigasi di bagian atas halaman.
const Navbar = () => {
  return (
    // 'nav' adalah tag HTML semantik untuk navigasi.
    // Class Tailwind:
    // - bg-white: Background putih
    // - shadow-md: Memberikan bayangan halus di bawah navbar
    // - fixed, w-full, top-0, z-50: Membuat navbar selalu berada di atas (sticky)
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">

      {/* Container untuk membatasi lebar maksimal konten (max-w-6xl) dan meletakkannya di tengah (mx-auto) */}
      <div className="max-w-6xl mx-auto px-4">

        {/* flex, justify-between, items-center: Mengatur layout agar Logo di kiri dan Menu di kanan */}
        <div className="flex justify-between items-center h-16">

          {/* Bagian Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* TODO: [Tugas Peserta] Ubah "MyPortfolio" menjadi namamu atau inisialmu */}
            <span className="font-bold text-xl text-indigo-600">MyPortfolio</span>
          </div>

          {/* Bagian Link Navigasi (Tersembunyi di layar kecil/HP dengan 'hidden', tampil di tablet ke atas dengan 'md:flex') */}
          <div className="hidden md:flex space-x-8">
            {/* hover:text-indigo-600 akan mengubah warna teks saat cursor diarahkan ke link */}
            <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>

            {/* TODO: [Tugas Peserta] Tambahkan link baru, misalnya "Contact" atau "About" di bawah baris ini */}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
