import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  usuario: any;
  auto: any;
  id: any;
  constructor(private CS: CookieService, private router: Router, private CrudA: CrudService) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
    this.id = this.CS.get('idUser');

    this.getId();
  }

  getId(){
    this.CrudA.getAuto(this.id).subscribe((data: any)=>{
      console.log(data);
      if(data){
        this.auto = data;
        console.log(this.auto);
        
      }
    });
  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

  eliminar(id: any){
    console.log(id);
    this.CrudA.deleteAuto(id).subscribe((data: any)=>{
      console.log(data);
      this.getId();
    });
  }

  editar(id: any){
    console.log(id);
    this.router.navigate(['/crudAuto/', id]);
  }

}
