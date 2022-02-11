import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  fgpReportes: FormGroup;
  mostrarDetalle:boolean;
  fechaMinimaDes: moment.Moment;
  fechaMaximaDes: moment.Moment;
  fechaMinimaHas: moment.Moment;
  fechaMaximaHas: moment.Moment;
  constructor( private formBuilder: FormBuilder) { 
    this.fechaMinimaDes = moment().subtract(30, 'days'); 
    this.fechaMaximaDes = moment().subtract(0, 'days');

    this.fechaMinimaHas = moment().subtract(15, 'days');
    this.fechaMaximaHas = moment().subtract(0, 'days');
  }

  ngOnInit(): void {

    this.fgpReportes = this.formBuilder.group({
      fechaDesde: [null, Validators.required],
      fechaHasta: [null, Validators.required]
    });
  }

  get fechaDesde() {
    return this.fgpReportes.get('fechaDesde');
  }

  get fechaHasta() {
    return this.fgpReportes.get('fechaHasta');
  }

  consultarMovimientos(){
    if (this.fgpReportes.valid) {
      this.mostrarDetalle = true;  
    }else{
      this.mostrarDetalle = false;  
    }
    
  }

  limpiar() {
    console.log("ddd")
    this.mostrarDetalle = false;
  }

}
