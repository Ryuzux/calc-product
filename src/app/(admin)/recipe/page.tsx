import { getAllPdfs } from '@/actions/recipe/get-pdf';
import type { Recipe } from "@/types/recipe";
import { DataTable } from '@/components/DataTable';
import { columns } from './column';
import { Card } from '@/components/ui/card';
import { PdfUploadForm } from '@/components/PdfUploadForm';

export default async function Recipe() {
  const files = await getAllPdfs();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Card className="p-4 space-y-4">
        <div className="flex justify-end">
          <PdfUploadForm />
        </div>
        <h1 className="text-2xl font-bold">Daftar Resep</h1>
        <DataTable columns={columns} data={files} />
      </Card>
    </div>

  );
};
