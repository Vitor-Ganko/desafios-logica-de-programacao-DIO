let hero = ["HeroName", 0]
let heroLevel = null;

if (hero[1] <= 1000) heroLevel = "Ferro"
else if (hero[1] > 1000 && hero[1] <= 2000) heroLevel = "Bronze"
else if (hero[1] > 2000 && hero[1] <= 3000) heroLevel = "Prata"
else if (hero[1] > 3000 && hero[1] <= 4000) heroLevel = "Ouro"
else if (hero[1] > 4000 && hero[1] <= 5000) heroLevel = "Platina"
else if (hero[1] > 5000 && hero[1] <= 6000) heroLevel = "Diamante"
else if (hero[1] > 6000 && hero[1] <= 8000) heroLevel = "Ascendente"
else if (hero[1] > 8000 && hero[1] < 10000) heroLevel = "Imortal"
else if (hero[1] > 10000) heroLevel = "Radiante"

console.log("O herói de nome '" + hero[0] + "' está no nível " + "'" + heroLevel + "'")