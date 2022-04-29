import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartpageComponent } from './startpage/startpage.component';
import { ConductorComponent } from './pages/conductor/conductor.component';
import { ConductorIdComponent } from './pages/conductor/conductor-id/conductor-id.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { EmpresaIdComponent } from './pages/empresa/empresa-id/empresa-id.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { VehiculoIdComponent } from './pages/vehiculo/vehiculo-id/vehiculo-id.component';
import { ConsultaSqlComponent } from './pages/consulta-sql/consulta-sql.component';

const routes: Routes = [
  { path: '', redirectTo: '/consulta-sql', pathMatch: 'full'},
  { path: 'home', component: StartpageComponent},
  { path: 'conductor', component: ConductorComponent},
  { path: 'conductor/:id', component: ConductorIdComponent},
  { path: 'empresa', component: EmpresaComponent},
  { path: 'empresa/:id', component: EmpresaIdComponent},
  { path: 'vehiculo', component: VehiculoComponent},
  { path: 'vehiculo/:id', component: VehiculoIdComponent},
  { path: 'consulta-sql', component: ConsultaSqlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
