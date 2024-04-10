const task_1 = {
    func: function () {//passw00rd!
        let regex = new RegExp('\\D{5}\\d{2}\\D{2}[!]');
        const input = window.prompt("Введите строку");
        window.alert(regex.test(input));
        window.alert(`Результат ${regex.test(input) ? 'верно' : 'неверно'}`);
    }
};

const task_2 = {
    regex: /\(\d{3}\)\d{3}-\d{4}/,
    func: function () {
        const input = window.prompt("Проверить номер:");
        window.alert(`Номер ${this.regex.exec(input) != null ? 'верно' : 'неверно'}`);
    }
}

const task_3 = {
    regex: new RegExp('^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})$'),
    func: function () {
        let match = false;
        while(!match){
            match = this.regex.exec(window.prompt("Введите почту")) != null;
            window.alert(`Адрес ${match ? "верный" : "неверный"} `);
        }
    }
}

const task_4 = {
    func: function () {
        const pattern = '^\\d{5}$';
        const regex = new RegExp(pattern);
        const input = window.prompt("Введите индекс");
        window.alert(regex.exec(input) != null ? `${pattern}` : 'неверный почтовый индекс'); 
    }
}

addEventListener('load', () => {
    document.getElementById('task-1').addEventListener('click', () => task_1.func());
    document.getElementById('task-2').addEventListener('click', () => task_2.func());
    document.getElementById('task-3').addEventListener('click', () => task_3.func());
    document.getElementById('task-4').addEventListener('click', () => task_4.func());
})