import { Observable, Observer, Subject } from 'rxjs';



// Crear ------------------------------------------------------------------------------
const observer: Observer<any> = {
  next: value => console.log('siguiente (next):', value),
  error: error => console.log('error:', error),
  complete: () => console.log('completado')
}


// Cold obervable , emite los datos desde dentro de si mismo;
const intervalo$ = new Observable<Number>(susbs => {

  const interval = setInterval(() => {
    
    susbs.next(Math.random(),)

  }, 1000)
  
  return () => {
    clearInterval(interval);
    console.log('destruido');
    

  }

});


// 1- Casteo multipole;
// 2- es un oberserver;
// 3- Next , complete , complete;
const subject$ = new Subject();

const intervaloUnsubribe = intervalo$.subscribe(subject$);


// con subject$  todos los observer reciben el mismo valor 
// const subs1 = subject$.subscribe(numeroRandon1 => console.log('susb1',numeroRandon1))
// const subs2 = subject$.subscribe(numRandon2 => console.log('susb2', numRandon2))

const s1 = subject$.subscribe(observer);
const s2 = subject$.subscribe(observer);



// Hot observable , emite los datos desde fuera del observable;
setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  intervaloUnsubribe.unsubscribe();
},3500)