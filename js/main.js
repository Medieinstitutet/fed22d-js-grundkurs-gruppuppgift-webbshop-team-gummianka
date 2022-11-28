

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------- Donut cards -------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/**
 * Få våra donut kort att komma upp genom att ligger i en array och körs genom en loop
 */
const donutCardsContainer = document.querySelector('#donutCards') //Kallar på section för våra donut kort för att kunna lägga in våra kort
const basketDonuts = document.querySelector('#basketDonuts') // kallar på html strukturen till donutsen som ska ligga i vår varukorg
const totalPriceBasket = document.querySelector('#totalAmountBasket');// Kallar på diven där html sturkturen för totalsumman ska ligga

const donutCards = [ // En array med varje donut kort som objekt
{
    donutTitle: 'Apelsinmunk',
    donutImg1: './images/apelsinmunk.jpg',
    donutImg2: './images/apelsinmunk2.jpg',
    donutAlt: 'Apelsinmunk',
    donutPrice: 15,
    amount: 0,
    category: 'frukt',
    rating: 4,
}, {
    donutTitle: 'Banana suprice',
    donutImg1: './images/banansuprice.jpg',
    donutImg2: './images/banansuprice2.jpg',
    donutAlt: 'munk med banansmak',
    donutPrice: 20,
    amount: 0,
    category: 'frukt',
    rating: 5,
},{
    donutTitle: 'Blåbär',
    donutImg1: './images/blueberry.jpg',
    donutImg2: './images/blueberry2.jpg',
    donutAlt: 'munk med blåbärssmak',
    donutPrice: 15,
    amount: 0,
    category: 'bär',
    rating: 3,
},{
    donutTitle: 'Karamellchoklad',
    donutImg1: './images/caramellchoklad.jpg',
    donutImg2: './images/caramellchoklad2.jpg',
    donutAlt: 'munk med karamellchoklad smak',
    donutPrice: 18,
    amount: 0,
    category: 'godis',
    rating: 4,
},{
    donutTitle: 'Chunky monkey',
    donutImg1: './images/chunkymonkey.jpg',
    donutImg2: './images/chunkymonkey2.jpg',
    donutAlt: 'munk med Chunky munky smak',
    donutPrice: 25,
    amount: 0,
    category: 'godis',
    rating: 5,
},{
    donutTitle: 'Citronfromage',
    donutImg1: './images/citronfromage.jpg',
    donutImg2: './images/citronfromage2.jpg',
    donutAlt: 'munk med citron smak',
    donutPrice: 18,
    amount: 0,
    category: 'frukt',
    rating: 3,
},{
    donutTitle: 'Hallon-choklad',
    donutImg1: './images/hallonchoklad.jpg',
    donutImg2: './images/hallonchoklad2.jpg',
    donutAlt: 'munk med citron hallon och choklad smak',
    donutPrice: 20,
    amount: 0,
    category: 'bär',
    rating: 4,
},{
    donutTitle: 'Jordgubbsdröm',
    donutImg1: './images/strawberrydream.jpg',
    donutImg2: './images/strawberrydream2.jpg',
    donutAlt: 'munk med jordgubbs smak',
    donutPrice: 15,
    amount: 0,
    category: 'bär',
    rating: 5,
},{
    donutTitle: 'Lakrits',
    donutImg1: './images/lakrits.jpg',
    donutImg2: './images/lakrits2.jpg',
    donutAlt: 'munk med laktris smak',
    donutPrice: 15,
    amount: 0, 
    category: 'godis',
    rating: 2,
},{
    donutTitle: 'Mandelknäck',
    donutImg1: './images/caramell.jpg',
    donutImg2: './images/caramell2.jpg',
    donutAlt: 'munk med mandel och knäck smak',
    donutPrice: 15,
    amount: 0,
    category: 'godis',
    rating: 4,
}];

/*--------------------------------------------------------------------------------------------------------
-----------------------------------skapat kategorier-------------------------------------------------------------
---------------------------------------------------------------------------------------------------------*/

const frukt = donutCards.filter(donutCard => donutCard.category === 'frukt');
//console.table(frukt);

const bär = donutCards.filter(donutCard => donutCard.category === 'bär');
//console.table(bär);

const godis = donutCards.filter(donutCard => donutCard.category === 'godis');
//console.table(godis);

/*--------------------------------------------------------------------------------------------------------
-----------------------------------skapat rating-------------------------------------------------------------
---------------------------------------------------------------------------------------------------------*/
const one = donutCards.filter(donutCard => donutCard.rating === 1);
//console.table(1);

