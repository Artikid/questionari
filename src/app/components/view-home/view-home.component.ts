import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Survey } from "../../interfaces/survey";
import { SurveyService } from "../../services/survey.service";
import { TableAction } from "../../interfaces/table-action";
import { Router } from "@angular/router";
@Component({
  selector: "app-view-home",
  templateUrl: "./view-home.component.html",
  styleUrls: ["./view-home.component.scss"]
})
export class ViewHomeComponent implements OnInit {
  includedColumns = ["id", "date", "description", "studend", "teacher"];
  items: Survey[] = [];
  actions: TableAction<Survey>[] = [
    {
      icon: "edit",
      callback: (item: Survey) => {
        this.goToEditSurvey(item);
      }
    },
    {
      icon: "delete",
      callback: (item: Survey) => {
        this.deleteSurvey(item);
      }
    }
  ];

  constructor(public surveyService: SurveyService, public router: Router) {
    surveyService.getSurveyList().subscribe(response => {
      this.items = response;
    });
  }

  goToEditSurvey(item: Survey) {
    this.router.navigate(["surveys/", item.id]);
  }

  deleteSurvey(item: Survey) {
    let si = confirm("Sei sicuro?");
    if (si) {
      this.surveyService.deleteSurvey(item).subscribe(response => {
        item = response;
      });
    }
  }

  getItems() {
    return this.items.map(item => {
      return {
        ...item,
        date: item.date.toDateString(),
        student: item.student.name + " " + item.student.surname
      };
    });
  }

  ngOnInit() {}
}
