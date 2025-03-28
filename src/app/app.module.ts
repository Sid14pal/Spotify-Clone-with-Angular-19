import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ContentBoxComponent } from './pages/content-box/content-box.component';
import { NavComponent } from './pages/nav/nav.component';
import { AlbumListComponent } from './pages/album-list/album-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    ContentBoxComponent,
    NavComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
