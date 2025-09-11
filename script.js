//NAVBAR
var domanda, scelto;

domanda = [["Le fasi di una riunione sono due: svolgimento e chiusura", false], ["Per mantenere il ritmo giusto bisogna interrompere molto spesso per far vedere di star partecipando", false], ["Il nostro proposito nobile è come una bussola", true], ["Non bisogna avere un unico obiettivo chiaro ma molti obiettivi confusi da andare a discutere in sede di meeting", false], ["Il facilitatore è colui che andrà a verbalizzare le idee emerse e rielaborerà il To-Do", false], [" È sempre opportuno fare una riunione", false], ["È importante scegliere un luogo adatto per la riunione", true], ["I meeting sono un insieme di accordi", true], ["Lavorare in gruppo porta più frutti perché porta meno distrazioni", true], ["Non aspettare che le cose cambino da sole comincia a fare la tua parte", true],];

document.addEventListener('DOMContentLoaded', function () {
    scegliDomande();

});


var a, b, c;

function random(max) {
    return Math.round(Math.random() * max);
}


function scegliDomande() {

    const ndom = 9;

    a = random(ndom);
    b = random(ndom);
    c = random(ndom);



    while ((a == b || a == c || b == c) /*&& (!a || !b || !c)*/) {  //la seconda condizione porta un probabile errore perchè bisogna metter || al posto del &&
        a = random(ndom);
        b = random(ndom);
        c = random(ndom);
    }

    //console.log(a + " " + b + " "+ c);

    //debugger;

    var domanda1 = document.getElementById("domanda1");
    var domanda2 = document.getElementById("domanda2");
    var domanda3 = document.getElementById("domanda3");

    domanda1.textContent = domanda[a][0];
    domanda2.textContent = domanda[b][0];
    domanda3.textContent = domanda[c][0];
}

var cliccato = false;


function fieldBase(Border) {
    Border.borderStyle = "groove";
    Border.borderColor = "threedface";
    Border.borderImage = "initial";
}


function checkedTolto(radioButtons) {
    radioButtons.checked = false;
}



function rifai() {
    scegliDomande();
    var Border1 = document.getElementById("domanda1").parentElement.style;
    var Border2 = document.getElementById("domanda2").parentElement.style;
    var Border3 = document.getElementById("domanda3").parentElement.style;

    fieldBase(Border1);
    fieldBase(Border2);
    fieldBase(Border3);

    cliccato = false;

    var risultatoScritta = document.getElementById("risultato");

    risultatoScritta.textContent = "";


    const radioButtons1 = document.querySelectorAll('input[name="risposta1"]');
    const radioButtons2 = document.querySelectorAll('input[name="risposta2"]');
    const radioButtons3 = document.querySelectorAll('input[name="risposta3"]');


    for (var i = 0; i < 2; i++) {
        debugger;
        checkedTolto(radioButtons1[i]);
        checkedTolto(radioButtons2[i]);
        checkedTolto(radioButtons3[i]);
    }
}



//funzione per controllare se un radiobutton è checkato oppure no
function radioChecked(radioButtons, Border, i) {
    if (radioButtons.checked) {
        if ((radioButtons.getAttribute('value') == "vero" && domanda[a][1]) || (radioButtons.getAttribute('value') == "falso" && !domanda[a][1])) {
            Border.borderColor = 'lightgreen';
        } else {
            Border.borderColor = 'red';
        }

    } else {
        if (i == 1 && Border.borderColor != 'lightgreen' && Border.borderColor != 'red') {
            Border.borderColor = 'yellow';
        }
    }
}

function controllaRisultato() {

    if (cliccato) {
        alert("HAI GIA FINITO QUESTO TEST, SE VUOI PUOI PROVARE A FARNE UN ALTRO (il risultato di questo non cambierà)");
        return;
    }

    cliccato = true;
    const radioButtons1 = document.querySelectorAll('input[name="risposta1"]');
    const radioButtons2 = document.querySelectorAll('input[name="risposta2"]');
    const radioButtons3 = document.querySelectorAll('input[name="risposta3"]');



    var Border1 = document.getElementById("domanda1").parentElement.style;
    var Border2 = document.getElementById("domanda2").parentElement.style;
    var Border3 = document.getElementById("domanda3").parentElement.style;

    for (var i = 0; i < 2; i++) {
        debugger;
        radioChecked(radioButtons1[i], Border1, i);
        radioChecked(radioButtons2[i], Border2, i);
        radioChecked(radioButtons3[i], Border3, i);
    }

    var risultatoScritta = document.getElementById("risultato");
    if (Border1.borderColor == 'lightgreen' && Border2.borderColor == 'lightgreen' && Border3.borderColor == 'lightgreen') {
        risultatoScritta.textContent = "BRAVO SEI PASSATO!";
        risultatoScritta.style.color = 'lightgreen';
        risultatoScritta.style.visibility = "visible";
        risultatoScritta.style.display = "block";
    } else {
        risultatoScritta.textContent = "NOO NON SEI PASSATO!";
        risultatoScritta.style.color = 'red';
        risultatoScritta.style.visibility = "visible";
        risultatoScritta.style.display = "block";
    }
}


