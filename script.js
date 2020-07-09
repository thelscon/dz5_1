'use script' ;

alert ('(Кто не успел на занятии) Переписать примеры с итерацией числа и прерыванием цикла с помощью while и do/while');

/*          версия for
for (let i = 0 ; i <= 10 ; i++) {
    if (!(i%2)) break ;
    console.log (i) ;
}
*/

/*          версия do while
let i = 1 ;

do {
    if (!(i%2)) break ;
    console.log (i) ;
    ++i ;
} while (i <= 10) ;
*/


//          версия for
let i = 1 ;

while (i <= 10) {
    if (!(i%2)) break ;
    console.log (i) ;
    ++i ;
}