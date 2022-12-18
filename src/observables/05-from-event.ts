import { fromEvent } from "rxjs";




const source1$ = fromEvent<MouseEvent>(document, 'click');
const source2$ = fromEvent<KeyboardEvent>(document, 'keyup');



const observer = {
  next: value => console.log('next ', value),
};


source1$.subscribe(observer);
source2$.subscribe(evento => console.log(evento['key']));// SIN TIPADO
source2$.subscribe(evento => console.log(evento.key));// CON TIPADO



source1$.subscribe(evento => {

  console.log(evento.x); // cordenadas
  console.log(evento.y);


})



source1$.subscribe(({ x, y }) => {

  console.log(x, y); // coordenadas con desectruturing



})