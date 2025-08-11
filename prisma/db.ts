// prisma/db.ts
// This file exports a singleton PrismaClient instance for use in your backend

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
