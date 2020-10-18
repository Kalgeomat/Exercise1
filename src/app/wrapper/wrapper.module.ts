import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { FooterComponent } from './wrapper/footer/footer.component';
import { HeaderComponent } from './wrapper/header/header.component';
import { NavComponent } from './wrapper/nav/nav.component';
import { ContentComponent } from './wrapper/content/content.component';



@NgModule({
  declarations: [ WrapperComponent,ContentComponent,FooterComponent,HeaderComponent,NavComponent],
  imports: [
    CommonModule
  ],
  exports: [ WrapperComponent,ContentComponent,FooterComponent,HeaderComponent,NavComponent]
})
export class WrapperModule { }
