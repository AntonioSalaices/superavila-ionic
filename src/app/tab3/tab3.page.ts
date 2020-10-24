import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import {Platform} from '@ionic/angular';

//Importaciones mias
import {SolicitudService} from '../services/solicitud.service';
import {Solicitud} from '../interfaces/solicitud';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  id : any;

  arr:any[]=[];
  arr1:any[]=[];

  solicitudes:  Solicitud[]=[];



  constructor(private solicitudService: SolicitudService,private navCtrl: NavController,  private platform:Platform) {

  }

  ngOnInit()
  {
    this.getAllSolicitudes();
  }

  getAllSolicitudes(){
    this.solicitudService.getAllSolicitudes()
    .then(solicitudes=>{
      this.solicitudes = solicitudes;
      this.arr = solicitudes;
      this.arr1 = this.arr;
    })
  }
  filterArray(ev:any){
    this.arr=this.arr1;
    const val = ev.target.value;
    if(val && val.trim() != ""){
      this.arr = this.arr1.filter((item)=>{
        return (item.id.toString().toLowerCase().indexOf(val.toLowerCase())> -1
        || item.nombre_empleado.toLowerCase().indexOf(val.toLowerCase())> -1
        || item.sucursal.toLowerCase().indexOf(val.toLowerCase())> -1
        || item.proveedor.toLowerCase().indexOf(val.toLowerCase())> -1
        || item.insumo_nombre.toLowerCase().indexOf(val.toLowerCase())> -1
        || item.marca.toLowerCase().indexOf(val.toLowerCase())> -1
        )
      })
    }
  }


  generateArray(obj){
    return Object.keys(obj).map((key)=> {return obj[key]});
  
  }
  abrirdetalles(id, nombre_empleado, sucursal, proveedor, insumo_nombre, marca, cantidad_solicitada, cantidad_recibida, observacion, precio_unidad, estado_solicitud, total, fecha_emision)
  {
    this.id = localStorage.setItem("id", id);
     localStorage.setItem("nombre_empleado", nombre_empleado);
    localStorage.setItem("sucursal", sucursal);
   localStorage.setItem("proveedor", proveedor);
   localStorage.setItem("insumo_nombre", insumo_nombre);
   localStorage.setItem("marca", marca);
  localStorage.setItem("cantidad_solicitada", cantidad_solicitada);
     localStorage.setItem("cantidad_recibida", cantidad_recibida);
    localStorage.setItem("observacion", observacion);
    localStorage.setItem("precio_unidad", precio_unidad);
   localStorage.setItem("estado_solicitud", estado_solicitud);
   localStorage.setItem("total", total);
  localStorage.setItem("fecha_emision", fecha_emision);
    

    this.navCtrl.navigateForward('/detalles', this.id);
  } 
  
  
  abrireditar(id, nombre_empleado, sucursal, proveedor, insumo_nombre, marca, cantidad_solicitada, cantidad_recibida, observacion, precio_unidad, estado_solicitud, total)
  {
  
    this.id = localStorage.setItem("id", id);
    localStorage.setItem("nombre_empleado", nombre_empleado);
   localStorage.setItem("sucursal", sucursal);
  localStorage.setItem("proveedor", proveedor);
  localStorage.setItem("insumo_nombre", insumo_nombre);
  localStorage.setItem("marca", marca);
 localStorage.setItem("cantidad_solicitada", cantidad_solicitada);
    localStorage.setItem("cantidad_recibida", cantidad_recibida);
   localStorage.setItem("observacion", observacion);
   localStorage.setItem("precio_unidad", precio_unidad);
  localStorage.setItem("estado_solicitud", estado_solicitud);
  localStorage.setItem("total", total);
    this.navCtrl.navigateForward('/editar', this.id);

  }



}
