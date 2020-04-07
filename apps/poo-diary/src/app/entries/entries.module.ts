import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { RouterModule } from '@angular/router';
import { routes } from './configs';
import { AddComponent } from './pages/add/add.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

const MAT_MODULES = [
  MatButtonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule,
  MatIconModule,
  NgxMaterialTimepickerModule,
  MatCardModule,
  MatCheckboxModule,
  MatMomentDateModule
];

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ...MAT_MODULES]
})
export class EntriesModule {}
