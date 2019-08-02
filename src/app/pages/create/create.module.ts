import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {CreatePage} from './create.page';
import {ErrorCheck} from '../../Pipe/ErrorCheck';

const routes: Routes = [
  {
    path: '',
    component: CreatePage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    declarations: [CreatePage, ErrorCheck]
})
export class CreatePageModule {}
