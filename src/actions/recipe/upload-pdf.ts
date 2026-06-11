// app/actions/uploadPdf.ts
"use server";

import { db } from "@/db/drizzle";
import { pdfFiles } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function uploadPdf(formData: FormData) {
  const file = formData.get("file") as File;
  const description = formData.get("description") as string;

  if (!file) {
    throw new Error("No file provided");
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  await db.insert(pdfFiles).values({
    fileName: file.name,
    fileData: buffer,
    description
  });

  revalidatePath("/");
}
