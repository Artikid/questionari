import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Questionario } from "../../interfaces/questionario";

@Component({
  selector: "app-view-home",
  templateUrl: "./view-home.component.html",
  styleUrls: ["./view-home.component.scss"]
})
export class ViewHomeComponent implements OnInit {
  items: Questionario[] = [];

  constructor() {
    const setItems = () => {
      this.items = [
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
      ];
    };
    setTimeout(setItems, 3000);
  }

  ngOnInit() {
    console.log("ngOnChanges!");
  }
}
