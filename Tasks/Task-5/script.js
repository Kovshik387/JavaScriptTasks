const task_1 = {
    func: function() {
        const greetings = function () {
            window.alert("Приветствую пользователь");
        }
        greetings();
    }
}
document.getElementById('task-1').addEventListener('click',task_1.func());

const task_2 = {
    func: function(){
        /**
         * 
         * @param {number} value1
         * @param {number} value2 
         * @returns {number}
         */
        const calculate = function (value1, value2) {
            return value1 + value2;
        }
        const value1 = parseInt(window.prompt('Введите первое число:', 0));
        const value2 = parseInt(window.prompt('Введите второе число:', 0));
        window.alert(`Результат: ${calculate(value1, value2)}`);
    }
}
document.getElementById('task-2').addEventListener('click',task_2.func());

const task_3 = {
    func: function(){
        /**
         * @param {Array} arr 
         * @returns {Number}
         */
        const getArraySummary = function (arr) {
            let result = 0;
            for(let item in arr.map(x => x).reverse()) result += arr[item];
            return result;
        }
        const array1 = [ 20, 10, 256, 25, -63 ];
        const array2 = new Array(5);
        for(let index = 0; index < array2.length; index++) {
            array2[index] = parseInt(window.prompt('Введите число: '));
        }
        window.alert(
            `Установленный массив: ${getArraySummary(array1)}\n` +
            `Введенный массив: ${getArraySummary(array2)}`);
    }
}
document.getElementById('task-3').addEventListener('click',task_3.func());

const task_4 = {
    func: function(){
        /**
         * 
         * @param {Array} arr 
         * @param {Number} item 
         * @returns 
         */
        const addItemToArray = function (arr, item) {
            const arrClone = arr.map(x => x);
            arrClone.push(item);
            return arrClone;
        }
        const array = [ 'item1', 'item2', 'item3' ];
        const newItem = window.prompt('Введите новый элемент: ', ' ');
        const newArray = addItemToArray(array, newItem);
        window.alert(
            `До добавления: ${array}\nПосле добавления: ${newArray}`);
    }
}
document.getElementById('task-4').addEventListener('click',task_4.func());

const task_5 = {
    func: function(){
        const setItemsToElement = function ({array, element}) {
            element.innerHTML = `<ul style="margin: 10px 0px">`
            array.forEach((value, index) => element.innerHTML += `<li>[${index}]: ${value}</li<`);
            element.innerHTML += `</ul>`
        }
        setItemsToElement({
            array: [ 'item1', 'item2', 'item3' ],
            element: document.getElementById('task-5-content')
        });
    }
}
document.getElementById('task-5').addEventListener('click',task_5.func());

const task_6 = {
    func: function(){
        /**
         * @param {Number} num 
         * @returns {Number}
         */
        const factorial = function (num = 1) {
            if(num <= 1) return num;
            else return num * factorial(num - 1);
        }
        window.alert("Factorial: " + factorial(parseInt(window.prompt("Введите число: ", 4))));
    }
}
document.getElementById('task-6').addEventListener('click',task_6.func());

const task_7 = {
    func: function(){
        /**
         * @param {Array} array 
         * @returns {Array} result
         */
        const divideArrayBySign = function (array) {
            /** @type { ResultData } */
            const result = { negative: [], positive: [] };
            array.forEach((value, index) => {
                if (value === 0) return;
                
                /** @type { NumberInfo } */
                const currentNumber = { value: value, index: index };
    
                if(value < 0) result.negative.push(currentNumber);
                else result.positive.push(currentNumber);
            });
            return result;
        }
        
        const setItemsToElement = function ({info, element}) {
            element.innerHTML = `<span>Положительные:</span><ul>`
            info.positive.forEach((value, index) => {
                element.innerHTML += `<li>[${value.index}]: ${value.value}</li>`;
            })
    
            element.innerHTML += `</ul><span>Отрицательные:</span><ul>`
            info.negative.forEach((value, index) => {
                element.innerHTML += `<li>[${value.index}]: ${value.value}</li>`;
            });
        }

        const array = new Array(5);
        for (let index = 0; index < array.length; index++) {
            array[index] = parseInt(window.prompt('Введите число:', 0));
        }
        setItemsToElement({
            info: divideArrayBySign(array),
            element: document.getElementById('task-7-content')
        });
    }
}
document.getElementById('task-7').addEventListener('click',task_7.func());

const task_8 = {
    func: function(){
        /**
         * 
         * @param {Array} array 
         * @returns {Array} result
         */
        const calculateNumbersType = function (array) {
            /** @type { ResultData } */
            const result = { negative: 0, positive: 0, zero: 0 };
            array.forEach((value, index) => {
                if(value > 0) result.positive++;
                else if(value < 0) result.negative++;
                else result.zero++;
            });
            return result;
        }
        const array = new Array(5);
        for (let index = 0; index < array.length; index++) {
            array[index] = parseInt(window.prompt('Введите число:', 0));
        }
        const result = calculateNumbersType(array);
        window.alert(`Кол-во положительных чисел: ${result.positive}\n` 
            + `Кол-во отрицательных чисел: ${result.negative}\n`
            + `Кол-во нулей: ${result.zero}`);
    }
}