var miaVar=1;

function Mostra(){
    if(miaVar===1){
        document.getElementById("lista").style.visibility="visible";
        miaVar=0;
    }
    else if(miaVar===0){
        document.getElementById("lista").style.visibility="hidden";
        miaVar=1;
    }
}

