import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LogoutComponent} from './shared/login/logout.component';
import { AuthGuard } from './shared/login/auth.guard';


const routes: Routes = [
   
  {
    path: '',
    loadChildren: () =>
      import('./cart/cart.module').then((m) => m.CartModule),
    canActivate: [AuthGuard] 
  },
  { path: 'login', loadChildren: () =>
      import('./shared/login/login.module').then((m) => m.LoginModule),
  },
  { path: 'logout', component: LogoutComponent },
  { path: 'errors', component: LogoutComponent },
  { path: '**', redirectTo: 'errors'},
];

@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

