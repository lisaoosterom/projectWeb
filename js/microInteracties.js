/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// console.log("test");

var buttonBookmark = document.querySelector('body>header>button');
var mijnVerhalen = document.querySelector('.microInteractiebookmark');



function bookMarkShow() {

    mijnVerhalen.classList.toggle('microInteractiebookmark');

}

buttonBookmark.addEventListener("click", bookMarkShow, false);

//  micro interactie sterren

var ster1 = document.querySelector('body>main>#ster1');

var ster2 = document.querySelector('body>main>#ster2');

var ster3 = document.querySelector('body>main>#ster3');

var ster4 = document.querySelector('body>main>#ster4');

var ster5 = document.querySelector('body>main>#ster5');

// leeg p element koppelen aan variable
var berichtSter =
    document.querySelector('body>main>p');


// a koppelen aan var
var verstuurKnop =
    document.querySelector('body>main>a');

function beoordelenSter1() {
    ster1.src = 'images/starActive.svg';
    ster2.src = 'images/starInactive.svg';
    ster3.src = 'images/starInactive.svg';
    ster4.src = 'images/starInactive.svg';
    ster5.src = 'images/starInactive.svg';


}

// mouse over bericht rating sterren
ster1.addEventListener("mouseover", beoordelenSter1, false);

function beoordelenSter2() {

    ster1.src = 'images/starActive.svg';
    ster2.src = 'images/starActive.svg';
    ster3.src = 'images/starInactive.svg';
    ster4.src = 'images/starInactive.svg';
    ster5.src = 'images/starInactive.svg';

}

ster2.addEventListener("mouseover", beoordelenSter2, false);



function beoordelenSter3() {


    ster1.src = 'images/starActive.svg';
    ster2.src = 'images/starActive.svg';
    ster3.src = 'images/starActive.svg';
    ster4.src = 'images/starInactive.svg';
    ster5.src = 'images/starInactive.svg';
}

ster3.addEventListener("mouseover", beoordelenSter3, false);

function beoordelenSter4() {

    ster1.src = 'images/starActive.svg';
    ster2.src = 'images/starActive.svg';
    ster3.src = 'images/starActive.svg';
    ster4.src = 'images/starActive.svg';
    ster5.src = 'images/starInactive.svg';


}

ster4.addEventListener("mouseover", beoordelenSter4, false);


function beoordelenSter5() {
    ster1.src = 'images/starActive.svg';
    ster2.src = 'images/starActive.svg';
    ster3.src = 'images/starActive.svg';
    ster4.src = 'images/starActive.svg';
    ster5.src = 'images/starActive.svg';


}

ster5.addEventListener("mouseover", beoordelenSter5, false);


// verstuur knop tonen wanner aantal sterren zijn aangelkikt

function verstuurBeoordeling1ster() {
    verstuurKnop.classList.add('verstuurKNOP');
    verstuurKnopTekst = 'Verstuur beoordeling';
    verstuurKnop.textContent = verstuurKnopTekst;
    bericht = 'Jammer';
    berichtSter.textContent = bericht;


}
ster1.addEventListener("click", verstuurBeoordeling1ster, false);

function verstuurBeoordeling2ster() {
    verstuurKnop.classList.add('verstuurKNOP');
    verstuurKnopTekst = 'Verstuur beoordeling';
    verstuurKnop.textContent = verstuurKnopTekst;
    bericht = 'Niet leuk';
    berichtSter.textContent = bericht;



}
ster2.addEventListener("click", verstuurBeoordeling2ster, false);

function verstuurBeoordeling3ster() {
    verstuurKnop.classList.add('verstuurKNOP');
    verstuurKnopTekst = 'Verstuur beoordeling';
    verstuurKnop.textContent = verstuurKnopTekst;
    bericht = 'Boeiend';
    berichtSter.textContent = bericht;



}
ster3.addEventListener("click", verstuurBeoordeling3ster, false);

function verstuurBeoordeling4ster() {
    verstuurKnop.classList.add('verstuurKNOP');
    verstuurKnopTekst = 'Verstuur beoordeling';
    verstuurKnop.textContent = verstuurKnopTekst;
    bericht = 'Leuk';
    berichtSter.textContent = bericht;


}
ster4.addEventListener("click", verstuurBeoordeling4ster, false);

function verstuurBeoordeling5ster() {
    verstuurKnop.classList.add('verstuurKNOP');
    verstuurKnopTekst = 'Verstuur beoordeling';
    verstuurKnop.textContent = verstuurKnopTekst;
    bericht = 'Fantasitsch';
    berichtSter.textContent = bericht;



}
ster5.addEventListener("click", verstuurBeoordeling5ster, false);
