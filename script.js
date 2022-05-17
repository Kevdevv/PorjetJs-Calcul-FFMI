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
     
     let button = document.getElementById('btn-calcul')
     
     function evenement() {
          calculMass()
     }
     
     button.addEventListener('click', evenement)
     document.getElementById('result-total').innerText = result + ' de FFMI'
}





