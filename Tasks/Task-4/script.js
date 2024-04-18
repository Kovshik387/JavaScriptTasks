const task_1 = {
    func: function() {
        let array = [];
        while(array.length < 5){
            const value = parseInt(window.prompt('Оценка:'))
            if (isNaN(value)) return;
            array.push(value);
        }
        let sum = 0;
        array.forEach(item => sum+= item)/array.length;
        window.alert(`Средний балл ${sum}`);
    }
}
document.getElementById('task-1').addEventListener('click', () => task_1.func());

const task_2 = {
    func: function() {
        let array = [];
        array = window.prompt("Введите числа").split(' ').map(value => parseInt(value));
        let tag = document.getElementById("numbers");
        for (i = 0; i < array.length; i++){
            let temp = document.createElement('li');
            temp.textContent = `element: ${array[i]}`;
            tag.appendChild(temp);
        }
        let max = document.createElement('p');
        max.innerHTML = `max: <strong>\t${Math.max(...array)}</strong>`;
        tag.append(max);
    }
}
document.getElementById('task-2').addEventListener('click',() => task_2.func());

const task_3 = {
    func: function(){
        const persons = [
            ["Вася",20,"Воронеж"],
            ["Маша", 19, "Москва"],
            ["Гриша",45,"Волгоград"]
        ];

        const setBody = (item) => `<table border="1" style="margin: 10px;"> `+
        `<tr> <th> Name </th> <th> Age</th> <th> Place</th></tr>${item}</table>`;
        
        let content = '';

        for (let item of persons){
            content += "<tr>"
            for (let i = 0; i < item.length; i++){
                content+= `<td>${item[i]}</td>`;
            }
            content += "</tr>";
        }
        document.getElementById('persons').innerHTML = setBody(content);
    }
}
document.getElementById('task-3').addEventListener('click',() => task_3.func());

const task_4 = {
    func: function(){
        const matrix = new Array(3);
        let min = Number.MAX_VALUE;
        for (let i = 0; i < matrix.length;i++){
            matrix[i] = new Array(4);
            for (let j = 0; j < matrix[i].length;j++){
                matrix[i][j] = parseInt(window.prompt("Число: "));
                if (matrix[i][j] < min) min = matrix[i][j];
            }
        }

        const setContent = (array) => {
            let content = `<ul style="margin: 10px 0px;">`;
            for (let i = 0; i < array.length; i++) {
                for(let j = 0; j < array[i].length; j++) {
                    content += `<li>[${i}, ${j}]: ${array[i][j]}</li>`
                }
            }
            return (content += '</ul>');
        };
        const taskContent = document.getElementById('task-4-content');
        taskContent.innerHTML = setContent(matrix);
        window.alert("Минимальное число массива: " + min);
    }
}
document.getElementById('task-4').addEventListener('click',() => task_4.func());

const task_5 = {
    func: function(){
        const items = new Array(6);
        const results = [];
        for(let index = 0; index < items.length; index++) {
            items[index] = parseInt(window.prompt("Введите число:"));
            if(Number(items[index]) % 2 != 0) continue;
            results.push(items[index]);
        }
        const setContent = (arr) => {
            let content = `<ul style="margin: 10px 0px;">`;
            for (let index = 0; index < arr.length; index++) {
                content += `<li>[${index}]: ${arr[index]}</li>`
            }
            return (content += '</ul>');
        };
        const taskContent = document.getElementById('task-5-content');
        taskContent.innerHTML = setContent(results);
    }
}
document.getElementById('task-5').addEventListener('click',() => task_5.func());

const task_6 = {
    func: function() {
        const items = new Array(4);
        const resultsMinus = [];
        const resultPlus = [];
        for(let index = 0; index < items.length; index++) {
            items[index] = parseInt(window.prompt("Введите число:"));
            if(Number(items[index]) > 0){
                resultPlus.push([items[index], `${index}`]);
            }
            else{
                resultsMinus.push([items[index], `${index}`])
            }
        }
        /**
         * 
         * @param {number[]} arr 
         * @param {String} str 
         * @returns 
         */
        const setContent = (arr,str) => {
            let content = `<p><strong>${str}</strong></p>
            <ul style="margin: 10px 0px;">`;
            for (let index = 0; index < arr.length; index++) {
                content += `<li>[${arr[index][1]}]: ${arr[index][0]}</li>`
            }
            return (content += '</ul>');
        };

        document.getElementById('task-6-content-plus').innerHTML = setContent(resultPlus,'положительные')
        document.getElementById('task-6-content-minus').innerHTML = setContent(resultsMinus,'отрицательные')
    }
}
document.getElementById('task-6').addEventListener('click',() => task_6.func());

const task_7 = {
    func: function(){
        const items = new Array(4);
        for(let i = 0; i < items.length; i++){
            items[i] = parseInt(window.prompt("Введите число:"));
        }
        const begin = items.map(x => x);
        items.sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));
        /**
         * @param {number[]} data 
         * @param {number[]} begin 
         * @returns {string}
         */
        const setContent = (data, begin) => {
            let content = `<span>Сортированные: [`;
            for (let index = 0; index < data.length; index++) {
                content += `${data[index]}, `
            }
            content += `]</span><br><span>Без сортировки: [`
            for (let index = 0; index < begin.length; index++) {
                content += `${begin[index]}, `
            }
            return (content += ']</span>');
        };
        const taskContent = document.getElementById('task7-content');
        taskContent.innerHTML = setContent(items, begin);
    }
}
document.getElementById('task-7').addEventListener('click',() => task_7.func());

const task_8 = {
    func: function(){
        const colors = new Array(5);
        for(var i = 0; i < colors.length; i++){
            colors[i] = prompt("Введите цвета: ", " ");
        }
        /** @type {(colors: string[]) => string)} */
        const setContent = (colors) => {
            let content = `<ul style="margin: 10px 0px">`;
    
            for (let index in colors) content += `<li>${colors[index]}</li>`
            return (content += '</ul>');
        };
        const taskContent = document.getElementById('task8-content');
        taskContent.innerHTML = setContent(colors);
    }
}
document.getElementById('task-8').addEventListener('click',() => task_8.func());

const task_9 = {
    func: function() {
        /**
         * 
         * @param {number} num1 
         * @param {number} num2 
         * @returns 
         */
        const getResult = (num1, num2) => {
            switch(window.prompt('Тип операции: (+, -, /, *)')) {
                case '+': return num1 + num2; 
                case '-': return num1 - num2; 
                case '/': return num1 / num2; 
                case '*': return num1 * num2; 
                default: throw 'Операция не найдена';
            }
        }
        do {
            const num1 = parseInt(window.prompt('Введите первое число:'));
            const num2 = parseInt(window.prompt('Введите второе число:'));
    
            try { window.alert(`Результат: ${getResult(num1, num2).toFixed(2)}`); }
            catch (error) { window.alert(`Ошибка: ${error}`); }
        }
        while (window.confirm('Продолжить?'));
    }
    
}
document.getElementById('task-9').addEventListener('click',() => task_9.func());

const task_10 = {
    func: function() {
        const emp1 = ["Данил", "Никита", "Олег"];
        const emp = emp1.concat("Егор", "Максим", "Репер");
        window.alert(`emp: ${emp}`);
    
        emp.sort((a, b) => a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0));
        window.alert(`emp: ${emp}`);
    
        let empA = new Array(10);
        window.alert(`empA: ${(empA = emp.concat())}`);
        empA.reverse();
    }
}
document.getElementById('task-10').addEventListener('click',() => task_10.func());