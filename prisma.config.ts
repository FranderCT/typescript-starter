import { config } from 'dotenv';
import { defineConfig } from 'prisma/config';

const isProd = process.env.NODE_ENV === 'production';

config({
  path: isProd ? '.env.production.local' : '.env.development.local',
});

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url:
      process.env.DATABASE_URL ??
      'postgresql://postgres:postgres@localhost:5432/rogo_ganaderia',
  },
});
