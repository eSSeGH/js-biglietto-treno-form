// inserire in un input nome e il numero di km da percorrere

const passengerName = document.getElementById("passenger-name")

const km = document.getElementById("km")

// selezionare da una select il tipo di sconto da applicare 
// (3 scelte: sconto minorenne, sconto over 65, nessuno sconto)

const age = document.getElementById("age")


// Al click sul pulsante calcolare il prezzo del biglietto:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

let price = 0

const calcBtn = document.getElementById("calc-btn")

calcBtn.addEventListener("click", function () {

    let kmValue = document.getElementById("km").value
    console.log(km)

    let ageValue = document.getElementById("age").value
    console.log(ageValue)

    switch (ageValue) {

        case "underage":
            price = (kmValue * 0.21 * 0.8)
            break
        
        case "adult":
            price = (kmValue * 0.21)
            break

        case "over65":
            price = (kmValue * 0.21 * 0.6) 
    }
})

console.log(price)
