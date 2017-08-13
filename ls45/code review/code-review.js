'use strict';
//Exercise 1
function calculateTriangle(a, b, c) {
    var sidesLengthAverage = (a + b + c) / 3;
    var trianglePerimeter = a + b + c;
    var s = (a + b + c) / 2;
    var triangleArea = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return sidesLengthAverage + " " + trianglePerimeter + " " + triangleArea;
}
var temp1 = calculateTriangle(3, 4, 5);
console.log(temp1);

//Exercise 2
function calculateMaximumResult(a, b, c) {
    return Math.max(a * (b + c), a + (b * c));
}

function calculateMaxInArray(numArray) {
    var temp = numArray[0];
    for (let i=1; i < numArray.length; i++) {
        temp = Math.max(numArray[i], temp);
    }
    return temp;
}

var temp2 = calculateMaximumResult(7, 5, 3);
console.log(56 == temp2);

//Execrcise 3
function matchWinner(scores) {
    var goalsMatch1Team1Home;
    var goalsMatch1Team2Away;
    var goalsMatch2Team1Away;
    var goalsMatch2Team2Home;

    var sumTeam1 = goalsMatch1Team1Home + goalsMatch2Team1Away;
    var sumTeam2 = goalsMatch1Team2Away + goalsMatch2Team2Home;

    if (sumTeam1 >sumTeam2 )
        return "Team 1 wins";
    else if (sumTeam1 < sumTeam2)
        return "Team 2 wins";
    else if (sumTeam1 == sumTeam2) {
        if (goalsMatch2Team1Away > goalsMatch1Team2Away)
             return "Team 1 wins";
        if (goalsMatch2Team1Away < goalsMatch1Team2Away)
             return "Team 2 wins";
        else if (goalsMatch2Team1Away == goalsMatch1Team2Away)
            return "draw";
    }


    /*
        switch (scores) {
            case
                goalsNo1GuestGame1 > goalsNo2GuestGame1 || goalsNo2GuestGame1 > goalsNo1GuestGame1
                || goalsNo1GuestGame2 > goalsNo2GuestGame2 || goalsNo2GuestGame2 > goalsNo1GuestGame2
                || goalsNo1Game2 === goalsNo2Game2:
                console.log("2:1","2:0");
                break;
            case 2:
                goalsNo1GuestGame1 > goalsNo2GuestGame1 || goalsNo1GuestGame1< goalsNo1GuestGame1 && 
                goalsNo2GuestGame2 > goalsNo1GuestGame2 || goaalsNo1GuestGame2>goalsNo2GuestGame2 &&
                goalsNo1GuestGame1 === goalsNo2GuestGame2 || goalsNo2GuestGame1===goalsNo1GuestGame2 ;
                console.log("3:1","1:0");
                break;
            case 3:
                goalsNo1GuestGame1 > goalsNo2GuestGame1 && goalsNo2GuestGame2>goalsNo1GuestGame2 &&
                goalsNo1GuestGame1 === goalsNo1GuestGame2;
                 console.log("2:1","3:1");
                break;
            case 4:
                goalsNo1GuestGame1 === goalsNo2GuestGame1&& goalsNo1GuestGame2 === goalsNo2GuestGame2;
                console.log("2:1","3:1");
            default:
                console.log("3:1","1:3");
                return scores;
        }
    }*/
}

    var temp3 = matchWinner(scores);
    console.log(scores);