
/* SIDEBAR */

var miaVarS=true;

function MostraS(){
    if(miaVarS){
        document.getElementById("lista").style.visibility="visible";
        miaVarS=false;
    }
    else{
        document.getElementById("lista").style.visibility="hidden";
        miaVarS=true;
    }
}

/* CENTRAL */

var elenco;
var visible = false;

/*per facilitare forse aggiungere altre cose (ex: facilitatore ecc)*/

elenco = [["", ""], ["Obbiettivo", "Per una efficace riuscita del meeting l\'organizzatore deve definire chiaramente il tipo di riunione e l\'obiettivo che desidera raggiungere, esplicitare l\'ODG, il numero di partecipanti e i loro ruoli."], ["Tipologia di Meeting", "Per una efficace riuscita del meeting l\'organizzatore deve definire chiaramente il tipo di riunione e l\'obiettivo che desidera raggiungere, esplicitare l\'ODG, il numero di partecipanti e i loro ruoli."], ["ODG", "Per una efficace riuscita del meeting l\'organizzatore deve definire chiaramente il tipo di riunione e l\'obiettivo che desidera raggiungere, esplicitare l\'ODG, il numero di partecipanti e i loro ruoli."], ["Durata & Tempi", "Definire poi con cura la durata del meeting e le tempistiche dell\'ODG, il luogo e la strumentazione idonea."], ["Persone giuste", "Per una efficace riuscita del meeting l\'organizzatore deve definire chiaramente il tipo di riunione e l\'obiettivo che desidera raggiungere, esplicitare l\'ODG, il numero di partecipanti e i loro ruoli."], ["Documentazione preparatoria", "Predisporre infine la documentazione necessaria per la preparazione dei partecipanti ed inviare per tempo l\'invito del meeting"], ["Luogo", "Definire poi con cura la durata del meeting e le tempistiche dell\'ODG, il luogo e la strumentazione idonea."], ["Strumenti", "Definire poi con cura la durata del meeting e le tempistiche dell\'ODG, il luogo e la strumentazione idonea."], ["Facilitare", "Verrà definito chi farà il facilitatore e chi verbalizzerà."], ["Prendere decisioni", "Si impegneranno a non manifestare il proprio ego personale e a collaborare concretamente per raggiungere le decisioni inerenti l'obiettivo della riunione"], ["Recap con To-Do", "A conclusione del meeting l\'organizzatore farà un recap delle decisioni prese, del To-Do (chi fa che cosa e in che tempi)"], ["Valutare il Meeting", "Infine inviterà i partecipanti ad esprimere la valutazione del meeting."], ["Ringraziare", "ringrazierà i partecipanti per il tempo e l\'impegno dedicato alla riunione."], ["Invio Report", "verbalizzatore sintetizzerà le idee emerse senza interpretare e rielaborerà il To-Do in un report da inviare al termine della riunione a tutti i partecipanti."], ["Verifica To-Do e Feedback", "verbalizzatore sintetizzerà le idee emerse senza interpretare e rielaborerà il To-Do in un report da inviare al termine della riunione a tutti i partecipanti."]];

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

    //console.log(elenco[posizione][1]);
    
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

/*FOOTER*/
var miaVarF=true;

function MostraF(){
    if(miaVarF){
        document.getElementById("listaF").style.visibility="visible";
        document.getElementById("listaC").style.visibility="visible";
        document.getElementById("listaD").style.visibility="visible";
        miaVarF=false;
    }
    else{
        document.getElementById("listaF").style.visibility="hidden";
        document.getElementById("listaC").style.visibility="hidden";
        document.getElementById("listaD").style.visibility="hidden";
        miaVarF=true;
    }
}
var domanda, scelto;

domanda = [["Le fasi di una riunione sono due: svolgimento e chiusura", false], ["Per mantenere il ritmo giusto bisogna interrompere molto spesso per far vedere di star partecipando", false], ["Il nostro proposito nobile è come una bussola", true], ["Non bisogna avere un unico obiettivo chiaro ma molti obiettivi confusi da andare a discutere in sede di meeting", false], ["Il facilitatore è colui che andrà a verbalizzare le idee emerse e rielaborerà il To-Do", false], [" È sempre opportuno fare una riunione", false], ["È importante scegliere un luogo adatto per la riunione", true], ["I meeting sono un insieme di accordi", true], ["Lavorare in gruppo porta più frutti perché porta meno distrazioni", true],["Non aspettare che le cose cambino da sole comincia a fare la tua parte", true],];

