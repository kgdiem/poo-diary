import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { RouterModule } from '@angular/router';
import { routes } from './configs';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class EntriesModule {}
