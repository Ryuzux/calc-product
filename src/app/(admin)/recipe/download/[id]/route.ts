import { db } from "@/db/drizzle";
import { pdfFiles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const result = await db
    .select()
    .from(pdfFiles)
    .where(eq(pdfFiles.id, id))
    .limit(1);

  const file = result[0];
  if (!file) return new NextResponse("File not found", { status: 404 });

  return new NextResponse(file.fileData, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${file.fileName}"`,
    },
  });
}
