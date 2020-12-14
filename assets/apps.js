document.getElementById("profile").style.display = "none";
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let bTag = document.getElementById("battletag");

let error = document.getElementById("error");
error.style.display = "none";

let button = document.getElementById("send");
button.disabled = true; 


// vérifier que tous les champs sont bons
function checkForm() {

    let isCorrect = "2px solid green";
    
    // si tout est bon activer le bouton
    if(nom.style.border == isCorrect && prenom.style.border == isCorrect && bTag.style.border == isCorrect){
        button.disabled = false;
    }
    
    else { // si qlq chose ne va pas
        button.disabled = true;
    }
}


function checkThis(champ) {

    let input = champ;
    let domatch = /^[a-zA-Z]+$/.test(input.value);
    let inpVal = input.value;

    if (input.value != "" && domatch == true && inpVal.length >= 3 && inpVal.length <= 12) {
        input.style.border = "2px solid green";
        error.style.display = "none";
        return true;
    }
    else {
        input.style.border = "2px solid red";
        error.style.display = "block";
        error.innerHTML = "Erreur, le " + input.name + " doit comprendre entre 3 et 12 caractères, et ne peut contenir que des lèttres.";
        return false;
    }

}

function checkTag(battletag) {

    let tag = battletag;

    let match = /^[a-zA-Z0-9#]+$/.test(tag.value);
    let valid = tag.value.includes("#");

    let tagVal = tag.value;

    if (tag.value != "" && match == true && valid == true && tagVal.length >= 3 && tagVal.length <= 12) {
        tag.style.border = "2px solid green";
        error.style.display = "none";
        return true;
    }
    else {
        tag.style.border = "2px solid red";
        error.style.display = "block";
        error.innerHTML = "Erreur, le " + tag.name + " doit comprendre entre 3 et 12 caractères, des lèttres, des chiffres et un #.";
        return false;
    }


}

function profile(plat, reg, tag) {
    let result =
    "https://ow-api.com/v1/stats/" + plat + "/" + reg + "/" + tag + "/complete";
    return result;
}

const OverwatchAPI = () => {

    error.style.display = "none";
    var reqHttp = new XMLHttpRequest(); // requête HTTP vers le serveurs
    
    reqHttp.onreadystatechange = function () { // instructions a suivre pour traiter les infos reçues (réponse du serveur)
        
        
        if (reqHttp.readyState === XMLHttpRequest.DONE && reqHttp.status == 200) {// si j'ai une réponse du serveur faire ceci
        
        document.getElementById("formulaire").style.display = "none";
        document.getElementById("profile").style.display = "block";

            const profile = JSON.parse(reqHttp.responseText);

            const ul = document.getElementById("stats");

            function showContent(content) {
                
                let li = document.createElement("li");
                li.style.listStyle = "none";
                li.innerHTML = content;
                ul.appendChild(li);
                
            }

            showContent("<h1>" + profile["name"] + "</h1>");
            showContent("<h2>Statistiques</h2>");
            showContent("<b>Parties jouées : </b>" + profile["quickPlayStats"]["careerStats"]["allHeroes"]["game"]["gamesPlayed"]);
            showContent("<b>Classement : </b>" + profile["rating"]);
            showContent("<b>Nombre de victoires : </b>" + profile["quickPlayStats"]["careerStats"]["allHeroes"]["game"]["gamesWon"]);
            showContent("<b>Nombre de défaites : </b>" + profile["quickPlayStats"]["careerStats"]["allHeroes"]["game"]["gamesLost"]);


        }
        else {
            error.style.display = "block";
            error.innerHTML = "Erreur, ce Battletag n'existe pas.";
        }

    };
    let initBattleTag = document.getElementById("battletag").value;
    let battletag = initBattleTag.replace("#", "-");

    reqHttp.open("GET", profile("pc", "eu", battletag), true);
    reqHttp.send();
};

function goBack() {
    let ul = document.getElementById("stats");
    document.getElementById("formulaire").style.display = "block";
    document.getElementById("profile").style.display = "none";
    ul.innerHTML = '';
}