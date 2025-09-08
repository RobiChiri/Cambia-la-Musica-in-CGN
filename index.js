var elenco;
var visible = false;

/*per facilitare forse aggiungere altre cose (ex: facilitatore ecc)*/

elenco = [["", ""],["Obbiettivo", "Per una efficace riuscita del meeting l&apos;organizzatore deve definire chiaramente il tipo di riunione e l&apos;obiettivo che desidera raggiungere, esplicitare l&apos;ODG, il numero di partecipanti e i loro ruoli."], ["Tipologia di Meeting", "Per una efficace riuscita del meeting l’organizzatore deve definire chiaramente il tipo di riunione e l’obiettivo che desidera raggiungere, esplicitare l’ODG, il numero di partecipanti e i loro ruoli."], ["ODG", "Per una efficace riuscita del meeting l’organizzatore deve definire chiaramente il tipo di riunione e l’obiettivo che desidera raggiungere, esplicitare l’ODG, il numero di partecipanti e i loro ruoli."], ["Durata & Tempi", "Definire poi con cura la durata del meeting e le tempistiche dell’ODG, il luogo e la strumentazione idonea."], ["Persone giuste", "Per una efficace riuscita del meeting l’organizzatore deve definire chiaramente il tipo di riunione e l’obiettivo che desidera raggiungere, esplicitare l’ODG, il numero di partecipanti e i loro ruoli."], ["Documentazione preparatoria", "Predisporre infine la documentazione necessaria per la preparazione dei partecipanti ed inviare per tempo l’invito del meeting"], ["Luogo", "Definire poi con cura la durata del meeting e le tempistiche dell’ODG, il luogo e la strumentazione idonea."], ["Strumenti", "Definire poi con cura la durata del meeting e le tempistiche dell’ODG, il luogo e la strumentazione idonea."], ["Facilitare", "Verrà definito chi farà il facilitatore e chi verbalizzerà."], ["Prendere decisioni", "Si impegneranno a non manifestare il proprio ego personale e a collaborare concretamente per raggiungere le decisioni inerenti l'obiettivo della riunione"], ["Recapo con To-Do", "A conclusione del meeting l’organizzatore farà un recap delle decisioni prese, del To-Do"], ["Valutare il Meeting", "Infine inviterà i partecipanti ad esprimere la valutazione del meeting."], ["Ringraziare", "ringrazierà i partecipanti per il tempo e l’impegno dedicato alla riunione."], ["Invio Report", "verbalizzatore sintetizzerà le idee emerse senza interpretare e rielaborerà il To-Do in un report da inviare al termine della riunione a tutti i partecipanti."], ["Verifica To-Do e Feedback", "verbalizzatore sintetizzerà le idee emerse senza interpretare e rielaborerà il To-Do in un report da inviare al termine della riunione a tutti i partecipanti."]];

var last = -1;

function NotaClick(posizione) {
    const audio = [document.getElementById("musica"), document.getElementById("Nota1"), document.getElementById("Nota2"), document.getElementById("Nota3"), document.getElementById("Nota4"), document.getElementById("Nota5"), document.getElementById("Nota6"), document.getElementById("Nota7"), document.getElementById("Nota8"), document.getElementById("Nota9") , document.getElementById("Nota10"), document.getElementById("Nota11"), document.getElementById("Nota12"), document.getElementById("Nota13"), document.getElementById("Nota14"), document.getElementById("Nota15")];

    audio[posizione].play();
    if (posizione == 0) {
        return;
    }

    const testoTab = document.getElementById("kw"+posizione);
    const testoReal = testoTab.textContent;
    const descriz = document.getElementById("testocentrale");
    const descreal = descriz.textContent;

    //console.log(testoReal+ " "+posizione+ " " + elenco[posizione][0]);
    if(visible){
        const testoTabLast = document.getElementById("kw"+last);
        const testoReal2 = testoTabLast.textContent;
        const testoGrassetto = testoReal2.replace(elenco[last][0],"<p>"+elenco[last][0]+"</p>");
        testoTabLast.innerHTML = testoGrassetto;

        const descrGrassetto = descreal.replace(elenco[last][1],"<p>"+elenco[last][0]+"</p>");
        descriz.innerHTML = descrGrassetto;

        if(last == posizione){
            visible = false;
            return;
        }

        const testoGrassetto2 = testoReal.replace(elenco[posizione][0], "<p><b>"+elenco[posizione][0]+"</b></p>");
        testoTab.innerHTML = testoGrassetto2;

        const descrGrassetto2 = descriz.textContent.replace(elenco[posizione][1], "<p><b>"+elenco[posizione][1]+"</b></p>");
        descriz.innerHTML = descrGrassetto2;
    }else{
        const testoGrassetto = testoReal.replace(elenco[posizione][0], "<p><b>"+elenco[posizione][0]+"</b></p>");
        testoTab.innerHTML = testoGrassetto;

        const descrGrassetto2 = descreal.replace(elenco[posizione][1], "<b>"+elenco[posizione][1]+"</b>");
        descriz.innerHTML = descrGrassetto2;

        visible=true;
    }
    last = posizione;
}