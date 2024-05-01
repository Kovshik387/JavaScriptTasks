document.getElementById('task1-button').onclick = function() {
    const createDocument = function() {
        const newWindow = window.open(undefined, 'Окно', 'width=500, height=500');
        const customDoc = newWindow.document.open();
        customDoc.writeln(`<div style="align-content:center;">`);
        for(let index = 0; index < 20; index++) {
            customDoc.writeln(`<hr style="width:${5 * (index + 1)}px">`);
        }
        customDoc.writeln('</div>');
        customDoc.close();
    }
    createDocument();
};

document.getElementById('task2-button').onclick = function() {
    /** @type { (num: number) => void } */
    const createTablePow = function(num) {
        const newWindow = window.open(undefined, 'Окно', 'width=500, height=500');
        /** @type { () => string } */
        const setTableValues = () => {
            let result = String();
            for(let index = 1; index <= 10; index++) {
                result += `<tr><td>${index}</td><td>${Math.pow(num, index).toFixed(2)}</td></tr>`
            }
            return result;
        }
        const styleNode = newWindow.document.createElement('style');
        styleNode.innerHTML = `
            table, th, td {
                border: 1px solid black;
                border-collapse: collapse;
            }
        `;
        newWindow.document.head.appendChild(styleNode);
        newWindow.document.body.innerHTML = `
            <table>    
                <tr><th>Степень</th><th>Результат</th></tr>
                ${setTableValues()}
            </table>
        `
    }
    createTablePow(2);
};

document.getElementById('task3-button').onclick = function() {
    /** @type { (info: {root: HTMLElement, array: string[]}) => void } */
    const setContent = function({root, array}) {
        /** @type { (array: string[]) => string } */
        const setListContent = (array) => array.map(item => `<li>${item}</li>`).join('\n');
        root.innerHTML = `<ul style="margin: 10px 0px;">${setListContent(array)}</ul>`
    }
    const lessons = ['Математика', 'Физика', ' Обществознание', 'История', 'Литература', 'Геометрия'];
    setContent({
        root: document.getElementById('task3-content'),
        array: lessons.slice(2, 4)
    });
};

document.getElementById('task4-button').onclick = function() {
    /** @type { (type: string) => void } */
    const createWindow = function(type) {
        const newWindow = window.open(undefined, 'Window', 'width=200, height=200')
        newWindow.document.body.innerHTML = `
            <p>${type.indexOf('Edg/') !== -1 ? 'Браузер Edge' : 'Другой браузер'}</p>
        `;
    }
    createWindow(window.navigator.userAgent)
};

document.getElementById('task5-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
            <input id="task5-username" type="text" placeholder="Введите имя"/>
            <input id="task5-password" type="password" placeholder="Введите пароль"/>
            <button id="task5-button">Проверка</button>
        `;
        /** @type { HTMLInputElement } */
        const username = root.querySelector('#task5-username');
        /** @type { HTMLInputElement } */
        const password = root.querySelector('#task5-password');
        root.querySelector('#task5-button').onclick = () => {
            if(username.value.length <= 0 || password.value.length <= 0) {
                window.alert('Введите данные!')
                return;
            }
            const pathArray = window.location.href.split('/');
            pathArray[pathArray.length - 1] = password.value == 1 ? 'assets/site1.html' 
                : (password.value == 0 ? 'assets/site2.html' : pathArray[pathArray.length - 1])
            window.location.href = (pathArray.join('/'))
        }
    }
    setContent({
        root: document.getElementById('task5-content')
    });
};