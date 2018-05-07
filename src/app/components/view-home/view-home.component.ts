import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Survey } from "../../interfaces/survey";

@Component({
  selector: "app-view-home",
  templateUrl: "./view-home.component.html",
  styleUrls: ["./view-home.component.scss"]
})
export class ViewHomeComponent implements OnInit {
  items: Survey[] = [];

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
    setTimeout(setItems, 1000);
  }

  getItems() {
    return this.items.map(item => {
      return { ...item, date: item.date.toDateString() };
    });
  }

  ngOnInit() {}
}
