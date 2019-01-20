import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeworkInputComponent } from './homework-input/homework-input.component';
import { HomeworkService } from "./service/homework.service";
import { ConfigurationService } from "./service/configuration.service";
import { MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatSelectModule, MatToolbarModule, MatDatepickerModule} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeworkViewComponent } from './homework-view/homework-view.component';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { HomeworkComponent } from './homework/homework.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { NamePartPipe } from "./util/name-part.pipe";
import { UserService } from "./service/user.service";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    AppComponent,
    HomeworkInputComponent,
    HomeworkViewComponent,
    HomeworkListComponent,
    HomeworkComponent,
    LoginComponent,
    NamePartPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule, MatSelectModule, MatCardModule, MatButtonModule, MatInputModule,
    MatToolbarModule, MatGridListModule, MatDatepickerModule, MatMomentDateModule,
    AppRoutingModule, RouterModule
  ],
  providers: [HomeworkService, ConfigurationService, UserService,
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
