import { Component, OnInit } from '@angular/core';
import { Conductor } from '../../../../models/conductor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encabezado-condu',
  templateUrl: './encabezado-condu.component.html',
  styleUrls: ['./encabezado-condu.component.css']
})
export class EncabezadoConduComponent implements OnInit {

  idConductor: string | null;
  conductor: Conductor | undefined;
  public conductorList: Conductor[] = []

  constructor(
    private route: ActivatedRoute
  ) {
    this.idConductor = this.route.snapshot.paramMap.get('id');
    let aux = localStorage.getItem('conductorListAll');
    this.conductorList = JSON.parse(aux!=null? aux : "");
    this.conductor = this.conductorList.find(
      (obj) => obj.condId === Number(this.idConductor)
    );
   }

  ngOnInit(): void {
  }

}
