var miaVar=1;

function Mostra(){
    if(miaVar===1){
        document.getElementById("listaF").style.visibility="visible";
        document.getElementById("listaC").style.visibility="visible";
        document.getElementById("listaD").style.visibility="visible";
        miaVar=0;
    }
    else if(miaVar===0){
        document.getElementById("listaF").style.visibility="hidden";
        document.getElementById("listaC").style.visibility="hidden";
        document.getElementById("listaD").style.visibility="hidden";
        miaVar=1;
    }
}
