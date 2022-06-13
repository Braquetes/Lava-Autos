import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario: any;
  correo: any;
  pass: any;
  id: any;
  perfil = {
    usuario: '',
    correo: '',
    pass: ''
  }
  constructor(private CS: CookieService, private router: Router, private AS: AuthService) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
    this.correo = this.CS.get('correo');
    this.pass = this.CS.get('pass');
    this.perfil.usuario = this.usuario;
    this.perfil.correo = this.correo;
    this.perfil.pass = this.pass;
    this.id = this.CS.get('idUser');
  }

  update(form: any){
    console.log(form.value);
    // this.AS.update(this.id,form.value).subscribe((data: any) => {
    //   if(data.status === 'User Updated'){
    //     console.log(data);
    //     this.salir();
    //   }
    // });
  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }
}
