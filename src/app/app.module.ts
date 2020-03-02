import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListCardComponent } from './list-card/list-card.component';
import { ListComponent } from './list/list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 





@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListCardComponent,
    ListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiselectDropdownModule,
    FormsModule,
    HttpClientModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
