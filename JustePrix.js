var scoreYou = 0;
var scorePoste = 0;

var status;
var rdmVlue;
var max = 100;
var min = 0;

var curenTnumber;
var curentUser;

var startGameBtn;
var validBtn;

var alertPlus;
var alertMoin;
var alertEqual;

var messageNbEssai;
var textAlert;
var player;
var info__message__ordinateur;

var reqAnimFrame;

var show = "new"

var eventSetBtn = new Event('eventSetBtn');

var blastSound; // Son de tirs
var ingameMusic; // Musique de fond
var endMusic; // Musique de fin

//Démarrage//

var init = function () {

  curenTnumber = Math.floor(Math.random() * 100) + 1;
  curentUser = "you";

  blastSound = new Audio('sounds/blast.mp3');
  ingameMusic = new Audio('sounds/cantina.mp3');
  endMusic = new Audio('sounds/end.mp3');

  startGameBtn = document.getElementById("startGame");
  alertPlus = document.getElementById("plus");
  alertMoin = document.getElementById("moin");
  alertEqual = document.getElementById("eqaul");
  messageNbEssai = document.getElementById("messageNbEssai");
  validBtn = document.getElementById("validBtn");
  textAlert = document.getElementById("textAlert");
  player = document.getElementById("player");
  info__message__ordinateur = document.getElementById("info__message__ordinateur");

  messageNbEssai.textContent = scoreYou;

  startGameBtn.addEventListener('click', startGame);
  validBtn.addEventListener('click', checkValue);



  /*Sons*/

  // blastSound = new Audio('sounds/blast.mp3');

}


window.addEventListener('load', init);

function startGame() {
  ingameMusic.play()
  startGameBtn.style.display = "none"
  document.getElementById("idJeu").style.display = "inherit"
  player.innerHTML = "Manche 1 : Vous"
}

function resetAlerts(type) {
  if (type === "set") {
    rdmVlue = Math.floor(Math.random() * (max - min + 1)) + min;
    scorePoste++;
    messageNbEssai.innerHTML = scorePoste;
    info__message__ordinateur.innerHTML = `Le nombre choisi par l'ordinateur est : ${rdmVlue}`;
    alertEqual.style.display = "inherit"
    alertPlus.style.display = "inherit"
    alertMoin.style.display = "inherit"
    document.getElementById("testClick").style.display = "inherit"
    alertPlus.addEventListener("click", clickResultPlus)
    alertEqual.addEventListener("click", clickResultEqaul)
    alertMoin.addEventListener("click", clickResultmoin)
  }
}

function checkValue() {
  blastSound.play()
  var x, text;

  x = document.getElementById("numb").value;
  textAlert.innerHTML = "";
  
// Si x n'est pas un nombre ou inférieur à un ou supérieur à 100
  if (x === "" || x < 0 || x > 100) {
    text = "nombre invalide 🚀";
    textAlert.innerHTML = text;
    document.getElementById("numb").value = ""
    return
  } else {
    scoreYou++;
    messageNbEssai.innerHTML = scoreYou;
  }

  document.getElementById("numb").value = ""

  if (x < curenTnumber) {
    alertPlus.style.display = "inherit"
    alertMoin.style.display = "none"
    alertEqual.style.display = "none"
  }
  else if (x > curenTnumber) {
    alertMoin.style.display = "inherit"
    alertPlus.style.display = "none"
    alertEqual.style.display = "none"
  }
  else if (x == curenTnumber) {
    alertEqual.style.display = "inherit"
    alertPlus.style.display = "none"
    alertMoin.style.display = "none"
    setTimeout(() => {
      player.innerHTML = "Manche 2 : L'ordinateur"
      messageNbEssai.innerHTML = scorePoste;
      alertEqual.style.display = "none"
      alertPlus.style.display = "none"
      alertMoin.style.display = "none"
      document.getElementById("info__message").style.display = "inherit"
      document.getElementById("btn__result").className = "alert__result__style d-flex justify-content-around"
      validBtn.removeEventListener('click', checkValue)
    }, 1000)
    validBtn.addEventListener('click', EnterVAlueMancheDeux)
  }

}

function EnterVAlueMancheDeux() {
  var x = document.getElementById("numb").value;
  textAlert.innerHTML = "";
// Si x n'est pas un nombre ou inférieur à un ou supérieur à 100
  if (x === "" || x < 0 || x > 100) {
    text = "nombre invalide 🚀";
    textAlert.innerHTML = text;
    document.getElementById("numb").value = ""
    return
  } else {
    document.getElementById("info__message").innerHTML = `Le nombre que vous avez entré est : ${x}`
    document.getElementById("form__id").style.display = " none"
    info__message__ordinateur.style.display = "inherit"
    document.getElementById("btn__result").addEventListener("eventSetBtn", resetAlerts("set"))
  }

  document.getElementById("numb").value = "Le nombre entré par l'ordinateur est: "
}

function clickResultPlus() {
  blastSound.play()
  scorePoste++;
  min = rdmVlue;
  rdmVlue = Math.floor(Math.random() * (max - min + 1)) + min;
  messageNbEssai.innerHTML = scorePoste;
  info__message__ordinateur.innerHTML = `Le nombre entré par l'ordinateur est : ${rdmVlue}`;
}
function clickResultmoin() {
  blastSound.play()
  scorePoste++;
  max = rdmVlue;
  rdmVlue = Math.floor(Math.random() * (max - min + 1)) + min;
  messageNbEssai.innerHTML = scorePoste;
  info__message__ordinateur.innerHTML = `Le nombre entré par l'ordinateur est : ${rdmVlue}`;
}
function clickResultEqaul() {
  ingameMusic.pause();
  blastSound.play()
  endMusic.play();
  document.getElementById("idJeu").style.display = "none"
  document.getElementById("player").style.display = "none"
  document.getElementById("resultat").style.display = "inherit"
  document.getElementById("res__you").innerHTML = `Le nombre de vos essais est : ${scoreYou}`
  document.getElementById("res__poste").innerHTML = `Le nombre des essais de l'ordianateur est : ${scorePoste}`
  var x = document.getElementById("resAlert")
  if (scorePoste > scoreYou) {
    x.className = "alert alert-success aler__info";
    x.innerHTML = "Vous avez gagné !"
  }
  else if (scorePoste < scoreYou) {
    x.className = "alert alert-danger aler__info";
    x.innerHTML = "Vous avez perdu !"
  }
  else {
    x.className = "alert alert-warning aler__info";
    x.innerHTML = "Partie Nulle"
  }
}