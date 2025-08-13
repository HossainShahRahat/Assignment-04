//Problem 01
function totalFine( fare ) {
    // You have to write your code here
    if(typeof fare == 'number' || fare > 0){
        let fine = fare + (fare * (20/100) + 30)
        return fine;
    }
    else{
        return "Invalid";
    }
    
}

//Problem 02
function  onlyCharacter( str ) {
    // You have to write your code here
    if(typeof str !== 'number'){
        let NewText = str.split(" ").join("");
        NewText = NewText.toUpperCase();
        return NewText;
    }
    else{
        return "Invalid";
    }
}