import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewHomeComponent } from "./components/view-home/view-home.component";
import { ViewStudentsComponent } from "./components/view-students/view-students.component";

const routes: Routes = [
  {
    path: "",
    component: ViewHomeComponent
  },
  {
    path: "students",
    component: ViewStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
