//6. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function calcSumEndQuantityEvenNumbersBetween(start, end) {
    let sumEvenNumbers = 0;
    let quantityEvenNumbers = 0;

    for (i = start; i <= end; i++) {
        if (i % 2 === 0) {
            sumEvenNumbers += i;
            quantityEvenNumbers++;
        }
    }

    let result = {
        sumEvenNumbers: sumEvenNumbers,
        quantityEvenNumbers: quantityEvenNumbers
    }

    return result;
};
//console.log(calcSumEndQuantityEvenNumbersBetween(1, 99));

//7. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function checkPrimeNumber(number) {

    if (number > 1) {
        for (i = 2; i < number; i++) {
            if (number % i === 0) {
                return ('Число составное');
            } else {
                return ('Число простое');
            }
        }
    }
};
//console.log(checkPrimeNumber(8));

//9. Посчитать сумму цифр заданного числа

function calcSumDigitsNumber(number) {
    let sum = 0;

    while (number != 0) {
        sum += (number % 10);
        number = Math.floor(number / 10);
    }

    return sum;
};
//console.log(calcSumDigitsNumber(198806));

//8. Вычислить факториал числа n

function calcFactorialNumber(number) {
    let result = 1;

    for (i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
};
//console.log(calcFactorialNumber(5));

//12. Посчитать количество нечетных элементов массива

let randomNumber = 0;
let array = [];

for (i = 0; i < 15; i++) {
    randomNumber = Math.floor(Math.random() * 50);
    array.push(randomNumber);
}
console.log(array);

function calcQuantityOddElementsАrray(arr) {
    let quantityElements = 0;

    for (i = 0; i <= arr.length; i++) {

        if (i % 2 != 0) {
            quantityElements ++;
        }
    }

    return quantityElements;
};
//console.log(calcQuantityOddElementsАrray(array));