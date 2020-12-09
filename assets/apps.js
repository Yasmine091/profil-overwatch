document.getElementById("profile").style.display = "none";

function checkThis(champ) {

    let input = champ;
    let domatch = /^[a-zA-Z]+$/.test(input.value);

    if (input.value != "" && domatch == true) {
        input.style.border = "2px solid green";
    }
    else {
        input.style.border = "2px solid red";
    }

}

function checkTag(battletag) {
    let tag = battletag;
    let match = /^[a-zA-Z0-9#]+$/.test(tag.value);
    let valid = tag.value.includes("#");

    if (tag.value != "" && match == true && valid == true) {
        tag.style.border = "2px solid green";
    }
    else {
        tag.style.border = "2px solid red";
    }


}


function profile(plat, reg, tag) {
    let result = "https://ow-api.com/v1/stats/" + plat + "/" + reg + "/" + tag + "/profile";
    return result;
}

const OverwatchAPI = () => {

    document.getElementById("formulaire").style.display = "none";
    document.getElementById("profile").style.display = "block";

    var reqHttp = new XMLHttpRequest(); // requête HTTP vers le serveurs

    reqHttp.onreadystatechange = function () { // instructions a suivre pour traiter les infos reçues (réponse du serveur)


        if (reqHttp.readyState === XMLHttpRequest.DONE) {// si j'ai une réponse du serveur faire ceci

            const profile = JSON.parse(reqHttp.responseText); // passer au format JSON

            const ul = document.getElementById("stats");

            function showContent(content) {
                let li = document.createElement("li");
                li.style.listStyle = "none";
                li.innerHTML = content;
                ul.appendChild(li);
            }

            showContent("<h1>" + profile["name"] + "</h1>");
            showContent("<h2>Statistiques</h2>");
            showContent("<b>Parties jouées : </b>" + profile["competitiveStats"]["games"]["played"]);
            showContent("<b>Classement : </b>" + profile["level"]);
            showContent("<b>Nombre de victoires : </b>" + profile["gamesWon"]);
            showContent("<b>Nombre de défaites : </b>" + profile["competitiveStats"]["games"]["played"]);


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