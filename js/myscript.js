// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del     biglietto di viaggio, secondo le seguenti regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.

// selezione input
const userName = document.getElementById("nome");
const userKm = document.getElementById("km");
const userEta = document.getElementById("eta");

// selezione bottoni 
const calcButton = document.getElementById("calcola");
const cancelButton = document.getElementById("annulla");



