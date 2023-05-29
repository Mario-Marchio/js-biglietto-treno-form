console.log(`JS OK`);

// recupero placeholder dal dom 
const button = document.getElementById(`button`);
const nameInput = document.getElementById(`name`);
const ageInput = document.getElementById(`age`);
const kmInput = document.getElementById(`km`);
const pName = document.getElementById(`p-name`);
const pAge = document.getElementById(`p-age`);
const pKm = document.getElementById(`p-km`);
const pRealPrice = document.getElementById(`p-final-price`);

button.addEventListener(`click`, function () {

    // calcolo prezzo del biglietto senza sconti 

    const price = 0.21 * kmInput.value;
    console.log(price);

    // calcolare gli sconti
    // applicare lo sconto

    let discount
    let realPrice
    if(ageInput.value<=18){
        discount = price * 20 /100;
        console.log(discount);

        realPrice = price - discount;
        realPrice = realPrice.toFixed(2)
        console.log(realPrice);

    }else if (ageInput.value>65){
        discount = price * 40 /100;
        console.log(discount);

        realPrice = price - discount;
        realPrice = realPrice.toFixed(2)
        console.log(realPrice);

    }else{
        realPrice = price.toFixed(2);
        console.log(realPrice);
    }
    
    pName.innerText = nameInput;
    pAge.innerText = ageInput;
    pKm.innerText = kmInput;
    pRealPrice.innerText = realPrice;

});


// mostrala a schermo
// placeholder.innerText = realPrice;