var words = ["dragon", "flemme", "pétrichor", "dystopie", "oraison", "smaragdin", "hyalin", "empyrée", "bleu", "coder", "manger",
    "jouer", "dormir", "meh", "monstre", "console","triskaidékaphobie", "boire", "abime", "baleine", "chat", "dauphin","uriner","bannettes",
    "le-légendaire-cyriak","pull-rose","gougnafier","branquignol","califourchon", "huile","gros","karma","kebab","xenophobie",
    'angle', 'armoire', 'banc', 'bureau', 'cabinet', 'carreau', 'chaise', 'classe', 'clef', 'coin', 'couloir', 'dossier', 'eau',
    'ecole', 'entrer', 'escalier', 'etagere', 'exterieur', 'fenetre', 'interieur', 'lavabo', 'lit', 'marche', 'matelas', 'maternelle',
    'meuble', 'mousse', 'mur', 'peluche', 'placard', 'plafond', 'porte', 'poubelle', 'radiateur', 'rampe', 'rideau', 'robinet',
    'salle', 'salon', 'serrure', 'serviette', 'siege', 'sieste', 'silence', 'sol', 'sommeil', 'sonnette', 'sortie', 'table', 'tableau',
    'tabouret', 'tapis', 'tiroir', 'toilette', 'vitre', 'aller', 'amener', 'apporter', 'appuyer', 'attendre', 'bailler', 'coucher', 'dormir',
    'eclairer', 'emmener', 'emporter', 'entrer', 'fermer', 'frapper', 'installer', 'lever', 'ouvrir', 'presser', 'rechauffer', 'rester', 'sonner',
    'sortir', 'venir', 'absent', 'assis', 'bas', 'haut', 'present', 'gauche', 'droite', 'debout', 'dedans', 'dehors', 'face', 'loin', 'pres', 'tard',
    'tot', 'apres', 'avant', 'contre', 'dans', 'de', 'derriere', 'devant', 'du', 'sous', 'sur', 'crayon', 'stylo', 'feutre', 'mine', 'gomme', 'dessin',
    'coloriage', 'rayure', 'peinture', 'pinceau', 'couleur', 'craie', 'papier', 'feuille', 'cahier', 'carnet', 'carton', 'ciseaux', 'decoupage', 'pliage',
    'pli', 'colle', 'affaire', 'boite', 'casier', 'caisse', 'trousse', 'cartable', 'jeu', 'jouet', 'pion', 'domino', 'puzzle', 'cube', 'perle', 'chose', 'forme',
    'carre', 'rond', 'pate', 'modeler', 'tampon', 'livre', 'histoire', 'bibliotheque', 'image', 'album', 'titre', 'conte', 'dictionnaire', 'magazine', 'catalogue',
    'page', 'ligne', 'mot', 'enveloppe', 'etiquette', 'carte', 'appel', 'affiche', 'alphabet', 'appareil', 'camescope', 'cassette', 'chaine', 'chanson', 'chiffre',
    'contraire', 'difference', 'doigt', 'ecran', 'ecriture', 'film', 'fois', 'foi', 'idee', 'instrument', 'intrus', 'lettre', 'liste', 'magnetoscope', 'main', 'micro',
    'modele', 'musique', 'nom', 'nombre', 'orchestre', 'ordinateur', 'photo', 'point', 'poster', 'pouce', 'prenom', 'question', 'radio', 'sens', 'tambour', 'telecommande',
    'telephone', 'television', 'trait', 'trompette', 'voix', 'xylophone', 'zero', 'chanter', 'chercher', 'choisir', 'chuchoter', 'coller', 'colorier', 'commencer', 'comparer', 'compter',
    'construire', 'continuer', 'copier', 'couper', 'dechirer', 'decoller', 'decorer', 'decouper', 'demolir', 'dessiner', 'dire', 'discuter', 'ecouter', 'ecrire', 'effacer', 'entendre', 'entourer',
    'envoyer', 'faire', 'finir', 'fouiller', 'gouter', 'imiter', 'laisser', 'lire', 'mettre', 'montrer', 'ouvrir', 'parler', 'peindre', 'plier', 'poser', 'prendre', 'preparer', 'ranger', 'reciter',
    'recommencer', 'regarder', 'remettre', 'repeter', 'repondre', 'sentir', 'souligner', 'tailler', 'tenir', 'terminer', 'toucher', 'travailler', 'trier', 'ami', 'attention', 'camarade', 'colere',
    'copain', 'coquin', 'dame', 'directeur', 'directrice', 'droit', 'effort', 'eleve', 'enfant', 'fatigue', 'faute', 'fille', 'garcon', 'gardien', 'madame', 'maitre', 'maitresse', 'mensonge',
    'ordre', 'personne', 'retard', 'joueur', 'sourire', 'travail', 'aider', 'defendre', 'desobeir', 'distribuer', 'echanger', 'expliquer', 'gronder', 'obeir', 'obliger', 'partager', 'preter',
    'priver', 'promettre', 'progres', 'progresser', 'punir', 'quitter', 'raconter', 'expliquer', 'refuser', 'separer', 'blond', 'brun', 'calme', 'curieux', 'different', 'doux', 'enerver', 'gentil',
    'grand', 'handicape', 'inseparable', 'jaloux', 'moyen', 'muet', 'noir', 'nouveau', 'petit', 'poli', 'propre', 'roux', 'sage', 'sale', 'serieux', 'sourd', 'tranquille', 'arrosoir', 'assiette',
    'balle', 'bateau', 'boite', 'bouchon', 'bouteille', 'bulles', 'canard', 'casserole', 'cuillere', 'cuvette', 'douche', 'entonnoir', 'gouttes', 'litre', 'moulin', 'pluie', 'poisson', 'pont',
    'pot', 'roue', 'sac', 'plastique', 'saladier', 'seau', 'tablier', 'tasse', 'trous', 'verre', 'agiter', 'amuser', 'arroser', 'attraper', 'avancer', 'baigner', 'barboter', 'boucher', 'bouger',
    'deborder', 'doucher', 'eclabousser', 'essuyer', 'envoyer', 'couler', 'partir', 'flotter', 'gonfler', 'inonder', 'jouer', 'laver', 'melanger', 'mouiller', 'nager', 'pleuvoir', 'plonger',
    'pousser', 'pouvoir', 'presser', 'recevoir', 'remplir', 'renverser', 'secher', 'serrer', 'souffler', 'tirer', 'tourner', 'tremper', 'verser', 'vider', 'vouloir', 'amusant', 'chaud', 'froid',
    'humide', 'interessant', 'mouille', 'sec', 'transparent', 'moitie', 'autant', 'beaucoup', 'encore', 'moins', 'peu', 'plus', 'trop', 'anorak', 'arc', 'bagage', 'baguette', 'barbe', 'bonnet',
    'botte', 'bouton', 'bretelle', 'cagoule', 'casque', 'casquette', 'ceinture', 'chapeau', 'chaussette', 'chausson', 'chaussure', 'chemise', 'cigarette', 'col', 'collant', 'couronne', 'cravate',
    'culotte', 'echarpe', 'epee', 'fee', 'fleche', 'fusil', 'gant', 'habit', 'jean', 'jupe', 'lacet', 'laine', 'linge', 'lunettes', 'magicien', 'magie', 'maillot', 'manche', 'manteau', 'mouchoir',
    'moufle', 'noeud', 'paire', 'pantalon', 'pied', 'poche', 'prince', 'pyjama', 'reine', 'robe', 'roi', 'ruban', 'semelle', 'soldat', 'sociere', 'tache', 'taille', 'talon', 'tissu', 'tricot', 'uniforme',
    'valise', 'veste', 'vetement', 'changer', 'chausser', 'couvrir', 'deguiser', 'deshabiller', 'enlever', 'habiller', 'lacer', 'porter', 'ressembler', 'clair', 'court', 'etroit', 'fonce', 'joli', 'large',
    'long', 'multicolore', 'nu', 'use', 'bien', 'mal', 'mieux', 'presque', 'aiguille', 'ampoule', 'avion', 'bois', 'bout', 'bricolage', 'bruit', 'cabane', 'carton', 'clou', 'colle', 'crochet', 'elastique',
    'ficelle', 'fil', 'marionnette', 'marteau', 'metal', 'metre', 'morceau', 'moteur', 'objet', 'outil', 'peinture', 'pinceau', 'planche', 'platre', 'scie', 'tournevis', 'vis', 'voiture', 'arracher', 'attacher',
    'casser', 'coudre', 'detruire', 'ecorcher', 'enfiler', 'enfoncer', 'fabriquer', 'mesurer', 'percer', 'pincer', 'reparer', 'reussir', 'servir', 'taper', 'trouer', 'trouver', 'adroit', 'difficile', 'dur', 'facile',
    'lisse', 'maladroit', 'pointu', 'tordu', 'accident', 'aeroport', 'camion', 'engin', 'feu', 'frein', 'fusee', 'garage', 'gare', 'grue', 'helicoptere', 'moto', 'panne', 'parking', 'pilote', 'pneu', 'quai', 'train',
    'virage', 'vitesse', 'voyage', 'wagon', 'zigzag', 'arreter', 'atterrir', 'bouder', 'charger', 'conduire', 'demarrer', 'disparaitre', 'donner', 'ecraser', 'envoler', 'garder', 'garer', 'manquer', 'partir', 'poser',
    'reculer', 'rouler', 'tendre', 'transporter', 'voler', 'abime', 'ancien', 'blanc', 'bleu', 'casse', 'cinq', 'dernier', 'deux', 'deuxieme', 'dix', 'gris', 'gros', 'huit', 'jaune', 'meme', 'neuf', 'pareil', 'premier',
    'quatre', 'rouge', 'sept', 'seul', 'six', 'solide', 'trois', 'troisieme', 'un', 'vert', 'dessus', 'autour', 'vite', 'vers', 'acrobate', 'arret', 'arriere', 'barre', 'barreau', 'bord', 'bras', 'cerceau', 'chaise', 'cheville',
    'chute', 'coeur', 'corde', 'corps', 'cote', 'cou', 'coude', 'cuisse', 'danger', 'doigts', 'dos', 'echasses', 'echelle', 'epaule', 'equipe', 'escabeau', 'fesse', 'filet', 'fond', 'genou', 'gymnastique', 'hanche', 'jambe', 'jeu',
    'mains', 'milieu', 'montagne', 'mur', 'escalade', 'muscle', 'numero', 'ongle', 'parcours', 'pas', 'passerelle', 'pente', 'peur', 'pied', 'plongeoir', 'poignet', 'poing', 'pont', 'signe', 'singe', 'poutre', 'equilibre', 'prise',
    'riviere', 'crocodile', 'roulade', 'pirouette', 'saut', 'serpent', 'sport', 'suivant', 'tete', 'toboggan', 'tour', 'trampoline', 'tunnel', 'ventre', 'accrocher', 'appuyer', 'arriver', 'baisser', 'balancer', 'bondir', 'bousculer',
    'cogner', 'courir', 'danser', 'depasser', 'descendre', 'ecarter', 'escalader', 'gagner', 'gener', 'glisser', 'grimper', 'marcher', 'pattes', 'debout', 'monter', 'montrer', 'pencher', 'percher', 'perdre', 'ramper', 'rater', 'remplacer',
    'respirer', 'retourner', 'revenir', 'sauter', 'soulever', 'suivre', 'tomber', 'transpirer', 'traverser', 'dangeureux', 'epais', 'fort', 'groupe', 'immobile', 'rond', 'serre', 'souple', 'ensemble', 'ici', 'jamais', 'toujours', 'souvent',
    'bagarre', 'balancoire', 'ballon', 'bande', 'bicyclette', 'bille', 'cage', 'ecureuil', 'cerf', 'volant', 'chateau', 'coup', 'cour', 'course', 'echasse', 'flaque', 'eau', 'paix', 'pardon', 'partie', 'pedale', 'pelle', 'pompe', 'preau',
    'raquette', 'rayon', 'recreation', 'sable', 'sifflet', 'signe', 'tas', 'tricycle', 'tuyau', 'velo', 'file', 'rang', 'bagarrer', 'battre', 'cacher', 'cracher', 'creuser', 'crier', 'degonfler', 'dispute', 'empecher', 'galoper', 'hurler',
    'jongler', 'lancer', 'pedaler', 'plaindre', 'pleurer', 'poursuivre', 'proteger', 'saigner', 'salir', 'siffler', 'surveiller', 'trainer', 'trouver', 'fou', 'mechant'];
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

if (wordGuess === "le-légendaire-cyriak"){
    document.getElementById("main").style.backgroundColor = "pink";
    resultDisplay.innerHTML = "Je porte un joli pull rose ;)"
}

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

document.getElementById("veryVeryEasy").addEventListener("click", function () {
    checkWin()
});

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