import React from 'react';

// Data simulasi (Mock Data) untuk portofolio.
// Biasanya data ini berasal dari database atau API, tapi untuk pemula kita gunakan Array (daftar) sederhana.
const projectData = [
  {
    id: 1,
    title: "Class A IT Cash System",
    description: "A simple and modern web application for managing classroom finances.",
    tech: "React, Tailwind, Firebase",
  },
  {
    id: 2,
    title: "FTrack",
    description: "A smart personal finance manager to track all your transactions.",
    tech: "Vite, Tailwind, Firebase",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "A simple and modern portfolio built using the Vite framework.",
    tech: "Vite, Tailwind",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Judul Bagian */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>

        {/* Grid Container */}
        {/* Menggunakan Tailwind Grid System:
            - grid: Mengaktifkan mode grid
            - grid-cols-1: Di HP (layar kecil), 1 kolom (kartu berjejer ke bawah)
            - md:grid-cols-2: Di layar medium (Tablet), jadi 2 kolom
            - lg:grid-cols-3: Di layar besar (Laptop/PC), jadi 3 kolom
            - gap-8: Jarak antar kartu sebesar 2rem (32px)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Looping (Perulangan) Array projectData menggunakan .map() */}
          {/* Ini adalah cara standar React untuk menampilkan banyak elemen dari sebuah daftar data */}
          {projectData.map((project) => (
            // 'key' sangat penting di React saat menggunakan .map() agar React tahu elemen mana yang berubah
            <div key={project.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100">

              {/* Gambar Dummy untuk setiap proyek */}
              <img
                src={`/project/${project.id}.jpg`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Menampilkan Teknologi yang digunakan */}
                <div className="inline-block bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-semibold">
                  {project.tech}
                </div>

                {/* TODO: [Tugas Peserta] Tambahkan tombol "View Project" di bawah badge teknologi ini */}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
