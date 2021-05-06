import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './resources/dashboard/dashboard.component';
import { LoginComponent } from './resources/security/login/login.component';
import { FooterComponent } from './containers/layout/footer/footer.component';
import { FooterOnlyLayoutComponent } from './containers/layout/footer-only-layout/footer-only-layout.component';
import { HeaderComponent } from './containers/layout/header/header.component';
import { MainLayoutComponent } from './containers/layout/main-layout/main-layout.component';
import { SidebarComponent } from './containers/layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent,
    FooterOnlyLayoutComponent,
    HeaderComponent,
    MainLayoutComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
