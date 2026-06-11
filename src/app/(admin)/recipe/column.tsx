'use client';

import { ColumnDef } from "@tanstack/react-table";
import { Recipe } from "@/types/recipe";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Recipe>[] = [
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "fileName",
    header: "File Name",
  },
  {
    accessorKey: "uploadedAt",
    header: "Uploaded At",
    cell: ({ row }) => {
      const uploadedAt = row.original.uploadedAt;
      return uploadedAt ? new Date(uploadedAt).toLocaleDateString() : "-";
    },
  },
  {
    header: "Action",
    id: "actions",
    cell: ({ row }) => {
      const file = row.original;
      const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `/recipe/download/${file.id}`;
        link.target = "_blank";
        link.click();
      };

      return (
        <Button
          onClick={handleDownload}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download
        </Button>
      );
    },
  },
];
