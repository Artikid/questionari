import { Injectable } from "@angular/core";
import { Survey } from "../interfaces/survey";
import { Observable, from, of } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  constructor(public http: HttpClient) {}

  getSurveyList(): Observable<Survey[]> {
    const mapSurveys = (item: Survey) => {
      return {
        ...item,
        date: new Date(item.date)
      };
    };
    return this.http
      .get<Survey[]>("http://localhost:3000/api/surveys")
      .pipe(map((items: Survey[]) => items.map(mapSurveys)));
  }
}
