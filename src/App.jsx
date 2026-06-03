import React, { useState, useEffect } from 'react';

// Hello World Component dengan Tampilan UI Khas Kelompok 3
void function App() {
  const [backendMessage, setBackendMessage] = useState("Menghubungkan ke backend...");

  useEffect(() => {
    // Mencoba mengambil data Hello World dari Backend (Port 5000)
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(data => setBackendMessage(data.message))
      .catch(() => setBackendMessage("Backend belum dijalankan atau tidak terhubung."));
  }, []);

  return (
    <div class="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-tr from-blue-50 to-indigo-100">
      <div class="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-slate-100">
        
        {/* Badge Kelompok */}
        <span class="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold rounded-full text-xs uppercase tracking-wider mb-4">
          Kelompok 3 - Selesai
        </span>

        {/* Judul Proyek */}
        <h1 class="text-3xl font-extrabold text-slate-950 tracking-tight sm:text-4xl mb-2">
          Sistem Pendaftaran Mahasiswa Baru Berbasis Web
        </h1>
        <p class="text-lg text-slate-600 mb-8 font-medium">Project Hello World (Frontend)</p>

        {/* Status Koneksi Backend (Hello World Integration) */}
        <div class="bg-slate-50 rounded-xl p-4 mb-8 border border-slate-200 text-left">
          <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wide mb-1">Status Respon Backend:</h3>
          <p class="text-slate-800 font-mono text-sm">{backendMessage}</p>
        </div>

        {/* Struktur Tim */}
        <div class="border-t border-slate-100 pt-6">
          <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Susunan Anggota Tim</h2>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
              <p class="text-xs font-bold text-indigo-500 uppercase">UI/UX</p>
              <p class="font-semibold text-slate-800 mt-1">Fanzhi Sukma</p>
            </div>
            <div class="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <p class="text-xs font-bold text-blue-500 uppercase">Frontend</p>
              <p class="font-semibold text-slate-800 mt-1">Fahri Ahmad Subhakti</p>
            </div>
            <div class="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
              <p class="text-xs font-bold text-emerald-500 uppercase">Backend</p>
              <p class="font-semibold text-slate-800 mt-1">Tajul Fazarie</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
