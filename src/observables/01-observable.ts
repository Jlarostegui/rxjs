import { Observable } from 'rxjs';
import { Observer } from 'rxjs/internal/types';


// Crear ------------------------------------------------------------------------------
const observer: Observer<string> = {
  next: value => console.log('siguiente (next):', value),
  error: error => console.log('error:', error),
  complete: () => console.log('completado')
}

const obs$:Observable<string> = new Observable<string>( subs => {
  
  subs.next('Hola');
  subs.next('Mundo');
  
  subs.next('Hola');
  subs.next('Mundo');

  subs.complete();

});



// consumir ---------------------------------------------------------------------------
// opcion 1
// // obs$.subscribe( resp => console.log(resp))

// opcion 2
// obs$.subscribe({
//   next: (valor) => console.log(valor),
//   error: (error) => console.log(error),
//   complete: () => console.log('completado')
// });

// opcion 3
obs$.subscribe(observer);
