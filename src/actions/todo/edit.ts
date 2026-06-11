"use server";

import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";
import { Status } from "@/types/todo";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function editTodo({ id, text, status }: { id: number; text: string; status: Status }) {
  await db.update(todo).set({ text, status }).where(eq(todo.id, id));
  revalidatePath("/");
}
