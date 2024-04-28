import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListaComponent } from './planta-lista/planta-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PlantaListaComponent
  ],
  declarations: [PlantaListaComponent]
})
export class PlantaModule { }
