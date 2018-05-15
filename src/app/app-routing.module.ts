import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewHomeComponent } from "./components/view-home/view-home.component";
import { SurveyByIdService } from "./resolvers/survey-by-id.service";
import { ViewLoginComponent } from "./components/view-login/view-login.component";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./guards/auth.guard";
import { ViewCoursesComponent } from "./components/view-courses/view-courses.component";

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
        path: "courses",
        component: ViewCoursesComponent
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
