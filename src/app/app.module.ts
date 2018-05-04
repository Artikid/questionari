import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule, MatCardModule, MatMenuModule, MatButtonModule, MatIconModule, MatTableModule} from '@angular/material';
import { ViewHomeComponent } from './components/view-home/view-home.component';
import { ViewStudentsComponent } from './components/view-students/view-students.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ViewHomeComponent, ViewStudentsComponent, TableComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatToolbarModule, MatCardModule, MatMenuModule, MatButtonModule, MatIconModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
