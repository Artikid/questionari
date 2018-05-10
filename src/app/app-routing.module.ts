import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewHomeComponent } from "./components/view-home/view-home.component";
import { ViewStudentsComponent } from "./components/view-students/view-students.component";
import { ViewSurveyFormComponent } from "./components/view-survey-form/view-survey-form.component";

const routes: Routes = [
  {
    path: "",
    component: ViewHomeComponent
  },
  {
    path: "students",
    component: ViewStudentsComponent
  },
  {
    path: "survey-form",
    component: ViewSurveyFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
