import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { SurveyNew } from "../../interfaces/survey-new";

@Component({
  selector: "app-view-survey-form",
  templateUrl: "./view-survey-form.component.html",
  styleUrls: ["./view-survey-form.component.scss"]
})
export class ViewSurveyFormComponent implements OnInit {
  survey: SurveyNew = {
    description: "Corso Excel 2018",
    date: new Date("2018-03-20")
  };
  constructor() {}

  ngOnInit() {}
}
