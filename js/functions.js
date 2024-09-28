const input = document.querySelector('input')
const list = document.querySelector('table')
const add = document.querySelector('#add')
const min = document.querySelector('#min')
const max = document.querySelector('#max')
const avg = document.querySelector('#avg')
const sort = document.querySelector('#sort')
const numbers = []

const addRow = () => {
    const newNumber = Number(input.value)
    numbers.push(newNumber)
    addTableRow(newNumber)
    input.value = ''
}

const addTableRow = (number) => {
    const row = list.insertRow()
    const col1 = row.insertCell(0)
    col1.innerHTML = number
}

const deleteRow = (number) => {
    const index = number.indexOf(number)
    numbers.splice(index, 1)
    list.deleteRow(index)
}

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addRow()
    }
})

add.addEventListener('click', () => {
    addRow()
})

const showMin = () => {
    let min = Math.min(...numbers)
    alert("Min number is " + min)    
}

min.addEventListener('click', () => {
    showMin()
})

const showMax = () => {
    let max = Math.max(...numbers)
    alert(max)    
}

max.addEventListener('click', () => {
    showMax()
})

const showAvg = () => {
    let sum = 0
    numbers.forEach(number =>
        sum += number
    )
    let avg = sum / numbers.length
    alert(avg.toFixed(1))
}

avg.addEventListener('click', () => {
    showAvg()
})

const sortNumbers = () => {
    numbers.sort((a, b) => a - b)
}

sort.addEventListener('click', () => {
    sortNumbers()
    list.innerHTML = ''
    numbers.forEach(number => {
        addTableRow(number)
    })
})