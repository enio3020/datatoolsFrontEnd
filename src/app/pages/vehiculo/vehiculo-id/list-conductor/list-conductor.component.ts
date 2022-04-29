import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-conductor',
  templateUrl: './list-conductor.component.html',
  styleUrls: ['./list-conductor.component.css']
})
export class ListConductorComponent implements OnInit, OnDestroy, OnChanges {

  idVehiculo: string | null;
  conductores: any;
  faDelete = faTrash;
  @Input() recargar?:boolean;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private apiService: ApiService
  ) {
    this.idVehiculo = this.route.snapshot.paramMap.get('id');
  }

  retrieveVehiculo(): void {
    this.apiService.vehiConduGetConductor(Number(this.idVehiculo)).subscribe(
      (data) => {
        this.conductores = data;
        localStorage.setItem(
          'conductorListVehiculo',
          JSON.stringify( this.conductores)
        );
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  desvincular(conductorId: string): void {
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
        this.apiService.vehiConduDesafiliar(Number(conductorId), Number(this.idVehiculo)).subscribe(
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
