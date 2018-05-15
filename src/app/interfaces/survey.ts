import { Student } from "./student";

export interface Survey {
  id: number;
  description: string;
  date: Date;
  studentName: string;
  studentSurname:string;
  studentEmail:string;
  studentCompany:string;
  studentDepartment:string;
  teacher: string;
}
