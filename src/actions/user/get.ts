"use server";

import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

export async function getAllUsers() {
  const result = await db.select().from(users)
  return result
}

