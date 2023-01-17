import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  modulesList: any[] = [
    {id:"1", name: "Module 1", done: 2, total: 4},
    {id:"2", name: "Module 2", done: 6, total: 10},
    {id:"3", name: "Module 3", done: 2, total: 9},
    {id:"4", name: "Module 4", done: 0, total: 5},
    {id:"5", name: "Module 5", done: 0, total: 4},
    {id:"6", name: "Module 6", done: 0, total: 8},
    {id:"7", name: "Module 7", done: 0, total: 7},
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
