import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../../../models/vehiculo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encabezado-vehi',
  templateUrl: './encabezado-vehi.component.html',
  styleUrls: ['./encabezado-vehi.component.css']
})
export class EncabezadoVehiComponent implements OnInit {

  idVehiculo: string | null;
  vehiculo: Vehiculo | undefined;
  public vehiculoList: Vehiculo[] = []

  constructor(
    private route: ActivatedRoute
  ) { 
    this.idVehiculo = this.route.snapshot.paramMap.get('id');
    let aux = localStorage.getItem('vehiculoListAll');
    this.vehiculoList = JSON.parse(aux!=null? aux : "");
    this.vehiculo = this.vehiculoList.find(
      (obj) => obj.vehiId === Number(this.idVehiculo)
    );
  }

  ngOnInit(): void {
  }

}
