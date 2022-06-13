import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud-servicio',
  templateUrl: './crud-servicio.component.html',
  styleUrls: ['./crud-servicio.component.scss']
})
export class CrudServicioComponent implements OnInit {
  usuario: any;
  id: any;
  servicio: any;

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required]],
    precio: ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder, private CS: CookieService, private router: Router, private CrudS: CrudService, private AR: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.miFormulario.setValue({
      nombre: '',
      precio: ''
    });

    this.id = this.AR.snapshot.params['id'];
      if (this.id) {
        console.log('Editar');
        this.CrudS.getServiciosId(this.id).subscribe((data: any) => {
          this.servicio = data;
          console.log(this.servicio);
          this.miFormulario.setValue({
            nombre: this.servicio.nombre,
            precio: this.servicio.precio,
          });
        });
      }
      
      this.usuario = this.CS.get('usuario');
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;

  }

  save(){
    console.log(this.miFormulario.value);
    this.CrudS.createServicio(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if(data.resultado == 'OK'){
        this.router.navigate(['/admin']);
      }
    });
  }

  actualizar(){
    console.log(this.miFormulario.value);
    this.CrudS.updateServicio(this.id, this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if(data.resultado == 'OK'){
        this.router.navigate(['/admin']);
      }
    });
  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

}