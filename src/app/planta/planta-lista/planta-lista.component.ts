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

  constructor(private plantaService: PlantaService) {} 

  ngOnInit() {this.getDirectores();}

  getDirectores(): void {
    this.plantaService.getPlantas().subscribe((plantas:Planta[]) => {
      this.plantas = plantas;
    });
  }

}
