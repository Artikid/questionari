import { Injectable } from "@angular/core";
import { Survey } from "../interfaces/survey";
import { Observable, from, of } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { SurveyNew } from "../interfaces/survey-new";
import { fadeInItems } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  constructor(public http: HttpClient) {}

  const mapSurvey = (item: Survey) => {
    return {
      ...item,
      date: new Date(item.date)
    };
  }
  const mapSurveys = (items: Survey[]) => {
    return items.map(mapSurvey);
  };

  

  getSurveyList(): Observable<Survey[]> {  
    return this.http
      .get<Survey[]>("http://localhost:3000/api/surveys")
      .pipe(map((items: Survey[]) => items.map(mapSurveys)));
  }

  createSurvey(survey: SurveyNew): Observable<Survey> {
    return this.http.post<Survey>("http://localhost:3000/api/surveys", survey).pipe(map(mapSurvey:))
  }
}
