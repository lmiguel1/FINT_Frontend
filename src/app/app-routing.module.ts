import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './content/list/list.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { DescriptionComponent } from './content/description/description.component';
import { ContentComponent } from './content/content/content.component';
import { CommunityComponent } from './community/community.component';
import { AuthGuard } from './auth-guard';
import { AccountComponent } from './account/account/account.component';
import { AdminPortalComponent } from './content/admin-portal/admin-portal.component';
import { AdminGuard } from './admin.guard';
import { PaypalComponent } from './paypal/paypal.component';
import { AdminUserComponent } from './account/admin-user/admin-user.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'modules', component: ListComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'modules/description/:id', component: DescriptionComponent, canActivate: [AuthGuard]},
  {path: 'modules/content', component: ContentComponent, canActivate: [AuthGuard]},
  {path: 'community', component: CommunityComponent, canActivate: [AuthGuard]},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'modules/admin', component: AdminPortalComponent, canActivate: [AdminGuard]},
  {path: 'modules/admin/:id', component: AdminPortalComponent, canActivate: [AdminGuard]},
  {path: 'paypal', component: PaypalComponent},
  {path: 'user/list', component: AdminUserComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
