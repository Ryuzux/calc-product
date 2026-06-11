  import { getPdfById } from "@/actions/recipe/get-pdf-id";
import { notFound } from "next/navigation";

interface PdfViewerPageProps {
  params: {
    id: string;
  };
}

export default async function PdfViewerPage({ params }: PdfViewerPageProps) {
  const id = Number(params.id);
  const file = await getPdfById(id);

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
