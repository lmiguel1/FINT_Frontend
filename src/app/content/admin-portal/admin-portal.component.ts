import { Component, OnInit } from '@angular/core';
import { Module } from '../module';
import { Subject } from '../subject';
import { ContentService } from '../content.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleDto } from '../module-dto';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.scss']
})
export class AdminPortalComponent implements OnInit{
  modules!: Module[];
  subjects!: Subject[];
  isNew!: boolean;
  moduleTitle!: string;
  moduleDescription!: string;
  moduleId!: number;


  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.contentService.getAllModules().subscribe(
      res => {
        this.modules = res;
        const moduleId = Number(this.route.snapshot.paramMap.get('id'));
        if(moduleId>0){
          const thisModule = this.modules.find( m => m.id === moduleId);
          if(thisModule){
            this.isNew = false;
            this.moduleTitle = thisModule.title;
            this.moduleDescription = thisModule.description;
            this.moduleId = thisModule.id;
          }
        }else{
          this.isNew = true;
        }
      }
    )
  }
  createModule(){
    let module: ModuleDto = {
      title: this.moduleTitle,
      description: this.moduleDescription
    }
    this.contentService.createModule(module).subscribe(
      res => {
        console.log(module);
        
        console.log("Modulo creado satisfactoriamente", res);
        this.router.navigate(['/modules'])
      }
    )
  }
  updateModule(){
    let module: ModuleDto = {
      title: this.moduleTitle,
      description: this.moduleDescription
    }
    if(module.title != null && module.description != null && this.moduleId != null){
      this.contentService.updateModule(module, this.moduleId).subscribe(
        res => {
          console.log(("Se ha modificado el modulo: "+this.moduleId),res);
          this.router.navigate(['/modules'])
        }
      )
    }
  }
}
