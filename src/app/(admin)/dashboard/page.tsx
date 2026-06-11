import { getTodo } from "@/actions/todo/get";
import { AddDialog } from "@/components/AddDialog";
import CardTodo from "@/components/CardTodo";
import { Todos } from "@/types/todo";

export default async function Dashboard() {
  let todos: Todos[] = [];

  try {
    todos = await getTodo();
  } catch (error) {
    console.log(error);
    todos = [];
  }
  const backlogTodos = todos.filter((item) => item.status.includes("backlog"));
  const todoTodos = todos.filter((item) => item.status.includes("todo"));
  const inProgressTodos = todos.filter((item) =>
    item.status.includes("inProgress")
  );
  const doneTodos = todos.filter((item) => item.status.includes("done"));

  return (
    <div className="p-6 sm:p-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">
            📥 Backlog
            <AddDialog status="backlog" />
          </h2>
          <CardTodo todos={backlogTodos} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">
            📝 Todo
            <AddDialog status="todo" />
          </h2>
          <CardTodo todos={todoTodos} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">
            🔄 In Progress
            <AddDialog status="inProgress" />
          </h2>
          <CardTodo todos={inProgressTodos} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">
            ✅ Done
            <AddDialog status="done" />
          </h2>
          <CardTodo todos={doneTodos} />
        </div>
      </div>
    </div>
  );
}