// CENTRAL 

var elenco;
var visible = false;

/*per facilitare forse aggiungere altre cose (ex: facilitatore ecc)*/

elenco = [["", ""], ["Obbiettivo", "Per una efficace riuscita del meeting l\'organizzatore deve definire chiaramente il tipo di riunione e l\'obiettivo che desidera raggiungere, esplicitare l\'ODG, il numero di partecipanti e i loro ruoli."], ["Tipologia di Meeting", "Per una efficace riuscita del meeting l\'organizzatore deve definire chiaramente il tipo di riunione e l\'obiettivo che desidera raggiungere, esplicitare l\'ODG, il numero di partecipanti e i loro ruoli."], ["ODG", "Per una efficace riuscita del meeting l\'organizzatore deve definire chiaramente il tipo di riunione e l\'obiettivo che desidera raggiungere, esplicitare l\'ODG, il numero di partecipanti e i loro ruoli."], ["Durata & Tempi", "Definire poi con cura la durata del meeting e le tempistiche dell\'ODG, il luogo e la strumentazione idonea."], ["Persone giuste", "Per una efficace riuscita del meeting l\'organizzatore deve definire chiaramente il tipo di riunione e l\'obiettivo che desidera raggiungere, esplicitare l\'ODG, il numero di partecipanti e i loro ruoli."], ["Documentazione preparatoria", "Predisporre infine la documentazione necessaria per la preparazione dei partecipanti ed inviare per tempo l\'invito del meeting."], ["Luogo", "Definire poi con cura la durata del meeting e le tempistiche dell\'ODG, il luogo e la strumentazione idonea."], ["Strumenti", "Definire poi con cura la durata del meeting e le tempistiche dell\'ODG, il luogo e la strumentazione idonea."], ["Facilitare", "Verrà definito chi farà il facilitatore e chi verbalizzerà."], ["Prendere decisioni", "Si impegneranno a non manifestare il proprio ego personale e a collaborare concretamente per raggiungere le decisioni inerenti l'obiettivo della riunione"], ["Recap con To-Do", "A conclusione del meeting l\'organizzatore farà un recap delle decisioni prese, del To-Do (chi fa che cosa e in che tempi)"], ["Valutare il Meeting", "Infine inviterà i partecipanti ad esprimere la valutazione del meeting."], ["Ringraziare", "ringrazierà i partecipanti per il tempo e l\'impegno dedicato alla riunione."], ["Invio Report", "verbalizzatore sintetizzerà le idee emerse senza interpretare e rielaborerà il To-Do in un report da inviare al termine della riunione a tutti i partecipanti."], ["Verifica To-Do e Feedback", "verbalizzatore sintetizzerà le idee emerse senza interpretare e rielaborerà il To-Do in un report da inviare al termine della riunione a tutti i partecipanti."]];

var last = -1;


//se si cambia il testo bisogna cambiare qua !!!
document.addEventListener("DOMContentLoaded", function () {
    const descriz = document.getElementById("testocentrale");
    descriz.textContent = elenco[1][1] + elenco[7][1] + elenco[6][1] + "Il meeting inizierà con un momento di silenzio dove i partecipanti ritrovano la concentrazione per collaborare proficuamente alla riunione." + elenco[9][1] + "partecipanti devono arrivare preparati, aperti a condividere in maniera efficace le loro idee. Eviteranno le distrazioni, mostreranno attenzione e ascolto attivo agli interventi." + elenco[10][1] + "Il facilitatore dovrà agevolare il contributo di tutti, ricondurre nel binario e alla sintesi le discussioni dispersive e fuori focus, attenzionare i tempi e la riformulazione delle espressioni poco chiare, mediare i processi di relazione e far chiarire eventuali malintesi." + elenco[11][1] + " e " + elenco[13][1] + elenco[12][1] + elenco[14][1];
});


