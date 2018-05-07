import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Student } from "../interfaces/student";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  constructor(public http: HttpClient) {}

  getStudentList(): Observable<Student[]> {
    const mapStudent = (item: Student) => {
      return {
        ...item,
        dob: new Date(item.dob)
      };
    };
    return this.http
      .get<Student[]>("http://localhost:3000/api/students")
      .pipe(map((items: Student[]) => items.map(mapStudent)));
  }
}
