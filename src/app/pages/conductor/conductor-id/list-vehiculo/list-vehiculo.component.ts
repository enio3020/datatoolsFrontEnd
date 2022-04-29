import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrls: ['./list-vehiculo.component.css']
})
export class ListVehiculoComponent implements OnInit, OnDestroy, OnChanges {

  idConductor: string | null;
  vehiculos: any;
  faDelete = faTrash;
  @Input() recargar?:boolean;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private apiService: ApiService
  ) { 
    this.idConductor = this.route.snapshot.paramMap.get('id');
  }

  retrieveVehiculo(): void {
    this.apiService.vehiConduGetVehiculo(Number(this.idConductor)).subscribe(
      (data) => {
        this.vehiculos = data;
        localStorage.setItem(
          'vehiculoListConductor',
          JSON.stringify( this.vehiculos)
        );
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  desvincular(vehiculoId: string): void {
    Swal.fire({
      title: '¿estás seguro de desvincular este vehiculo?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desvincular'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.vehiConduDesafiliar(Number(this.idConductor), Number(vehiculoId)).subscribe(
          (data) => {
            this.retrieveVehiculo();
            Swal.fire(
              'Desvinculado!',
              'Su vehiculo ha sido desvinculado.',
              'success'
            )
          },
          (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.error.message
            })
          }
        );
        
      }
    })
  }

  ngOnInit(): void {
    this.retrieveVehiculo();
  }

  ngOnDestroy(): void {}

  ngOnChanges(): void {
    this.retrieveVehiculo();
  }

}
