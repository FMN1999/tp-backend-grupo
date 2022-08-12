import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:any = []
  constructor(private service: EmpleadosService) { }

  ngOnInit(): void {
  }

  loadEmpleados(){
    this.service.getEmpleados().subscribe(response => this.empleados = response);
  }

}
