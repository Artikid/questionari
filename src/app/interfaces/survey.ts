import { Student } from "./student";

export interface Survey {
  id: number;
  description: string;
  date: Date;
  student: Student;
  teacher: string;
}
