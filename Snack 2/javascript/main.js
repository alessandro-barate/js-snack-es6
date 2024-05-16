"use strict";

const teams = [
  {
    nome: "Inter",
    puntiFatti: "",
    falliSubiti: "",
  },
  {
    nome: "Atalanta",
    puntiFatti: "",
    falliSubiti: "",
  },
  {
    nome: "Fiorentina",
    puntiFatti: "",
    falliSubiti: "",
  },
  {
    nome: "Bologna",
    puntiFatti: "",
    falliSubiti: "",
  },
  {
    nome: "Roma",
    puntiFatti: "",
    falliSubiti: "",
  },
  {
    nome: "Juventus",
    puntiFatti: "",
    falliSubiti: "",
  },
  {
    nome: "Milan",
    puntiFatti: "",
    falliSubiti: "",
  },
];

console.log(teams);

const puntiFatti = Math.floor(Math.random() * 100);
const falliSubiti = Math.floor(Math.random() * 50);
console.log(puntiFatti);
console.log(falliSubiti);

for (let i = 0; i < teams.length; i++) {
  let teamsPunti = teams[i];
  teamsPunti.puntiFatti = puntiFatti;
  let teamsFalli = teams[i];
  teamsFalli.falliSubiti = falliSubiti;
  console.log(teamsFalli);
}
