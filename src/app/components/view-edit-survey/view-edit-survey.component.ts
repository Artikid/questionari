import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Survey } from "../../interfaces/survey";
import { SurveyNew } from "../../interfaces/survey-new";
import { SurveyService } from "../../services/survey.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-view-edit-survey",
  templateUrl: "./view-edit-survey.component.html",
  styleUrls: ["./view-edit-survey.component.scss"]
})
export class ViewEditSurveyComponent implements OnInit {
  survey: Survey;
  constructor(
    public route: ActivatedRoute,
    public surveyService: SurveyService,
    public snackbar: MatSnackBar
  ) {
    this.survey = this.route.snapshot.data.survey;
  }

  ngOnInit() {}
  saveSurvey(survey: Survey) {
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
