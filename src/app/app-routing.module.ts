import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { CommentmodalComponent } from "./commentmodal/commentmodal.component";





const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "page-not-Found", component: PageNotFoundComponent },
  { path: "home", component: HomeComponent },
  { path: "commentmodal", component: CommentmodalComponent },
  { path: " ", redirectTo: '/login', pathMatch: 'full' },
  { path: "**", redirectTo: '/pageNotFound', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
