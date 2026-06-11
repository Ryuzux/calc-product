export type Status = "todo" | "inProgress" | "done" | "backlog";

export interface Todos {
  id: number;
  text: string;
  status: string;
  createdAt: Date;
}