function showAlert(){
    window.alert("Какое-то действие");
    console.log("Вызов alert");
}

const btn = document.getElementById("confirm");
btn.addEventListener("click", () =>{
    const result = confirm("Ты уверен.");
    if (result == true)
        console.log("Confirm: True")
    else console.log("Confirm: False");
})

function showPrompt(){
    const name = window.prompt("Введите имя:");
    console.log(name);
}

function showFind(){
    const result = find("привет");
    console.log(result);
}

function showPrint(){
    window.print();
}

const btnName = document.getElementById("welcome");
btnName.addEventListener("click", () => {
    while(true){
        const Name = prompt("Введите своё имя");
        const textContainer = document.getElementById("welcome-text");
        
        const userName = document.createElement('p');
        
        userName.innerHTML = `Привет, <i><strong>${Name}<strong><i>`;
        
        textContainer.append(userName)
    
        console.log(Name)
        
        if (!window.confirm("Ты уверен, что хочешь продолжить это?..")){
            break;
        }
    }
    
})
