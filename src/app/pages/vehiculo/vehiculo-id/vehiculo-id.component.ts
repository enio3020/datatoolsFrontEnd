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
  selector: 'app-vehiculo-id',
  templateUrl: './vehiculo-id.component.html',
  styleUrls: ['./vehiculo-id.component.css']
})
export class VehiculoIdComponent implements OnInit {

  xrecargar: boolean;
  vehiculoId: string | null;
  conductorId: string;
  conductores: any;

  myForm = new FormGroup({
    conductorId: new FormControl('', [Validators.required]),
  });

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private alertService: AlertService,
    private route: ActivatedRoute,
  ) {
    window.scrollTo( 0, 0 );
    this.xrecargar = true;
    this.vehiculoId = this.route.snapshot.paramMap.get('id');
    this.conductorId = "";
    this.retrieveConductor();
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

    this.conductorId = this.f['conductorId'].value;

    this.apiService.vehiConduAfiliar(Number(this.conductorId), Number(this.vehiculoId)).subscribe(
      (data) => {
        this.alertService.success('Se vinculo satisfactoriamente el Conductor')
      },
      (err) => {
        window.scrollTo( 0, 0 );
        this.alertService.error(err.error.message);
      }
    );
    this.clearForm();
  }

  retrieveConductor(): void {
    this.apiService.conductorGetAll().subscribe(
      (data) => {
        this.conductores = data;
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
