import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { SurveyNew } from "../../interfaces/survey-new";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-survey-form",
  templateUrl: "./survey-form.component.html",
  styleUrls: ["./survey-form.component.scss"]
})
export class SurveyFormComponent implements OnInit {
  @Input() survey: SurveyNew = {};
  constructor() {}

  ngOnInit() {}

  saveSurvey(f: NgForm) {
    console.log(f);
    //salva survey facendo una POST sul web service
  }
}
