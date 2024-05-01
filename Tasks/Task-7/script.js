document.getElementById('task1_1-button').onclick = function() {
    /**  
     * @typedef {{ root: HTMLElement, callback: () => void }} Content
     * @type { (content: Content) => void } 
    */
    const setContent = function({root, callback}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;" >
            <input id="input-test" type="text" placeholder="Введите данные"/>
            <input id="output-test" type="text" placeholder="Вывод"/>
            <button id="btn-test" class="btn btn-primary">Проверить данные</button>
        </div>
        `;
        document.getElementById('btn-test').onclick = () => callback();
    };
    setContent({
        root: document.getElementById('task1_1-content'),
        callback: () => {
            if(!window.confirm('Подтверждение')) return;
            /** @type { HTMLInputElement } */
            const input = document.getElementById('input-test');
            /** @type { HTMLInputElement } */
            const output = document.getElementById('output-test');
            output.value = input.value;
        }
    })
};

document.getElementById('task2_1-button').onclick = function() {
    /** @type { (data: {root: HTMLElement}) => void } */
    const setContent = function({root, callback}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;" >
            <input id="hello-text" type="text" placeholder="Пусто"/>
        </div>
        `;
        document.getElementById('hello-text').onfocus = function() {
            this.value = 'Привет';
        }
        document.getElementById('hello-text').addEventListener('blur', function() {
            this.value = 'До свидания'
        });
    };
    setContent({
        root: document.getElementById('task2_1-content'),
    })
};