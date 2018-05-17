import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeIt from "@angular/common/locales/it";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
registerLocaleData(localeIt, "it");
import * as moment from "moment";
import "moment/locale/it";
moment.locale("it");
import {
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatFormField,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatSelectModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from "@angular/material";
import { ViewHomeComponent } from "./components/view-home/view-home.component";
import { TableComponent } from "./components/table/table.component";
import { HttpClientModule } from "@angular/common/http";
import { ViewSurveyFormComponent } from "./components/view-survey-form/view-survey-form.component";
import { FormsModule } from "@angular/forms";
import { SurveyFormComponent } from "./components/survey-form/survey-form.component";
import { ViewEditSurveyComponent } from "./components/view-edit-survey/view-edit-survey.component";
import { ViewLoginComponent } from "./components/view-login/view-login.component";
import { AuthGuard } from "./guards/auth.guard";
import { ViewCoursesComponent } from "./components/view-courses/view-courses.component";
import { CourseFormComponent } from "./components/course-form/course-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewHomeComponent,
    TableComponent,
    ViewSurveyFormComponent,
    SurveyFormComponent,
    ViewEditSurveyComponent,
    ViewLoginComponent,
    ViewCoursesComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "it" }, AuthGuard],
  entryComponents: [CourseFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
