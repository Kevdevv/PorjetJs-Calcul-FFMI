function calculMass() {
     let tall = document.getElementById('tall')
     let weight = document.getElementById('weight')
     let bodyfat = document.getElementById('body-fat')

     function leanWeight() {
          return parseInt(weight.value) * (1 - (parseInt(bodyfat.value) / 100))
     }

     let lean = leanWeight()

     function ffmi() {
          return lean / (parseInt(tall.value * tall.value))
     }

     let result = ffmi()


     document.getElementById('result-total').innerHTML = result + ' de FFMI'
}

let btn = document.getElementById('btn-calcul');
btn.addEventListener('click', function () {
     calculMass()
})
