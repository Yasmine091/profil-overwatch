let battletag = document.getElementById("battletag").value;
console.log(battletag);


function profile(plat, reg, tag){
    let result = "https://ow-api.com/v1/stats/" + plat + "/" + reg + "/" + tag + "/profile";
    return result;
}


console.log(profile("pc", "eu", battletag))
const OverwatchAPI = () => {
fetch(profile("pc", "eu", battletag))
    .then(json => json.text())
    .then(data => {
        const profiles = JSON.parse(data);


});
}