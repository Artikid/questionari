import { Component, OnInit } from "@angular/core";
import { Course } from "../../interfaces/course";
import { MatDialog, MatDialogRef } from "@angular/material";
import { CourseFormComponent, CourseFormDialogData } from "../course-form/course-form.component";
import * as moment from "moment";
import { CourseService } from "../../services/course.service";

@Component({
  selector: "app-view-courses",
  templateUrl: "./view-courses.component.html",
  styleUrls: ["./view-courses.component.scss"]
})
export class ViewCoursesComponent implements OnInit {
  items: Course[] = [];

  constructor(public dialog: MatDialog, public courseService: CourseService) {
    this.reloadCourses();
  }

  ngOnInit() {}

  getItems() {
    return this.items.slice();
  }

  openAddCourseModal() {
    const dialogData: CourseFormDialogData = {
      onSave: (dialogRef: MatDialogRef<CourseFormComponent>, model: Course) => {
        this.courseService.createCourse(model).subscribe(response => dialogRef.close(response));
      }
    };

    this.dialog
      .open(CourseFormComponent, {
        data: dialogData
      })
      .afterClosed()
      .subscribe(newCourse => {
        console.log(newCourse);
        this.reloadCourses();
      });
  }

  reloadCourses() {
    this.courseService.getCourseList().subscribe(items => {
      this.items = items;
    });
  }
}
