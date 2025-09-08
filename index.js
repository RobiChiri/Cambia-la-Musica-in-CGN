var elenco;
var visible = false;

/*per facilitare forse aggiungere altre cose (ex: facilitatore ecc)*/

elenco = [["", ""],["Obbiettivo", "DESCRIZIONE"], ["Tipologia di Meeting", "DESCRIZIONE"], ["ODG", "DESCRIZIONE"], ["Durata & Tempi", "DESCRIZIONE"], ["Persone giuste", "DESCRIZIONE"], ["Documentazione preparatoria", "DESCRIZIONE"], ["Luogo", "DESCRIZIONE"], ["Strumenti", "DESCRIZIONE"], ["Facilitare", "DESCRIZIONE"], ["Prendere decisioni", "DESCRIZIONE"], ["Recapo con To-Do", "DESCRIZIONE"], ["Valutare il Meeting", "DESCRIZIONE"], ["Ringraziare", "DESCRIZIONE"], ["Invio Report", "DESCRIZIONE"], ["Verifica To-Do e Feedback", "DESCRIZIONE"]];



const audiosin = document.getElementById("musica");

var last = -1;

function NotaClick(posizione) {
    const audio = [document.getElementById("musica"), false];
    //audiosin.play();
    /*var visible;
    if(document.getElementById("descrizione").style.visibility == "hidden"){
        visible = false;
    }else{
        visible = true;
    }

    document.getElementById("titolo").textContent = elenco[posizione][0];           
    document.getElementById("descrizione").textContent = elenco[posizione][1];
    
    if (visible) {
        visible = false;
        /*alert("CIAO true");
        alert(visible);
        document.getElementById("descrizione").style.visibility = "hidden";
        document.getElementById("titolo").style.visibility = "hidden";
    }else{
        visible = true;
        /*alert("CIAO false");
        alert(visible);
        document.getElementById("descrizione").style.visibility = "visible";
        document.getElementById("titolo").style.visibility = "visible";
    }
    /*alert(visible + " CIAO");*/


    

    if (posizione == 0) {
        return;
    }

    const testoTab = document.getElementById("kw"+posizione);
    const testoReal = testoTab.textContent;
    console.log(testoReal+ " "+posizione+ " " + elenco[posizione][0]);
    if(visible){
        const testoTabLast = document.getElementById("kw"+last);
        testoReal2 = testoTabLast.textContent;
        const testoGrassetto = testoReal2.replace(elenco[last][0],"<p>"+elenco[last][0]+"</p>");
        testoTabLast.innerHTML = testoGrassetto;

        if(last == posizione){
            visible = false;
            return;
        }

        const testoGrassetto2 = testoReal.replace(elenco[posizione][0], "<p><b>"+elenco[posizione][0]+"</b></p>");
        testoTab.innerHTML = testoGrassetto2;
    }else{
        const testoGrassetto = testoReal.replace(elenco[posizione][0], "<p><b>"+elenco[posizione][0]+"</b></p>");
        testoTab.innerHTML = testoGrassetto;
        visible=true;
    }
    last = posizione;
    
    //audio[0].play();
}