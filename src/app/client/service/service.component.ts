import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  client = {
    nombre: ''
  };
  usuario: any;
  id: any;
  servicio = {
    nombre: ''
  };
  auto: any;
  
    miFormulario: FormGroup = this.fb.group({
      nombre: ['',[Validators.required]],
      idCliente: ['',[Validators.required]],
      idAuto: ['',[Validators.required]],
      idServicio: ['',[Validators.required]]},{
    });
  
    constructor(private fb: FormBuilder, private CS: CookieService, private router: Router, private AS: AuthService, 
                private AR: ActivatedRoute, private CrudS: CrudService) { }
  
    ngOnInit(): void {
      this.id = this.AR.snapshot.params['id'];
      if (this.id) {
        this.getClientes();
        console.log('Editar');
        this.CrudS.getServiciosId(this.id).subscribe((data: any) => {
          this.servicio = data;
          console.log(this.servicio);
          this.miFormulario.setValue({
            nombre: this.servicio.nombre,
            idCliente: this.CS.get('idUser'),
            idAuto: '',
            idServicio: this.id
          });
        });
      }

      this.usuario = this.CS.get('usuario');
      this.getAuto();
    }
  
    campoValido(campo: string){
      return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  
    }

    getAuto(){
      this.CrudS.getAuto(this.CS.get('idUser')).subscribe((data: any)=>{
        console.log(data);
        this.auto = data;
      });
    }

    getClientes(){
      this.CrudS.getClienteId(this.CS.get('idUser')).subscribe((data: any)=>{
        console.log(data);
        this.client = data;
      });
    }
  
    save(){
      console.log(this.miFormulario.value);
      this.CrudS.createServicio(this.miFormulario.value).subscribe((data: any) => {
        if(data.resultado == 'OK'){
          console.log(data);
          this.router.navigate(['/load']);
        }
      });
    }

    salir(){
      this.CS.deleteAll();
      this.router.navigate(['/login']);
    }
  
  }
