import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html',
  styleUrls: ['./login-empleado.component.scss']
})
export class LoginEmpleadoComponent implements OnInit {
  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

emailReq(){
  return this.miFormulario.controls['correo']?.errors?.['required'] &&
         this.miFormulario.controls['correo']?.touched;
}

emailPattern(){
  return this.miFormulario.controls['correo']?.errors?.['pattern'] &&
         this.miFormulario.controls['correo']?.touched;
}

  miFormulario: FormGroup = this.fb.group({
    correo: ['',[Validators.required]],
    password: ['',[Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder, private CS: CookieService, private router: Router, private AS: AuthService) { }

  ngOnInit(): void {

    this.miFormulario.setValue({
      correo: '',
      password: '',
    });

    if(this.CS.get('access_token')){
      this.router.navigate(['/welcome']);
    } 
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
          && this.miFormulario.controls[campo].touched;

  }

  save(){
    console.log(this.miFormulario.value);
    this.AS.loginE(this.miFormulario.value).subscribe((data: any) =>{
      console.log(data);
      if(data.resultado == 'Conectado'){
        this.CS.set('access_token', data.token, 1, '/');
        this.CS.set('idUser', data.idCliente, 1, '/');
        this.CS.set('usuario', data.nombre, 1, '/');
        this.CS.set('correo', data.correo, 1, '/');
        this.CS.set('pass', data.password, 1, '/');
        this.router.navigate(['/admin']);
      }
    });
  }

}
