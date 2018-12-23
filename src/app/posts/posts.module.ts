import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { DemoMaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PostCreateComponent],
  imports: [
    CommonModule,
    DemoMaterialModule
  ],
  exports: [PostCreateComponent]
})
export class PostsModule { }
