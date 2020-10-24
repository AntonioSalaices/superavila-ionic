import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';


//Recursos mios
import {SolicitudService} from '../services/solicitud.service';
import {Solicitud} from '../interfaces/solicitud';
import { AlertController  } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {


  arr:any[]=[];
  arr1:any[]=[];

  solicitudes:  Solicitud[]=[];

  constructor(private solicitudService: SolicitudService, private alertCtrl: AlertController, private platform:Platform) {
    
  }

  ngOnInit()
  {
    this.getAllSolicitudes();
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

 //Hago la peticion GET 
  getAllSolicitudes(){
    this.solicitudService.getAllSolicitudes()
    .then(solicitudes=>{
      this.solicitudes = solicitudes;
      this.arr = solicitudes;
      this.arr1 = this.arr;
    })
  }
    //Genero arreglo para la tabla
    generateArray(obj){
      return Object.keys(obj).map((key)=> {return obj[key]});

    }


  //Creo alerta
  async presentAlertPrompt(id) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '¿Confirmar envío de solicitud?',
    
        buttons: [
          {
            text: 'Salir',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Confirmar',
              handler: (alertData) => { 
                console.log("confirmo");
                const solicitud = {
                  id: id,
                  estado_solicitud: true
                }
                this.solicitudService.updateEnvio(solicitud)
                .subscribe(estado=>{
                  console.log(estado);
                })
        
                
  
            } 
            
  
            }     
       
    ]
  });
  
  await alert.present();
  }
}
