let initBattleTag = document.getElementById("battletag").value;
let battletag = initBattleTag.replace("#", "-");

let initNom = document.getElementById("nom").value;
let initPrenom = document.getElementById("prenom").value;

// function conforme(initNom , initPrenom) {
//     for (initNom && initPrenom )
// }

function profile(plat, reg, tag) {
    let result = "https://ow-api.com/v1/stats/" + plat + "/" + reg + "/" + tag + "/profile";
    return result;
}

var reqHttp = new XMLHttpRequest(); // requête HTTP vers le serveurs

reqHttp.onreadystatechange = OverwatchAPI = () => { // instructions a suivre pour traiter les infos reçues (réponse du serveur)

    
    if (reqHttp.readyState === XMLHttpRequest.DONE) {// si j'ai une réponse du serveur faire ceci
        console.log(reqHttp.responseText)
        const profile = JSON.parse(reqHttp.responseText); // passer au format JSON

        console.log(profile["name"], profile); // console log pour récuperer le battletag



    }

};
reqHttp.open("GET", profile("pc", "eu", "Tyra-22283"), true);
reqHttp.send();

