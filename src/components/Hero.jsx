import React, { useState } from 'react';

const Hero = () => {
  // useState adalah "Hook" React untuk menyimpan data sementara (state) di dalam komponen.
  // 'likes' adalah nama variabelnya, 'setLikes' adalah fungsi untuk mengubah nilai 'likes'.
  // Angka (0) adalah nilai awal dari likes.
  const [likes, setLikes] = useState(0);

  // Fungsi ini akan dipanggil ketika tombol ditekan
  const handleLike = () => {
    // Menambah jumlah likes saat ini dengan 1
    setLikes(likes + 1);
  };

  return (
    // 'id="home"' digunakan sebagai target link navigasi dari Navbar
    // pt-24 (padding top) memberikan ruang agar konten tidak tertutup oleh navbar yang fixed
    <section id="home" className="pt-24 pb-16 px-4 bg-gray-50 flex flex-col items-center justify-center min-h-screen">

      {/* max-w-3xl membatasi lebar konten agar nyaman dibaca di layar besar */}
      <div className="max-w-3xl mx-auto text-center">

        {/* Foto Profil */}
        {/* w-32 h-32 mengatur ukuran, rounded-full membuatnya menjadi lingkaran, mx-auto meletakkannya di tengah */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto shadow-lg mb-6 border-4 border-white"
        />
        {/* TODO: [Tugas Peserta] Ganti URL gambar di atas dengan URL foto profilmu sendiri */}

        {/* Nama dan Judul Pekerjaan */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Hi, I'm <span className="text-indigo-600">John Doe</span>
        </h1>
        {/* TODO: [Tugas Peserta] Ganti "John Doe" dengan nama aslimu! */}

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          I am a passionate Front-End Developer learning how to build modern web applications using React and Tailwind CSS.
        </p>

        {/* Bagian Interaktif: Tombol Like */}
        <div className="flex flex-col items-center">
          <button
            // onClick akan menjalankan fungsi handleLike setiap kali tombol ditekan
            onClick={handleLike}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-indigo-700 transition-colors transform hover:scale-105"
          >
            👍 Like My Profile
          </button>

          {/* Menampilkan nilai state 'likes' yang akan berubah setiap tombol ditekan */}
          <p className="mt-4 text-gray-500 text-sm">
            This profile has been liked {likes} times.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
