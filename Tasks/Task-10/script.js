/** @type { () => string } */
function getCurrentPath() {
    const pathArray = window.location.href.split('/');
    return pathArray.slice(0, pathArray.length - 1).join('/');
}
document.getElementById('task1-button').onclick = function() {
    /**
     * @typedef { { root: HTMLElement, images: string[] } } ContentInfo1 
     * @type { (info: ContentInfo1) => void } 
    */
    const setContent = function({root, images}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;">
            <img id="task1-image" style="width: 200px; height: 200px;" alt="..." />
        </div>
        `;
        let currentIndex = 0;
        console.log(images);
        /** @type { HTMLImageElement } */
        const image = root.querySelector("#task1-image");
        image.style.objectFit = 'cover';
        image.src = images[currentIndex];
        image.addEventListener('mouseenter', (event) => {
            currentIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
            image.src = images[currentIndex];
        });
    }
    setContent({
        root: document.getElementById("task1-content"),
        images: [
            `${getCurrentPath()}/assets/image1.jpg`, 
            `${getCurrentPath()}/assets/image2.jpg`,
            `${getCurrentPath()}/assets/image3.jpg`,
        ]
    });
};
document.getElementById('task2-button').onclick = function() {
    /**
     * @typedef { { root: HTMLElement, images: string[] } } ContentInfo1 
     * @type { (info: ContentInfo1) => void } 
    */
    const setContent = function({root, images}) {
        root.innerHTML = `
        <div style="margin: 10px 0px; display: block;">
            <div style="display: inline-block;">
                <img id="task2-image1" style="width: 200px; height: 200px;" alt="..." />
                <img id="task2-image2" style="width: 200px; height: 200px;" alt="..." />
            </div>
            <div style="">
                <button id="task2-backbtn">&lt;</button>
                <button id="task2-nextbtn">&gt;</button>
            </div>
        </div>
        `;
        let currentIndex = 0;
        console.log(images);
        /** @type { HTMLImageElement } */
        const image1 = root.querySelector("#task2-image1");
        /** @type { HTMLImageElement } */
        const image2 = root.querySelector("#task2-image2");
        image2.style.objectFit = image1.style.objectFit = 'cover';
        image2.style.visibility = 'collapse';
        image2.src = image1.src = images[currentIndex];
        root.querySelector('#task2-backbtn').onclick = () => {
            currentIndex = currentIndex <= 0 ? images.length - 1 : currentIndex - 1;
            image2.src = image1.src = images[currentIndex];
        };
        root.querySelector('#task2-nextbtn').onclick = () => {
            currentIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
            image2.src = image1.src = images[currentIndex];
        };
        image1.addEventListener('click', () => image2.style.visibility = 'visible');
    }
    setContent({
        root: document.getElementById("task2-content"),
        images: [
            `${getCurrentPath()}/assets/image1.jpg`, 
            `${getCurrentPath()}/assets/image2.jpg`,
            `${getCurrentPath()}/assets/image3.jpg`,
        ]
    });
};
document.getElementById('task3-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;">
            <p><a href="javascript:void(0)">Link 1</a></p>
            <p><a href="javascript:void(0)">Link 2</a></p>
            <p><a href="javascript:void(0)">Link 3</a></p>
            <span id="task3-label">Пусто</p>
        </div>
        `;
        /** @type { HTMLElement } */
        const label = root.querySelector('#task3-label');
        const links = root.querySelectorAll('p > a');

        root.querySelectorAll('p').forEach(item => item.style.margin = '0px')
        links.forEach(item => item.addEventListener('click', function(event) {
            label.innerText = (event.target.innerText)
        }));

    }
    setContent({
        root: document.getElementById("task3-content"),
    });
};
document.getElementById('task4-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;">
            <p><a href="javascript:void(0)">image1.jpg</a></p>
            <p><a href="javascript:void(0)">image2.jpg</a></p>
            <p><a href="javascript:void(0)">image3.jpg</a></p>
            <img id="task4-image" alt="Изображение"  />
        </div>
        `;
        /** @type { HTMLImageElement } */
        const image = root.querySelector('#task4-image');
        const links = root.querySelectorAll('p > a');
        image.style.height = '200px';
        image.style.width = '200px';
        image.style.objectFit = 'cover';

        root.querySelectorAll('p').forEach(item => item.style.margin = '0px')
        links.forEach(item => item.addEventListener('click', function(event) {
            image.src = `${getCurrentPath()}/assets/${event.target.innerText}`;
        }));
    }
    setContent({
        root: document.getElementById("task4-content"),
    });
};
document.getElementById('task5-button').onclick = function() {
    /** @type { (info: { root: HTMLElement, images: string[] }) => void } */
    const setContent = function({root, images}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;">
            <div style="margin: 5px 0px">
                <p>Кол-во итераций:</p>
                <input type="number" id="task5-iteration" value="5" />
            </div>
            <div style="margin: 5px 0px">
                <button id="task5-btn">Запуск</button>
            </div>
            <img id="task5-image" style="height: 200px; width: 200px; object-fit: cover;" alt="Изображение"/>
        </div>
        `;
        /** @type { number | null, number } */
        let intervalTime = null, current = 0;
        /** @type { HTMLInputElement } */
        const iteration = root.querySelector('#task5-iteration');
        /** @type { HTMLImageElement } */
        const image = root.querySelector('#task5-image');

        root.querySelector('#task5-btn').addEventListener('click', () => {
            if(intervalTime !== null) return;
            let index = 0;
            intervalTime = window.setInterval(() => {
                image.src = images[current++];
                if(current >= images.length) current = 0;
                if(++index >= iteration.value) {
                    clearInterval(intervalTime);
                    intervalTime = null;
                }
            }, 500);
        });
    }
    setContent({
        root: document.getElementById("task5-content"),
        images: [
            `${getCurrentPath()}/assets/image1.jpg`, 
            `${getCurrentPath()}/assets/image2.jpg`,
            `${getCurrentPath()}/assets/image3.jpg`,
        ]
    });
};
document.getElementById('task6-button').onclick = function() {
    /** @type { (info: { root: HTMLElement, images: string[] }) => void } */
    const setContent = function({root, images}) {
        root.innerHTML = `
        <div style="margin: 10px 0px;">
            <div style="margin: 5px 0px; display: inline-block;">
                <button id="task6-startbtn">Запуск</button>
            </div>
            <div style="margin: 5px 0px; display: inline-block;">
                <button id="task6-stopbtn">Стоп</button>
            </div>
            <img id="task6-image" alt="Изображение" src="${images[0]}"
                style="height: 200px; width: 200px; object-fit: cover; display: block;" />
        </div>
        `;
        /** @type { HTMLImageElement } */
        const image = root.querySelector('#task6-image');
        /** @type { number | null, number } */
        let intervalTime = null, current = 0;;
        root.querySelector('#task6-startbtn').addEventListener('click', () => {
            if(intervalTime !== null) return;
            intervalTime = window.setInterval(() => {
                image.src = images[current++];
                if(current >= images.length) current = 0;
            }, 500);
        });
        root.querySelector('#task6-stopbtn').addEventListener('click', () => {
            if(intervalTime === null) return;
            clearInterval(intervalTime);
            intervalTime = null;
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
     * @typedef { { name: string, content: HTMLElement } } MenuItem
     * @type { (info: { root: HTMLElement, menu: MenuItem[] }) => void } 
     * */
    const setContent = function({root, menu}) {
        root.innerHTML = `
            <div id="task7-menu" style="display:inline-block; margin: 10px 0px;">
                ${menu.map(item => `
                    <span style="text-decoration:underline; cursor:pointer;">${item.name}</span>
                `).join('\n')}
            </div>
        `;
        let currentMenuItem = menu[0].content;
        root.appendChild(currentMenuItem);
        root.querySelectorAll('#task7-menu > span').forEach(item => {

            item.addEventListener('click', function(event) {
                const item = menu.find(item => item.name == event.target.innerText);
                if(item === undefined) throw 'Элемент меню не найден';

                root.replaceChild(item.content, currentMenuItem);
                currentMenuItem = item.content;
            });
        });
    }
    /** @type { (html: string) => HTMLElement } */
    const createMenuContent = (html) => {
        const content = document.createElement('div');
        content.innerHTML = html;
        return content;
    }
    setContent({
        root: document.getElementById("task7-content"),
        menu: [
            { 
                name: 'Новости', 
                content: createMenuContent(`
                    <p>Популярные новости за сегодня</p>
                `) 
            },
            { 
                name: 'Список', 
                content: createMenuContent(`
                    <p>Список ваших дел на сегодня</p>
                `) 
            },
            { 
                name: 'Настройки', 
                content: createMenuContent(`
                    <p>Настройки системы</p>
                `) 
            },
        ]
    });
};
document.getElementById('task8-button').onclick = function() {
    /** @type { (info: { root: HTMLElement }) => void } */
    const setContent = function({root, menu}) {
        root.innerHTML = `
            <div style="overflow-x: auto; margin: 10px 0px; display:flex; justify-content: center;">
                <canvas id="task8-canvas" width="auto" height="150" style="border:1px solid #000;">
                </canvas>
            <div>
        `;
        /** @type {HTMLCanvasElement} */
        const canvas = root.querySelector('#task8-canvas');
        const { width, height } = canvas;
        let angle = 0, posX = 0;
        const context = canvas.getContext('2d');
        setInterval(() => {
            context.beginPath();
            context.rect(posX + Math.cos(angle),posX /2, 30, 40);
            context.strokeStyle = '#000';
            context.stroke();
            context.closePath();

            context.beginPath();
            context.rect(posX - Math.cos(angle),height - posX / 2, 30, 40);
            context.strokeStyle = 'blue';
            context.stroke();
            context.closePath();

            context.beginPath();
            context.arc(posX, (posX / 2), 60, 0, Math.PI * 2);
            context.strokeStyle = 'blue';
            context.stroke();

            context.beginPath();
            context.arc(posX, height - posX / 2, 60, 0, Math.PI * 2);
            context.strokeStyle = 'black';
            context.stroke();

            angle = angle >= 360 ? 0 : angle + 10;
            if((posX += 4) >= width) {
                posX = 0;
                context.clearRect(0, 0, width, height);
            }
        }, 100)
    }
    setContent({
        root: document.getElementById("task8-content"),
    });
};