var miaVar=true;

function MostraF(){
    if(miaVar){
        document.getElementById("listaF").style.visibility="visible";
        document.getElementById("listaC").style.visibility="visible";
        document.getElementById("listaD").style.visibility="visible";
        miaVar=false;
    }
    else{
        document.getElementById("listaF").style.visibility="hidden";
        document.getElementById("listaC").style.visibility="hidden";
        document.getElementById("listaD").style.visibility="hidden";
        miaVar=true;
    }
}
