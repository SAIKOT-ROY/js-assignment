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




// Problem number 3 Is lg seven 

function isLGSeven(aInputnum){
    const aNum = aInputnum - 7;
    
    if(aNum < 7){
        return aNum;
    }
    else{
        const multiplieds = aNum*2;
        return multiplieds;
    }       

}
const inputResult = isLGSeven(14);
// console.log(inputResult);

// Problem Number 3 done here 

// Problem Number 4 finding bad data 
 
function findingBadData(positiveAge){
    let badDataContainer = [];

    for(let i = 0; i < positiveAge.length; i++){
        const element = positiveAge[i];

        if(element < 0){
            badDataContainer.push(element)
        }
    }
    return badDataContainer.length;
}
const badData = [-14, 3, 12, -7, -8, 16, 26];
const badDatainputer = findingBadData(badData);
// console.log(badDatainputer);

// Problem 5 Gems to diamond convertor

function gemsToDiamond(firstFriend, seconedFriend, thirdFriend){

    const firstFriendDiamonds = firstFriend * 21;
    const seconedFriendDiamonds = seconedFriend * 32;
    const thirdFriendDiamonds = thirdFriend * 43;

    const forTotalDiamonds = firstFriendDiamonds + seconedFriendDiamonds + thirdFriendDiamonds;
    if(forTotalDiamonds > 2000){
        const dividedDiamond = forTotalDiamonds -2000;
        return dividedDiamond;
    }
    else{
        const dividedDiamonds = forTotalDiamonds;
        return dividedDiamonds
    }
}
const friendsDiamond = gemsToDiamond(1, 2, 3);
console.log(friendsDiamond);