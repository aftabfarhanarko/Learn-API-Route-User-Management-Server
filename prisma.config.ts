import "dotenv/config";

export default {
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,  // এখন সঠিক URL পাবে
  },
  migrations: {
    path: "prisma/migrations",
  },
};