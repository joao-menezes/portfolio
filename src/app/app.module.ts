import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { CardModule } from 'primeng/card';
import { DialogModule } from "primeng/dialog";
import { TopBarComponent } from './top-bar/top-bar.component';
import { AccordionModule } from "primeng/accordion";
import { DividerModule } from 'primeng/divider';
import { TechnologyCardComponent } from './technology-card/technology-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologyCardComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DialogModule,
    AccordionModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
