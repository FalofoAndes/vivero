import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-lista',
  templateUrl: './planta-lista.component.html',
  styleUrls: ['./planta-lista.component.css']
})
export class PlantaListaComponent implements OnInit {

  plantas: Planta[] = [];
  plantasInterior: number = 0;
  plantasExterior: number = 0;

  constructor(private plantaService: PlantaService) {} 

  ngOnInit() {this.getDirectores();}

  getDirectores(): void {
    this.plantaService.getPlantas().subscribe((plantas:Planta[]) => {
      this.plantas = plantas;
      this.plantasInterior = plantas.filter(item => item.tipo === 'Interior').length;
      this.plantasExterior = plantas.filter(item => item.tipo === 'Exterior').length;
    });
  }

}
