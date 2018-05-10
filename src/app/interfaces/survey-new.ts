import { Student } from "./student";

export interface SurveyNew {
  description?: string;
  date?: Date;
  student?: Student;
  teacher?: string;
}
