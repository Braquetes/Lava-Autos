import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  usuario: any;
  servicios: any;
  clientes: any;
  empleados: any;
  pagos: any;
  autos: any;
  constructor(private CS: CookieService, private router: Router, private CrudS: CrudService) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
    this.getServicios();
    this.getClientes();
    this.getEmpleados();
    this.getPagos();
    this.getAutos();
  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

  getClientes(){
    this.CrudS.getClientes().subscribe((data: any)=>{
      console.log(data);
      this.clientes = data;
    });
  }

  getEmpleados(){
    this.CrudS.getEmpleados().subscribe((data: any)=>{
      console.log(data);
      this.empleados = data;
    });
  }

  getServicios(){
    this.CrudS.getServicios().subscribe((data: any)=>{
      console.log(data);
      this.servicios = data;
    });
  }

  getPagos(){
    this.CrudS.getPagos().subscribe((data: any)=>{
      console.log(data);
      this.pagos = data;
    });
  }

  getAutos(){
    this.CrudS.getAutos().subscribe((data: any)=>{
      console.log(data);
      this.autos = data;
    });
  }

  editar(id: any){
    console.log(id);
    this.router.navigate(['/crudServicio/', id])
  }

  eliminar(id: any){
    console.log(id);
    this.CrudS.deleteServicio(id).subscribe((data: any)=>{
      if(data.resultado == 'Eliminado'){
        console.log(data);
        this.getServicios();
      }
    });
  }

}
