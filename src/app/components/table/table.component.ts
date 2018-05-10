import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Student } from "../../interfaces/student";
import { MatTableDataSource } from "@angular/material";
import { TableAction } from "../../interfaces/table-action";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent<T> implements OnInit, OnChanges {
  @Input() headers: string[] = [];
  @Input() items: T[] = [];
  @Input() actions: TableAction<T>[] = [];
  dataSource = new MatTableDataSource<T>(this.items);

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = changes.items.currentValue;
  }
  constructor() {}

  ngOnInit() {}

  getColumnDefinitions() {
    const columns = this.headers.slice();
    if (this.actions.length) {
      columns.push("actions");
    }
    return columns;
  }
}
