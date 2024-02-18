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