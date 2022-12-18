import { of } from 'rxjs';

// const obs$ = of<number>(1, 2, 3, 4, 5, 6);
const obs$ = of<Array<number>>([1, 2, 3, 4, 5, 6]); //se envia solo el array.
// const obs$ = of(...[1, 2, 3, 4, 5, 6],2,3,4,5,6);
// const obs$ = of([1, 2], {a:1,b:2}, function(){}, true, Promise.resolve(true)) 




console.log('inicio obs');

obs$.subscribe({
  next: value => console.log(value),
  error: null,
  complete: () => console.log('completado')
});

console.log('fin obs');
