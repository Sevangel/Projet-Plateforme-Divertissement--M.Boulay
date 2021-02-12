
//generation de la couleur aléatoirement

var panel = ["r", "b", "v", "j", "n", "o"]; //panel des coulerus possibles
var soluc = []; //solution, à générer
var n = 0; //itérateur

while (n < 4) {
  soluc.push(panel[Math.floor(Math.random() * 6)]); //génération aléatoire
  n = n + 1;
}

//TODO tuto

alert('Bienvenue dans le Mastermind, devinez la combinaison de quatre couleurs !\nLes réponses possibles sont "r" "b" "v" "j" "n" "o", pour les couleurs rouge bleu vert jaune noir et orange. '
);
alert(soluc); //don de solution, for testing purposes
n = 0;

while (n < 12) {

//boucle nombre d'essais

  var input;
  var response;
  do {
    input = prompt("Entrez une combinaison de quatre couleurs (avec une virgule pour séparer entre chaque)");
      response = input.split(",");
  } 
  while (response[1] != ",");

//input=['j','r','v','v'];//dummy input

    var iter = 0;
    var ttbon = 0; //variable des bonnes couleurs aux bons endroits à zéro
    var soluc2 = soluc;

    /*while(iter<soluc.length){
  if(soluc[iter]==response[iter]){
    soluc.splice(iter,1);
    input.splice(iter,1);
  } else{
    iter=iter+1;
  }
}*/

    iter = 0;
    var inbon = 0;
    while (iter < soluc.length) {
      var nomaupif = response[iter];
      if (nomaupif === soluc[iter]) {
        ttbon++;
      }
      else {
        var iter2 = 0;
        while (iter2 < response.length) {
          if (iter2 != iter) {
            if (soluc[iter] === response[iter2]) {
              inbon++;
            }
          }
          iter2++;
        }
      }
      iter++;

          /*var bool=soluc.indexOf(input[iter]);
  if(bool>=0){
    soluc.splice(bool,1);
    input.splice(iter,1);
    inbon=inbon+1;
  } else{
    iter=iter+1;
  }*/
    }
    if (ttbon == 4) {
      alert("vous avez gagné!");
      break;
    }
    alert("Tout bon " + ttbon + ". Bonne couleur, mauvaise place " + inbon + ".");
    n = n + 1;
  }
  if (n > 12) {
    alert("vous avez perdu, trop d'essais!");
  }