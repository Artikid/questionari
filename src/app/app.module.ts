import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeIt from "@angular/common/locales/it";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
registerLocaleData(localeIt, "it");
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
  MatProgressSpinnerModule
} from "@angular/material";
import { ViewHomeComponent } from "./components/view-home/view-home.component";
import { ViewStudentsComponent } from "./components/view-students/view-students.component";
import { TableComponent } from "./components/table/table.component";
import { HttpClientModule } from "@angular/common/http";
import { ViewSurveyFormComponent } from "./components/view-survey-form/view-survey-form.component";
import { FormsModule } from "@angular/forms";
import { SurveyFormComponent } from "./components/survey-form/survey-form.component";
import { ViewEditSurveyComponent } from './components/view-edit-survey/view-edit-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewHomeComponent,
    ViewStudentsComponent,
    TableComponent,
    ViewSurveyFormComponent,
    SurveyFormComponent,
    ViewEditSurveyComponent
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
    MatNativeDateModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "it" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
