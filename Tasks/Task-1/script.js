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

const btnParse = document.getElementById("parse");
btnParse.addEventListener("click", () => {
    let num_float = document.getElementById("valueFloat")
    let num_int = document.getElementById("valueInt")

    let float_value = parseFloat(num_float.value)
    let int_value = parseInt(num_int.value)

    alert(`parse ${float_value}\nparse ${int_value}`)
    alert(`sum: ${float_value+int_value}`)


    const market = document.getElementById('market');
    let market_content = document.createElement('p');
    market_content.innerHTML = `Вам нужна \u0022кредитная карта\u0022, чтобы совершать покупки через \'Интернет\'`

    market.append(market_content)

})
