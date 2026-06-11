'use server';

import { db } from "@/db/drizzle";
import { pdfFiles } from "@/db/schema";

export async function getAllPdfs() {
  return await db
    .select({
      id: pdfFiles.id,
      fileName: pdfFiles.fileName,
      description: pdfFiles.description,
      uploadedAt: pdfFiles.uploadedAt,
    })
    .from(pdfFiles);
}
