import React from 'react';
// Mengimpor komponen-komponen yang telah kita buat dari folder 'components'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

// App adalah komponen utama (Parent Component) yang akan membungkus semua komponen lain (Child Components).
function App() {
  return (
    // Fragment (<>...</>) digunakan agar kita bisa mengembalikan lebih dari satu elemen HTML
    // tanpa harus menambahkan div ekstra yang tidak perlu di dalam DOM (struktur HTML).
    <>
      {/* Menampilkan Navbar di paling atas */}
      <Navbar />

      {/* tag 'main' adalah elemen semantik HTML5 untuk menunjukkan konten utama dari sebuah halaman web */}
      <main>
        {/* Menampilkan bagian Hero (Perkenalan Diri) */}
        <Hero />

        {/* Menampilkan bagian Projects (Portofolio) */}
        <Projects />
      </main>

      {/* TODO: [Tugas Tambahan Peserta] Buat komponen Footer.jsx sederhana di dalam src/components/ dan tampilkan di bawah sini */}
    </>
  );
}

export default App;
