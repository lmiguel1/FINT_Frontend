import { Component, OnInit, NgModule } from '@angular/core';
import { ContentService } from '../content.service';
import { Module } from '../module';
import { Subject } from '../subject';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit{

  modules!: Module[];
  subjects!: Subject[];
  constructor(private contentService: ContentService){}

  ngOnInit(): void {
    this.contentService.getAllModules().subscribe(
      res => {
        this.modules = res;
      }
    )
    this.contentService.getAllSubjects().subscribe(
      res => {
        console.log(res);
        
        this.subjects = res;
      }
    )
  }
  getPercent(item: any) :number{
    const result = (item.done / item.total)*100;
    return Number(result.toFixed(2));
  }
  getRatio(item: any) :string{
    let percent = this.getPercent(item)
    return `${item.done}/${item.total} (${percent}%)`;
  }
}
