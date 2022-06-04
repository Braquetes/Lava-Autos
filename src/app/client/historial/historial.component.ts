import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  usuario: any;
  constructor(private CS: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }
}
