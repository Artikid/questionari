import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { SurveyNew } from "../../interfaces/survey-new";
import { NgForm } from "@angular/forms";
import { SurveyService } from "../../services/survey.service";
import { Survey } from "../../interfaces/survey";
import { MatSnackBar } from "@angular/material";
import { Student } from "../../interfaces/student";

@Component({
  selector: "app-survey-form",
  templateUrl: "./survey-form.component.html",
  styleUrls: ["./survey-form.component.scss"]
})
export class SurveyFormComponent implements OnInit {
  @Input() survey: SurveyNew | Survey = {};
  @Output() onSurveySubmit: EventEmitter<SurveyNew | Survey> = new EventEmitter();
  students: Student[] = [];
  isLoading: boolean = true;

  constructor() {}

  ngOnInit() {}

  saveSurvey(f: NgForm) {
    if (f.valid) {
      this.onSurveySubmit.emit(this.survey);
    }
  }
}
