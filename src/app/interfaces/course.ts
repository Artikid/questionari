import { Moment } from "moment";

export interface Course {
  id: number;
  description: string;
  date: Moment;
}
