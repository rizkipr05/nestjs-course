# Kategori API (Belajar NestJS)

Project ini adalah latihan dasar membuat REST API menggunakan **NestJS + TypeScript**.
Fokus utamanya untuk memahami struktur project, controller, service, dan testing sederhana.

## Tujuan Belajar

- Memahami alur request dari `Controller` ke `Service`
- Menjalankan server NestJS di local
- Menjalankan unit test bawaan
- Mengenal struktur folder project NestJS

## Tech Stack

- Node.js
- NestJS
- TypeScript
- Jest (unit test)

## Struktur Singkat

```txt
api/kategori/
├── src/
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   └── main.ts
├── test/
└── package.json
```

## Endpoint Saat Ini

- `GET /xyz`
  - Response: `"Hello Dunia!"`

## Cara Menjalankan

1. Masuk ke folder project:

```bash
cd api/kategori
```

2. Install dependency:

```bash
npm install
```

3. Jalankan server:

```bash
npm run start
```

4. Buka di browser / Postman:

```txt
http://localhost:3000/xyz
```

## Scripts Penting

```bash
# Jalankan aplikasi
npm run start

# Jalankan mode development (auto-reload)
npm run start:dev

# Build ke folder dist
npm run build

# Unit test
npm run test

# E2E test
npm run test:e2e
```

## Catatan Belajar

- Route ditentukan di `src/app.controller.ts`
- Logic respons ada di `src/app.service.ts`
- Konfigurasi module utama ada di `src/app.module.ts`
- Entry point aplikasi ada di `src/main.ts`

## Rencana Pengembangan (Opsional)

- Tambah endpoint CRUD kategori (`GET`, `POST`, `PUT`, `DELETE`)
- Tambah validasi input dengan `class-validator`
- Pisahkan menjadi module `kategori` sendiri
- Integrasi database (MySQL/PostgreSQL)

## Referensi

- [NestJS Documentation](https://docs.nestjs.com)
