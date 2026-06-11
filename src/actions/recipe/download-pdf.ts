'use server';

import { db } from "@/db/drizzle";
import { pdfFiles } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function downloadPdf(id: number) {
  const file = await db.select().from(pdfFiles).where(eq(pdfFiles.id, id)).limit(1);

  if (!file[0]) {
    throw new Error("File not found");
  }

  const blob = file[0].fileData;
  const base64 = Buffer.from(blob).toString("base64");

  const dataUrl = `data:application/pdf;base64,${base64}`;

  return dataUrl;
}
