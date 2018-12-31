import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeworkInputComponent } from './homework-input/homework-input.component';
import { HomeworkService } from "./service/homework.service";
import { ConfigurationService } from "./service/configuration.service";
import { MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatSelectModule, MatToolbarModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeworkViewComponent } from './homework-view/homework-view.component';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { HomeworkComponent } from './homework/homework.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { NamePartPipe } from "./util/name-part.pipe";
import { UserService } from "./service/user.service";

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
    BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatSelectModule, MatCardModule, MatButtonModule, MatInputModule,
    MatToolbarModule, MatGridListModule,
    AppRoutingModule, RouterModule
  ],
  providers: [HomeworkService, ConfigurationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
