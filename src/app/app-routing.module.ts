import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "search", component: UsersDashboardComponent},
  {path: "userProfile/:id", component: UserProfileComponent},
  // {path: "home", component: HomeComponent},
  { path: '', redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
