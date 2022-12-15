import { Observable, Observer } from 'rxjs';



// Crear ------------------------------------------------------------------------------
const observer: Observer<string> = {
  next: value => console.log('siguiente (next):', value),
  error: error => console.log('error:', error),
  complete: () => console.log('completado')
}

const intervalo$ = new Observable<Number>(subscriber => {

  let contador = 0;

 const interval =  setInterval(() => { 
    contador++;
    subscriber.next(contador)
  }, 1000);

  return () => {
    clearInterval(interval)
  }

})



const suscribe = intervalo$.subscribe(valor => console.log('num:', valor));

setTimeout(() => {
  
  suscribe.unsubscribe();

}, 5000)

