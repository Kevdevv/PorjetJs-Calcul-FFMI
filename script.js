let tall = document.getElementById('tall')
let weight = document.getElementById('weight')
let bodyfat = document.getElementById('body-fat')


function leanWeight() {
     return parseInt(tall.value) * (1 - (parseInt(bodyfat.value)/100))
}

let lean = leanWeight()
