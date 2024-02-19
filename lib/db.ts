import { PrismaClient } from "@prisma/client";

declare global {
	// eslint-disable-next-line no-var
	// biome-ignore lint/style/noVar: <explanation>
	var cachedPrisma: PrismaClient;
}

let db: PrismaClient;
if (process.env.NODE_ENV === "production") {
	db = new PrismaClient();
} else {
	if (!globalThis.cachedPrisma) {
		globalThis.cachedPrisma = new PrismaClient();
	}
	db = globalThis.cachedPrisma;
}

export default db;
