import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AlertService } from '../../../services/alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresa-id',
  templateUrl: './empresa-id.component.html',
  styleUrls: ['./empresa-id.component.css']
})
export class EmpresaIdComponent implements OnInit {

  xrecargar: boolean;
  empresaId: string | null;
  vehiculoId: string;
  vehiculos: any;

  myForm = new FormGroup({
    vehiculoId: new FormControl('', [Validators.required]),
  });

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private alertService: AlertService,
    private route: ActivatedRoute,
  ) { 
    window.scrollTo( 0, 0 );
    this.xrecargar = true;
    this.empresaId = this.route.snapshot.paramMap.get('id');
    this.vehiculoId = "";
    this.retrieveVehiculo();
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

    this.vehiculoId = this.f['vehiculoId'].value;

    this.apiService.vehiculoAfiliarEmpre(Number(this.empresaId), Number(this.vehiculoId)).subscribe(
      (data) => {
        this.alertService.success('Se vinculo satisfactoriamente el Vehiculo')
      },
      (err) => {
        window.scrollTo( 0, 0 );
        this.alertService.error(err.error.message);
      }
    );
    this.clearForm();
  }

  retrieveVehiculo(): void {
    this.apiService.vehiculoGetAll().subscribe(
      (data) => {
        this.vehiculos = data;
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  clearForm() {
    this.myForm.reset();
    window.scrollTo( 0, 0 );
    this.xrecargar = true;
  }


  ngOnInit(): void {
  }

}
