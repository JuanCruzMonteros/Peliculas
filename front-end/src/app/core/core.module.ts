import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuComponent,
    LandingPageComponent
  ]
})
export class CoreModule { }
