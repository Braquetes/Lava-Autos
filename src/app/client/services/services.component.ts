import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  usuario: any;
  servicios: any;
  constructor(private CS: CookieService, private router: Router, private CrudS: CrudService) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
    this.getServicios();
  }

  getServicios(){
    this.CrudS.getServicios().subscribe((data: any) =>{
      this.servicios = data;
      console.log(this.servicios);
    });
  } 

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

  servs(id: any){
    this.router.navigate(['/servicio/',id]);
  }

}
