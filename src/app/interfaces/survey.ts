import { Moment } from "moment";

export interface Survey {
  id: number;
  description: string;
  date: Moment;
  studentName: string;
  studentSurname:string;
  studentEmail:string;
  studentCompany:string;
  studentDepartment:string;
  teacher: string;
}
