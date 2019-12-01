//16. Написать функцию, которая заполняет двумерный массив заданного размера рандомными числами

function calcArray(row, column) {
    let array = [];

    for (i = 0; i < row; i++) {
        array[i] = [];

        for (j = 0; j < column; j++) {
            array[i][j] = Math.floor(Math.random() * 50);
        }
    }

    return array;
}
let array = calcArray(4, 3);
let arr = calcArray(3, 3);
console.log(array, arr);

//17. Найти количество элементов массива, которые больше своих левого, правого, верхнего и нижнего соседа одновременно.

function calcMaxElements(arr) {
    let elements = 0;

    for (i = 1; i < arr.length - 1; i++) {
        for (j = 1; j < arr[i].length - 1; j++) {

            if (
                arr[i][j] > arr[i - 1][j] &&
                arr[i][j] > arr[i][j + 1] &&
                arr[i][j] > arr[i + 1][j] &&
                arr[i][j] > arr[i][j - 1]
            ) {
                elements++;
            }
        }
    }
    return elements;
}

//console.log(calcMaxElements(array));

//18. Отразите массив относительно его главной диагонали.

function calcArrayMirror(arr) {

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr[i].length; j++) {

            let a = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = a;
        }
    }
    return arr;
}
//calcArrayMirror(array);

//19. Заполнить массив заданного размера по спирали, например:

function spiralMatrix(row, column) {
    let matrix = [];
    let sum = row * column;
    let corI = 0;
    let corJ = 0;
    let count = 1;

    for (k = 0; k < row; k++) {
        matrix[k] = [];
    }
    while (row > 0) {
        for (i = 0; i <= row; i++) {
            for (j = 0; j < ((column <= row) ? row : column); j++) {
                if (i == 0 && j < column - corJ && count <= sum) { matrix[i + corI][j + corJ] = count++; }
                if (i == 1 && j < row - corI && j != 0 && count <= sum) { matrix[j + corI][column - 1] = count++; }
                if (i == 2 && j < column - corJ && j != 0 && count <= sum) { matrix[row - 1][column - (j + 1)] = count++; }
                if (i == 3 && j < row - (corI + 1) && j != 0 && count <= sum) { matrix[row - (j + 1)][corI] = count++; }
            }
        }
        row--;
        column--;
        corI += 1;
        corJ += 1;
    }
    return matrix;
}
//console.log(spiralMatrix(4,6));

//20. Умножить матрицу произвольного размера, заполненную рандомными числами, на другую матрицу произвольного размера

function multiplyMatrix(matrixA, matrixB) {
    let matrixC = [];

    if (matrixA[0].length != matrixB.length) {
        return false;
    }

    for (i = 0; i < matrixA.length; i++) {
        matrixC[i] = [];
    }
    
    for (i = 0; i < matrixB[0].length; i++) {
        for (j = 0; j < matrixA.length; j++) {
            let a = 0
            for (k = 0; k < matrixB.length; k++) {
                a += matrixA[j][k] * matrixB[k][i];
                matrixC[j][i] = a;
            }
        }
    }

    return matrixC;
}
console.log(multiplyMatrix(array, arr));
