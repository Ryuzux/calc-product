
import { getAllUsers } from "@/actions/user/get";
import { DataTable } from "@/components/DataTable";
import { columns } from "./column";
import { Card } from "@/components/ui/card";
import { DownloadCSVButton } from "./DownloadCSVButton";

export default async function Dashboard() {
  const user = await getAllUsers();
  if (!user) return null;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <Card className="p-4 space-y-4">
        <div className="flex justify-end">
          <DownloadCSVButton data={user} filename="user-data.csv" />
        </div>
          <DataTable columns={columns} data={user} />
      </Card>
    </div>
  );
}
