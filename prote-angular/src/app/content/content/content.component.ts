import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  modulesList: any[] = [
    {name: "Module 1", done: 3, total: 4},
    {name: "Module 2", done: 6, total: 10},
    {name: "Module 3", done: 2, total: 9},
    {name: "Module 4", done: 0, total: 5},
    {name: "Module 5", done: 0, total: 4},
    {name: "Module 6", done: 0, total: 8},
    {name: "Module 7", done: 0, total: 7},
  ]
  getPercent(item: any) :number{
    const result = (item.done / item.total)*100;
    return Number(result.toFixed(2));
  }
  getRatio(item: any) :string{
    let percent = this.getPercent(item)
    return `${item.done}/${item.total} (${percent}%)`;
  }
}
