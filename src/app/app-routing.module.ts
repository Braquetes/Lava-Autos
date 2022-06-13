import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { WelcomeComponent } from './client/welcome/welcome.component';
import { AuthGuard } from './guards/auth.guard';
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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'loginEmpleado',
    component: LoginEmpleadoComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servicios',
    component: ServicesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'historial',
    component: HistorialComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'load',
    component: LoadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servicio/:id',
    component: ServiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'crudAuto',
    component: AutoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'crudAuto/:id',
    component: AutoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'crudServicio',
    component: CrudServicioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'crudServicio/:id',
    component: CrudServicioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'trabajos',
    component: TrabajosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
