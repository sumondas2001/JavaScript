var numbers = [ 20, 45, 50, 46, 66, 70, 80, 25, 87, 35];
for( var i = 0; i < numbers.length ; i++){
    var number = numbers[i];
    if(number > 50){
        continue;               
    }
    console.log(number)   
}