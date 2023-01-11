import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatProgressBarModule,
    MatInputModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
