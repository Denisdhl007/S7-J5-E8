

// // // ### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements

let myElements = document.getElementById('object').getElementsByTagName('h1, h2');

// // // ### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet

let myObject = {
    nom: 'nicolas',
    age: 18,
}
let myObjectProperties = Object.keys(myObject);
console.log(myObjectProperties);

// // // ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriété

for (var i = 0; i < myObjectProperties.length; i++) {
    console.log(myObjectProperties[i]);
  }

// // // ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet pour y récupérer la valeur de chaque propriétés et fait un console log de ce que cela retourne


// // // ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle


// // // ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4
