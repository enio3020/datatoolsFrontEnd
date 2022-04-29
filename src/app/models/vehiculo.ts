import { Empresa } from './empresa';

export class Vehiculo {
    vehiId? :Number;
    vehiPlaca: String | undefined;
    vehiMotor: String | undefined;
    vehiChasis: String | undefined;
    vehiModelo: String | undefined;
    vehiFechaMatricula: String | undefined;
    vehiPasajeroSentados: Number | undefined;
    vehiPasajeroPie: Number | undefined;
    vehiPesoSeco: Number | undefined;
    vehiPesoBruto: Number | undefined;
    vehiCantidadPuertas: Number | undefined;
    vehiMarca: String | undefined;
    vehiLinea: String | undefined;
    empresaId: Empresa | undefined;
}