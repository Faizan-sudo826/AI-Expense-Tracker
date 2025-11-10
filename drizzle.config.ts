import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/db/schema.ts",  // Where your database schema is defined
  out: "./drizzle",               // Where migration files are generated
  dialect: "postgresql",          // Database dialect (PostgreSQL)
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Connection string from .env
  },
} satisfies Config;