// Leap year problem
function LeapYear(year: number){
    if(year % 4 == 0 && year % 400 == 0){
        console.log(year + " is a leap year.")
    }
    else{
        console.log(year + " is not a leap year.")
    }
}

LeapYear(2400);