import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

import {Solicitud} from '../interfaces/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private api = "http://localhost:8000";

  constructor(private http:HttpClient) { 

  }

  getAllSolicitudes(){
    const path = `${this.api}/solicitudes`;
    return this.http.get<Solicitud[]>(path).toPromise();
  }
  getSolicitud(id:string){
    const path = `${this.api}/solicitudes/${id}`;
    return this.http.get<Solicitud>(path).toPromise();

  }
  createSolicitud(solicitud: Solicitud){
    const path = `${this.api}/agregar/solicitud/`;
    return this.http.post(path, solicitud);

  }
  updateSolicitud(solicitud: Solicitud){
    const path = `${this.api}/solicitudes/${solicitud.id}`;
    return this.http.put<Solicitud>(path, solicitud);

  }
  updateEnvio(solicitud: Partial<Solicitud>){
    const path = `${this.api}/solicitudes/${solicitud.id}`;
    return this.http.patch<Solicitud>(path, solicitud);

  }
}
