import { Component, OnInit, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

interface CourseFormFields {
  description?: string;
  date?: string;
}

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"]
})
export class CourseFormComponent implements OnInit {
  model: CourseFormFields = {};

  constructor(public dialogRef: MatDialogRef<CourseFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}

  saveCourse(f: NgForm) {
    if (f.valid) {
      this.dialogRef.close({
        id: 1,
        ...this.model
      });
    }
  }
  dismissModal() {
    this.dialogRef.close();
  }
}
