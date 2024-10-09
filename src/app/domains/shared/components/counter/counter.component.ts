import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration : number = 0;
  @Input({ required: true }) message : string = '';

  constructor(){
    // No asyncrono`~^~~~}`- antes de renerizar el componente
    console.log('constructor');
    console.log('--------------');
    
  }
  // antes y durante se renderiza
  ngOnChanges(changes: SimpleChanges){
    
    console.log('nOnchanghes');
    console.log(changes);
  }

  // despues de renderizar
  ngOnInit(){
    
    console.log('init');

  }
  // pregunta so los hijos ya fueron pintaddos despues de la renderizaion
  ngAfterViewInit(){
    
    console.log('afterview');

  }
  ngOnDestroy(){
    
    console.log(' destor ');

  }
}
