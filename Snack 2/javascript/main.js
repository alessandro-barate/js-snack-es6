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

const teamsNew = teams.map((element, index, attay) => {
  return {
    nome: element.nome,
    puntiFatti: 1,
    falliSubiti: 2,
  };
});

console.log(teamsNew);

const result = teamsNew.map;

const puntiFatti = Math.floor(Math.random() * 100) + 1;
const falliSubiti = Math.floor(Math.random() * 50);
