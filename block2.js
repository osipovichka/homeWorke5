function randomArray(quantityElements) {
    let randomNumber = 0;
    let arr = [];

    for (i = 0; i < quantityElements; i++) {
        randomNumber = Math.floor(Math.random() * 50);
        arr.push(randomNumber);
    }

    return arr;
}
let array = randomArray(10);
console.log(array);

//11. Сделать реверс массива (массив в обратном направлении)

// function getReversedArray (arr) {
//     let reverseArray = arr.reverse();
//     return reverseArray;
// }

//console.log(getReversedArray(array));

function getReversedArray(arr) {
    let array = [];
    for (i = arr.length - 1; i >= 0; i--) {
        array.push(arr[i]);
    }
    return array;
}
//console.log(getReversedArray(array));

//12. Посчитать количество нечетных элементов массива

function calcQuantityOddElementsАrray(arr) {
    let quantityElements = 0;

    for (i = 0; i <= arr.length; i++) {

        if (i % 2 != 0) {
            quantityElements++;
        }
    }

    return quantityElements;
}
//console.log(calcQuantityOddElementsАrray(array));

//13. Поменять местами первую и вторую половину массива.

function calcArray(arr) {

    for (i = 0; i < arr.length / 2; i++) {
        let a = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = a;
    }
    return arr;
}
//console.log(calcArray(array));

//14. Отсортировать массив пузырьком (Bubble)

function calcBubbleSort(arr) {
    for (i = 0; i < arr.length - 1; i--) {
        let wasSorting = false;

        for (j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let a = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = a;
                wasSorting = true;
            }
        }
        if (!wasSorting) break;
    }
    return arr;
}
//console.log(calcBubbleSort(array));

//15.Отсортировать массив ещё двумя методами (выбором (Select), вставками (Insert)) 

function calcSelectSort(arr) {

    for (i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (j = i + 1; j < arr.length; j++) {

            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            let a = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = a;
        }
    }
    return arr;
}
//console.log(calcSelectSort(array));

function calcInsertSort(arr) {

    for (i = 0; i < arr.length; i++) {
        let element = arr[i];

        for (j = i - 1; j >= 0 && arr[j] > element; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = element;
    }
    return arr;
}
console.log(calcBubbleSort(array));
