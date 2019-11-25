//6. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function calcSumAndQuantityEvenNumbersBetween(start, end) {
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
}
//console.log(calcSumAndQuantityEvenNumbersBetween(1, 99));

//7. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function checkPrimeNumber(number) {

    if (number < 1) {
        return 'Число не натуральное, введено не правильное значение';
    }

    if (number > 1) {
        for (i = 2; i < number; i++) {
            if (number % i === 0) {
                return 'Число составное';
            }
        }
    }

    return 'Число простое';
}
//console.log(checkPrimeNumber(25));

//7.5 Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function calcSqrtSequential(number) {
    if (number < 0) {
        return 'Число не натуральное, введено не правильное значение';
    }

    if (number === 1 || number === 0) {
        return number;
    }

    for (i = 2; i < number; i++) {
        let square = Math.pow(i, 2);
        if (square === number) {
            return i;
        } else if (square > number) {
            return --i;
        }
    }
}
//console.log(calcSqrtSequential(17));

function calcSqrtBenary(number) {
    if (number < 0) {
        return 'Число не натуральное, введено не правильное значение';
    }

    if (number === 1 || number === 0) {
        return number;
    }

    let start = 2;
    let end = number;

    while (true) {
        let middle = start + Math.floor((end - start) / 2);
        if (middle === start) {
            return middle;
        }
        let squareMiddle = Math.pow(middle, 2);
        if (squareMiddle === number) {
            return middle;
        } else if (squareMiddle > number) {
            end = middle;
        } else if (squareMiddle < number) {
            start = middle;
        }
    }
}
//console.log(calcSqrtBenary(1854))

//9. Посчитать сумму цифр заданного числа

function calcSumDigitsNumber(number) {
    let sum = 0;

    while (number != 0) {
        sum += (number % 10);
        number = Math.floor(number / 10);
    }

    return sum;
}
//console.log(calcSumDigitsNumber(198806));

//8. Вычислить факториал числа n

function calcFactorialNumber(number) {
    let result = 1;

    for (i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}
//console.log(calcFactorialNumber(5));

//10. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа 1547963248596524898525477353636555.


// function getInvertedNumber(number) {
//     let elements = 0; // Кол-во цифр
//     let invertedNum = 0; //складывается перевернутое число
//     let a = number;
//     do {
//         a /= 10;
//         elements++;
//     } while (a >= 1)

//     while (elements !== 0) {
//         let numeral = number % 10;
//         invertedNum += numeral * Math.pow(10, elements - 1);// присваевает разряд последней цифре от первой
//         number = Math.floor(number / 10);
//         elements -= 1;
//     } return invertedNum;
// }
// console.log(getInvertedNumber(584269872354861548796248521379));


function getInvertedNumber(number) {
    let elements = 0; // Кол-во элементов
    let invertedNum = 0; //складывается перевернутое число
    let a = number;
    let b = []; // пробую через массивы

    do {
        a /= 10;
        elements++;
    } while (a >= 1)// кол-во элементов в массиве

    for (i = 0; i <= elements + 1; i++) {
        let numeral = number % 10; 
        b.push(numeral);
        number = Math.floor(number / 10);
        elements -= 1;
    } return b;



}
console.log(getInvertedNumber(12584697325487623014));
