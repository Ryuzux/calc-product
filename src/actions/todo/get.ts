"use server";

import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";

export async function getTodo() {
  return await db.select().from(todo);
};
