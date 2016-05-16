for(var fb = 1; fb <=100; ++fb){

 if(fb % 15 === 0){
        document.write('FizzBuzz');
        document.write('<br/>');

    } else if(fb % 5 === 0){
        document.write('Buzz');
        document.write('<br/>');

    } else if(fb % 3 === 0){
        document.write('Fizz');
        document.write('<br/>');

    } else{
        document.write(fb);
        document.write('<br/>');
    }
}