function NotaClick(posizione) {
    const audio = [document.getElementById("musica"), document.getElementById("Nota1"), document.getElementById("Nota2"), document.getElementById("Nota3"), document.getElementById("Nota4"), document.getElementById("Nota5"), document.getElementById("Nota6"), document.getElementById("Nota7"), document.getElementById("Nota8"), document.getElementById("Nota9"), document.getElementById("Nota10"), document.getElementById("Nota11"), document.getElementById("Nota12"), document.getElementById("Nota13"), document.getElementById("Nota14"), document.getElementById("Nota15")];

    audio[posizione].play();
    if (posizione == 0) {
        return;
    }

    const testoTab = document.getElementById("kw" + posizione);
    const testoReal = testoTab.textContent;
    const descriz = document.getElementById("testocentrale");
    const descreal = descriz.textContent;

    console.log(elenco[posizione][1]);
    if (visible) {
        const testoTabLast = document.getElementById("kw" + last);
        const testoReal2 = testoTabLast.textContent;
        const testoGrassetto = testoReal2.replace(elenco[last][0], "<p>" + elenco[last][0] + "</p>");
        testoTabLast.innerHTML = testoGrassetto;

        const descrGrassetto = descreal.replace(elenco[last][1], elenco[last][1]);
        descriz.innerHTML = descrGrassetto;

        if (last == posizione) {
            visible = false;
            return;
        }

        const testoGrassetto2 = testoReal.replace(elenco[posizione][0], "<p><b>" + elenco[posizione][0] + "</b></p>");
        testoTab.innerHTML = testoGrassetto2;

        const descrGrassetto2 = descriz.textContent.replace(elenco[posizione][1], "<b>" + elenco[posizione][1] + "</b>");
        descriz.innerHTML = descrGrassetto2;
    } else {
        const testoGrassetto = testoReal.replace(elenco[posizione][0], "<p><b>" + elenco[posizione][0] + "</b></p>");
        testoTab.innerHTML = testoGrassetto;

        const descrGrassetto2 = descreal.replace(elenco[posizione][1], "<b>" + elenco[posizione][1] + "</b>");
        descriz.innerHTML = descrGrassetto2;

        visible = true;
    }
    last = posizione;
}


//FOOTER


var miaVarF = true;

function animazioneF(pos) {
    var tutto = document.getElementById("figlio1").parentElement;
    var title = document.getElementById("title");
    var start = Date.now(); // memorizziamo il momento di partenza

    var timer = setInterval(function () {
        // quanto tempo è passato dall'inizio?
        var timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // completiamo l'animazione dopo 2 secondi
            return;
        }

        // tracciamo l'animazione all'istante timePassed
        draw(timePassed);

    }, 1);

    // via via che timePassed va da 0 a 1000
    // left assume valori che variano tra 0px e 200px
    function draw(timePassed) {
        if (pos) {
            tutto.style.left = 450 - (timePassed / 2.22) + 'px';
            title.style.transform = "rotate(-" + timePassed / 11.1 + "deg)";
            title.style.marginLeft = -(timePassed / 7.69) + 'px';
        } else {
            tutto.style.left = (timePassed / 2.22) + 'px';
            title.style.transform = "rotate(" + (-90 + timePassed / 11.11) + "deg)";
            title.style.marginLeft = -130 + (timePassed / 7.69) + 'px';
        }

    }
}

function MostraF() {
    if (miaVarF) {

        animazioneF(true);

        setTimeout(function () {
            document.getElementById("listaF").style.display = "block";
            document.getElementById("listaC").style.display = "block";
            document.getElementById("listaD").style.display = "block";
            miaVarF = false;
        }, 1000);

    } else {

        animazioneF(false);

        document.getElementById("listaF").style.display = "none";
        document.getElementById("listaC").style.display = "none";
        document.getElementById("listaD").style.display = "none";
        miaVarF = true;
    }

}


//SIDEBAR


var miaVarS = true;



function animazioneS(pos) {
    var tutto = document.getElementById("Generale");
    var start = Date.now(); // memorizziamo il momento di partenza

    var timer = setInterval(function () {
        // quanto tempo è passato dall'inizio?
        var timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // completiamo l'animazione dopo 2 secondi
            return;
        }

        // tracciamo l'animazione all'istante timePassed
        draw(timePassed);

    }, 1);

    // via via che timePassed va da 0 a 1000
    // left assume valori che variano tra 0px e 200px
    function draw(timePassed) {
        if (pos) {
            tutto.style.top = 200 - (timePassed / 5) + 'px';
        } else {
            tutto.style.top = (timePassed / 5) + 'px';
        }

    }
}


