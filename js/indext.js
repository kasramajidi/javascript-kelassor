function inputNumber(num) {
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

function inputTime(num) {
    if (num < 12) {
        return console.log(num + " AM");
    } else if (num === 12) {
        return console.log(12 + " PM");
    } else if (num >= 12 && num < 24) {
        const time = num - 12;
        return console.log(time + " PM");
    } else if (num === 24) {
        return console.log(0 + " AM");
    } else {
        return console.log("لطفا عدد انتخابی بین 0 تا 24 باشه")
    }
}

inputTime(50)

// تمرین 3

function rangeInput (add, range1, range2){
    if (add >= range1 && add <= range2){
        return console.log("این عدد در این بازه قرار دارد")
    } else {
        return console.log("این عدد در این بازه قرار ندارد")
    }
}

rangeInput(15, 10, 20)

