import { PrismaClient } from '@prisma/client';

// Abbiamo dato al progetto una definizione globale di "prisma"
declare global {
  var prisma: PrismaClient | undefined;
}

// Il client cerca prisma se esiste oppure crea un nuovo client prisma
const client = globalThis.prisma || new PrismaClient();

// Checka se l'env è in production o in test, nel nostro caso è in test
// **Best practice quando si usa Next.js, in quanto, data la funzionalità di hot-reload di Next, senza questa variabile creerebbe mille client Prisma
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
