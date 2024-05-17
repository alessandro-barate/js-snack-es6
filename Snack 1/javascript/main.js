"use strict";

const bikes = [
  {
    nome: "Bianchi Oltre RC",
    peso: 7.5,
    unitaMisuraPeso: "kg",
  },
  {
    nome: "Look 795 Blade RS Proteam",
    peso: 8.45,
    unitaMisuraPeso: "kg",
  },
  {
    nome: "Wilier 0 SLR",
    peso: 6.49,
    unitaMisuraPeso: "kg",
  },
  {
    nome: "Pinarello Dogma F",
    peso: 7.48,
    unitaMisuraPeso: "kg",
  },
  {
    nome: "Colnago V4Rs",
    peso: 8.51,
    unitaMisuraPeso: "kg",
  },
  {
    nome: "Cervelo S5",
    peso: 6.49,
    unitaMisuraPeso: "kg",
  },
  {
    nome: "Canyon Ultimate CF SL R101",
    peso: 7.46,
    unitaMisuraPeso: "kg",
  },
];

/*console.log(bikes[0].peso);
console.log(bikes[1].peso);
console.log(bikes[2].peso);
console.log(bikes[3].peso);
console.log(bikes[4].peso);
console.log(bikes[5].peso);
console.log(bikes[6].peso);*/

const result = document.getElementById("result").innerText;
let biciLeggera = bikes[0];
// for
/*for (let i = 1; i < bikes.length; i++) {
  const biciAttuale = bikes[i];
  if (biciAttuale.peso < biciLeggera.peso) {
    biciLeggera = biciAttuale;
  }
   Qui non si sa quante bici, nel caso, hanno lo stesso peso */

/*if (biciAttuale.peso === biciLeggera.peso) {
    console.log(biciAttuale);
  } Non funziona nel caso ci sia un peso minore dopo il peso più leggero
} */

console.log(biciLeggera.nome);

console.log("--------------------");

// for..of
for (let index of bikes) {
  console.log(index);
}

console.log("--------------------");

// forEach

bikes.forEach((element, index, array) => {
  console.log(element);
});

console.log("--------------------");

let pesoLeggero = bikes[0].peso;
for (let i = 1; i < bikes.length; i++) {
  const pesoAttuale = bikes[i].peso;
  if (pesoAttuale < pesoLeggero) {
    pesoLeggero = pesoAttuale;
  }
}
console.log(pesoLeggero);

const biciLeggere = bikes.filter((bike, i, arr) => {
  if (bike.peso === pesoLeggero) {
    return true;
  }
});

console.log(biciLeggere);
