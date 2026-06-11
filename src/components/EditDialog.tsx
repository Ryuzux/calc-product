"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { editTodo } from "@/actions/todo/edit";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Status } from "@/types/todo";
import { toast } from "sonner";

export function EditDialog({
  id,
  defaultText,
  defaultStatus,
}: {
  id: number;
  defaultText: string;
  defaultStatus: Status;
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(defaultText);
  const [status, setStatus] = useState(defaultStatus);

  async function handleEdit() {
    if (!text.trim()) return;
    try {
    await editTodo({ id, text, status });
    setOpen(false);
    toast.success("Todo berhasil diedit");
  } catch (error) {
    console.log(error);
    toast.error("Terjadi kesalahan");
  }
}

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-sm text-blue-600 hover:text-blue-800 hover:bg-transparent px-2"
        >
          <Pencil className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Edit deskripsi todo"
          />

          <Select
            value={status}
            onValueChange={(val) =>
              setStatus(val as "todo" | "inProgress" | "done" | "backlog")
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="backlog">Backlog</SelectItem>
              <SelectItem value="todo">Todo</SelectItem>
              <SelectItem value="inProgress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Batal
          </Button>
          <Button onClick={handleEdit} disabled={!text}>
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
