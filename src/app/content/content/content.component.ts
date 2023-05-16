import { Component, OnInit } from '@angular/core';
import { Module } from '../module';
import { Subject } from '../subject';
import { ContentService } from '../content.service';
import { Content } from '../content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit{
  modulesList!: Module[];
  subjects!: Subject[];
  contents!: Content[];

  constructor(private contentService: ContentService){}

  ngOnInit(): void {
    this.contentService.getAllSubjects().subscribe(
      res => {
        this.subjects = res;
      }
    );
    this.contentService.getAllContent().subscribe(
      res => {
        this.contents = res;
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
