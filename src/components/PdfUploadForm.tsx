'use client'

import { uploadPdf } from "@/actions/recipe/upload-pdf";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Upload } from "lucide-react";
import { toast } from "sonner";

export function PdfUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Pilih file terlebih dahulu");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);
    try {
      await uploadPdf(formData);
      toast.success("Upload Berhasil!");
    } catch {
      toast.error("Upload Gagal!");
    } finally {
      setOpen(false);
    }
  };
  
  useEffect(() => {
    if(!open) {
      setDescription("");
      setFile(null);
    }
  },[open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
        <Upload className="w-8 h-8" />
        </Button>
      </DialogTrigger>
      <DialogContent>
      <DialogHeader>
          <DialogTitle>Upload Resep</DialogTitle>
      </DialogHeader>
        <div className="max-w-md mx-auto mt-8 bg-white p-2 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                id="pdf"
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi</Label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Masukkan deskripsi"
                className="w-full h-24 resize-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
              Upload PDF
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
