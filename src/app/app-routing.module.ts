import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewHomeComponent } from "./components/view-home/view-home.component";
import { ViewStudentsComponent } from "./components/view-students/view-students.component";
import { ViewSurveyFormComponent } from "./components/view-survey-form/view-survey-form.component";
import { ViewEditSurveyComponent } from "./components/view-edit-survey/view-edit-survey.component";
import { SurveyByIdService } from "./resolvers/survey-by-id.service";
import { ViewLoginComponent } from "./components/view-login/view-login.component";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "",
        component: ViewHomeComponent
      },
      {
        path: "surveys/:id",
        component: ViewEditSurveyComponent,
        resolve: { survey: SurveyByIdService }
      },
      {
        path: "students",
        component: ViewStudentsComponent
      },
      {
        path: "survey-form",
        component: ViewSurveyFormComponent
      }
    ]
  },
  {
    path: "login",
    component: ViewLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
