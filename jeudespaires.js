/*Déclaration des differentes images*/
var indice_carte= shuffle([
    1,2,3,4,
    1,2,3,4,
    5,5,6,6,
]);

var images = document.getElementsByTagName('img');
nb_paires_trouvé = 0;
score = 0;

for (let i=0; i<images.length; i++)
{
    first_card = null;
    second_card = null;
    /*parcourir les i images de la liste */
    images[i].src2 = 'images/carte'+ indice_carte[i]+'.png';
    /*rendre les images cliquables*/
    images[i].addEventListener('click', (img)=> 
        {
         /*src=source de l'image du verso fixe de la carte 
         et src2=source de la la carte coté imprimé(motif)*/

           if (first_card == null){
               /*Au premier clique nous conservons l'objet de la 1ère 
                image dans la variable first card*/
               img.target.src = img.target.src2;
               first_card = img.target;
               return  
           }
           if (second_card == null){
               /*Au premier clique nous conservons l'objet de la 2ème image 
               dans la variable second card*/
               img.target.src = img.target.src2;
               second_card = img.target;
               return
           }
           if (first_card != null && second_card != null){
               /*Comparaison des objets des deux cartes*/
                if (first_card.src == second_card.src){
                 // A chaque paire de carte trouvé le nb_paires_trouvé est incrémenté d'un point
                    nb_paires_trouvé += 1;
                    score += 1;
                    document.getElementById('score').innerText = "Votre score est de : " + score;
                }else{
                    first_card.src = "images/verso-carte.svg";
                    second_card.src = "images/verso-carte.svg";
                    score += 1;
                    document.getElementById('score').innerText = "Votre score est de : " + score;
                } 
                first_card = null;
                second_card = null;     
            }
            if (nb_paires_trouvé == 6)
            {
                window.alert(
                    "Bravo, vous avez trouvé toutes les paires,"
                 +"vous finissez avec un score de "+score
                 + " Réessayez pour améliorer votre score !"
                    )           
            }
        }
    )
}
/*fonction pour melanger indice_carte*/
function shuffle(list) {
    var i, random_index, indice_image;
    for (i = list.length - 1; i > 0; i--) 
    {
        random_index = Math.floor(Math.random() * (i + 1));
        indice_image = list[i];
        list[i] = list[random_index];
        list[random_index] = indice_image;
    }
    return list;
} 