const btnName = document.getElementById('calculate')
btnName.addEventListener('click', () => {
    let dolg = window.prompt('Введите ссуду')
    let percents = window.prompt("Введите проценты")

    let result = parseFloat(dolg) + ( parseFloat(dolg) / parseFloat(percents) ) 

    window.alert(`К оплате ${result}`)
})

const increments = document.getElementById('increments')
increments.addEventListener('click', () => {
    var number = 3;
    
    window.alert(`Число после выполнения приращения равняется ${++number}`)
    window.alert(`Число после выполнения приращения равняется ${number--}`)
    window.alert(`Число после выполнения приращения равняется` + -number)
})

const calculate = document.getElementById('compare')
calculate.addEventListener('click', () => {
    let value1 = parseInt(window.prompt('Первое значение'))
    let value2 = parseInt(window.prompt('Второе значение'))
    
    let result = value1 > value2 ? value1 : value2

    window.alert(result)
})

const check = document.getElementById('userCheck')
check.addEventListener('click', () => {
    let name = window.prompt('Введите имя')
    let surname = window.prompt('Введите фамилию')
    let age = parseInt(window.prompt("Введите возраст"))

    if (name != 'Никита' || surname != 'Фантокин' || age != 20)
        window.alert("ЭТО НЕ ТЫ")
    else window.alert("ЭТО ТЫ)")
})

const del = document.getElementById('delitel')
del.addEventListener('click', () => {
    let value1 = window.prompt('Первое значение')
    let value2 = window.prompt("Второе значение")

    if (value2 == null || value2 == 0) alert("ААААААААААААААААААААА")
    else alert(`Результат ${value1 / value2}`)
})

const milk = document.getElementById('milk')
milk.addEventListener('click', () => {
    let dict = {
        "2.5%": 'Молоко25',
        "3.2%": 'Молоко32',
        "3.5%": "Молоко35" 
    }
    
    let percents = window.prompt("Процент жирности")
    if (percents != "2.5%" && percents != "3.2%" && percents != "3.5%")
        alert("ААААААААААААААААААААА")
    else window.alert(dict[percents])
})

const userData = document.getElementById('userData')
userData.addEventListener('click',() => {
    let user = 'kovshik'
    let password = '12345678'

    if (window.prompt("Логин") != 'kovshik' || window.prompt('Пароль'))
        window.alert("Вы в системе")
    else window.alert("Вы не в системе")
})

const numberMax = document.getElementById('numberMax')
numberMax.addEventListener('click',() => {
    let num_arr = prompt('Введите числа').split(' ')
    let result = num_arr.map(value => parseInt(value))

    alert(Math.max.apply(null,result))
})

const numCase = document.getElementById('numCase')
numCase.addEventListener('click',() =>{
    let num_arr = prompt('Введите числа').split(' ')
    let nums = num_arr.map(value => parseInt(value))
    
    if (nums.length > 2 && nums.length < 1){
        return window.alert("ААААААААА");
    }

    let fun = prompt('Введите функцию');
    console.log(fun)
    switch (fun){
        case 'умножение':
            window.alert(nums[0] * nums[1])
            break;
        case "деление":
            window.alert(nums[0] / nums[1])
            break;
    }
})

const fiveNum = document.getElementById('fiveNum')
fiveNum.addEventListener('click',() =>{
    let num = window.prompt(`Введите число!`)
    let arr_num = new Array();
    for (let i = 1; i < 6;i++){
        arr_num.push(num*i)
    }
    
    window.alert(arr_num.map(value => value))
})

const fact = document.getElementById('fact')
fact.addEventListener('click', () => {    
    const factorial = (value) => {
        let result = 1;
        for (let i = 1; i < value;i++){
            result*=i;
        }
        return result;
    }

    window.alert(factorial(window.prompt("Введите число")));
})

const checkName = document.getElementById('checkName')
checkName.addEventListener('click', () => {
    let name
    do {
        name = window.prompt("Введите имя")
    }
    while (name != null && name != 'Никита')
    
    let textName = document.createElement('p')
    textName.innerHTML = (`<strong>${name}</strong>`)

    let text = document.getElementById('bold')
    text.append(textName)
})

const printNum = document.getElementById('printNum')
printNum.addEventListener('click', () => {
    var num = ''
    for (let i = 0; i < 11; i++){
        for (let j = 0; j <= i; j++){
            num+=j
        }
        num+='\n'
    }
    window.alert(num)
})