function MostraS() {


    if (miaVarS) {


        animazioneS(true)


        setTimeout(function () {
            document.getElementById("BoxLista").style.display = "block";
            miaVarS = false;
        }, 1000);

    }
    else {

        animazioneS(false);

        document.getElementById("BoxLista").style.display = "none";
        miaVarS = true;


    }
}


var stato = [true, true, true];


function animazioneD(pos, numero) {
    var sfondo = document.getElementById("sfondocard" + (numero + 1));
    var start = Date.now(); // memorizziamo il momento di partenza

    var timer = setInterval(function () {
        // quanto tempo è passato dall'inizio?
        var timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // completiamo l'animazione dopo 2 secondi
            return;
        }

        // tracciamo l'animazione all'istante timePassed
        draw(timePassed);

    }, 1);

    // via via che timePassed va da 0 a 1000
    // left assume valori che variano tra 0px e 200px
    function draw(timePassed) {
        if (pos) {
            sfondo.style.height = 300 - (timePassed / 3.33) + 'px';
        } else {
            sfondo.style.height = 0 + (timePassed / 3.33) + 'px';
        }

    }
}

//animazione ancora da fare per i blocchi
function animazioneC(pos, numero) {
    var sfondo = document.getElementById("sfondocard" + (numero + 1));
    var start = Date.now(); // memorizziamo il momento di partenza

    var timer = setInterval(function () {
        // quanto tempo è passato dall'inizio?
        var timePassed = Date.now() - start;

        if (timePassed >= 1000) {
            clearInterval(timer); // completiamo l'animazione dopo 2 secondi
            return;
        }

        // tracciamo l'animazione all'istante timePassed
        draw(timePassed);

    }, 1);

    // via via che timePassed va da 0 a 1000
    // left assume valori che variano tra 0px e 200px
    function draw(timePassed) {
        if (pos) {
            sfondo.style.height = 300 - (timePassed / 3.33) + 'px';
        } else {
            sfondo.style.height = 0 + (timePassed / 3.33) + 'px';
        }

    }
}

function prova(numero) {
    var sfondo = document.getElementById("sfondocard" + (numero + 1));

    if (stato[numero]) {

        switch (numero) {
            case 0:
                document.getElementById("kw1").parentElement.style.visibility = "hidden";
                document.getElementById("kw5").parentElement.style.visibility = "hidden";
                break;
            case 1:
                document.getElementById("ColonnaD2").style.visibility = "hidden";
                document.getElementById("ColonnaS2").style.visibility = "hidden";
                document.getElementById("Centralee").style.visibility = "hidden";
                break;
            case 2:
                document.getElementById("kw14").style.visibility = "hidden";
                document.getElementById("kw15").style.visibility = "hidden";
                break;
        }

        animazioneD(true, numero);
        stato[numero] = false;
        setTimeout(function () {
            sfondo.style.visibility = "hidden";

        }, 1000);

    } else {

        animazioneD(false, numero);

        setTimeout(function () {
             switch (numero) {
                 case 0:
                     document.getElementById("kw1").parentElement.style.visibility = "visible";
                     document.getElementById("kw5").parentElement.style.visibility = "visible";
                     break;
                 case 1:
                     document.getElementById("ColonnaD2").style.visibility = "visible";
                     document.getElementById("ColonnaS2").style.visibility = "visible";
                     document.getElementById("Centralee").style.visibility = "visible";
                     break;
                 case 2:
                     document.getElementById("kw14").style.visibility = "visible";
                     document.getElementById("kw15").style.visibility = "visible";
                     break;
             }
         }, 1000);

        var sfondo = document.getElementById("sfondocard" + (numero + 1)).style.visibility = "visible";
        stato[numero] = true;
    }

    var blocco = document.getElementById("sfondocard1").parentElement;
    var testo = document.getElementById("TestoB");
    var footer = document.getElementById("boxFooter");
    if (!stato[0] && !stato[1] && !stato[2]) {
        testo.style.top = -3 + '%';
        blocco.style.display = "none";
        footer.style.top = -15 + '%';
    } else {
        blocco.style.display = "flex";
        testo.style.top = -30 + '%';
        footer.style.top = 0;
    }

}



