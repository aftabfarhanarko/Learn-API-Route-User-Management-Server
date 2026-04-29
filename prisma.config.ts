import "dotenv/config";

export default {
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,   // ← এটা যোগ করো
  },
  migrations: {
    path: "prisma/migrations",
  },
};