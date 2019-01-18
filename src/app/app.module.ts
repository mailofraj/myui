import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PmviewtaskComponent } from './pmviewtask/pmviewtask.component';
import { PmaddtaskComponent } from './pmaddtask/pmaddtask.component';
import { PmadduserComponent } from './pmadduser/pmadduser.component';
import { PmaddprjComponent } from './pmaddprj/pmaddprj.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PmviewtaskComponent,
    PmaddtaskComponent,
    PmadduserComponent,
    PmaddprjComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
