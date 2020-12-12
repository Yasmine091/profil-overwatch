function checkThis(champ) {

    let input = champ;
    let domatch = /^[a-zA-Z]+$/.test(input.value); // conditions de saisie des input

    if (input.value != "" && domatch == true) {
        input.style.border = "2px solid green";
    } else {
        input.style.border = "2px solid red";
    }
}
//

function checkTag(battletag) {
    let tag = battletag;
    let match = /^[a-zA-Z0-9#]+$/.test(tag.value); // conditions de saisie du battletag
    let valid = tag.value.includes("#");

    if (tag.value != "" && match == true && valid == true) {
        tag.style.border = "2px solid green";
    } else {
        tag.style.border = "2px solid red";
    }
}




function recup() {

    let naissance = document.getElementById("naissance").value; // recuperation données du formulaire
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let battletag = document.getElementById("battletag").value;
    let tag = battletag.replace('#', '-');

    fetch('https://ow-api.com/v1/stats/pc/us/' + tag + '/complete') // initialisation de fetch
        .then(res => res.json())
        .then(trololo => {

            // "." peut remplacer [""]
            let pipou = trololo["quickPlayStats"]["careerStats"]["allHeroes"]["game"]["gamesPlayed"];
            let pepou = trololo["rating"];
            let poupi = trololo["quickPlayStats"]["careerStats"]["allHeroes"]["game"]["gamesLost"];
            let popou = trololo["quickPlayStats"]["careerStats"]["allHeroes"]["game"]["gamesWon"];

            $(document).ready(function() {
                $("#flip").click(function() {
                    $("#panel").slideDown("slow");
                });
            });

            let alertNom = document.getElementById('no'); // récupération des données sur le html
            alertNom.innerHTML = nom;

            let alertPrenom = document.getElementById('pr');
            alertPrenom.innerHTML = prenom;

            let alertNaissance = document.getElementById('nais');
            alertNaissance.innerHTML = naissance;

            let alertBattletag = document.getElementById('bt');
            alertBattletag.innerHTML = battletag;

            let alertGamesPlayed = document.getElementById('gamesP');
            alertGamesPlayed.innerHTML = pipou;

            let alertGamesWin = document.getElementById('gamesW');
            alertGamesWin.innerHTML = popou;

            let alertGameslost = document.getElementById('gamesL');
            alertGameslost.innerHTML = poupi;

            let alertRating = document.getElementById('rating');
            alertRating.innerHTML = pepou;
        })
}

////// types d'alertes possibles:

// console.log(naissance, nom, prenom, battletag, pipou, pepou, poupi, popou);


// console.log(battletag, pipou, pepou, poupi, popou);
// window.alert(battletag, pipou, pepou, poupi, popou)

// window.alert(naissance);
// window.alert(nom);
// window.alert(prenom);
// window.alert(battletag);
// window.alert(pipou);
// window.alert(pepou);
// window.alert(poupi);
// window.alert(popou);