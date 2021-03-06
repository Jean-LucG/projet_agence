var url=window.location.href;
var indice =parseInt(url.substring(url.length - 1,url.length));






function PrixTotal(){
    Tab[indice].prix*(nbre_parents+0.4*nbre_enfants)+ptit_dej*12
};

document.getElementById("prix").innerHTML=PrixTotal();