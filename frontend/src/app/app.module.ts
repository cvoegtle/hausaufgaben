import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeworkInputComponent } from './homework-input/homework-input.component';
import { HomeworkService } from "./service/homework.service";
import { ConfigurationService } from "./service/configuration.service";
import { MatButtonModule, MatCardModule, MatInputModule, MatSelectModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  exports: [],
  declarations: []
})
export class HomeworkMaterialModule {
}

@NgModule({
  declarations: [
    AppComponent,
    HomeworkInputComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatSelectModule, MatCardModule, MatButtonModule, MatInputModule,
    HomeworkMaterialModule
  ],
  providers: [HomeworkService, ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
