import { Component, OnInit } from "@angular/core";
import { Course } from "../../interfaces/course";
import { MatDialog } from "@angular/material";
import { CourseFormComponent } from "../course-form/course-form.component";
import * as moment from "moment";

@Component({
  selector: "app-view-courses",
  templateUrl: "./view-courses.component.html",
  styleUrls: ["./view-courses.component.scss"]
})
export class ViewCoursesComponent implements OnInit {
  items: Course[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  getItems() {
    return this.items.map(item => {
      return {
        ...item,
        date: item.date.format("LL")
      };
    });
  }

  openAddCourseModal() {
    this.dialog
      .open(CourseFormComponent)
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.items.push(result);
        }
      });
  }
}
