let ran = Math.floor((Math.random() * 10)+ 1);
let count = 2;
console.log(ran);
    
function guess() {
    let guessNumber = document.getElementById("guessNumber").value;

    if (count >= 0) {
        
        
        if(ran<guessNumber){
            alert("num is too high. you have "+count+" atemps");
        }else if(ran>guessNumber){
            alert("number is too low. you have "+count+" atemps");
           
         }else{
            alert("number is correct. you have "+count+" atemps");

            count = 0;


        }
    }


    count--;
}
