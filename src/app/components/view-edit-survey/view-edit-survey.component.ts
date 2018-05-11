import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Survey } from "../../interfaces/survey";
import { SurveyNew } from "../../interfaces/survey-new";
import { SurveyService } from "../../services/survey.service";
import { MatSnackBar } from "@angular/material";
import { SurveyEdit } from "../../interfaces/survey-edit";

@Component({
  selector: "app-view-edit-survey",
  templateUrl: "./view-edit-survey.component.html",
  styleUrls: ["./view-edit-survey.component.scss"]
})
export class ViewEditSurveyComponent implements OnInit {
  survey: SurveyEdit;
  constructor(
    public route: ActivatedRoute,
    public surveyService: SurveyService,
    public snackbar: MatSnackBar
  ) {
    const survey = this.route.snapshot.data.survey;
    this.survey = {
      ...survey,
      student: survey.student.id
    };
  }

  ngOnInit() {}
  saveSurvey(survey: SurveyEdit) {
    this.surveyService
      .updateSurvey(this.survey)
      .subscribe((response: Survey) => {
        this.snackbar.open(
          `Creato questionario con ID ${response.id}`,
          "Ok, grazie",
          { duration: 2500 }
        );
      });
  }
}
