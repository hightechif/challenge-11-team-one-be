## Binar Challenge | FSW5 | Team O.N.E.
Code Challenge 11 dari Binar Academy untuk kelas Fullstack Web Wave 5 Team O.N.E.

### Demo
Link for demo: 

### Description
Resume Builder sederhana.

### Instalation

**1. Clone the source code**

```
$ git clone https://gitlab.com/ridhanf/challenge-11-team-one-be.git
$ cd challenge-11-team-one-be
```

**2. Install Dependencies**

Make sure you have [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed. Project dependencies listed in `package.json`.

```
$ npm install
```

**3. Run sequelize**

Generate database

```
$ sequelize db:create
```

Run migration and seeders

```
$ sequelize db:migrate
$ sequelize db:seed:all
```

**4. Run the server**

Run server with:

```
$ npm run start
```

or

```
$ npm run dev
```

&nbsp;

Server listening in port 3000 (open http://localhost:3000)

&nbsp;

### Gitflow Workflow

Berikut adalah panduan umum untuk developer yang akan mengembangkan satu fitur
1. Buat branch baru dan beri nama sesuai kode/fitur yang akan ditambah dengan perintah berikut:\
``$ git checkout -b feature-[nama_feature]`` misal: ``$ git checkout -b feature-login``
2. Lakukan coding seperti biasa. Tambahkan, hapus, atau ubah file yang diperlukan. Git akan tracking secara otomatis. Apabila ingin melihat file yang berubah, cek dengan\
``$ git status``
3. Untuk menambahkan perubahan, lakukan\
``$ git add .`` atau ``$ git add --all``, kemudian\
``$ git commit -m “pesan apa pun”`` misal  ``$ git commit -m “add login feature”``
4. Sebelum melakukan push, pastikan sudah update dengan versi development terbaru:\
``$ git pull origin development``
5. Jika terjadi conflict karena ada anggota tim lain yang mengedit baris code sama, lakukan resolve di code editor dengan memilih potongan code yang betul. Ada beberapa opsi:
> - pilih code existing (milik kita),
> - pilih code incoming (milik anggota lain), atau
> - keep both (dua-duanya dimasukkan).
>
> Pastikan rangkaian code masih berjalan ketika resolve conflict ini.
6. Lakukan push ke branch feature dengan\
``$ git push feature-login``
7. Lakukan merge request di Gitlab, pilih branch asal ``feature-login`` dan branch tujuan ``development``. Pastikan tidak ada conflict, lalu klik create merge request
8. Maintainer review merge request dan approve apabila tidak ada conflict

[Referensi Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
