import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Module } from '../module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  hasToken = false;
  modules!: Module[];

  constructor(private contentService: ContentService){}

  ngOnInit(): void {
    //Check if 'token' exists in local storage
    this.hasToken = !!localStorage.getItem('token');

    //Retreive modules' data
    this.contentService.getAllModules().subscribe(
      
      res => {
        this.modules = res;
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
