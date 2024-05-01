document.getElementById('task1-button').onclick = function() {
    /** @type { (info: {root: HTMLElement}) => void } */
    const setContent = function({root}) {
        const name = 'Щелкните на ссылке для получения справки';
        root.innerHTML = `
            <div style="margin: 10px 0px;">
                <button id="task1-open">${name}</button>
            </div>
        `
        /** @type { HTMLButtonElement } */
        const button = document.getElementById('task1-open');
        button.onclick = () => {
            window.open(undefined, 'New', 'resizable=1, width=500, height=500');   
        }
    };
    setContent({
        root: document.getElementById('task1-content')
    });
};
document.getElementById('task2-button').onclick = function() {
    /** @type { (info: {root: HTMLElement}) => void } */
    const setContent = function({root}) {
        /** @type { Window | null } */
        let customWindow = null;
        root.innerHTML = `
            <div style="margin: 10px 0px;">
                <button id="task2-open">Создать окно</button>
                <button id="task2-move" disabled>Переместить окно</button>
                <button id="task2-resize" disabled>Изменить размер окна</button>
            </div>
        `
        document.getElementById('task2-open').onclick = () => {
            customWindow = window.open(undefined, 'Dynamic', 'width=250, height=250');   
            document.getElementById('task2-move').disabled = false;
            document.getElementById('task2-resize').disabled = false;
        };
        document.getElementById('task2-resize').onclick = () => {
            if(customWindow === null) return; 
            customWindow.resizeTo(500, 500);
        };
        document.getElementById('task2-move').onclick = () => {
            if(customWindow === null) return; 
            customWindow.moveTo(500, 500);
        };
    };
    setContent({
        root: document.getElementById('task2-content')
    });
};
document.getElementById('task3-button').onclick = function() {
    /** @type { (info: {root: HTMLElement}) => void } */
    const setContent = function({root}) {
        /** @type { Window[] | null } */
        let customWindows = [];
        
        root.innerHTML = `
            <div style="margin: 10px 0px;">
                <button id="task3-open">Создать окно</button>
            </div>
        `
        document.getElementById('task3-open').onclick = () => {
            customWindows.push(window.open(undefined, 'Второе окно', 'width=300, height=300'));   
            customWindows[0].document.body.innerHTML = `
                <div style="display: block;">
                    <h1 style="color: blue;">Второе окно</h1>
                    <p><a href="javascript:void(0);" id="window3">Ссылка на окно 3</a></p>
                    <p><a href="javascript:void(0);" id="window4">Ссылка на окно 4</a></p>
                </div>
            `
            customWindows[0].document.getElementById('window3').addEventListener('click', () => {
                const window3 = customWindows[0].open(undefined, 'Окно 3', 'width=300, height=300');
                window3.document.body.innerHTML = `
                <div style="display: block;">
                    <h1 style="color: blue;">Окно 3</h1>
                </div>
                `;
                customWindows.push(window3);
            });
            customWindows[0].document.getElementById('window4').addEventListener('click', () => {
                const window4 = customWindows[0].open(undefined, 'Окно 4', 'width=300, height=300');
                window4.document.body.innerHTML = `
                <div style="display: block;">
                    <h1 style="color: blue;">Окно 4</h1>
                    <p><a href="javascript:void(0);" id="close">Закрыть окна</a></p>
                </div>
                `;
                customWindows.push(window4);
                window4.document.getElementById('close').onclick = () => {
                    for(let item of customWindows) item.close();
                };
            });
        };
    };
    setContent({
        root: document.getElementById('task3-content')
    });
};
document.getElementById('task4-button').onclick = function() {
    /** @type { (info: {root: HTMLElement}) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
            <div style="margin: 10px 0px;">
                <input id="task4-name" type="text" placeholder="Введите имя" />
                <input id="task4-email" type="text" placeholder="Введите имя" />
                <button id="task4-send">Создать окно</button>
            </div>
        `;
        const name = document.getElementById('task4-name');
        const email = document.getElementById('task4-email');
        document.getElementById('task4-send').onclick = () => {
            const newWindow = window.open(undefined, 'Данные формы', 'width=400, height=250');
            newWindow.document.body.innerHTML = `
                <div style="margin: 10px;">
                    <p>Имя пользователя: ${name.value}</p>
                    <p>Email пользователя: ${email.value}</p>
                </div>
            `
        }
    };
    setContent({
        root: document.getElementById('task4-content')
    });
};
document.getElementById('task5-button').onclick = function() {
    /** @type { (info: {root: HTMLElement}) => void } */
    const setContent = function({root}) {
        /** @type { Window | null } */
        let customWindow = null;
        root.innerHTML = `
            <div style="margin: 10px 0px;">
                <button style="margin: 5px 0px;" id="task5-open">Открыть окно</button>
                <button style="margin: 5px 0px;" id="task5-close">Закрыть окно</button>
            </div>
        `;
        document.getElementById('task5-open').onclick = () => {
            customWindow = window.open(undefined, 'Новое окно', 'width=300, height=250')
            customWindow.document.body.innerHTML = `
                <p style="margin: 10px">Новое окно</p>
            `;
        }
        document.getElementById('task5-close').onclick = () => {
            if(customWindow === null) return;
            customWindow.close();
            customWindow = null;
        }
    };
    setContent({
        root: document.getElementById('task5-content')
    });
};
document.getElementById('task6-button').onclick = function() {
    /** @type { (info: {root: HTMLElement}) => void } */
    const setContent = function({root}) {
        /** @type { Window | null } */
        let customWindow = null;
        root.innerHTML = `
            <div style="margin: 10px 0px;display: inline-block">
                <p>Время: <span id="task6-output"></span></p>
            </div>
        `;
        const output = document.getElementById('task6-output');
        setInterval(() => {
            output.innerText = `${(new Date(Date.now())).toLocaleTimeString()}`
        }, 1000)
    };
    setContent({
        root: document.getElementById('task6-content')
    });
};