/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantaListaComponent } from './planta-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { Planta } from '../planta';

describe('PlantaListaComponent', () => {
  let component: PlantaListaComponent;
  let fixture: ComponentFixture<PlantaListaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ],
      declarations: [ PlantaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListaComponent);
    component = fixture.componentInstance;
    
    for(let i = 0; i < 3; i++) {
      
      const planta = new Planta(
        faker.number.int(), 
        faker.person.firstName(), 
        faker.person.firstName(), 
        getRandomTipo(), 
        faker.number.int(),
        faker.location.country(), 
        faker.lorem.text()
      );
      component.plantas.push(planta);   
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function getRandomTipo(): string {
    return faker.helpers.arrayElement(['Interior', 'Exterior']);
  }

  it('should have a table row with 4 th elements', () => {
    const table = fixture.debugElement.query(By.css('table'));
      const rows = table.queryAll(By.css('tr'));  
    const rowWith4Th = rows.find(row => {
      const thElements = row.queryAll(By.css('th'));
      return thElements.length === 4;
    });  
    expect(rowWith4Th).toBeTruthy();
  });


  it('should have 3 tr elements in tbody', () => {
    const tbody = fixture.debugElement.query(By.css('tbody'));
    const trElements = tbody.queryAll(By.css('tr'));
    expect(trElements.length).toBe(3);
  });
  
});
