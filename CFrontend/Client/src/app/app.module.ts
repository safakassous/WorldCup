
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './_helpers/auth.service';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NavbarBComponent } from './layout/navbar-b/navbar-b.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { AddJoueurComponent } from './components/add-joueur/add-joueur.component';
import { ListJoueurComponent } from './components/list-joueur/list-joueur.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BilletListComponent } from './components/billet-list/billet-list.component';
import { ListEquipeComponent } from './components/list-equipe/list-equipe.component';
import { AddEquipeComponent } from './components/add-equipe/add-equipe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    NavbarComponent,
    NavbarBComponent,
    AddJoueurComponent,
    ListJoueurComponent,
    BilletListComponent,
    ListEquipeComponent,
    AddEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
