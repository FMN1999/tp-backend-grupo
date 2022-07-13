import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { RopasService } from '../ropas.service';

@Component({
  selector: 'app-ropas',
  templateUrl: './ropas.component.html',
  styleUrls: ['./ropas.component.css']
})
export class RopasComponent implements OnInit {

  ropas:any = [];
  constructor(private service: RopasService) { }

  ngOnInit(): void {
  }

  loadRopas(){
    this.service.getRopas().subscribe(response => this.ropas = response);
  }

}
