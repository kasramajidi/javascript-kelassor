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

