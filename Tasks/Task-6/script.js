task_1 = {
    func: function(){
        /**
         * @type {User}
         */
        const user = {
            name: "Nikita",
            surname: "Fantokin",
            patronymic: "Sergeevich",
            group: "bOIS-211"
        }
        /**
         * @param {User} user 
         */
        const isUserNull = function(user){
            for (let item in user){
                if(user.hasOwnProperty(item)) return false;
            } 
            return true;
        }
        user.name = "Danil";
        window.alert(`Имя до удаления: ${user.name}`);
        delete user.name;
        window.alert(`Имя после удаления: ${user.name}`);
        window.alert(`Проверка свойств: ${isUserNull(user)}`);
    }
};
document.getElementById('task-1').addEventListener('click',() => task_1.func());

task_2 = {
    func: function(){
        const weekDays = {
            days: {
                0: "Воскресенье", 
                1: "Понедельник", 
                2: "Вторник", 
                3: "Среда",
                4: "Четверг", 
                5: "Пятница", 
                6: "Суббота"
            },
            getCurrent() {
                return this.days[(new Date(Date.now())).getDay()];
            }
        }
        window.alert(`Текущий день: ${weekDays.getCurrent()}`);
    }
}
document.getElementById('task-2').addEventListener('click',() => task_2.func());

task_3 = {
    func: function(){
        const weekDays = {
            current: 3,
            days: {
                0: "Воскресенье", 
                1: "Понедельник", 
                2: "Вторник", 
                3: "Среда",
                4: "Четверг", 
                5: "Пятница", 
                6: "Суббота"
            },
            getCurrent() {
                return this.days[this.current];
            }
        }
        window.alert(`Установленный день: ${weekDays.getCurrent()}`);
    }
}
document.getElementById('task-3').addEventListener('click',() => task_3.func());

