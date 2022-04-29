import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { ConsultaSql } from '../../../models/consultaSql';

@Component({
  selector: 'app-sql-list',
  templateUrl: './sql-list.component.html',
  styleUrls: ['./sql-list.component.css']
})
export class SqlListComponent implements OnInit {

  sqlList: ConsultaSql[] = [];

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  retrieveSql(): void {
    let sql: ConsultaSql = {
      placaVehiculo: undefined,
      tipoIdentificaonEmpresa: undefined,
      numeroIdentificacionEmpresa: undefined,
      nombreEmpresa: undefined,
      cantidadConduVincu: undefined
    }
    this.apiService.consultaSqlGetSql().subscribe(
      (data) => {

        for (let i in data) {
          sql = {
            placaVehiculo: data[i][0],
            tipoIdentificaonEmpresa: data[i][1],
            numeroIdentificacionEmpresa: data[i][2],
            nombreEmpresa: data[i][3],
            cantidadConduVincu: data[i][4]
          }
          this.sqlList.push(sql);
        }
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  ngOnInit(): void {
    this.retrieveSql();
  }

}
