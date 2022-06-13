import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
  usuario: any;
  pagos: any;

  today: Date = new Date();
  pipe = new DatePipe('en-Us');
  todayWithPipe: any;


  constructor(private CS: CookieService, private router: Router, private CrudS: CrudService) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
    this.getPagoId();
    this.todayWithPipe = this.pipe.transform(Date.now(), 'h:mm a');

  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

  getPagoId(){
    this.CrudS.getPagoId(this.CS.get('idUser')).subscribe((data: any)=>{
      console.log(data);
      this.pagos = data;
    });
  }

}