const two = donutCards.filter(donutCard => donutCard.rating === 2);
//console.table(2);

const three = donutCards.filter(donutCard => donutCard.rating === 3);
//console.table(3);

const four = donutCards.filter(donutCard => donutCard.rating === 4);
//console.table(4);

const five = donutCards.filter(donutCard => donutCard.rating === 5);
//console.table(5);


/*----------------------------------------------------------------------------------------------------------
----------------------------------filtrering på pris--------------------------------------------------------
------------------------------------------------------------------------------------------------------------*/

/*donutCards.sort((donutCard1, donutCard2) => donutCard2.donutPrice - donutCard1.donutPrice);  /* Filtrerar från högsta till lägsta pris
console.table(donutCards);

donutCards.sort((donutCard1, donutCard2) => donutCard1.donutPrice - donutCard2.donutPrice);  /* Filtrerar från lägsta till högsta pris 
console.table(donutCards); */

const productsListing = document.querySelector('#productsListing');
const categoryFilterRadios = document.querySelectorAll('[name="categoryFilter"]');
const priceRangeSlider = document.querySelector('#priceRange');
const currentRangeValue = document.querySelector('#currentRangeValue');  

let filteredProducts = [...donutCards];
let filteredProductsInPriceRange = [...donutCards];

function renderProducts() {
    productsListing.innerHTML = '';
  
    filteredProductsInPriceRange.forEach((donutCard) => {
        productsListing.innerHTML += `
            <div class="product">
                ${donutCard.name}<br>
                Price: ${donutCard.price} kr<br>
                Categories: ${donutCard.category.join(', ')}
            </div>
        `;
    });
}

function changePriceRange() {                       // funktion för aktuellt pris 
    const currentPrice = priceRangeSlider.value;
    currentRangeValue.innerHTML = currentPrice;

    filteredProductsInPriceRange = filteredProducts.filter(donutCard => donutCard.price <= currentPrice);
    renderProducts();
}


function updateCategoryFilter(e) {
   
    const selectedCategory = e.currentTarget.value;   //Hämta radiobutton-värde
    console.log(selectedCategory);
  
    if (selectedCategory === 'all') {
      filteredProducts = [...donutCards]; 
    } else {
      
      filteredProducts = [];           //Töm tidigare filtrering
  
      for (let i = 0; i < donutCards.length; i++) {   //Loopa igenom alla donuts
        const prod = donutCards[i];
      }
    }
}

changePriceRange();

priceRangeSlider.addEventListener('input', updateCategoryFilter);

renderProducts();
/*--------------------------------------------------------------------------------------------------------
-----------------------------------sortering på namn från A-Ö-------------------------------------------------------------
---------------------------------------------------------------------------------------------------------*/

const sorted = donutCards.sort((a, b) => {      
    if (a.donutTitle < b.donutTitle) {
      return -1;
    }
    if (a.donutTitle > b.donutTitle) {      
      return 1;
    }
    return 0;
  });
/*--------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------*/


for(let i = 0; i < donutCards.length; i++){ // Varje gång loopen körs kommer vår artikel läggas in i vår html struktur i vår section och alla 10 korten kommer upp i webben
donutCardsContainer.innerHTML += 
`<article class="donutCard">
    <div class="donutCardHeaderContainer">
        <h3>${donutCards[i].donutTitle}</h3 id="donutCardHeader">
        </div>
        <div class="rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
    <section class="donutCardContainer">
        <div class="donutCardImgContainer">
            <div class="controlsImgSlideshow" id="controlsImgSlideshow">
                <div class="images">
                    <img src="${donutCards[i].donutImg1}" alt="" class="donutCardImg1" id="donutcardImg1">
                    <img src="${donutCards[i].donutImg2}" alt="" class="donutCardImg2" id="donutCardImg2">                                 
                </div>
                <div class="controls">
                    <button class="left" id="prevImage">
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button class="right" id="nextImage">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
            <p id="donutCardPrice">${donutCards[i].donutPrice} kr/st</p>
        </div>
        <div class='donutCardRating'></div>
        <br>
        <div class="donutCardButtonContainer">
            <button data-operator="minus" data-id="${i}">-</button>
            <input type="number" value="0">
            <button data-operator="plus" data-id="${i}">+</button>
        </div>
    </section>
</article>`
};// data id i är för att knapparna ska få index som id 0123456789 så vi vet vilken av knapparna i arrayen vi klickat på