document.getElementById('task1_4-button').onclick = function() {
    const writeYourGenres = (db) => {
        for(let index = 0; index < 3; index++) {
            const input = window.prompt(`Ваш любимы жанр номер ${index + 1}`);
            db.genres[index] = input;
        }
    }
    do{ var filmsCount = prompt("Сколько фильмов вы уже посмотрели?"); }
    while (filmsCount == null || !filmsCount.length);

    window.alert(`${(filmsCount >= 10 && filmsCount <= 30) 
        ? 'Вы классический зритель'
        : (filmsCount < 10 
            ? 'Мало фильмов просмотрено' 
            : (filmsCount > 30 ? 'Вы киноман' : 'Ошибка'))}`);
    const personalMovieDB = {
        count: Number(filmsCount),
        movies: { },
        actors: { },
        genres: [],
        private: false, 
        showMyDB: function() {
            console.log(this.private ? 'Доступ закрыт' : this);
        }
    }
    for(let index = 0; index < 2; index++) {
        do { 
            var lastFilm = window.prompt("Один из последних просмотренных фильмов?"); 
        }
        while (lastFilm == null || !lastFilm.length);

        do { var raiting = window.prompt("На сколько оцените его?"); }
        while (raiting == null || !raiting.length);
        personalMovieDB.movies[lastFilm] = raiting;
    }
    writeYourGenres(personalMovieDB)
    personalMovieDB.showMyDB();
};
document.getElementById('task-2_1-button').onclick = function() {
    /** @type { (str: string) => string } */
    const ucFirst = function(str) {
        if (str === null || str.length <= 1) {
            throw 'Нельзя преобразовать'
        }
        return str.slice(0, str.length - 1) + str.charAt(str.length - 1).toUpperCase();;
    }
    window.alert(`Результат: ${ucFirst(window.prompt("Введите слово: "))}`);
};
document.getElementById('task-2_2-button').onclick = function() {
    /** 
     * @typedef { Object } TaskResult 
     * @property { number } count
     * @property { string[] } words
     * @property { symbol } charByPos
     * @property { string[] } firstTwo
     * @property { string } upperCase
    */
    /** @type { (str: string) => TaskResult } */
    const ucFirst = function(str) {
        if(str === null || str.length < 7) {
            throw 'Строка не подходит для выполнения';
        }
        const words = str.split(' ');
        return {
            count: str.length, 
            words: words,
            charByPos: str.charAt(6),
            firstTwo: words.slice(0, 2),
            upperCase: str.toUpperCase()
        };
    }
    console.log(ucFirst(window.prompt('Введите строку:')));
    window.alert(`Результат в консоле`);
};
document.getElementById('task-2_3-button').onclick = function() {

    const words = window.prompt('Введите предложение').split(' ');
    for(let index = 0; index < words.length; index++) {
        if(window.prompt(`${words[index]}`, '').length > 0) break;
    }
};
document.getElementById('task-2_4-button').onclick = function() {
    /** @type { (text: string, n: number) => string } */
    const sliceText = function(text, n) {
        return text.length >= n ? `${text.substring(0, n)}...` : text;
    }
    /**
     * @typedef { { element: HTMLElement, text: string } } TaskContent 
     * @type { (content: TaskContent) => void } 
    */
    const setContent = ({ element, text }) => element.innerHTML = text;
    setContent({
        element: document.getElementById('task-2_4-content'),
        text: sliceText(window.prompt('Введите текст:'),
            parseInt(window.prompt('Кол-во символов: ', 10)))
    });
};
document.getElementById('task-2_5-button').onclick = function() {
    /** @type { (text: string, input: { from: symbol, to: symbol }) => string } */
    const changeSymbols = function(text, { from, to }) {
        let currentText = text;
        while(currentText !== (text = text.replace(from, to))) {
            currentText = text;
        }
        return text;
    }
    /**
     * @typedef { { element: HTMLElement, text: string } } TaskContent 
     * @type { (content: TaskContent) => void } 
    */
    const setContent = ({ element, text }) => element.innerHTML = text;
    setContent({
        element: document.getElementById('task-2_5-content'),
        text: changeSymbols(window.prompt('Введите текст:'), { from: '-', to: '!' })
    });
};
document.getElementById('task-3_1-button').addEventListener('click', function(event) {
    window.alert(`Кнопка: ${this.innerText}`);
});
document.getElementById('task-3_2-button').onclick = function() {
    /** @type { (data: {root: HTMLElement, callback: (value: number) => void}) => void } */
    const createElement = function({root, callback}) {
        root.innerHTML = `<input style="margin: 10px 0px;" type="text" id="calculator-input"/>
            <button id="calculator-btn">Расчитать</button>`;

        /** @type { HTMLInputElement } */
        const inputElement = document.getElementById('calculator-input');
        document.getElementById('calculator-btn').onclick = () => {
            callback(parseInt(inputElement.value))
        }
    }
    /** @type { (radius: number) => number } */
    const calculateCircleArea = (radius) => (Math.pow(radius, 2) * Math.PI).toFixed(2); 
    createElement({
        root: document.getElementById('task-3_2-content'),
        callback: (value) => window.alert(`Площадь: ${calculateCircleArea(value)}`) 
    })
}
document.getElementById('task-3_3-button').onclick = function() {
    /**
     * @typedef { (width: number, height: number) => void } CalcCallback 
     * @type { (data: {root: HTMLElement, callback: CalcCallback }) => void } 
     * */
    const createElement = function({root, callback}) {
        root.innerHTML = `
            <input style="margin: 10px 0px 5px;" type="number" id="sq-height"/>
            <input style="margin: 5px 0px 10px;" type="number" id="sq-width"/>
            <button id="sq-btn">Расчитать</button>`;
        /** @type { HTMLInputElement } */
        const width = document.getElementById('sq-width');
        /** @type { HTMLInputElement } */
        const height = document.getElementById('sq-height');
        document.getElementById('sq-btn').onclick = () => {
            callback(Number(width.value), Number(height.value))
        }
    }
    /** @type { (w: number, h: number) => number } */
    const calculateSquareArea = (w, h) => (w * h).toFixed(2); 
    createElement({
        root: document.getElementById('task-3_3-content'),
        callback: (width, height) => {
            window.alert(`Площадь: ${calculateSquareArea(width, height)}`)
        } 
    })
}
document.getElementById('task-4_1-button').onclick = function() {
    /** @type { (data: {root: HTMLElement, date: Date}) => void } */
    const setContent = function({root, date}) {
        root.innerHTML = `
            <p style="margin: 10px 0px;">
                <span>Время: ${date.toLocaleTimeString()}</span>
                <span>Дата: ${date.toLocaleDateString()}</span>
            </p>
        `;
    }
    setContent({
        root: document.getElementById('task4_1-content'),
        date: new Date(Date.now())
    });
}
document.getElementById('task-4_2-button').onclick = function() {
    /** @type { (data: {root: HTMLElement, date: Date}) => void } */
    const setContent = function({root, date}) {
        root.innerHTML = `
            <p style="margin: 10px 0px;">
                <span>${date.toLocaleString()}</span>
                <br>
                <span>${date.toGMTString()}</span>
            </p>
        `;
    }
    setContent({
        root: document.getElementById('task4_2-content'),
        date: new Date(12, 11, 23, 14, 10, 7)
    });
}
document.getElementById('task-4_3-button').onclick = function() {
    /** @type { (data: {root: HTMLElement, first: Date, second: Date}) => void } */
    const setContent = function({root, first, second}) {
        const difference = Math.round(Math.abs(first.getTime() - second.getTime()) / (1000 * 3600 * 24));
        root.innerHTML = `
            <p style="margin: 10px 0px;">
                <span>Первая: ${first.toLocaleDateString()}</span>
                <br>
                <span>Вторая: ${second.toLocaleDateString()}</span>
                <br>
                <span>Разность: ${(new Date(difference)).toLocaleDateString()}</span>
            </p>
        `;
    }
    setContent({
        root: document.getElementById('task-4_3-content'),
        first: new Date(12, 11, 23),
        second: new Date(Date.now())
    });
}
document.getElementById('task-4_4-button').onclick = function() {
    /** @type { (data: {root: HTMLElement, days: number}) => void } */
    const setContent = function({root, days}) {
        root.innerHTML = `
            <p style="margin: 10px 0px;">
                <span>Дней до ДР: ${days}</span>
            </p>
        `;
    }
    const currentDate = new Date(Date.now());
    const birthday = {
        day: Number(window.prompt('Введите день вашего рождения:')),
        month: Number(window.prompt('Введите месяц вашего рождения:')),
        year: Number(window.prompt('Введите год, в котором будет день рождения:')),
    };
    const date = new Date(birthday.year, (birthday.month-1), birthday.day);
    const diffTime = date.getTime() - currentDate.getTime();

    var diffDays = Math.round(diffTime / (1000 * 3600 * 24));

    if (diffDays >= 0){
        setContent({
            root: document.getElementById('task-4_4-content'),
            days: diffDays
        });
    }
    else if (diffDays < 0){
        alert("Ошибка! Введена невереная дата.")
    }
}