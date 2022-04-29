import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Empresa } from '../../../models/empresa';
import { HttpClient } from '@angular/common/http';
import { AlertService } from '../../../services/alert.service';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-empresa-add',
  templateUrl: './empresa-add.component.html',
  styleUrls: ['./empresa-add.component.css']
})
export class EmpresaAddComponent implements OnInit, OnDestroy {

  xrecargar: boolean;

  myForm = new FormGroup({
    emprTipoDocumento: new FormControl('', [Validators.required]),
    emprDocumento: new FormControl('', [Validators.required]),
    emprNombreCompleto: new FormControl('', [Validators.required]),
    emprDireccion: new FormControl('', [Validators.required]),
    emprCiudad: new FormControl('', [Validators.required]),
    emprDepartamento: new FormControl('', [Validators.required]),
    emprPais: new FormControl('', [Validators.required]),
    emprTelefono: new FormControl('', [Validators.required]),
    emprLegalTipoDocumento: new FormControl(''),
    emprLegalDocumento: new FormControl(''),
    emprLegalNombreCompleto: new FormControl(''),
    emprLegalDireccion: new FormControl(''),
    emprLegalCiudad: new FormControl(''),
    emprLegalDepartamento: new FormControl(''),
    emprLegalPais: new FormControl(''),
    emprLegalTelefono: new FormControl(''),
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

    let empresaRequest = new Empresa();

    empresaRequest.emprTipoDocumento = this.f['emprTipoDocumento'].value;
    empresaRequest.emprDocumento = this.f['emprDocumento'].value;
    empresaRequest.emprNombreCompleto = this.f['emprNombreCompleto'].value;
    empresaRequest.emprPais = this.f['emprPais'].value;
    empresaRequest.emprDepartamento = this.f['emprDepartamento'].value;
    empresaRequest.emprCiudad = this.f['emprCiudad'].value;
    empresaRequest.emprDireccion = this.f['emprDireccion'].value;
    empresaRequest.emprTelefono = this.f['emprTelefono'].value;
    empresaRequest.emprLegalTipoDocumento = this.f['emprLegalTipoDocumento'].value;
    empresaRequest.emprLegalDocumento = this.f['emprLegalDocumento'].value;
    empresaRequest.emprLegalNombreCompleto = this.f['emprLegalNombreCompleto'].value;
    empresaRequest.emprLegalPais = this.f['emprLegalPais'].value;
    empresaRequest.emprLegalDepartamento = this.f['emprLegalDepartamento'].value;
    empresaRequest.emprLegalCiudad = this.f['emprLegalCiudad'].value;
    empresaRequest.emprLegalDireccion = this.f['emprLegalDireccion'].value;
    empresaRequest.emprLegalTelefono = this.f['emprLegalTelefono'].value;

    this.apiService.empresaInsert(empresaRequest).subscribe(
      (data) => {
        this.alertService.success('Se registro satisfactoriamente la Empresa')
      },
      (err) => {
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
