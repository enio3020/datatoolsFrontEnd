import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Conductor } from '../../../models/conductor';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-conductor-add',
  templateUrl: './conductor-add.component.html',
  styleUrls: ['./conductor-add.component.css']
})
export class ConductorAddComponent implements OnInit, OnDestroy {

  xrecargar: boolean;

  public conductor: Conductor = {
    condId: undefined,
    condCiudad: undefined,
    condDepartamento: undefined,
    condDireccion: undefined,
    condDocumento: undefined,
    condNombreCompleto: undefined,
    condPais: undefined,
    condTelefono: undefined,
    condTipoDocumento: undefined
  }

  myForm = new FormGroup({
    condTipoDocumento: new FormControl('', [Validators.required]),
    condTelefono: new FormControl('', [Validators.required]),
    condCiudad: new FormControl('', [Validators.required]),
    condDepartamento: new FormControl('', [Validators.required]),
    condDireccion: new FormControl('', [Validators.required]),
    condNombreCompleto: new FormControl('', [Validators.required]),
    condPais: new FormControl('', [Validators.required]),
    condDocumento: new FormControl('', [Validators.required]),
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

  submit(){
    this.alertService.clear();
    
    if (this.myForm.invalid) {
      return;
    }

    let conductorRequest = new Conductor();

    conductorRequest.condCiudad = this.f['condCiudad'].value;
    conductorRequest.condDepartamento = this.f['condDepartamento'].value;
    conductorRequest.condDireccion = this.f['condDireccion'].value;
    conductorRequest.condDocumento = this.f['condDocumento'].value;
    conductorRequest.condNombreCompleto = this.f['condNombreCompleto'].value;
    conductorRequest.condPais = this.f['condPais'].value;
    conductorRequest.condTelefono = this.f['condTelefono'].value;
    conductorRequest.condTipoDocumento = this.f['condTipoDocumento'].value;

    this.apiService.conductorInsert(conductorRequest).subscribe(
      (data) => {
        this.alertService.success('Se registro satisfactoriamente el Conductor')
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

  ngOnDestroy(): void {}

}
