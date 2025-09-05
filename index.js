var domanda, scelto;

domanda = [["Il nome di fernando è fernando", true], ["zucc", false], ["ciao", false], ["nlackda", true], ["1", true], ["2312313", true], ["3444444", true], ["7777", true]];

document.addEventListener('DOMContentLoaded', function () {
    scegliDomande();

});


var a, b, c;


function scegliDomande() {

    const numdomande = 7;

    a = Math.round(Math.random() * numdomande);
    b = Math.round(Math.random() * numdomande);
    c = Math.round(Math.random() * numdomande);



    while ((a == b || a == c || b == c) && (!a || !b || !c)) {
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
        alert("HAI GIA FINITO QUESTO TEST, SE VUOI PUOI PROVARE A FARNE UN ALTRO (il risultato di questo non camgierà)");
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
