export type Status = "lajang" | "menikah" | "janda" | "duda";

export type Gender = "laki-laki" | "perempuan";

export interface User {
  id?: number;
  name: string;
  age: number;
  gender: Gender;
  status: Status;
}
