import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { Conductor } from '../../../models/conductor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conducto-list',
  templateUrl: './conducto-list.component.html',
  styleUrls: ['./conducto-list.component.css']
})
export class ConductoListComponent implements OnInit, OnDestroy, OnChanges {

  conductores: any;
  @Input() recargar?:boolean;

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) { }

  ruterLink(id: Number): void {
    this.router.navigateByUrl('conductor/'+id);
  }

  retrieveConductor(): void {
    this.apiService.conductorGetAll().subscribe(
      (data) => {
        this.conductores = data;
        localStorage.setItem(
          'conductorListAll',
          JSON.stringify( this.conductores)
        );
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  ngOnInit(): void {
    this.retrieveConductor();
  }

  ngOnDestroy(): void {}

  ngOnChanges(): void {
    this.retrieveConductor();
  }

}
