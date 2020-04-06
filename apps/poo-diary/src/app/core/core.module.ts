import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './configs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DefaultPageComponent } from './ components/default-page/default-page.component';

@NgModule({
  declarations: [DefaultPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [DefaultPageComponent]
})
export class CoreModule {}
