import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ApiService } from './services/api.service';
import { AlertService } from './services/alert.service';
import { ConductorComponent } from './pages/conductor/conductor.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { VehiculoComponent } from './pages/vehiculo/vehiculo.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { ConductorAddComponent } from './pages/conductor/conductor-add/conductor-add.component';
import { ConductoListComponent } from './pages/conductor/conducto-list/conducto-list.component';
import { ConsultaSqlComponent } from './pages/consulta-sql/consulta-sql.component';
import { SqlListComponent } from './pages/consulta-sql/sql-list/sql-list.component';
import { EmpresaAddComponent } from './pages/empresa/empresa-add/empresa-add.component';
import { EmpresaListComponent } from './pages/empresa/empresa-list/empresa-list.component';
import { VehiculoAddComponent } from './pages/vehiculo/vehiculo-add/vehiculo-add.component';
import { VehiculoListComponent } from './pages/vehiculo/vehiculo-list/vehiculo-list.component';
import { AlertComponent } from './home/alert/alert.component';
import { EmpresaIdComponent } from './pages/empresa/empresa-id/empresa-id.component';
import { ConductorIdComponent } from './pages/conductor/conductor-id/conductor-id.component';
import { VehiculoIdComponent } from './pages/vehiculo/vehiculo-id/vehiculo-id.component';
import { ListVehiculoComponent } from './pages/conductor/conductor-id/list-vehiculo/list-vehiculo.component';
import { EncabezadoConduComponent } from './pages/conductor/conductor-id/encabezado-condu/encabezado-condu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EncabezadoEmprComponent } from './pages/empresa/empresa-id/encabezado-empr/encabezado-empr.component';
import { ListVehiculoEmprComponent } from './pages/empresa/empresa-id/list-vehiculo-empr/list-vehiculo-empr.component';
import { EncabezadoVehiComponent } from './pages/vehiculo/vehiculo-id/encabezado-vehi/encabezado-vehi.component';
import { ListConductorComponent } from './pages/vehiculo/vehiculo-id/list-conductor/list-conductor.component';


@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    ConductorComponent,
    EmpresaComponent,
    VehiculoComponent,
    FooterComponent,
    HeaderComponent,
    ConductorAddComponent,
    ConductoListComponent,
    ConsultaSqlComponent,
    SqlListComponent,
    EmpresaAddComponent,
    EmpresaListComponent,
    VehiculoAddComponent,
    VehiculoListComponent,
    AlertComponent,
    EmpresaIdComponent,
    ConductorIdComponent,
    VehiculoIdComponent,
    ListVehiculoComponent,
    EncabezadoConduComponent,
    EncabezadoEmprComponent,
    ListVehiculoEmprComponent,
    EncabezadoVehiComponent,
    ListConductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SweetAlert2Module,
  ],
  providers: [
    ApiService,
    AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
