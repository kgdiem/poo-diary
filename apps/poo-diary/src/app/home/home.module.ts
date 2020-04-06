import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './configs/routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ButtonModule, RouterModule.forChild(routes)]
})
export class HomeModule {}
