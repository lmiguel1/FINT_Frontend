import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { Module } from '../module';
import { Subject } from '../subject';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit{

  modules!: Module[];
  subjects!: Subject[];
  moduleTitle!: string;
  
  constructor(
    private contentService: ContentService, 
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.contentService.getAllModules().subscribe(
      res => {
        this.modules = res;
        const moduleId = Number(this.route.snapshot.paramMap.get('id'));
        //Find the corresponding module in modules' array
        const thisModule = this.modules.find(m => m.id === moduleId);
        if(thisModule){
          this.moduleTitle = thisModule.title;
        } else {
          this.moduleTitle = 'Unknown Module';
        }
      }
    )
    this.contentService.getAllSubjects().subscribe(
      res => {
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
