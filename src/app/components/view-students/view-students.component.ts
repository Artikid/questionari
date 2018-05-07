import { Component, OnInit } from "@angular/core";
import { Student } from "../../interfaces/student";
import { StudentService } from "../../services/student.service";

@Component({
  selector: "app-view-students",
  templateUrl: "./view-students.component.html",
  styleUrls: ["./view-students.component.scss"]
})
export class ViewStudentsComponent implements OnInit {
  items: Student[] = [];
  constructor(public studentService: StudentService) {
    studentService.getStudentList().subscribe(response => {
      this.items = response;
    });
  }

  ngOnInit() {}

  getItems() {
    return this.items.map(item => {
      return { ...item, dob: item.dob.toDateString() };
    });
  }
}
