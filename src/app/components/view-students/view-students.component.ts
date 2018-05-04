import { Component, OnInit } from "@angular/core";
import { Student } from "../../interfaces/student";

@Component({
  selector: "app-view-students",
  templateUrl: "./view-students.component.html",
  styleUrls: ["./view-students.component.scss"]
})
export class ViewStudentsComponent implements OnInit {
  items: Student[] = [
    {
      id: 1,
      name: "Andrea",
      surname: "Cammarata",
      dob: new Date("1990/04/08")
    },
    {
      id: 2,
      name: "Andrea",
      surname: "Cammaroto",
      dob: new Date("1980/01/01")
    }
  ];
  constructor() {}

  ngOnInit() {}

  getItems() {
    return this.items.map(item => {
      return { ...item, dob: item.dob.toDateString() };
    });
  }
}
