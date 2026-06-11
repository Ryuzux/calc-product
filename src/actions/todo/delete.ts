"use server";

import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteTodo({ id }: { id: number }) {
  await db.delete(todo).where(eq(todo.id, id));
  revalidatePath("/");
}
