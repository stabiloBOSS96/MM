import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import {  DashboardComponent } from "./components/dashboard/dashboard.component";
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { LetsMuschelComponent } from './components/lets-muschel/lets-muschel.component';
import { PlayMuschelComponent } from './components/lets-muschel/play-muschel/play-muschel.component';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lets-muschel', component: LetsMuschelComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LetsMuschelComponent,
    PlayMuschelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
