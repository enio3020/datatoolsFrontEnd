import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Conductor } from '../models/conductor';
import { Empresa } from '../models/empresa';
import { Vehiculo } from '../models/vehiculo';
import { VehiCondu } from '../models/vehicondu';
import { ConsultaSql } from '../models/consultaSql';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private path = "http://localhost:8001/datatools/";

  private urlConductorGetAll = this.path + 'conductor/getAll/';
  private urlConductorInsert = this.path + 'conductor/insert/';
  private urlEmpresaGetAll = this.path + 'empresa/getAll/';
  private urlEmpresaInsert = this.path + 'empresa/insert/';
  private urlVehiculoGetAll = this.path + 'vehiculo/getAll/';
  private urlVehiculoInsert = this.path + 'vehiculo/insert/';
  private urlVehiculoAfiliarEmpre = this.path + 'vehiculo/afiliarEmpre/';
  private urlVehiculoDesafiliarEmpre = this.path + 'vehiculo/desafiliarEmpre/';
  private urlVehiConduGetConductor = this.path + 'vehiCondu/getConductor/';
  private urlVehiConduGetVehiculo = this.path + 'vehiCondu/getVehiculo/';
  private urlVehiConduAfiliar = this.path + 'vehiCondu/afiliar/';
  private urlVehiConduDesafiliar = this.path + 'vehiCondu/desafiliar/';
  private urlVehiculoGetEmpresa = this.path + 'vehiculo/getEmpresa/';
  private urlConsultaSqlGetSql = this.path + 'consultaSql/getSql/';


  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa('datatools:DataT00L5*%'));

  constructor(
    private http: HttpClient
  ) { }

  public consultaSqlGetSql():Observable<any> {
    return this.http.get(
      this.urlConsultaSqlGetSql,
      { headers: this.headers }
    );
  }

  public conductorGetAll() {
    return this.http.get<Conductor[]>(
      this.urlConductorGetAll,
      { headers: this.headers }
    );
  }

  public conductorInsert(
    conductor: Conductor
  ) {
    return this.http.post<Conductor>(
      this.urlConductorInsert,
      conductor,
      { headers: this.headers }
    );
  }

  public empresaGetAll() {
    return this.http.get<Empresa[]>(
      this.urlEmpresaGetAll,
      { headers: this.headers }
    );
  }

  public empresaInsert(
    empresa: Empresa
  ) {
    return this.http.post<Empresa>(
      this.urlEmpresaInsert,
      empresa,
      { headers: this.headers }
    );
  }

  public vehiculoGetAll() {
    return this.http.get<Vehiculo[]>(
      this.urlVehiculoGetAll,
      { headers: this.headers }
    );
  }

  public vehiculoInsert(
    vehiculo: Vehiculo
  ) {
    return this.http.post<Vehiculo>(
      this.urlVehiculoInsert,
      vehiculo,
      { headers: this.headers }
    );
  }

  public vehiculoAfiliarEmpre(
    empresaId: Number,
    vehiculoId: Number
  ) {
    return this.http.put<Vehiculo>(
      this.urlVehiculoAfiliarEmpre + empresaId + '/' + vehiculoId + '/',
      Object,
      { headers: this.headers }
    );
  }

  public vehiculoDesafiliarEmpre(
    empresaId: Number,
    vehiculoId: Number
  ) {
    return this.http.put<Vehiculo>(
      this.urlVehiculoDesafiliarEmpre + empresaId + '/' + vehiculoId + '/',
      Object,
      { headers: this.headers }
    );
  }

  public vehiConduGetConductor(
    vehiculoId: Number
  ) {
    return this.http.get<Conductor[]>(
      this.urlVehiConduGetConductor + vehiculoId + '/',
      { headers: this.headers }
    );
  }

  public vehiConduGetVehiculo(
    conductorId: Number
  ) {
    return this.http.get<Vehiculo[]>(
      this.urlVehiConduGetVehiculo + conductorId + '/',
      { headers: this.headers }
    );
  }

  public vehiConduAfiliar(
    conductorId: Number,
    vehiculoId: Number
  ) {
    return this.http.post<VehiCondu>(
      this.urlVehiConduAfiliar + conductorId + '/' + vehiculoId + '/',
      Object,
      { headers: this.headers }
    );
  }

  public vehiConduDesafiliar(
    conductorId: Number,
    vehiculoId: Number
  ) {
    return this.http.delete<VehiCondu>(
      this.urlVehiConduDesafiliar + conductorId + '/' + vehiculoId + '/',
      { headers: this.headers }
    );
  }

  public vehiculoGetEmpresa(
    empresaId: Number
  ) {
    return this.http.get<Vehiculo[]>(
      this.urlVehiculoGetEmpresa + empresaId + '/',
      { headers: this.headers }
    );
  }
}
