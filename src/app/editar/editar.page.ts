import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { AlertController  } from '@ionic/angular';


import {SolicitudService} from '../services/solicitud.service';
import {Solicitud} from '../interfaces/solicitud';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  cantidad: number=0

  selectedValue: string;
  value='';
  counter = 0;
  nombre_empleado: string;
  id: string;
  sucursal: string="";
  proveedor: string="";
  insumo_nombre: string="";
  descripcion: string="";
  marca: string="";
  cantidad_solicitada: string;
  cantidad_recibida: any; 
  precio_unidad: any;
  total: any;
  estado_solicitud: string;
  fecha_emision: string;
  observacion: string="";

  data: any;
  constructor(private navCtrl: NavController, private solicitudService: SolicitudService, private alertCtrl: AlertController) {

    this.id = localStorage.getItem("id");
    this.nombre_empleado= localStorage.getItem("nombre_empleado");
    this.sucursal=localStorage.getItem("sucursal");
    this.proveedor=localStorage.getItem("proveedor");
    this.insumo_nombre=localStorage.getItem("insumo_nombre");
    this.descripcion=localStorage.getItem("descripcion");
    this.marca=localStorage.getItem("marca");
    this.cantidad_solicitada=localStorage.getItem("cantidad_solicitada");
    this.cantidad_recibida=localStorage.getItem("cantidad_recibida");
    this.observacion=localStorage.getItem("observacion");
    this.precio_unidad=localStorage.getItem("precio_unidad");
    this.estado_solicitud=localStorage.getItem("estado_solicitud");
    this.total=localStorage.getItem("total");
    this.fecha_emision="";
   }

  ngOnInit() {
  }

  calculo(){
    this.total= this.cantidad_recibida*this.precio_unidad;
  }

  actualizar(){
    console.log(this.nombre_empleado);
    this.data={
      id: this.id,
      nombre_empleado:this.nombre_empleado,
      sucursal:this.sucursal,
      proveedor:this.proveedor,
      insumo_nombre:this.insumo_nombre,
      descripcion:this.descripcion,
      marca:this.marca,
      cantidad_solicitada:this.cantidad_solicitada,
      cantidad_recibida:this.cantidad_recibida,
      precio_unidad:this.precio_unidad,
      observacion: this.observacion,
      total:this.total
    }
    this.solicitudService.updateSolicitud(this.data)
    .subscribe(solicitud =>{
      this.updateAlert();
      console.log(solicitud);
    });
  }

  //creo alerta

  async updateAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Solicitud actualizada correctamente',
    
        buttons: [
          {
            text: 'Aceptar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Aceptar');
            }
          }    
       
    ]
  });
  
  await alert.present();
  }

  Regresar()
  {
    this.navCtrl.navigateForward('/tabs/tab3');
    
  
  }

}
