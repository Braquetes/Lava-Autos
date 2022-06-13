import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {
  auto: any;
  usuario: any;
  modelo: any;
  id: any;
    miFormulario: FormGroup = this.fb.group({
      modelo: ['',[Validators.required, Validators.minLength(6)]],
      placa: ['',[Validators.required,  Validators.minLength(6)]],
      idCliente: []
    });
  
    constructor(private fb: FormBuilder, private CS: CookieService, private router: Router, private CrudS: CrudService
              , private AR: ActivatedRoute) { }
  
    ngOnInit(): void {

      this.miFormulario.setValue({
        modelo: '',
        placa: '',
        idCliente: this.CS.get('idUser')
      });

      this.id = this.AR.snapshot.params['id'];
      if (this.id) {
        console.log('Editar');
        this.CrudS.getAutoId(this.id).subscribe((data: any) => {
          this.auto = data;
          console.log(this.auto);
          this.miFormulario.setValue({
            modelo: this.auto.modelo,
            placa: this.auto.placa,
            idCliente: this.CS.get('idUser')
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
      this.CrudS.createAuto(this.miFormulario.value).subscribe((data: any) => {
        console.log(data);
        if(data.resultado == 'OK'){
          this.router.navigate(['/historial']);
        }
      });
    }

    actualizar(){
      console.log(this.miFormulario.value);
      this.CrudS.updateAuto(this.id, this.miFormulario.value).subscribe((data: any) => {
        console.log(data);
        if(data.resultado == 'OK'){
          this.router.navigate(['/historial']);
        }
      });
    }

    salir(){
      this.CS.deleteAll();
      this.router.navigate(['/login']);
    }
  
  }
