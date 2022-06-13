import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  URL = 'http://127.0.0.1/backendLavaautos/';

  constructor(private http: HttpClient) { }

  createAuto(form: any) {
    return this.http.post<Request>(
      `${this.URL}client/crudAutos/createAuto.php`, form
    );
  }

  getAuto(id: any) {
    return this.http.get(
      `${this.URL}/client/crudAutos/getAuto.php?id=${id}`
    );
  }

  getAutoId(id: any) {
    return this.http.get(
      `${this.URL}/client/crudAutos/getAutosID.php?id=${id}`
    );
  }

  updateAuto(id: any, form: any) {
    return this.http.post<Request>(
      `${this.URL}client/crudAutos/updateAuto.php?id=${id}`, form
    );
  }

  deleteAuto(id: any) {
    return this.http.get(
      `${this.URL}/client/crudAutos/deleteAuto.php?id=${id}`
    );
  }

  getServicios() {
    return this.http.get(
      `${this.URL}/client/crudServicio/getServicios.php`
    );
  }

  getServiciosId(id: any) {
    return this.http.get(
      `${this.URL}/client/crudServicio/getServicioID.php?id=${id}`
    );
  }

  createServicio(form: any) {
    return this.http.post<Request>(
      `${this.URL}client/pago/createPago.php`, form
    );
  }

  getClienteId(id: any) {
    return this.http.get(
      `${this.URL}client/crudClients/getClientID.php?id=${id}`
    );
  }

  getPagoId(id: any) {
    return this.http.get(
      `${this.URL}client/pago/getPagoID.php?id=${id}`
    );
  }

}