document.addEventListener('DOMContentLoaded', function () {
    scegliDomande();

});


var a, b, c;


function scegliDomande() {

    const numdomande = 9;

    a = Math.round(Math.random() * numdomande);
    b = Math.round(Math.random() * numdomande);
    c = Math.round(Math.random() * numdomande);



    while ((a == b || a == c || b == c) /*&& (!a || !b || !c)*/) {  //la seconda condizione porta un probabile errore perchè bisogna metter || al posto del &&
        a = Math.round(Math.random() * numdomande);
        b = Math.round(Math.random() * numdomande);
        c = Math.round(Math.random() * numdomande);
    }

    console.log(a + " " + b + " "+ c);

    var domanda1 = document.getElementById("domanda1");
    var domanda2 = document.getElementById("domanda2");
    var domanda3 = document.getElementById("domanda3");

    domanda1.textContent = domanda[a][0];
    domanda2.textContent = domanda[b][0];
    domanda3.textContent = domanda[c][0];
}


var cliccato = false;

function controllaRisultato() {

    if(cliccato){
        alert("HAI GIA FINITO QUESTO TEST, SE VUOI PUOI PROVARE A FARNE UN ALTRO (il risultato di questo non cambierà)");
        return;
    }

    cliccato = true;
    const radioButtons1 = document.querySelectorAll('input[name="risposta1"]');
    const radioButtons2 = document.querySelectorAll('input[name="risposta2"]');
    const radioButtons3 = document.querySelectorAll('input[name="risposta3"]');

    var Border1 = document.getElementById("domanda1").parentElement.style.borderColor;
    var Border2 = document.getElementById("domanda2").parentElement.style.borderColor;
    var Border3 = document.getElementById("domanda3").parentElement.style.borderColor;

    for (var i = 0; i < 2; i++) {
        if (radioButtons1[i].checked) {
            if ((radioButtons1[i].getAttribute('value') == "vero" && domanda[a][1]) || (radioButtons1[i].getAttribute('value') == "falso" && !domanda[a][1])) {
                document.getElementById("domanda1").parentElement.style.borderColor = 'lightgreen';
                /*alert("ciao1" + radioButtons1[i].getAttribute('value'));*/
            } else {
                document.getElementById("domanda1").parentElement.style.borderColor = 'red';
            }

        } else {
            if (i == 1 && document.getElementById("domanda1").parentElement.style.borderColor != 'lightgreen' && document.getElementById("domanda1").parentElement.style.borderColor != 'red') {
                document.getElementById("domanda1").parentElement.style.borderColor = 'yellow';
            }
        }

        if (radioButtons2[i].checked) {
            if ((radioButtons2[i].getAttribute('value') == "vero" && domanda[b][1]) || (radioButtons2[i].getAttribute('value') == "falso" && !domanda[b][1])) {
                document.getElementById("domanda2").parentElement.style.borderColor = 'lightgreen';
                /*alert("ciao2" + radioButtons2[i].getAttribute('value'));*/
            } else {
                document.getElementById("domanda2").parentElement.style.borderColor = 'red';
            }
        } else {
            if (i == 1 && document.getElementById("domanda2").parentElement.style.borderColor != 'lightgreen' && document.getElementById("domanda2").parentElement.style.borderColor != 'red') {
                document.getElementById("domanda2").parentElement.style.borderColor = 'yellow';
            }

        }

        if (radioButtons3[i].checked) {
            if ((radioButtons3[i].getAttribute('value') == "vero" && domanda[c][1]) || (radioButtons3[i].getAttribute('value') == "falso" && !domanda[c][1])) {
                document.getElementById("domanda3").parentElement.style.borderColor = 'lightgreen';
                /*alert("ciao3" + radioButtons3[i].getAttribute('value'));*/
            } else {
                document.getElementById("domanda3").parentElement.style.borderColor = 'red';
            }

        } else {
            if (i == 1 && document.getElementById("domanda3").parentElement.style.borderColor != 'lightgreen' && document.getElementById("domanda3").parentElement.style.borderColor != 'red') {
                document.getElementById("domanda3").parentElement.style.borderColor = 'yellow';
            }

        }

    }

    var risultatoScritta = document.getElementById("risultato");
    if (document.getElementById("domanda1").parentElement.style.borderColor == 'lightgreen' && document.getElementById("domanda2").parentElement.style.borderColor == 'lightgreen' && document.getElementById("domanda3").parentElement.style.borderColor == 'lightgreen') {
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
