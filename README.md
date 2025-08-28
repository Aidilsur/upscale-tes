# Tech Test Project

## Deskripsi

Proyek ini terdiri dari dua bagian utama:

- **Client**: Aplikasi frontend yang dibangun menggunakan React.
- **Server**: API backend yang dibangun menggunakan Node.js dan Express.

## Struktur Proyek

├── client\
│   ├── .env
│   ├── .gitignore
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public\
│   │   └── vite.svg
│   ├── src\
│   │   ├── App.jsx
│   │   ├── assets\
│   │   ├── components\
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── pages\
│   │   ├── store\
│   │   └── utils\
│   └── vite.config.js
└── server\
    ├── .env
    ├── app.js
    ├── config\
    │   └── configMongo.js
    ├── controllers\
    │   ├── auth.js
    │   └── task.js
    ├── helper\
    │   └── jwt.js
    ├── middlewares\
    │   └── authMiddleware.js
    ├── models\\n    │   ├── task.js
    │   └── user.js
    ├── package-lock.json
    ├── package.json
    └── routes\
        ├── auth.js
        ├── index.js
        └── task.js