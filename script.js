var words = ["dragon", "flemme", "pétrichor", "dystopie", "oraison", "smaragdin", "hyalin", "empyrée", "bleu", "coder", "manger",
    "jouer", "dormir", "meh", "monstre", "console","triskaidékaphobie"];
var i;
var word = document.getElementById("word");
var bien = 0;
var random;
var wordGuess;
var chain = "";
var letter = "";
var champ = document.getElementById("letter");
var getLetter;
var letterBlock = document.getElementById("letterBlock");
var tries;
var utilize = [];
var resultDisplay = document.getElementById("results");

random = Math.floor(Math.random()*words.length);
wordGuess = words[random];
console.log(wordGuess);

function caseLetter() {
    for (var i = 0; i < wordGuess.length; i++){
        var div = document.createElement('div');
        div.style.display = "inline-block";
        div.className = "letter";
        letterBlock.appendChild(div);
    }
    getLetter = document.getElementsByClassName("letter");
}

function reload() {
    document.location.reload(true);
}

function checkWin (){
    document.querySelector("h5").style.display = "none";
    document.getElementById("letterChamp").style.display = "none";
    document.getElementById("letter").style.display = "none";
    document.getElementById("check").style.display = "none";
    document.getElementById("results").innerHTML = "Le mot à deviner était bien : " + wordGuess+ "<br><br>Le jeu va redémarrer " +
        "automatiquement";
    setTimeout(reload, 6000)
}

function checkLose (){
    if (tries === 0){
        document.querySelector("h5").style.display = "none";
        document.getElementById("letterChamp").style.display = "none";
        document.getElementById("letter").style.display = "none";
        document.getElementById("check").style.display = "none";
        display("Vous avez perdu, le mot à deviner était : " + wordGuess + "<br><br>Le jeu va redémarrer " +
            "automatiquement");
        setTimeout(reload, 6000)
    }
}

function beforePlay (){
    document.getElementById("difficulty").style.display = "none";
    document.querySelector("h4").style.display = "none";
    document.querySelector("h5").innerHTML = "Mot à deviner";
    document.getElementById("letterChamp").style.display = "block";
    document.getElementById("letter").style.display = "inline";
    document.getElementById("check").style.display = "inline";
}

function letterUtilized () {
    document.getElementById("lettersUtilized").innerHTML = utilize + ", ";
}

function display (P1){
    resultDisplay.innerHTML = P1
}

document.getElementById("veryEasy").addEventListener("click", function () {
    beforePlay();
    tries = 10;
    caseLetter();
    display("Il vous reste "+tries+" essais ...")
});

document.getElementById("normal").addEventListener("click", function () {
    beforePlay();
    tries = 8;
    caseLetter();
    display("Il vous reste "+tries+" essais ...")
});

document.getElementById("easy").addEventListener("click", function () {
    beforePlay();
    tries = 6;
    caseLetter();
    display("Il vous reste "+tries+" essais ...")
});

document.getElementById("hard").addEventListener("click", function () {
    beforePlay();
    tries = 4;
    caseLetter();
    display("Il vous reste "+tries+" essais ...")
});

document.getElementById("goodLuck").addEventListener("click", function () {
    beforePlay();
    tries = 2;
    caseLetter();
    display("Il vous reste "+tries+" essais ...")
});

document.getElementById("impossible").addEventListener("click", function () {
    beforePlay();
    tries = 1;
    caseLetter();
    display("Il vous reste "+tries+" essais ...")
});


document.getElementById("check").addEventListener("click", function () {
    letter = champ.value;
    if (letter.length === 0 || letter.length > 1){
        console.log("Le champ ne peut-être vide ou contenir plus d'une lettre")
    } else {
        if (utilize.indexOf(letter) > -1){
            console.log("Lettre déjà utilisée");
            tries --;
        }
        if (wordGuess.indexOf(letter) === -1){
            console.log("Non");
            utilize.push(letter);
            letterUtilized ();
            tries --;
            if (tries < 1){
                checkLose ();
            } else {
                display("MAUVAISE LETTRE<br><br>" +"Il vous reste "+tries+" essais ...")
            }

        }
        if (utilize.indexOf(letter) === -1){
            console.log("Oui");
            for (i = 0; i < wordGuess.length; i++){
                if (wordGuess[i].indexOf(letter) > -1){
                    getLetter[i].innerHTML = wordGuess[i];
                    bien = bien +1;
                    utilize.push(letter);
                    console.log(bien, wordGuess.length);
                    letterUtilized ();
                    if (bien === wordGuess.length){
                        checkWin();
                    } else {
                        display("Bien, le mot contient votre lettre<br><br>" +"Il vous reste "+tries+" essais ...")
                    }


                }
            }
        }
    }
});












