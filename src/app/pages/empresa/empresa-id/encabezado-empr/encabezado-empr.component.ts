import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../../../../models/empresa';

@Component({
  selector: 'app-encabezado-empr',
  templateUrl: './encabezado-empr.component.html',
  styleUrls: ['./encabezado-empr.component.css']
})
export class EncabezadoEmprComponent implements OnInit {

  idEmpresa: string | null;
  empresa: Empresa | undefined;
  public empresaList: Empresa[] = [];

  constructor(
    private route: ActivatedRoute
  ) {
    this.idEmpresa = this.route.snapshot.paramMap.get('id');
    let aux = localStorage.getItem('empresaListAll');
    this.empresaList = JSON.parse(aux!=null? aux : "");
    this.empresa = this.empresaList.find(
      (obj) => obj.emprId === Number(this.idEmpresa)
    );
   }

  ngOnInit(): void {
  }

}
