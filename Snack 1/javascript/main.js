"use strict";

const bikes = [
  {
    nome: "Bianchi Oltre RC",
    peso: "1.5 kg",
  },
  {
    nome: "Look 795 Blade RS Proteam",
    peso: "1.45 kg",
  },
  {
    nome: "Wilier 0 SLR",
    peso: "1.52 kg",
  },
  {
    nome: "Pinarello Dogma F",
    peso: "1.48 kg",
  },
  {
    nome: "Colnago V4Rs",
    peso: "1.51 kg",
  },
  {
    nome: "Cervelo S5",
    peso: "1.49 kg",
  },
  {
    nome: "Canyon Ultimate CF SL R101",
    peso: "1.46 kg",
  },
];

const result = document.getElementById("result").innerText;

/*for (let key in bikes) {
  console.log(bikes[key]);
}*/

//console.log(bikes[1].nome);
let bikesName;

for (let i = 0; i < bikes.length; i++) {
  bikesName = bikes[i].nome;
}

console.log(bikesName);
