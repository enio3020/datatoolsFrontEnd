import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit, OnDestroy, OnChanges {

  empresas: any;
  @Input() recargar?:boolean;

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) { }

  ruterLink(id: Number): void {
    this.router.navigateByUrl('empresa/'+id);
  }

  retrieveEmpresa(): void {
    this.apiService.empresaGetAll().subscribe(
      (data) => {
        this.empresas = data;
        localStorage.setItem(
          'empresaListAll',
          JSON.stringify( this.empresas)
        );
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  ngOnInit(): void {
    this.retrieveEmpresa();
  }

  ngOnDestroy(): void {}

  ngOnChanges(): void {
    this.retrieveEmpresa();
  }
}
