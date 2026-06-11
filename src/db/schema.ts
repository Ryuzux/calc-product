import { serial, text, pgTable, timestamp, customType, integer } from "drizzle-orm/pg-core";

const bytea = customType<{
  data: Buffer;
  driverData: Buffer;
}>({
  dataType() {
    return "bytea";
  },
});

export const todo = pgTable("todo", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  status: text("status").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

export const pdfFiles = pgTable("pdf_files", {
  id: serial("id").primaryKey(),
  description: text("description").notNull(),
  fileName: text("file_name").notNull(),
  fileData: bytea("file_data").notNull(),
  uploadedAt: timestamp("uploaded_at").defaultNow(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  status: text("status").notNull(),
})