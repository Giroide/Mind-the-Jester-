var Common_Chance = [
  // Spades
  { carta: "Ace of Spades", position: "0px 0px", points: 30 },
  { carta: "2 of Spades", position: "-32px 0px", points: 2 },
  { carta: "3 of Spades", position: "-64px 0px", points: 3 },
  { carta: "4 of Spades", position: "-96px 0px", points: 4 },
  { carta: "5 of Spades", position: "-128px 0px", points: 5 },
  { carta: "6 of Spades", position: "-160px 0px", points: 6 },
  { carta: "7 of Spades", position: "-192px 0px", points: 7 },
  { carta: "8 of Spades", position: "-224px 0px", points: 8 },
  { carta: "9 of Spades", position: "-256px 0px", points: 9 },
  { carta: "10 of Spades", position: "-288px 0px", points: 10 },
  { carta: "Jack of Spades", position: "-320px 0px", points: 15 },
  { carta: "Queen of Spades", position: "-352px 0px", points: 20 },
  { carta: "King of Spades", position: "-384px 0px", points: 20 },

  // Clubs
  { carta: "Ace of Clubs", position: "0px -48px", points: 30 },
  { carta: "2 of Clubs", position: "-32px -48px", points: 2 },
  { carta: "3 of Clubs", position: "-64px -48px", points: 3 },
  { carta: "4 of Clubs", position: "-96px -48px", points: 4 },
  { carta: "5 of Clubs", position: "-128px -48px", points: 5 },
  { carta: "6 of Clubs", position: "-160px -48px", points: 6 },
  { carta: "7 of Clubs", position: "-192px -48px", points: 7 },
  { carta: "8 of Clubs", position: "-224px -48px", points: 8 },
  { carta: "9 of Clubs", position: "-256px -48px", points: 9 },
  { carta: "10 of Clubs", position: "-288px -48px", points: 10 },
  { carta: "Jack of Clubs", position: "-320px -48px", points: 15 },
  { carta: "Queen of Clubs", position: "-352px -48px", points: 20 },
  { carta: "King of Clubs", position: "-384px -48px", points: 20 },

  // Hearts
  { carta: "Ace of Hearts", position: "0px -96px", points: 30 },
  { carta: "2 of Hearts", position: "-32px -96px", points: 2 },
  { carta: "3 of Hearts", position: "-64px -96px", points: 3 },
  { carta: "4 of Hearts", position: "-96px -96px", points: 4 },
  { carta: "5 of Hearts", position: "-128px -96px", points: 5 },
  { carta: "6 of Hearts", position: "-160px -96px", points: 6 },
  { carta: "7 of Hearts", position: "-192px -96px", points: 7 },
  { carta: "8 of Hearts", position: "-224px -96px", points: 8 },
  { carta: "9 of Hearts", position: "-256px -96px", points: 9 },
  { carta: "10 of Hearts", position: "-288px -96px", points: 10 },
  { carta: "Jack of Hearts", position: "-320px -96px", points: 15 },
  { carta: "Queen of Hearts", position: "-352px -96px", points: 20 },
  { carta: "King of Hearts", position: "-384px -96px", points: 20 },

  // Diamonds
  { carta: "Ace of Diamonds", position: "0px -144px", points: 30 },
  { carta: "2 of Diamonds", position: "-32px -144px", points: 2 },
  { carta: "3 of Diamonds", position: "-64px -144px", points: 3 },
  { carta: "4 of Diamonds", position: "-96px -144px", points: 4 },
  { carta: "5 of Diamonds", position: "-128px -144px", points: 5 },
  { carta: "6 of Diamonds", position: "-160px -144px", points: 6 },
  { carta: "7 of Diamonds", position: "-192px -144px", points: 7 },
  { carta: "8 of Diamonds", position: "-224px -144px", points: 8 },
  { carta: "9 of Diamonds", position: "-256px -144px", points: 9 },
  { carta: "10 of Diamonds", position: "-288px -144px", points: 10 },
  { carta: "Jack of Diamonds", position: "-320px -144px", points: 15 },
  { carta: "Queen of Diamonds", position: "-352px -144px", points: 20 },
  { carta: "King of Diamonds", position: "-384px -144px", points: 20 }
];

