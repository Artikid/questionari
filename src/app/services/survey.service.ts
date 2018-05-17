import { Injectable } from "@angular/core";
import { Survey } from "../interfaces/survey";
import { Observable, from, of } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { SurveyNew } from "../interfaces/survey-new";
import { fadeInItems } from "@angular/material";
import { environment } from "../../environments/environment";
import { SurveyEdit } from "../interfaces/survey-edit";
import { SURVEYRESULTS } from "../models/surveyresults";
import * as moment from "moment";

const mapSurvey = (item: SURVEYRESULTS): Survey => {
  return {
    id: item.ID,
    description: item.CORSO,
    studentName: item.ALLIEVO_NOME,
    studentSurname: item.ALLIEVO_COGNOME,
    studentCompany: item.ALLIEVO_AZIENDA,
    studentDepartment: item.ALLIEVO_REPARTO,
    studentEmail: item.ALLIEVO_EMAIL,
    teacher: item.DOCENTE,
    date: moment(item.DATA)
  };
};
const mapSurveys = (items: SURVEYRESULTS[]) => {
  return items.map(mapSurvey);
};

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  resourceName = "Survey/";
  constructor(public http: HttpClient) {}

  getBaseUrl() {
    return environment.apiBaseUrl;
  }

  getBaseResourceUrl() {
    return this.getBaseUrl() + this.resourceName;
  }

  getSurveyList(): Observable<Survey[]> {
    return this.http.get<SURVEYRESULTS[]>(this.getBaseResourceUrl()).pipe(map(mapSurveys));
  }

  createSurvey(survey: SurveyNew): Observable<Survey> {
    return this.http.post<SURVEYRESULTS>(this.getBaseResourceUrl(), survey).pipe(map(mapSurvey));
  }

  updateSurvey(survey: SurveyEdit): Observable<Survey> {
    return this.http.put<SURVEYRESULTS>(this.getBaseResourceUrl() + survey.id, survey).pipe(map(mapSurvey));
  }

  getSurveyById(id: number): Observable<Survey> {
    return this.http.get<SURVEYRESULTS>(this.getBaseResourceUrl() + id).pipe(map(mapSurvey));
  }

  deleteSurvey(survey: Survey): Observable<Survey> {
    return this.http.delete<Survey>(this.getBaseResourceUrl());
  }
}
