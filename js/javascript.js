// inserire in un input nome e il numero di km da percorrere

const passengerName = document.getElementById("passenger-name")

const km = document.getElementById("km")
console.log(passengerName, km)

// selezionare da una select il tipo di sconto da applicare 
// (3 scelte: sconto minorenne, sconto over 65, nessuno sconto)

let underage = document.querySelector("#offer option[value="underage"]").value

// Al click sul pulsante calcolare il prezzo del biglietto:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.