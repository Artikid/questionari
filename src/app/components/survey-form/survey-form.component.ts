import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { SurveyNew } from "../../interfaces/survey-new";
import { NgForm } from "@angular/forms";
import { SurveyService } from "../../services/survey.service";
import { Survey } from "../../interfaces/survey";
import { MatSnackBar } from "@angular/material";
import { Student } from "../../interfaces/student";
import { StudentService } from "../../services/student.service";

@Component({
  selector: "app-survey-form",
  templateUrl: "./survey-form.component.html",
  styleUrls: ["./survey-form.component.scss"]
})
export class SurveyFormComponent implements OnInit {
  @Input() survey: SurveyNew = {};
  students: Student[] = [];
  isLoading: boolean = true;

  constructor(
    public surveyService: SurveyService,
    public snackbar: MatSnackBar,
    public studentService: StudentService
  ) {
    this.studentService.getStudentList().subscribe((response: Student[]) => {
      this.students = response;
      this.isLoading = false;
    });
    
  }

  ngOnInit() {}

  saveSurvey(f: NgForm) {
    if (f.valid) {
      this.surveyService
        .createSurvey(this.survey)
        .subscribe((response: Survey) => {
          this.snackbar.open(
            `Creato questionario con ID ${response.id}`,
            "Ok, grazie",
            { duration: 2500 }
          );
        });
    } else {
      this.snackbar.open("Form non valido", "Ok, grazie", { duration: 2500 });
    }
  }
}
