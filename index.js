var miaVar=true;

function MostraS(){
    if(miaVar){
        document.getElementById("lista").style.visibility="visible";
        miaVar=false;
    }
    else{
        document.getElementById("lista").style.visibility="hidden";
        miaVar=true;
    }
}

