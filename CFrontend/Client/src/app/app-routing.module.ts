import { ListJoueurComponent } from './components/list-joueur/list-joueur.component';
import { AddJoueurComponent } from './components/add-joueur/add-joueur.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { BilletListComponent } from './components/billet-list/billet-list.component';
import { AddAcheteurComponent } from './components/add-acheteur/add-acheteur.component';
import { ConfirmationAcheteurComponent } from './confirmation-acheteur/confirmation-acheteur.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
<<<<<<< HEAD
  {path: 'addJoueur', component: AddJoueurComponent},
=======
  {path: 'addJoueur',component: AddJoueurComponent},
  {path: 'listJoueurs',component: ListJoueurComponent},
  {path: 'billets',component: BilletListComponent},
  {path: "paiement/:id", component : AddAcheteurComponent},
  {path: "addAcheteur", component : AddAcheteurComponent},
  {path: "confirmation", component : ConfirmationAcheteurComponent},


>>>>>>> 14b3de2cfeae1d93b55743befa30631330667515
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


