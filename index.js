
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


/*per facilitare forse aggiungere altre cose (ex: facilitatore ecc)*/

elenco = [["Obbiettivo", "DESCRIZIONE"], ["Tipologia di Meeting", "DESCRIZIONE"], ["ODG", "DESCRIZIONE"], ["Durata & Tempi", "DESCRIZIONE"], ["Persone giuste", "DESCRIZIONE"], ["Documentazione preparatoria", "DESCRIZIONE"], ["Luogo", "DESCRIZIONE"], ["Strumenti", "DESCRIZIONE"], ["Facilitare", "DESCRIZIONE"], ["Prendere decisioni", "DESCRIZIONE"], ["Recapo con To-Do", "DESCRIZIONE"], ["Valutare il Meeting", "DESCRIZIONE"], ["Ringraziare", "DESCRIZIONE"], ["Invio Report", "DESCRIZIONE"], ["Verifica To-Do e Feedback", "DESCRIZIONE"]];



function NotaClick(posizione) {

    var visible;
    if(document.getElementById("descrizione").style.visibility == "hidden"){
        visible = false;
    }else{
        visible = true;
    }

    document.getElementById("titolo").textContent = elenco[posizione][0];           /*provato con innerHTML, innerText, innerContent : non ci sono errori particolari*/
    document.getElementById("descrizione").textContent = elenco[posizione][1];
    
    if (visible) {
        visible = false;
        /*alert("CIAO true");
        alert(visible);*/
        document.getElementById("descrizione").style.visibility = "hidden";
        document.getElementById("titolo").style.visibility = "hidden";
    }else{
        visible = true;
        /*alert("CIAO false");
        alert(visible);*/
        document.getElementById("descrizione").style.visibility = "visible";
        document.getElementById("titolo").style.visibility = "visible";
    }
    /*alert(visible + " CIAO");*/
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
