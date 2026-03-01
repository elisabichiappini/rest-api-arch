// Prisma client factory: pass `adapter` (direct DB) or `accelerateUrl` (Prisma Accelerate)
// Usage: const prisma = require('./prisma/client');
const { PrismaClient } = require('@prisma/client');

const DATABASE_URL = process.env.DATABASE_URL;
const ACCELERATE_URL = process.env.PRISMA_ACCELERATE_URL || process.env.ACCELERATE_URL;

let prisma;

if (ACCELERATE_URL) {
  // Use Prisma Accelerate
  prisma = new PrismaClient({ accelerateUrl: ACCELERATE_URL });
} else if (DATABASE_URL) {
  // Direct DB connection via adapter
  prisma = new PrismaClient({ adapter: { url: DATABASE_URL } });
} else {
  // Fallback to default constructor (will rely on generated client defaults)
  prisma = new PrismaClient();
}

module.exports = prisma;
