import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {
  usuario: any;
  pagos: any;
  constructor(private CS: CookieService, private router: Router, private CrudS: CrudService) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');

    this.getPagos();
  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

  getPagos(){
    this.CrudS.getPagos().subscribe((data: any)=>{
      console.log(data);
      this.pagos = data;
    });
  }

  check(id: any){
    console.log(id);
    this.CrudS.updateFinish(id).subscribe((data: any)=>{
      if(data.resultado == 'OK'){
        console.log(data);
        this.getPagos();
      }
    });
    // this.router.navigate(['/crudServicio/', id])
  }
}
