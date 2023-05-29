console.log(`JS OK`);

// recupero placeholder dal dom 
const placeholder = document.getElementById(`costoFinale`);
console.log(costoFinale);

// chiedi al utente l'eta
const age = prompt(`inserisci la tua età`,`15`);
console.log(age);

// chiedi al utente il numero di km che vuole percorrere
const km = prompt(`inserisci il numero di km che vuoi percorrere`,`100`);
console.log(km);

// calcolo prezzo del biglietto senza sconti
const price = 0.21 * km;
console.log(price);

// calcolare gli sconti 
let discount
if(age<=18){
    discount = price * 20 /100;
    console.log(discount);
}else if (age>65){
    discount = price * 40 /100;
    console.log(discount);
}

// applicare lo sconto
let realPrice
if(age<=18){
    realPrice = price - discount;
    realPrice = realPrice.toFixed(2)
    console.log(realPrice);
}else if (age>65){
    realPrice = price - discount;
    realPrice = realPrice.toFixed(2)
    console.log(realPrice);
}else{
    realPrice = price.toFixed(2);
    console.log(realPrice);
}

// mostrala a schermo
placeholder.innerText = realPrice;