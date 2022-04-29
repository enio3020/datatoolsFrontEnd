import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
import { Vehiculo } from '../../../models/vehiculo';

@Component({
  selector: 'app-vehiculo-add',
  templateUrl: './vehiculo-add.component.html',
  styleUrls: ['./vehiculo-add.component.css']
})
export class VehiculoAddComponent implements OnInit {

  xrecargar: boolean;

  myForm = new FormGroup({
    vehiPlaca: new FormControl('', [Validators.required]),
    vehiMotor: new FormControl('', [Validators.required]),
    vehiChasis: new FormControl('', [Validators.required]),
    vehiModelo: new FormControl('', [Validators.required]),
    vehiFechaMatricula: new FormControl('', [Validators.required]),
    vehiPasajeroSentados: new FormControl('', [Validators.required]),
    vehiPasajeroPie: new FormControl('', [Validators.required]),
    vehiPesoSeco: new FormControl('', [Validators.required]),
    vehiPesoBruto: new FormControl('', [Validators.required]),
    vehiCantidadPuertas: new FormControl('', [Validators.required]),
    vehiMarca: new FormControl('', [Validators.required]),
    vehiLinea: new FormControl('', [Validators.required]),
  });

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private alertService: AlertService
  ) {
    this.xrecargar = true;
  }

  get f() {
    return this.myForm.controls;
  }

  recarga(){
    this.xrecargar = false;
  }

  submit() {
    this.alertService.clear();
    
    if (this.myForm.invalid) {
      return;
    }

    let vehiculoRequest = new Vehiculo();

    vehiculoRequest.vehiCantidadPuertas = this.f['vehiCantidadPuertas'].value;
    vehiculoRequest.vehiChasis = this.f['vehiChasis'].value;
    vehiculoRequest.vehiFechaMatricula = this.f['vehiFechaMatricula'].value;
    vehiculoRequest.vehiLinea = this.f['vehiLinea'].value;
    vehiculoRequest.vehiMarca = this.f['vehiMarca'].value;
    vehiculoRequest.vehiModelo = this.f['vehiModelo'].value;
    vehiculoRequest.vehiMotor = this.f['vehiMotor'].value;
    vehiculoRequest.vehiPasajeroPie = this.f['vehiPasajeroPie'].value;
    vehiculoRequest.vehiPasajeroSentados = this.f['vehiPasajeroSentados'].value;
    vehiculoRequest.vehiPesoBruto = this.f['vehiPesoBruto'].value;
    vehiculoRequest.vehiPesoSeco = this.f['vehiPesoSeco'].value;
    vehiculoRequest.vehiPlaca = this.f['vehiPlaca'].value;

    this.apiService.vehiculoInsert(vehiculoRequest).subscribe(
      (data) => {
        this.alertService.success('Se registro satisfactoriamente el Vehiculo')
      },
      (err) => {
        window.scrollTo( 0, 0 );
        this.alertService.error(err.error.message);
      }
    );
    this.clearForm();
  }

  clearForm() {
    this.myForm.reset();
    window.scrollTo( 0, 0 );
    this.xrecargar = true;
  }

  ngOnInit(): void {
  }

}
