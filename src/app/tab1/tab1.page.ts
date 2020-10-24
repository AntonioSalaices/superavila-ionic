import { Component } from '@angular/core';
import { AlertController  } from '@ionic/angular';

//Recursos mios
import {SolicitudService} from '../services/solicitud.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


    //variables a insertar en bd
    cantidad: number=0

    selectedValue: string;
    value='';
    counter = 0;
    nombre_empleado: string;
    sucursal: string="";
    proveedor: string="";
    insumo_nombre: string="";
    descripcion: string="";
    marca: string="";
    cantidad_solicitada: number;
    precio_unidad: number;
    total: number;
    observacion: string="";

    datos: any;
    data: any;

  constructor( private solicitudService: SolicitudService,private alertCtrl: AlertController) {}
  calculo(){
    this.total= this.cantidad_solicitada*this.precio_unidad;
  }

  insertar()
  {
    console.log(this.nombre_empleado);
    this.data={
      nombre_empleado:this.nombre_empleado,
      sucursal:this.sucursal,
      proveedor:this.proveedor,
      insumo_nombre:this.insumo_nombre,
      descripcion:this.descripcion,
      marca:this.marca,
      cantidad_solicitada:this.cantidad_solicitada,
      precio_unidad:this.precio_unidad,
      total:this.total
    }
    this.solicitudService.createSolicitud(this.data)
    .subscribe((newSolicitud) =>{
      
      this.insertAlert();
    },error => {
      console.log("incorrecto");
      
    }
    );
  }


  //creo alerta
  async insertAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Solicitud registrada correctamente',
    
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
}
