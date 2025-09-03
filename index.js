var elenco;
var visible = false;

/*per facilitare forse aggiungere altre cose (ex: facilitatore ecc)*/

elenco = [["Obbiettivo", "DESCRIZIONE"], ["Tipologia di Meeting", "DESCRIZIONE"], ["ODG", "DESCRIZIONE"], ["Durata & Tempi", "DESCRIZIONE"], ["Persone giuste", "DESCRIZIONE"], ["Documentazione preparatoria", "DESCRIZIONE"], ["Luogo","DESCRIZIONE"], ["Strumenti","DESCRIZIONE"], ["Facilitare","DESCRIZIONE"], ["Prendere decisioni","DESCRIZIONE"], ["Recapo con To-Do","DESCRIZIONE"], ["Valutare il Meeting","DESCRIZIONE"], ["Ringraziare","DESCRIZIONE"], ["Invio Report","DESCRIZIONE"], ["Verifica To-Do e Feedback","DESCRIZIONE"]];



function NotaClick(posizione){
    document.getElementById("titolo").innerHTML = elenco[posizione][0];
    document.getElementById("descrizione").innerHTML = elenco[posizione][1];
    
    if(visible){
        visible = false;
        /*document.getElementById("descrizione").style.display = "none";*/
        document.getElementById("descrizione").style.visibility = "hidden";
        document.getElementById("titolo").style.visibility = "hidden";
    }else{
        visible = true
        document.getElementById("descrizione").style.visibility = "visible";
        document.getElementById("titolo").style.visibility = "visible";
    }

}