/*
*Få våra + och - knappar att fungera
*/
const addBtns = document.querySelectorAll('button[data-operator="plus"]');
const subtractBtns = document.querySelectorAll('button[data-operator="minus"]');

for (let i = 0; i < addBtns.length; i++){
    addBtns[i].addEventListener('click', addNumber)
    subtractBtns[i].addEventListener('click', removeNumber)
}

 /* När vi klickar på + ökar vi antal med 1*/
function addNumber (e) {

    const clickedDonut = e.currentTarget.dataset.id; // Gör så jag får ut indexet av knappen som jag klickar på
    donutCards[clickedDonut].amount += 1; // [] de skrivet vi in för att komma åt de vi klickade på, alltså vilket objekt vi klickat på. Och de andra länkar till vår lista och amount, de gör att när vi klickar ökar amount med 1 varje gång på rätt donut
    
    const amountEl = e.currentTarget.parentElement.querySelector('input')
    amountEl.value = donutCards[clickedDonut].amount; //Gör så att value i input = amount i våra objekt
    
    UpdatedonutsBasket();// kallar på min funktion som lägger till och tar bort donuts från basket
}   

 /* När vi klickar på - minskar vi antalet med 1*/
function removeNumber(e){

    const clickedDonut = e.currentTarget.dataset.id; // Gör så jag får ut indexet av knappen som jag klickar på
    const amountEl = e.currentTarget.parentElement.querySelector('input')
    
    if(donutCards[clickedDonut].amount > 0){

        donutCards[clickedDonut].amount -= 1; // [] de skrivet vi in för att komma åt de vi klickade på. Och de andra länkar till vår lista och amount, de gör att när vi klickar ökar amount med 1 varje gång på rätt donut

        amountEl.value = donutCards[clickedDonut].amount; //Gör så att value i input = amount i våra objekt
    }console.dir(amountEl.value)
    
    UpdatedonutsBasket();// kallar på min funktion som lägger till och tar bort donuts från basket
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------- Basket -------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/**
 * Lägger till donuts i varukorgen när vi klickar på +
 */

/*Lägger in rätt donuts i varukorgen*/
function UpdatedonutsBasket(){

    basketDonuts.innerHTML = ''; // rensar formuläret varje gång jag klickar på en knapp 
    for(let i = 0; i < donutCards.length; i++){ // loopa igenom alla donuts i vår array så vi kan hitta den med amount som är större än 0
         if(donutCards[i].amount >= 1){ //Om värdet av amount i vår array av donuts är 1 eller mer lägger vi till vår html stuktur i basket. i för att den inte ska lägga till alla utan bara enskilda. Första gången den lopas inget, andra inget, trejde träff och den skrivs ut
        basketDonuts.innerHTML +=
        `<div class="basketDonuts">
        <div class="basketHeaderDonuts">
            <h3>${donutCards[i].donutTitle}</h3>
        </div>
        <section>
            <div>
                <img src="${donutCards[i].donutImg1}" alt="">
            </div>
            <div class="basketDonutsflex">
                <div>
                    <h4>Antal</h4>
                    <h4>Delsumma</h4>
                </div>
                <div>
                    <p>${donutCards[i].amount}</p>
                    <p>${(donutCards[i].donutPrice * donutCards[i].amount)} kr</p>
                </div>
            </div>
        </section>
    </div>`}
    totalPrice();// sitter utanför if statement för att den ska skriva ut 0 eftersom jag satt att dern bara ska skriva ut html strukturen om amount är 1 eller större
}
} // På priset har jag satt att priset ska multipliceras med värdet i amount

/*Uppdaterar totalsumman*/
function totalPrice(){ //Uppdatera totalsumman i varukorgen
    totalPriceBasket.innerHTML = ''; // Rensar varje gång loopen körs och den uppdateras igenl
    let sum = 0; // sätter en startsumma till 0
    
    for(let i = 0; i < donutCards.length; i++){// loopar igenom alla så jag hittar vilka som har värde över 0
        sum += (donutCards[i].amount * donutCards[i].donutPrice)//sum är sum + antal * pris. += för att den ska lägga till på min summa hela tiden annars skriver den bara den jag klickar på
    console.dir(donutCards[i].amount)}
    totalPriceBasket.innerHTML += // lägger till summan
    `<span>${sum}</span>`
} 
/**
 * TODO Varukorg
 * [x]Skapa html struktur för varukorsmunkarna
 * [x]när jag klickar på knappen ska min struktur hopppa upp i varukorgen
 * [x]Bara den jag ska klicka på ska hopppa upp
 * [x]Ska bara komma en gång
 * [x]när värdet är större än 0 ska html stukturen läggas till i varukorgen
 * [x] Använd sedan index för att rätt donut ska hamna där
 * [x]när den är 0 ska de inte finnas i varukorgen
 * [x]koppla det med att rätt munk ska visas när vi klickar på knapparna
 * [x]Antalet ska ändras när vi klickar på knapparna
 * [x] Delsumman ska uppdateras
 * [] Tabort knapp
 * [] När man väljer att skriva i en siffra ska amount uppdateras
 * 
 * [x] totalsumman ska uppdateras efter varje ny munk
 * [x]När alla är noll ska även summan va 0
 * 
 * 
 * 
 * []När jag klickar på rabattkod ska en ruta dyka upp
 * []När jag fyller i rutan ska totalsumman bli 0
 */

/*------------------------------ Start växling av bilder i munksection -----------------------------*/

const prevImageBtn = document.querySelectorAll('#prevImage');        //Har adderat två knappar i HTML ovanför och kallat på dessa.
const nextImageBtn = document.querySelectorAll('#nextImage');

for (let i = 0; i < prevImageBtn.length; i++){
    prevImageBtn[i].addEventListener('click', swapImages)
    nextImageBtn[i].addEventListener('click', swapImages)
}

function swapImages(e){
    const donutcardImg1Slideshow = e.currentTarget.parentElement.parentElement.querySelector('#donutcardImg1');
    const donutCardImg2Slideshow = e.currentTarget.parentElement.parentElement.querySelector('#donutCardImg2');

    const firstDonut = donutcardImg1Slideshow.getAttribute('src');
    const secondDonut = donutCardImg2Slideshow.getAttribute('src');

    donutcardImg1Slideshow.setAttribute('src', secondDonut);
    donutCardImg2Slideshow.setAttribute('src', firstDonut);
};

/*------------------------------ Stop växling av bilder i munksection ------------------------------*/

/*-----------------------------------------------------------------------------------------------
------------------ Basket -----------------------------------------------------------------------
-------------------------------------------------------------------------------------------------*/

/*
Att göra i JS under varukorg efter cssen:
* Valda munkar ska in under namn, bild, antal, summa. 
* rabattkod ska kunna läggas in. 
* totalsumma, rabatt och summa att betala ska läggas in. 

Varukorg:               Delsumma:
Namn på munk
bild
antal                   Summa

Namn på munk
bild
antal                   Summa

Namn på munk
bild 
antal                   Summa

Använd rabattkod 

Totalsumma:
Dragen rabatt:
Summa att betala:


<Lägga in från uppgiften:
Lägg gärna in om ni hittar mer som ska in här???????
*/

/*-----------------------------------------------------------------------------------------------
------------------- Form ------------------------------------------------------------------------
------------------------------------------------------------------------------------------------*/





/*----------------------------------------------------------------------------------------------
------------JS koden för att hantera beställningsknappen. START---------------------------------
-----------------------------------------------------------------------------------------------*/ 
const orderButton = document.querySelector('.submit_form_button');
const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#lastname');
const adress = document.querySelector('#adress');
const postNumber = document.querySelector('#postnumber');
const city = document.querySelector('#city');
const phoneNumber = document.querySelector('#phonenumber');
const eMail = document.querySelector('#email');
const gdpr = document.querySelector('#gdpr');
const creditCard = document.querySelector('#creditcard');
const cardNumber = document.querySelector('#cardnr');
const monthYear = document.querySelector('#dateyear');
const cvc = document.querySelector('#CVC');
const inVoice = document.querySelector('#invoice');
const personNR = document.querySelector('#personNr');

nameInput.addEventListener('change', checkNameInput);
let checkNameInputOk = false;

function checkNameInput(){
    const exp = new RegExp('^[A-Za-zÅÄÖåäö\-]{1,}$');
    const errorMessage = document.querySelector('#errorMessageName');

    if (exp.test(nameInput.value)){
        errorMessage.setAttribute('hidden', '');
        checkNameInputOk = true;
    } else {
        errorMessage.innerHTML = 'Endast bostäver och bindelsträck';
        errorMessage.removeAttribute('hidden');
        checkNameInputOk = false;
    }
    activateOrderButton();
}

lastNameInput.addEventListener('change', checklastNameInput);
let checklastNameInputOk = false;

function checklastNameInput(){
    const exp = new RegExp('^[A-Za-zÅÄÖåäö\-]{1,}$');
    const errorMessage = document.querySelector('#errorMessageLastname');

    if (exp.test(lastNameInput.value)){
        errorMessage.setAttribute('hidden', '');
        checklastNameInputOk = true;
    } else {
        errorMessage.innerHTML = 'Endast bostäver och bindelsträck';
        errorMessage.removeAttribute('hidden');
        checklastNameInputOk = false;
    }
    activateOrderButton();
}

adress.addEventListener('change', errorMessageAdress);
let messageAdressOk = false;

function errorMessageAdress(){
    const exp = new RegExp('^[A-Za-zÅÄÖåäö0-9 ]{1,}$');
    const errorMessage = document.querySelector('#errorMessageAdress');

    if (exp.test(adress.value)){
        errorMessage.setAttribute('hidden', '');
        messageAdressOk = true;
    } else {
        errorMessage.innerHTML = 'Endast bostäver, siffor och mellanslag';
        errorMessage.removeAttribute('hidden');
        messageAdressOk = false;
    }
    activateOrderButton();
}

postNumber.addEventListener('change', errorMessagePostnumber);
let messagePostnumberOk = false;

function errorMessagePostnumber(){
    const exp = new RegExp('^[0-9]{5}$');
    const errorMessage = document.querySelector('#errorMessagePostnumber');

    if (exp.test(postNumber.value)){
        errorMessage.setAttribute('hidden', '');
        messagePostnumberOk = true;
    } else {
        errorMessage.innerHTML = 'Endast fem siffror';
        errorMessage.removeAttribute('hidden');
        messagePostnumberOk = false;
    }
    activateOrderButton();
}

city.addEventListener('change', errorMessageCity);
let messageCityOk = false;

function errorMessageCity(){
    const exp = new RegExp('^[A-Za-zÅÄÖåäö \-]{1,}$');
    const errorMessage = document.querySelector('#errorMessageCity');

    if (exp.test(city.value)){
        errorMessage.setAttribute('hidden', '');
        messageCityOk = true;
    } else {
        errorMessage.innerHTML = 'Endast bokstäver, bindelsträck och mellanslag';
        errorMessage.removeAttribute('hidden');
        messageCityOk = false;
    }
    activateOrderButton();
}

phoneNumber.addEventListener('change', errorMessagePhoneNumber);
let messagePhoneNumberOk = false;

function errorMessagePhoneNumber(){
    const exp = new RegExp('^[0-9]{10}$');
    const errorMessage = document.querySelector('#errorMessagePhoneNumber');

    if (exp.test(phoneNumber.value)){
        errorMessage.setAttribute('hidden', '');
        messagePhoneNumberOk = true;
    } else {
        errorMessage.innerHTML = 'Endast 10 siffror';
        errorMessage.removeAttribute('hidden');
        messagePhoneNumberOk = false;
    }
    activateOrderButton();
}


eMail.addEventListener('change', errorMessageeMail);
let messageeMailOk = false;

function errorMessageeMail(){
    const exp = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    const errorMessage = document.querySelector('#errorMassageeMail');

    if (exp.test(eMail.value)){
        errorMessage.setAttribute('hidden', '');
        messageeMailOk = true;
    } else {
        errorMessage.innerHTML = 'Fyll i en giltlig E-post';
        errorMessage.removeAttribute('hidden');
        messageeMailOk = false;
    }
    activateOrderButton();
}

gdpr.addEventListener('click', errorMessagegdpr);
let messagegdprOk = false;

function errorMessagegdpr(){
    messagegdprOk = gdpr.checked;
    activateOrderButton();
}

cardNumber.addEventListener('change', errorMessageCardNR);
let messageCardNROk = false;

function errorMessageCardNR(){
    const exp = new RegExp('^[0-9]{16}$');
    const errorMessage = document.querySelector('#errorMessageCardNR');

    if (exp.test(cardNumber.value)){
        errorMessage.setAttribute('hidden', '');
        messageCardNROk = true;
    } else {
        errorMessage.innerHTML = 'Fyll kornummer 16 siffror';
        errorMessage.removeAttribute('hidden');
        messageCardNROk = false;
    }
    activateOrderButton();
}

monthYear.addEventListener('change', errorMessageMonthyear);
let messageMonthyearOk = false;

function errorMessageMonthyear(){
    const exp = new RegExp('^[0-9]{4}$');
    const errorMessage = document.querySelector('#errorMessageDateyear');

    if (exp.test(monthYear.value)){
        errorMessage.setAttribute('hidden', '');
        messageMonthyearOk = true;
    } else {
        errorMessage.innerHTML = 'Fyll i 4 siffor för månad och år';
        errorMessage.removeAttribute('hidden');
        messageMonthyearOk = false;
    }
    activateOrderButton();
}


cvc.addEventListener('change', errorMessageCVC);
let messageCVCOk = false;

function errorMessageCVC(){
    const exp = new RegExp('^[0-9]{3}$');
    const errorMessage = document.querySelector('#errorMessageCVC');

    if (exp.test(cvc.value)){
        errorMessage.setAttribute('hidden', '');
        messageCVCOk = true;
    } else {
        errorMessage.innerHTML = 'Fyll i 3 siffrig kod';
        errorMessage.removeAttribute('hidden');
        messageCVCOk = false;
    }
    activateOrderButton();
}

personNR.addEventListener('change', errorMessagePersonNR);
let personNROk = false;

function errorMessagePersonNR(){
    const exp = new RegExp('^[0-9]{10}$');
    const errorMessage = document.querySelector('#errorMessagePersonNR');

    if (exp.test(personNR.value)){
        errorMessage.setAttribute('hidden', '');
        personNROk = true;
    } else {
        errorMessage.innerHTML = 'Fyll i 10 siffrigt personnummer';
        errorMessage.removeAttribute('hidden');
        personNROk = false;
    }

    activateOrderButton();
}


function activateOrderButton(){
    if (checkNameInputOk && checklastNameInputOk && messageAdressOk && messagePostnumberOk && messageCityOk && messagePhoneNumberOk && messageeMailOk && messagegdprOk && ((creditCard.checked && messageCardNROk && messageMonthyearOk && messageCVCOk) || (inVoice.checked && personNROk))){
        orderButton.removeAttribute('disabled');    
    } else {
        orderButton.setAttribute('disabled', ''); 
    }
}

/*----------------------------------------------------------------------------------------------
------------JS koden för att hantera beställningsknappen.  STOP---------------------------------
-----------------------------------------------------------------------------------------------*/ 

/**
 * När vi klickar på kort ska korinformation visas och när vi klickar på form ska personnr visas
 */
const creditcardBtn = document.querySelector('#creditcard')
const invoiceBtn = document.querySelector('#invoice')

creditcardBtn.addEventListener('click', showCardInfo);
invoiceBtn.addEventListener('click', showPersonNr);

/* När vi klivkar på kort visas kortinformationen*/
function showCardInfo(){
    document.querySelector('#cardpay').style.display = 'block';
    document.querySelector('#cardpay').ariaRequired;
    document.querySelector('#ssn').style.display = 'none';
}

/*När vi klickar på faktura kommer personnr visas*/
function showPersonNr(){
    document.querySelector('#ssn').style.display = 'block';
    document.querySelector('#ssn').ariaRequired;
    document.querySelector('#cardpay').style.display = 'none';
}


/*
Att lägga till i js designmässigt/användarvänligt. 
* krav på bokstäver i text
* Krav på att något av betalsätten ska fyllas i.
* Nyhetbrev ska vara ifyllt från början. 
* Gatuaderss ska innehålla både bokstäver och siffror? 
* postnummer innehålla 5 siffror 

Lägga till från uppgiften: 
[x]Om faktura valts som betalsätt ska ett formulärfält för svenskt personnummer visas. 
[]Även detta fält ska valideras innan formuläret går att skicka iväg, dvs. 
att man fyllt i korrekt personnummer.
* Om kort väljs som betalsätt, visas fält för kortnummer, datum/år och CVC. Dessa behöver 
inte valideras!
* Checkbox för godkännande av behandling av personuppgifter
* Checkbox för beställning av nyhetsbrev (ska vara iklickad som default)
* Samtliga formulärfält ska valideras och formuläret/beställningen ska inte gå att skicka 
om det finns några fel
* Felen ska markeras och kommuniceras tydligt (t.ex. ej enbart med röd färg, tag i beaktande a11y)
* När formuläret är korrekt ifyllt ska Skicka-/Beställ-knappen aktiveras, innan det är den utgråad
* Det ska finnas en "Rensa beställning"-knapp som återställer samtliga formulärfält liksom 
  eventuella beställda munkar/produkter (alltså antalet återställs till 0) 
  (Det ska finnas ett fält för att mata in en rabattkod.)*/