var Jester_Chance = [
  { carta: "Jester", position: "0px -192px", points: 0 }
];

var Tier1_Chance = [
  { carta: "x1.25", position: "-32px -192px", points: 1.25 },
  { carta: "x1.50", position: "-64px -192px", points: 1.50 }
];

var Tier2_Chance = [
  { carta: "x2", position: "-96px -192px", points: 2 },
  { carta: "x3", position: "-128px -192px", points: 3 },
  { carta: "x4", position: "-160px -192px", points: 4 }
];




/*let Cards = [
  // Spades
  { carta: "Ace of Spades", position: "0px 0px", points: 30 },
  { carta: "2 of Spades", position: "-32px 0px", points: 2 },
  { carta: "3 of Spades", position: "-64px 0px", points: 3 },
  { carta: "4 of Spades", position: "-96px 0px", points: 4 },
  { carta: "5 of Spades", position: "-128px 0px", points: 5 },
  { carta: "6 of Spades", position: "-160px 0px", points: 6 },
  { carta: "7 of Spades", position: "-192px 0px", points: 7 },
  { carta: "8 of Spades", position: "-224px 0px", points: 8 },
  { carta: "9 of Spades", position: "-256px 0px", points: 9 },
  { carta: "10 of Spades", position: "-288px 0px", points: 10 },
  { carta: "Jack of Spades", position: "-320px 0px", points: 15 },
  { carta: "Queen of Spades", position: "-352px 0px", points: 20 },
  { carta: "King of Spades", position: "-384px 0px", points: 20 },

  // Clubs
  { carta: "Ace of Clubs", position: "0px -48px", points: 30 },
  { carta: "2 of Clubs", position: "-32px -48px", points: 2 },
  { carta: "3 of Clubs", position: "-64px -48px", points: 3 },
  { carta: "4 of Clubs", position: "-96px -48px", points: 4 },
  { carta: "5 of Clubs", position: "-128px -48px", points: 5 },
  { carta: "6 of Clubs", position: "-160px -48px", points: 6 },
  { carta: "7 of Clubs", position: "-192px -48px", points: 7 },
  { carta: "8 of Clubs", position: "-224px -48px", points: 8 },
  { carta: "9 of Clubs", position: "-256px -48px", points: 9 },
  { carta: "10 of Clubs", position: "-288px -48px", points: 10 },
  { carta: "Jack of Clubs", position: "-320px -48px", points: 15 },
  { carta: "Queen of Clubs", position: "-352px -48px", points: 20 },
  { carta: "King of Clubs", position: "-384px -48px", points: 20 },

  // Hearts
  { carta: "Ace of Hearts", position: "0px -96px", points: 30 },
  { carta: "2 of Hearts", position: "-32px -96px", points: 2 },
  { carta: "3 of Hearts", position: "-64px -96px", points: 3 },
  { carta: "4 of Hearts", position: "-96px -96px", points: 4 },
  { carta: "5 of Hearts", position: "-128px -96px", points: 5 },
  { carta: "6 of Hearts", position: "-160px -96px", points: 6 },
  { carta: "7 of Hearts", position: "-192px -96px", points: 7 },
  { carta: "8 of Hearts", position: "-224px -96px", points: 8 },
  { carta: "9 of Hearts", position: "-256px -96px", points: 9 },
  { carta: "10 of Hearts", position: "-288px -96px", points: 10 },
  { carta: "Jack of Hearts", position: "-320px -96px", points: 15 },
  { carta: "Queen of Hearts", position: "-352px -96px", points: 20 },
  { carta: "King of Hearts", position: "-384px -96px", points: 20 },

  // Diamonds
  { carta: "Ace of Diamonds", position: "0px -144px", points: 30 },
  { carta: "2 of Diamonds", position: "-32px -144px", points: 2 },
  { carta: "3 of Diamonds", position: "-64px -144px", points: 3 },
  { carta: "4 of Diamonds", position: "-96px -144px", points: 4 },
  { carta: "5 of Diamonds", position: "-128px -144px", points: 5 },
  { carta: "6 of Diamonds", position: "-160px -144px", points: 6 },
  { carta: "7 of Diamonds", position: "-192px -144px", points: 7 },
  { carta: "8 of Diamonds", position: "-224px -144px", points: 8 },
  { carta: "9 of Diamonds", position: "-256px -144px", points: 9 },
  { carta: "10 of Diamonds", position: "-288px -144px", points: 10 },
  { carta: "Jack of Diamonds", position: "-320px -144px", points: 15 },
  { carta: "Queen of Diamonds", position: "-352px -144px", points: 20 },
  { carta: "King of Diamonds", position: "-384px -144px", points: 20 },

  // Jester
  { carta: "Jester", position: "0px -192px", points: 0 },
  { carta: "Jester", position: "0px -192px", points: 0 },
  { carta: "Jester", position: "0px -192px", points: 0 },
  { carta: "Jester", position: "0px -192px", points: 0 }
];*/

