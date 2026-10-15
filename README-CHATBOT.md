# Ayam Penyet Sambel Dower + Dower AI

Website React/Vite dengan chatbot Gemini di pojok kanan bawah. Chatbot menjawab berdasarkan data menu dan jam operasional yang tersedia di situs. Informasi promo tidak diasumsikan aktif jika belum dikonfirmasi.

## Setup lokal
1. Install Node.js.
2. Jalankan `npm install`.
3. Salin `.env.example` menjadi `.env`.
4. Isi `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, dan `GEMINI_API_KEY`.
5. Jalankan `npm run dev`.

Penting: `.env` hanya untuk lokal dan sudah diabaikan Git. Jangan pernah commit API key.

## Deploy ke Vercel
1. Import/push repository ke GitHub.
2. Di Vercel, buka Project Settings → Environment Variables.
3. Tambahkan:
   - `GEMINI_API_KEY` = API key Gemini yang baru
   - `VITE_SUPABASE_URL` = URL proyek Supabase
   - `VITE_SUPABASE_ANON_KEY` = Supabase publishable key
   - Opsional `GEMINI_MODEL` = model Gemini yang aktif di akunmu; default `gemini-2.5-flash`
4. Redeploy setelah menyimpan environment variables.

Vercel akan mendeteksi `api/chat.js` sebagai Serverless Function. Endpoint ini hanya menerima POST. Batasi pemakaian/rate limit di production untuk mencegah penyalahgunaan dan biaya API tak terduga.

## Catatan
- Promo aktif belum tersedia sebagai data terverifikasi. Chatbot akan menyarankan konfirmasi ke admin.
- Chatbot tidak mengecek atau membuat reservasi otomatis; ia hanya menjelaskan formulir website.
- Model/API availability bergantung pada akses dan kebijakan Google saat deploy.
