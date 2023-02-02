
console.log("ciao")

const PREZZO_AL_KM = 0.21

// al click sul pulsante calcola, calcolare il prezzo del niglietto

let prezzoFinaleElement = document.getElementById("prezzo-finale")
let carrozzaElement = document.getElementById("carrozza")
let cpElement = document.getElementById("cp")
let offertaElement = document.getElementById("offerta")


const calcBtn = document.getElementById("calc-btn")
console.log(calcBtn)

calcBtn.addEventListener("click", function () {

    let km = document.getElementById("km").value
    

    let sconto = 0 
    let prezzoBase = km * PREZZO_AL_KM

    prezzoBase = parseFloat(prezzoBase)

    let age = document.getElementById("age").value

    switch (age) {

        case "underage":
            sconto = (prezzoBase*20/100)
            break
        
        case "adult":
            sconto = 0
            break

        case "over65":
            sconto = (prezzoBase*40/100)
    }

    // dichiaro la var prezzoFinale
    let prezzoFinale = prezzoBase - sconto
    prezzoFinale = prezzoFinale.toFixed(2)

    // la stampo nel biglietto
    prezzoFinaleElement.innerHTML = (prezzoFinale + "€")

    // stampo nel biglietto l'offerta
    offertaElement.innerHTML = age

    // genero un numero random per la carrozza 1-10
    const carrozza = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    console.log(carrozza)

    //   lo stmapo
    carrozzaElement.innerHTML = carrozza

    // genero un numero random per la carrozza 1-10
    const cp = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000)
    console.log(cp)

    //   lo stmapo
    cpElement.innerHTML = cp

    // recupero nome passeggero e lo stampo
    const name = document.getElementById("passenger-name").value
    
    const NameElement = document.getElementById("passenger-name-value")

    NameElement.innerHTML = name
})


