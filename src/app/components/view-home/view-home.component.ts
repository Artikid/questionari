import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Survey } from "../../interfaces/survey";
import { SurveyService } from "../../services/survey.service";

@Component({
  selector: "app-view-home",
  templateUrl: "./view-home.component.html",
  styleUrls: ["./view-home.component.scss"]
})
export class ViewHomeComponent implements OnInit {
  includedColumns = ["id", "date", "description", "studend", "teacher"];
  items: Survey[] = [];

  constructor(public surveyService: SurveyService) {
    const observable = surveyService.getSurveyList()
    observable.
    observable.subscribe(response => {
      this.items = response;
    });
  }

  getItems() {
    return this.items.map(item => {
      return { ...item, date: item.date.toDateString() };
    });
  }

  ngOnInit() {}
}
