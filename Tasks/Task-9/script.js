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

document.getElementById('task6-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        const blockStyle = `
            display: inline-block;
            margin: 0px 10px;
            width: 50px;
            height: 50px;
            border: 1px solid black;
            border-radius: 5px;
        `.replace(/(\r\n|\n|\r)/gm,"");
        root.innerHTML = `
            <div style="margin:10px 0px;">
                <div id="task6-block1" style="${blockStyle}"></div>
                <div id="task6-block2" style="${blockStyle}"></div>
            </div>
        `;
        /** @type { HTMLElement } */
        const block1 = root.querySelector('#task6-block1');
        /** @type { HTMLElement } */
        const block2 = root.querySelector('#task6-block2');
        block1.addEventListener('click', () => block2.style.backgroundColor = 'crimson')
        block2.addEventListener('click', () => block1.style.backgroundColor = 'crimson')
    }
    setContent({
        root: document.getElementById('task6-content')
    });
};
document.getElementById('task7-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
            <div style="margin: 10px 0px;">
                <button id="task7-catalog">Открыть каталог</button
            </div>
        `;
        root.querySelector('#task7-catalog').onclick = () => {
            const pathArray = window.location.href.split('/');
            pathArray[pathArray.length - 1] = 'assets/catalog1.html';
            window.location.href = (pathArray.join('/'))
        };
    }
    setContent({
        root: document.getElementById('task7-content')
    });
};
document.getElementById('task8-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {

        let version = navigator.appVersion.split(";");
        version = version[1].replace(/^\s/,'').split(' ');
        version = version[1];

        root.innerHTML = `
            <style type="text/css"> p { margin: 0; } </style>
            <div style="margin: 10px 0px;">
                <p>Browser name: ${navigator.vendor}</p>
                <p>Browser version: ${version}</p>
                <p>Cookie is enabled: ${navigator.cookieEnabled}</p>
                <p>Language: ${navigator.browserLanguage}</p>
                <p>Operating System Platform: ${navigator.platform}</p>
                <p>Java is enabled: ${navigator.javaEnabled()}</p>
            </div>
        `;
    }
    setContent({
        root: document.getElementById('task8-content')
    });
};
document.getElementById('task8-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
            <style type="text/css"> li { margin: 2px; } </style>
            <ul style="margin: 10px 0px;">
                <li>Browser name: ${navigator.vendor}</li>
                <li>Browser version: ${navigator.appVersion}</li>
                <li>Cookie is enabled: ${navigator.cookieEnabled}</li>
                <li>Language: ${navigator.language}</li>
                <li>Operating System Platform: ${navigator.platform}</li>
                <li>Java is enabled: ${navigator.javaEnabled()}</li>
            </ul>
        `;
    }
    setContent({
        root: document.getElementById('task8-content')
    });
};
document.getElementById('task9-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
            <style type="text/css"> li { margin: 2px; } </style>
            <ul style="margin: 10px 0px;">
                <li>HostName: ${window.location.hostname}</li>
                <li>ProtocolName: ${window.location.protocol}</li>
                <li>PathName: ${window.location.pathname}</li>
            </ul>
        `;
    }
    setContent({
        root: document.getElementById('task9-content')
    });
};