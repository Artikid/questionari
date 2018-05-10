import { Injectable } from "@angular/core";
import { Survey } from "../interfaces/survey";
import { Observable, from, of } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { SurveyNew } from "../interfaces/survey-new";
import { fadeInItems } from "@angular/material";
import { environment } from "../../environments/environment";

const mapSurvey = (item: Survey) => {
  return {
    ...item,
    date: new Date(item.date)
  };
};
const mapSurveys = (items: Survey[]) => {
  return items.map(mapSurvey);
};

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  constructor(public http: HttpClient) {}

  getBaseUrl() {
    return environment.apiBaseUrl;
  }

  getSurveyList(): Observable<Survey[]> {
    return this.http
      .get<Survey[]>(this.getBaseUrl() + "surveys")
      .pipe(map(mapSurveys));
  }

  createSurvey(survey: SurveyNew): Observable<Survey> {
    return this.http
      .post<Survey>(this.getBaseUrl() + "surveys", survey)
      .pipe(map(mapSurvey));
  }
}
