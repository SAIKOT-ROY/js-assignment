// Problem number 1 mindgame

function mindGame(number){
    const numberMultipiction = 3;
    const totalMultipiction = number*numberMultipiction;
    
    const numberPlus = 10;
    const totalplus = totalMultipiction+numberPlus;

    const numberDivided = 2;
    const totalDivided = totalplus/numberDivided;

    const numberMinus = 5;
    const totalMinus = totalDivided-numberMinus;

    return totalMinus;
}
const finalresult = mindGame(33);
// console.log(finalresult);

// Upwards function works if you call this function with any number 
// the calling number will be multiplied by 3 then the multiplied number will add 10
// then will divided by 2 and lastly it will substract 5 from divided result and 
// show it as a output

// Problem number 2 evenOdd  

function evenOdd(){
    
}

