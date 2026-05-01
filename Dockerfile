# Tahap 1: Build aplikasi
FROM node:20-alpine AS builder

# Menentukan direktori kerja di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependensi proyek
RUN npm install

# Menyalin seluruh kode sumber proyek, termasuk index.html, postcss.config.js, dan folder public
COPY . .

# Membangun aset statis aplikasi
# Catatan: Sesuaikan perintah ini jika script build di package.json Anda berbeda.
RUN npm run build

# Tahap 2: Sajikan aplikasi menggunakan Nginx
FROM nginx:alpine

# Menyalin hasil build dari tahap 1 ke direktori default Nginx
# Catatan: 'dist' adalah folder output default untuk bundler modern seperti Vite. 
# Jika proyek Anda menghasilkan folder 'build' (seperti Create React App), ubah '/app/dist' menjadi '/app/build'.
COPY --from=builder /app/dist /usr/share/nginx/html

# Mengekspos port 80 agar bisa diakses dari luar container
EXPOSE 80

# Menjalankan Nginx di foreground
CMD ["nginx", "-g", "daemon off;"]
