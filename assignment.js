// Problem number 1 mindgame

function mindGame(number){
 if(typeof number !== 'number'){
    return 'Please enter a number'
 }
 else{
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
}
// const finalresult = mindGame(45);
// console.log(finalresult);

// Upwards function works if you call this function with any number 
// the calling number will be multiplied by 3 then the multiplied number will add 10
// then will divided by 2 and lastly it will substract 5 from divided result and 
// show it as a output

// Problem number 2 evenOdd  
function evenOdd(str){
    if(typeof str !== 'string'){
        return 'Please enter a string'
    } 
    else{
        const stringSize = str.length;
     if(stringSize % 2 == 0){
        return 'even'
     }
     else{
        return 'odd'
     }   
    }
} 
// const stringName = 'nidhi'; 
// const string = evenOdd(stringName);  
// console.log(string);

// Funtction number 2 finds out if the functions has odd 
// number of letter or even number of letter 

// Problem number 3 Is lg seven 

function isLGSeven(aInputnum){
    if(typeof aInputnum !== 'number'){
        return 'Please enter a number'
    }
    else{
        const aNum = aInputnum - 7;
    
    if(aNum < 7){
        return aNum;
    }
    else{
        const multiplieds = aNum*2;
        return multiplieds;
    }
    }       
}
// const inputResult = isLGSeven(30);
// console.log(inputResult);

// Function number 3 finds < 7 number and show output as they are but multiply number that is > 7
// into 2

// Problem Number 4 finding bad data 
 
function findingBadData(positiveAge){
   if(typeof positiveAge !== 'object'){
    
    return 'Please enter a object'

   }
   else{
    let badDataContainer = 0

    for(let i = 0; i < positiveAge.length; i++){
        const element = positiveAge[i];

        if(element < 0){
           badDataContainer += 1;
        }
    }
    return badDataContainer;
   }
}
// const badData = [-14, 3, 12, -7, -8, 16, -26];
// const badDatainputer = findingBadData(badData);
// console.log(badDatainputer);

// Function number 4 finds out the negative number or bad data and put them into an array 

// Problem 5 Gems to diamond convertor

function gemsToDiamond(firstFriend, seconedFriend, thirdFriend){
     
    if(typeof firstFriend !== 'number' || typeof seconedFriend !== 'number' || typeof thirdFriend !== 'number'){

        return 'enter a number'
        
    }
    else{
        const firstFriendDiamonds = firstFriend * 21;
        const seconedFriendDiamonds = seconedFriend * 32;
        const thirdFriendDiamonds = thirdFriend * 43;
    
        const forTotalDiamonds = firstFriendDiamonds + seconedFriendDiamonds + thirdFriendDiamonds;
        if(forTotalDiamonds > 1000*2){
            const dividedDiamond = forTotalDiamonds -2000;
            return dividedDiamond;
        }
        else{
            const dividedDiamonds = forTotalDiamonds;
            return dividedDiamonds
        }
    }

}
// const friendsDiamond = gemsToDiamond(100, 200, 300);
// console.log(friendsDiamond);

// In upwards the function converts gems to diamonds so the each friend can have 
// their share of equal diamonds