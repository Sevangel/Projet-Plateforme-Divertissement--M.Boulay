// SIMON SAYS

// Variables

let SimonTabCache = []
let Green = document.querySelector('.Green')
let Red = document.querySelector('.Red')
let Yellow = document.querySelector('.Yellow')
let Blue = document.querySelector('.Blue')
let Counter = document.querySelector('#Counter')
let PlayerCount = 0
let ArrColors = [Red, Yellow, Blue, Green]
let PlayerTab = []

MemoryPlayerClick()

// Récupérer le bouton start pour démarrer le jeu + preventDefault car comme c'est une balise a avec un lien # cela nous ramène au début de la page

document.querySelector('.StartButtonSimon').addEventListener('click', function(event) {
    event.preventDefault();
    Game()
})

// Sleep fonction

// function sleep(ms) {   
//     return new Promise (resolve => setTimeout(resolve, ms))
// }

// Fonction pour reset le score

function ClearScore() {
    Counter.innerHTML = PlayerCount
    SimonTabCache = []
    PlayerTab = []
}

// Fonction principale du jeu

function Game() {
    ClearScore()
    ColorSequency()    
}

// Boucle pour créer la séquence de couleurs lors de cette partie


function ColorSequency () {
    for (let i = 0; i < 3; i++) {
        let SimonRandomColor = ArrColors[Math.floor(Math.random() * ArrColors.length)]
        SimonTabCache.push(SimonRandomColor)
               
    }
    console.log(SimonTabCache)  
    LightUp(SimonTabCache) 
}

// Fonction pour Eclairer la séquence

function LightUp (SimonTabCache) {
    let i = 0;
    let Timer = setInterval(function(){
        Lighten(SimonTabCache[i])
    i++
    if (i >= SimonTabCache.length) {
      clearInterval(Timer)
    }
  }, 800)
}

function Lighten (SimonTabCache) {
    SimonTabCache.classList.add('light')
    window.setTimeout(function () {
        SimonTabCache.classList.remove('light')
    }, 500)
}

// Fonction pour récupérer la liste du joueur

function MemoryPlayerClick () {
    Green.addEventListener('click', () => {
        PlayerTab.push(Green)
        console.log(PlayerTab)
        CheckPass()
    })
    Red.addEventListener('click', () => {
        PlayerTab.push(Red)
        console.log(PlayerTab)
        CheckPass()
    })
    Blue.addEventListener('click', () => {
        PlayerTab.push(Blue)
        console.log(PlayerTab)
        CheckPass()
    })
    Yellow.addEventListener('click', () => {
        PlayerTab.push(Yellow)
        console.log(PlayerTab)
        CheckPass()
    })
}

// Vérification de la réussite

function CheckPass() {
    for (i = 0; i < PlayerTab.length; i++) {
        if (PlayerTab[i] != SimonTabCache[i]) {
            alert("Quel dommage...")
            PlayerCount = 0
            ClearScore()
            return
        }
    }
    if (PlayerTab.length == SimonTabCache.length) {
        if (PlayerTab.length >= 15) {
            alert("VOUS AVEZ GAGNE UN IPHONE X")
            PlayerCount = 0
            ClearScore()
        }
        else {
            PlayerCount++
            Counter.innerHTML = PlayerCount
            PlayerTab = []
            ColorSequency()
        }   
    }
}