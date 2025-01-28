function inputNumber(num){
    if (num <= 1) {
        return console.log("عدد اول نیست");
    }
    for (let odd = 2; odd < num; odd++) {
        if (num % odd === 0) {
            return console.log('عدد اول نیست');
        }
    }
    return console.log('عدد اول است');
}

inputNumber(17)

// تمرین 2

function inputTime (num) {
    if (num <= 12){
        return console.log(num + " AM");
    } else if (num > 12 && num <= 24){
        const time = num - 12;
        return console.log( time + " PM");
    }
}

inputTime(13)