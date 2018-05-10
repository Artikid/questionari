import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Survey } from "../interfaces/survey";
import { Observable } from "rxjs";
import { SurveyService } from "../services/survey.service";

@Injectable({
  providedIn: "root"
})
export class SurveyByIdService implements Resolve<Survey> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Survey> {
    return this.surveyService.getSurveyById(route.params.id);
  }

  constructor(public surveyService: SurveyService) {}
}
