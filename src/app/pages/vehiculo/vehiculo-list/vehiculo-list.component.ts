import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit, OnChanges {

  vehiculos : any;
  @Input() recargar?:boolean;

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) { }

  ruterLink(id: Number): void {
    this.router.navigateByUrl('vehiculo/'+id);
  }

  retrieveVehiculo(): void {
    this.apiService.vehiculoGetAll().subscribe(
      (data) => {
        this.vehiculos = data;
        localStorage.setItem(
          'vehiculoListAll',
          JSON.stringify( this.vehiculos)
        );
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }


  ngOnInit(): void {
    this.retrieveVehiculo();
  }

  ngOnChanges(): void {
    this.retrieveVehiculo();
  }

}
