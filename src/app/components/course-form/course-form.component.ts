import { Component, OnInit, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Course } from "../../interfaces/course";

export interface CourseFormDialogData {
  onSave: (dialogRef: MatDialogRef<CourseFormComponent>, model: Course) => void;
}

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"]
})
export class CourseFormComponent implements OnInit {
  model: Course = {};

  constructor(
    public dialogRef: MatDialogRef<CourseFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CourseFormDialogData
  ) {}

  ngOnInit() {}

  saveCourse(f: NgForm) {
    if (f.valid) {
      if (this.data && this.data.onSave) {
        this.data.onSave(this.dialogRef, this.model);
      } else {
        this.dialogRef.close(this.model);
      }
    }
  }
  dismissModal() {
    this.dialogRef.close();
  }
}
