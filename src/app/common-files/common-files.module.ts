import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [HeaderComponent, ContactUsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    ContactUsComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CommonFilesModule { }
