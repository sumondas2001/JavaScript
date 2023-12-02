// var number = 0;
// while(number < 10){
//     console.log('number');
//     number++;
// }
// // for(var numberA = 0; numberA < 5; numberA++;){
// //     console.log('numberA hnkuryk');
// // }

// for(var roastGiven = 0; roastGiven < 7;roastGiven++){
//     console.log(roastGiven);
    
// }



// for (var i = 0; i < 10; i++){
//     console.log(i);
// }


// var numbers =[40, 50, 34, 29, 10, 44, 100, 49, 82526,827628]
// for(var i = 0; i < numbers.length; i++ ){
//     var number = numbers [i];
//     console.log(number);
// }


// for (var i = 0; i < 20 ; i++ ){
//     if(i > 10){
//         break;
//     }
//     console.log(i);
// }


var numbers = [10, 33, 22, 50, 21, 60, 40, 80];
for (var i=0; i<numbers.length;i++){
    var number = numbers[i];
    if(number >= 30){
        continue;
    }
    console.log(number);
}
