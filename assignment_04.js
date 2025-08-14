//Problem 01 -> Train TT's Fine Calculator
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

//Problem 02 -> Clean & Capitalize Characters
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

//Problem 03 -> FIFA Best Team Award 
function  bestTeam( player1, player2 ) {
    // You have to write your code here

    if(typeof player1 !== "object" || typeof player2 !== "object")
    {
        return "Invalid";
    }
    //player1 = {name: "", foul: "", cardY: "", cardR: ""};
    //player2 = {name: "", foul: "", cardY: "", cardR: ""};
    else{
        let team1 = player1.foul + player1.cardY + player1.cardR;
        let team2 = player2.foul + player2.cardY + player2.cardR;

        if(team1<team2){
            return player1.name;
        }
        else if(team2<team1){
        return player2.name;
        }
        else{
            return "Tie";
        }
    }
}

//Problem 04 -> Same Same But Different 
function  isSame(arr1 , arr2 ) {
    // You have to write your code here
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    else{
        if(arr1.length !== arr2.length){
            return false;
        }else{
            for(let i=0; i<arr1.length;i++){
                if(arr1[i] !== arr2[i]){
                    return false;
                }
            }
            return true;
        }
    }
}

//Problem 05 -> Exam Result Report Generator
function  resultReport( marks ) {
    // You have to write your code here
    if(!Array.isArray(marks)){
        return "Invalid";
    } 
    
    else{
        let resultReport = {finalScore : 0, pass: 0, fail: 0};
        if(marks !== null){
            for(let i=0; i<marks.length;i++){
                if(marks[i]>=40){
                    resultReport.pass++;
                    resultReport.finalScore += marks[i];
                }
                else{
                    resultReport.fail++;
                    resultReport.finalScore += marks[i];
                }
            }
            if(marks.length > 0){
                resultReport.finalScore = Math.round(resultReport.finalScore / marks.length);
            }
        }
        return resultReport;
    }
}





