// let couleur = 'bleu';
// let taille = 38;
// let nbPoches = 4 + 1;

// let jean = {
// 	couleur : couleur,
// 	taille : taille,
// 	nbPoches : nbPoches,
// 	ilEstSale: true 
// }


// console.log(couleur);
// console.log(jean);

// let notesSeconde = [14,12,15,10,6];
// notesSeconde.push(0);
// console.log(notesSeconde.length);

// console.info(notesSeconde[0]);

// for(let i = 0; i < notesSeconde.length; i++){
// 	console.log(notesSeconde[i]);
// }


// let resultat = multiplication(12,12);
// console.log('Résultat multiplication', resultat);

// function multiplication(nombreUn, nombreDeux){
// 	console.log(nombreUn * nombreDeux);
// 	return nombreUn * nombreDeux
// }

// let i = 0;
// while (i<3){
// 	// run this code in block

// 	if(i == 3){
// 		alert('C\'est 3 !')
// 	}else{
// 		alert("C'est pas 3")
// 	}

// 	i ++;
// }

// let bonjour = prompt('Ton âge ? ');
// console.log(typeof bonjour);


/*	
	Créer un tableau d'objets
	Choisir un objet dans ce tableau aléatoirement // => random();
	
	Demander le prix à l'utilisateur // prompt() / parseInt()
	Vérifier l'entrée de l'utilisateur 
		Si c'est pas un chiffre
			Message d'erreur et reproposer d'entrer un chiffre
		Si c'est un chiffre
	Comparer avec le prix
		Si c'est égal
			Gagné
		Si au dessus
			"C'est moins !"
		Si en dessous
			"C'est plus !"

///Bonus : donner des vies / tentatives à l'utilisateur
///Bonus : lui proposer d'arrêter 
///Bonus : Réinitialiser 
///Bonus : Multijoueur
///Bonus : Enregistrer les résultats / Cookies / localStorage
///Bonus : Mode humour 
*/

let arr =[{nom: 'Boueeunicorn', prix: 20 }/*20€*/, {nom:'Chocolatine', prix :1.1} /*1€10*/, {nom:'CasquettePickleRick', prix :16} /*16€*/ ];

function getRandomInt(max) {
    return Math.floor(Math.random(0) * Math.floor(max));
}
console.log(getRandomInt(arr.length));
let article = arr[getRandomInt(arr.length)];
console.log(article);

let i = 0;
 while (i<3){
 	// run this code in block

 	if(i == 3){
 		alert('Jeux du juste prix')
 	}else{
 		alert("Jeux du juste prix")
 	}

 	i ++;
 }

let popup = prompt('Donner le prix de '+ article.nom);
console.log(typeof popup);

popup = parseInt(popup);
console.log('popup', popup);

	if (popup = article.prix){
	alert("tu as gagné une Chocolatine")
}
	else if(popup < article.prix){
		alert("Tu es en manque de confiance en toi, c'est plus haut")
}
	else if(popup < article.prix){
		alert("tu as des goûts de riches, calme toi sur les prix.")
}
	else if(popup = number){
		alert("Tu es censé donner un prix pas un mot")
}