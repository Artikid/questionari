import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { SurveyNew } from "../../interfaces/survey-new";
import { SurveyService } from "../../services/survey.service";
import { Survey } from "../../interfaces/survey";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-view-survey-form",
  templateUrl: "./view-survey-form.component.html",
  styleUrls: ["./view-survey-form.component.scss"]
})
export class ViewSurveyFormComponent implements OnInit {
  survey: SurveyNew = {};
  constructor(
    public surveyService: SurveyService,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {}

  saveSurvey(survey: SurveyNew) {
    this.surveyService
      .createSurvey(this.survey)
      .subscribe((response: Survey) => {
        this.snackbar.open(
          `Creato questionario con ID ${response.id}`,
          "Ok, grazie",
          { duration: 2500 }
        );
      });
  }
}
