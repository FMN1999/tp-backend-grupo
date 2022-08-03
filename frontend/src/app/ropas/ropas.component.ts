import { Component } from '@angular/core';
import { RopasService } from '../ropas.service';

@Component({
  selector: 'app-ropas',
  templateUrl: './ropas.component.html',
  styleUrls: ['./ropas.component.css']
})

export class RopasComponent {

  public ropas:any = [];
  detallesRopas:any = [];
  preciosRopas:any = [];
  
  constructor(private service: RopasService) { }

  loadRopas(){
    this.service.getRopas().subscribe(response => this.ropas = response);
  }

  loadDetalleRopas(){
    this.service.getDetalleRopas().subscribe(response => this.detallesRopas = response);
  }

  loadCategoriaRopas(){
    this.service.getCategoriaRopas().subscribe(response => this.preciosRopas = response);
  }

}


export class Ropa {
  id: string | undefined;
  detalle: string | undefined;
  marca: string | undefined;
  categoria: string | undefined;
  talle: string | undefined;
}