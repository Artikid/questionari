import { Injectable } from "@angular/core";
import { Survey } from "../interfaces/survey";
import { Observable, from, of } from "rxjs";
import "rxjs/add/observable/of";

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  constructor() {}

  getSurveyList(): Observable<Survey[]> {
    return Observable.of([
      {
        id: 1,
        description: "Corso LibreOffice",
        date: new Date("2018-05-08"),
        student: "Mario Rossi",
        teacher: "Luigi Verdi"
      },
      {
        id: 2,
        description: "Corso Angular",
        date: new Date("2018-05-25"),
        student: "Mario Bianchi",
        teacher: "Luigi Rossi"
      }
    ]);
  }
}
