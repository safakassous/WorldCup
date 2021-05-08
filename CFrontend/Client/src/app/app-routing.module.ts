import { ListEquipeComponent } from './components/list-equipe/list-equipe.component';
import { AddEquipeComponent } from './components/add-equipe/add-equipe.component';
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
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'addJoueur', component: AddJoueurComponent },
  { path: 'listJoueurs', component: ListJoueurComponent },
  { path: 'billets', component: BilletListComponent },
  { path: 'addEquipe', component: AddEquipeComponent },
  { path: 'listEquipes', component: ListEquipeComponent },
  {path: 'paiement/:id', component : AddAcheteurComponent},
  {path: 'addAcheteur', component : AddAcheteurComponent},
  {path: 'Page404', component: Page404Component}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }