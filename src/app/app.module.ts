import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './client/welcome/welcome.component';
import { ServicesComponent } from './client/services/services.component';
import { HistorialComponent } from './client/historial/historial.component';
import { PerfilComponent } from './client/perfil/perfil.component';
import { LoadComponent } from './client/load/load.component';
import { ServiceComponent } from './client/service/service.component';
import { AutoComponent } from './client/crud/auto/auto.component';
import { LoginEmpleadoComponent } from './pages/login-empleado/login-empleado.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CrudServicioComponent } from './admin/crud-servicio/crud-servicio.component';
import { TrabajosComponent } from './admin/trabajos/trabajos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    WelcomeComponent,
    ServicesComponent,
    HistorialComponent,
    PerfilComponent,
    LoadComponent,
    ServiceComponent,
    AutoComponent,
    LoginEmpleadoComponent,
    AdminComponent,
    CrudServicioComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
