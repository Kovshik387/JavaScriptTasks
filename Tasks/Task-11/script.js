/** @type { () => string } */
function getCurrentPath() {
    const pathArray = window.location.href.split('/');
    return pathArray.slice(0, pathArray.length - 1).join('/');
}
document.getElementById('task1-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
        <form style="margin: 10px 0px;" name="task1">
            <label>Оформление текста:</label>
            <select name="text-decor">
                <option value="0" selected>Не выбрано</option>
                <option value="1">Подчеркнутый</option>
                <option value="2">Зачеркнутый</option>
            </select>
            <p id="task1-format">Текст для форматирования</p>
        </form>
        `;
        /** @type { HTMLElement } */
        const text = root.querySelector('#task1-format');
        /** @type { HTMLSelectElement } */
        const select = document.forms['task1']['text-decor'];
        select.addEventListener('change', function(event) {
            switch(select.selectedOptions[0].text) {
                case 'Подчеркнутый': text.style.textDecoration = 'underline'; break;
                case 'Зачеркнутый': text.style.textDecoration = 'line-through'; break;
                default: text.style.textDecoration = 'none';
            }
        });
    }
    setContent({
        root: document.getElementById("task1-content"),
    });
};
document.getElementById('task2-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
        <form style="margin: 10px 0px;" name="task2" >
            <button name="btn" class="btn btn-primary">Нажмите на меня!</button>
            <p name="info" style="display: none; margin: 10px 0px;"></p>
        </form>
        `;
        /** @type { HTMLParagraphElement } */
        const textinfo = root.querySelector('form > p');;
        /** @type { HTMLButtonElement } */
        const btn = document.forms['task2'].elements['btn'];
        document.forms.namedItem('task2').addEventListener('submit', function(event) {
            event.preventDefault();
            textinfo.style.display = 'block';
            textinfo.textContent = `${btn}: ${btn.outerHTML}`
        })
    }
    setContent({
        root: document.getElementById("task2-content"),
    });
};
document.getElementById('task3-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
        <form style="margin: 10px 0px;" >
            <fieldset>
                <legend style="margin: 0px;">Элементы страницы:</legend>
                <input type="checkbox" value="show-title" name="show-title"/>
                <label>Show title</label>
                <br/>
                <input type="checkbox" value="show-lines" name="show-lines"/>
                <label>Show horizontal lines</label>
                <br/>
                <input type="checkbox" value="show-table" name="show-table"/>
                <label>Table view</label>
            </fieldset>
            <fieldset>
                <legend style="margin: 0px;">Цвет текста:</legend>
                <input type="radio" value="red" checked name="text-color" />
                <label>Red</label>
                <br/>
                <input type="radio" value="green" name="text-color"/>
                <label>Green</label>
                <br/>
                <input type="radio" value="blue" name="text-color"/>
                <label>Blue</label>
            </fieldset>
            <input type="submit" class="btn btn-primary"  value="Создать" />
            <input type="button" class="btn btn-primary" value="Сбросить"/>
        </form>
        `;
        /** @type { HTMLInputElement[] } */
        const checkboxs = root.querySelectorAll('input[type="checkbox"]');
        /** @type { HTMLFormElement } */
        const form = root.querySelector('form');
        root.querySelector('input[type="submit"]').addEventListener('click', function(event) {
            event.preventDefault();
            const data = new FormData(form, event.target);
            const newWindow = window.open(undefined, 'Новое окно', 'width=500, height=500');

            newWindow.document.body.innerHTML = `
                <div style="margin: 10px 0px">
                    ${data.get('show-title') === null ? '' : '<h1>Новое окно</h1>' }
                    ${data.get('show-lines') === null ? '' : '<hr style="color: red;"/>' }
             
                    <p style="color: ${data.get('text-color')}">Небольшой текст ни о чем</p>
                </div>
            `;
        })
        root.querySelector('input[value="Сбросить"]').onclick = () => {
            checkboxs.forEach(item => item.checked = false);
        }
    }
    setContent({
        root: document.getElementById("task3-content"),
    });
};
document.getElementById('task4-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
        <form style="margin: 10px 0px;" >
            <label>Выберите цвет:</label>
            <select name="color">
                <option value="Оранжевый" selected>Оранжевый</option>
                <option value="Красный">Красный</option>
                <option value="Синий">Синий</option>
                <option value="Фиолетовый">Фиолетовый</option>
            </select>
            <label>Выберите размер:</label>
            <select name="size">
                <option value="Маленький" selected>Маленький</option>
                <option value="Средний">Средний</option>
                <option value="Большой">Большой</option>
            </select>
            <input type="submit" value="Отправить" class="btn btn-primary"/>
        </form>
        `;
        root.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            window.alert(`
                Цвет: ${formData.get('color')}
                Размер: ${formData.get('size')}
            `);
        });
    }
    setContent({
        root: document.getElementById("task4-content"),
    });
};
document.getElementById('task5-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
        <form style="margin: 10px 0px; padding: 10px;" >
            <label>Выберите цвет:</label>
            <select name="color">
                <option value="orange" selected>Оранжевый</option>
                <option value="red">Красный</option>
                <option value="blue">Синий</option>
                <option value="purple">Фиолетовый</option>
            </select>
            <input style="margin: 5px 0px" type="submit" class="btn btn-primary" value="Изменить"/>
        </form>
        `;
        root.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            root.style.backgroundColor = formData.get('color')
        });
    }
    setContent({
        root: document.getElementById("task5-content"),
    });
};
document.getElementById('task6-button').onclick = function() {
    /**
     * @typedef { { root: HTMLElement, images: string[] } } ContentInfo1 
     * @type { (info: ContentInfo1) => void } 
    */
    const setContent = function({root, images}) {
        root.innerHTML = `
        <form style="margin: 10px 0px; padding: 10px;" >
            <label>Выберите цвет:</label>
            <select name="image">
                <option value="0" selected>Кот спит</option>
                <option value="1">Кот лежит</option>
                <option value="2">Кот удивлённо смотрит</option>
            </select>
            <input style="margin: 5px 0px" type="submit" class="btn btn-primary" value="Изменить"/>
        </form>
        <img style="width: 200px; height: 200px; object-fit: cover;" alt="..." />
        `;
        /** @type { HTMLImageElement } */
        const img = root.querySelector('img');
        img.src = images[0];
        root.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            img.src = images[formData.get('image')];
        });
    }
    setContent({
        root: document.getElementById("task6-content"),
        images: [
            `${getCurrentPath()}/assets/image1.jpg`, 
            `${getCurrentPath()}/assets/image2.jpg`,
            `${getCurrentPath()}/assets/image3.jpg`,
        ]
    });
};
document.getElementById('task7-button').onclick = function() {
    /**
     * @typedef { { root: HTMLElement, images: string[] } } ContentInfo2
     * @type { (info: ContentInfo2) => void } 
    */
    const setContent = function({root, images}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;">
            <button data-back style="display: inline-block;" class="btn btn-primary" >Назад</button>
            <button data-next style="display: inline-block;" class="btn btn-primary">Вперед</button>
        </div>
        <img style="width: 200px; height: 200px; object-fit: cover;" alt="..." />
        `;
        /** @type { HTMLImageElement, number } */
        let img = root.querySelector('img'), current = 0;
        img.src = images[current];

        root.querySelector('button[data-back]').onclick = () => {
            img.src = images[current = current <= 0 ? images.length - 1 : current - 1]
        }
        root.querySelector('button[data-next]').onclick = () => {
            img.src = images[current = current >= images.length - 1 ? 0 : current + 1]
        }
    }
    setContent({
        root: document.getElementById("task7-content"),
        images: [
            `${getCurrentPath()}/assets/image1.jpg`, 
            `${getCurrentPath()}/assets/image2.jpg`,
            `${getCurrentPath()}/assets/image3.jpg`,
        ]
    });
};
document.getElementById('task8-button').onclick = function() {
    /**
     * @typedef { { root: HTMLElement, images: string[] } } ContentInfo2
     * @type { (info: ContentInfo2) => void } 
    */
    const setContent = function({root, images}) {
        root.innerHTML = `
            <form style="margin: 10px 0px;">
                <label>Фамилия: </label>
                <input type="text" name="surname" placeholder="Введите фамилию"/>
                <label>Имя: </label>
                <input type="text" name="name" placeholder="Введите имя"/>
                <label>Телефон: </label>
                <input type="text" name="phone" placeholder="Номер телефона"/>
                <label>Возраст: </label>
                <input type="number" name="age" value="18"/>
                <input style="margin: 5px 0px;" type="submit" value="Отправить"/>
                <input style="margin: 5px 0px;" type="button" value="Сбросить"/>
            </form>
        `;
        root.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const age = root.querySelector('input[type="number"]').value = formData.get('age') < 18
                ? 0 : formData.get('age');
            if(formData.get('surname').length <= 0 || formData.get('phone').length <= 0 
                || formData.get('name').length <= 0) {
                    window.alert('Введите данные пользователя');
                    return;
                }
            
            window.alert(`
                Фамилия: ${formData.get('surname')}
                Имя: ${formData.get('name')}
                Телефон: ${formData.get('phone')}
                Возраст: ${age}
            `);
        }); 
        root.querySelector('input[type="button"]').onclick = () => {
            root.querySelectorAll('input[type="text"]').forEach(item => {
                item.value = '';
            })
            root.querySelector('input[type="number"]').value = 0;
        }
    }
    setContent({
        root: document.getElementById("task8-content")
    });
};
document.getElementById('task9-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root, images}) {
        root.innerHTML = `
            <form style="margin: 10px 0px;">
                <label>Username: </label>
                <input type="text" name="name" placeholder="Введите имя"/>
                <label>User Email: </label>
                <input type="text" name="email" placeholder="Введите email"/>

                <input style="margin: 5px 0px;" type="submit" value="Отправить"/>
            </form>
        `;
        root.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            if(formData.get('name').length <= 0 || formData.get('email').length <= 0) {
                window.alert('Введите данные пользователя');
                return;
            }
            const emailCheck = /^\w+@\w+.\w+$/.test(formData.get('email'));
            if(!emailCheck) {
                window.alert('Неверно введен Email');
                return;
            }
            window.alert(`
                Имя: ${formData.get('name')}
                Email: ${formData.get('email')}
            `);
        }); 
    }
    setContent({
        root: document.getElementById("task9-content")
    });
};
document.getElementById('task11-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root, images}) {
        root.innerHTML = `
            <form style="margin: 10px 0px;">
                <label>Username: </label>
                <input type="text" name="name" placeholder="Введите имя"/>
                <label>User Email: </label>
                <input type="text" name="email" placeholder="Введите email"/>
                <br/>
                <p>Отправлять извещения:</p>
                <input type="radio" name="notify" checked value="Каждый день"/>
                <label>Каждый день</label><br/>
                <input type="radio" name="notify" value="Раз в неделю"/>
                <label>Раз в неделю</label><br/>
                <input type="radio" name="notify" value="Раз в месяц"/>
                <label>Раз в месяц</label><br/><br/>

                <p>Оповещать о чем:</p>
                <input type="checkbox" name="who" value="Hard"/>
                <label>Hard</label><br/>
                <input type="checkbox" name="who" value="Soft"/>
                <label>Soft</label><br/>

                <input style="margin: 5px 0px;" type="submit" class="btn btn-primary" value="Отправить"/>
            </form>
        `;
        root.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            if(formData.get('name').length <= 0 || formData.get('email').length <= 0) {
                window.alert('Введите данные пользователя');
                return;
            }
            const emailCheck = /^\w+@\w+.\w+$/.test(formData.get('email'));
            if(!emailCheck) {
                window.alert('Неверно введен Email');
                return;
            }
            const newWindow = window.open(undefined, 'Новое окно', 'width=500, height=500');
            console.log(formData.getAll('who'))
            newWindow.document.body.innerHTML = `
                <div style="margin: 10px 0px;">
                    <p>Имя пользователя: ${formData.get('name')}</p>
                    <p>Email пользователя: ${formData.get('email')}</p>
                    <p>Извещения: ${formData.get('notify')}</p>
                    ${formData.getAll('who').map(item => item).join(', ')}
                </div>
                <button>Закрыть окно</button>
            `
            newWindow.document.body.querySelector('button').onclick = () => {
                newWindow.close();
            }
        }); 
    }
    setContent({
        root: document.getElementById("task11-content")
    })
}