let points = 0;
let pointStreak = 0;
let Card_Rolls = 0;
let storedPoints = 0;
let Streak_Rolls = 0;

function store() {
  storedPoints = storedPoints + points;
  document.getElementById('storedPoints').textContent = storedPoints;
  points = 0;
  document.getElementById('points').textContent = points;

}


/* Variables probabilidad */


/* Función para calcular los chances de cata Tier
+ los rangos propios de cada uno para sus respectivos rolls. */

function getDeck() {

  /*Código para generar una lista con rangos*/

  const Chances = {
    Jester_Chance: 5 + (Streak_Rolls * 1),
    Common_Chance: 50,
    Tier1_Chance: 10 + (Streak_Rolls * 1),
    Tier2_Chance: 2 + (Streak_Rolls * 0.5),
    Tier3_Chance: 0
  };

  let last_range = 0;
  const RangesList = [];

  for (const [name, value] of Object.entries(Chances)) {
    if (value == 0) {continue;}
    const min = last_range;
    const max = min + value;
    last_range = max;

    RangesList.push({name, max, min});
  };


  /*Código para buscar un número aleatorio en dicha lista*/

  const pulledNumber = Math.random() * last_range;
  for (const range of RangesList) {
    if (range.max > pulledNumber && pulledNumber >= range.min) {
      return range.name;
    }
  
  }

}; 



function choice(winnerDeck) {
    Card_Rolls = Card_Rolls + 1;
    Streak_Rolls = Streak_Rolls + 1;
    let cardDeck = window[winnerDeck] /* Cómo mis otros diccionarios están declarados globalmente
    pertenecen al objeto "window", por ende, puedo buscarlos mediante este comando por su nombre en
    formato String. */
    
    /* Si tienes 0 puntos automáticamente vas a tener un Common_Chance */
    if (points == 0) {cardDeck = window["Common_Chance"]}

    if (Card_Rolls >= 100) {document.getElementById('quest2').textContent = "Success!";}
    const randoNum = Math.floor(Math.random() * cardDeck.length)
    document.querySelector('.cardIcon').style.backgroundPosition = cardDeck[randoNum].position;

    if (cardDeck[randoNum].carta == "Jester") {
      document.getElementById('cardName').textContent = "Jester! You lose your points!";
      points = 0;
      Streak_Rolls = 0;
    }

    else {
      if (winnerDeck == "Common_Chance") {points = (points + cardDeck[randoNum].points)}

      if (winnerDeck != "Common_Chance") {points = Math.ceil((points * cardDeck[randoNum].points))}  
      
      if (points >= 200) {
        document.getElementById('quest1').textContent = "Success!";
      }
      if (points >= 700) {
        document.getElementById('quest3').textContent = "Success!";
      }
      if (points > pointStreak) {
        pointStreak = points;
        document.getElementById('pointStreak').textContent = pointStreak;
      }
      document.getElementById('cardName').textContent = cardDeck[randoNum].carta;
      document.getElementById('points').textContent = points;

    }
}

