# 🚀 Fastify TypeScript Starter

![Fastify](https://img.shields.io/badge/Fastify-v4.0.0-black?style=for-the-badge&logo=fastify) ![TypeScript](https://img.shields.io/badge/TypeScript-v5.0-blue?style=for-the-badge&logo=typescript) ![Prisma](https://img.shields.io/badge/Prisma-v4.0-green?style=for-the-badge&logo=prisma) ![Pino](https://img.shields.io/badge/Pino-Logger-orange?style=for-the-badge&logo=pino) ![Zod](https://img.shields.io/badge/Zod-Schema-red?style=for-the-badge&logo=zod)

This is a **production-ready Fastify boilerplate** built with TypeScript. It includes OpenAPI, Prisma, Pino, and Zod for a robust and scalable backend application.

---

## 📂 Project Structure

```
app/
├── .env                # Environment variables
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── prisma/             # Prisma schema and migrations
│   ├── schema.prisma   # Database schema
│   └── migrations/     # Database migrations
├── src/                # Application source code
│   ├── index.ts        # Application entry point
│   ├── modules/        # Feature modules
│   │   ├── auth/       # Authentication module
│   │   └── product/    # Product module
│   ├── plugins/        # Fastify plugins
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
```

---

## 🛠️ Technologies Used

- **Fastify**: High-performance Node.js framework.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **OpenAPI**: API documentation and validation.
- **Prisma**: Modern database toolkit.
- **Pino**: Fast and structured logging.
- **Zod**: Schema validation.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL (or any database supported by Prisma)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chamindudilshanjayasinghe/fastify-ts-starter.git
   cd fastify-ts-starter/app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the `app/` directory and configure your database connection:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
   ```

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## 📜 API Documentation

The OpenAPI documentation is available at `/docs` when the server is running.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀
