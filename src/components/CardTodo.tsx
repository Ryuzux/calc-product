import { Status, Todos } from "@/types/todo";
import { DeleteDialog } from "./DeleteDialog";
import { EditDialog } from "./EditDialog";
import { Card, CardContent } from "./ui/card";

interface Props {
  todos: Todos[]
}

export default function CardTodo({todos}: Props) {
  return (
    <>
    {todos.map((item) => (
      <Card key={item.id} className="w-full max-w-md mb-4 shadow">
        <div className="flex items-center justify-between">
          <div className="ml-4">
            todo {item.id}
          </div>
          <div>
          <EditDialog id={item.id} defaultText={item.text} defaultStatus={item.status as Status} />
          <DeleteDialog id={item.id} />
          </div>
        </div>
        <CardContent className="p-4 flex justify-between items-start gap-4">
          <div>
            <p className="text-lg font-medium">{item.text}</p>
            <p className="text-sm text-gray-400">
              Dibuat pada: {new Date(item.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="flex gap-2 mt-1">
          </div>
        </CardContent>
      </Card>
    ))}
  </>    
  )
}