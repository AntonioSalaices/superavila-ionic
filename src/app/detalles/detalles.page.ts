import { Component, OnInit } from '@angular/core';
import { NavController, NavParams} from '@ionic/angular';


import {SolicitudService} from '../services/solicitud.service';
import {Solicitud} from '../interfaces/solicitud';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  id: any;
  nombre_empleado: any;
  sucursal: any;
  proveedor: any;
  insumo_nombre: any;
  cantidad_solicitada: any;
  cantidad_recibida: any;
  observacion: any;
  precio_unidad: any;
  estado_solicitud: any;
  fecha_emision: any;

  solicituddetail: any;

  constructor(private navCtrl: NavController, private solicitudService: SolicitudService) { 
    this.id = localStorage.getItem("id");
    this.nombre_empleado= localStorage.getItem("nombre_empleado");
    this.sucursal=localStorage.getItem("sucursal");
    this.proveedor=localStorage.getItem("proveedor");
    this.insumo_nombre=localStorage.getItem("insumo_nombre");
    this.cantidad_solicitada=localStorage.getItem("cantidad_solicitada");
    this.cantidad_recibida=localStorage.getItem("cantidad_recibida");
    this.observacion=localStorage.getItem("observacion");
    this.precio_unidad=localStorage.getItem("precio_unidad");
    this.estado_solicitud=localStorage.getItem("estado_solicitud");
    this.fecha_emision=localStorage.getItem("fecha_emision");
    this.getSolicitud();
     
  }

  ngOnInit() {
  }

  getSolicitud(){
    this,this.solicitudService.getSolicitud(localStorage.getItem("id"))
    .then(solicitud=>{
      this.solicituddetail = solicitud;
      console.log(this.solicituddetail);
    })
  }

  generateArray(obj){
    return Object.keys(obj).map((key)=> {return obj[key]});
  
  }

  Regresar()
  {
    this.navCtrl.navigateForward('/tabs/tab3');
    
  
  }
}
