'use client'

import { Button } from "@/components/ui/button";
import { downloadCSV } from "@/lib/utils";

interface DownloadCSVButtonProps<T extends object> {
  data: T[];
  filename?: string;
}

export function DownloadCSVButton<T extends object>({ data, filename = "data.csv" }: DownloadCSVButtonProps<T>) {
  return (
    <Button onClick={() => downloadCSV(data, filename)}>
      Download CSV
    </Button>
  );
}
