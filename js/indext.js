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

// تمرین 4

function BMI(weight, height){

    const heightMeter = height / 100

    const BMIAvg = weight / (heightMeter ** 2)

    const BMI = Math.round(BMIAvg * 10) / 10

    if (BMI < 18.5){
        console.log("Underweight")
    } else if (BMI >= 18.5 && BMI <= 24.9){
        console.log("Normal weight")
    }else if (BMI >= 25 && BMI <= 29.9){
        console.log("Overweight")
    } else {
        console.log("Obesity")
    }
}

BMI(90, 172)

// تمرین 5
// برحسب سال میلادی
function kabiseh(year) {
    if (year % 400 === 0){
        console.log("سال کبیسه است")
    }else if (year % 100 === 0){
        console.log("سال کبیسه نست")
    }else if (year % 4 === 0){
        console.log("سال کبیسه است")
    }else{
        console.log("سال کبیسه نست")
    }
}

kabiseh(1960)

// تمرین 6

function testStringVowels(kalmeh){
    const stringVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for (let i = 0; i < kalmeh.length; i++){
        if (stringVowels.includes(kalmeh[i])){
            return true
        }
    }
    return false
}

console.log(testStringVowels("kAsra"))


// تمرین 7

function minNumber(num){
    return Math.min(...num)
}   

console.log(minNumber([50, 63, 22, 47, 85]))

// تمرین 8

function reverses(input){
    return input.split("").reverse().join("")
}

console.log(reverses("mani"))