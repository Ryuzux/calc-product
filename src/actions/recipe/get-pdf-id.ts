"use server";

import { db } from "@/db/drizzle";
import { pdfFiles } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getPdfById(id: number) {
  const result = await db
    .select()
    .from(pdfFiles)
    .where(eq(pdfFiles.id, id));

  if (!result[0]) return null;

  const file = result[0];
  const base64 = Buffer.from(file.fileData).toString("base64");
  const pdfUrl = `data:application/pdf;base64,${base64}`;

  return {
    ...file,
    pdfUrl,
  };
}
