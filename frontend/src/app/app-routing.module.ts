import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeworkComponent } from "./homework/homework.component";
import { LoginComponent } from "./login/login.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'edit', component: HomeworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}