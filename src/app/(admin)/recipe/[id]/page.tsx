  import { getPdfById } from "@/actions/recipe/get-pdf-id";
import { notFound } from "next/navigation";

interface PdfViewerPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PdfViewerPage(props: PdfViewerPageProps) {
  const { id } = await props.params;
  const numId = Number(id);
  const file = await getPdfById(numId);

  if (!file) return notFound();

  return (
    <div className="p-6 h-screen">
      <h1 className="text-2xl font-bold mb-4">{file.description}</h1>
      <iframe
        src={file.pdfUrl}
        title={file.description}
        className="w-full h-full border rounded shadow"
      />
    </div>
  );
}
