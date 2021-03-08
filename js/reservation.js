var str =window.location.search;
var indice=parseInt(str.substring(4,str.length));
document.getElementById("voyage").innerHTML="Voyage à "+String(Tab[indice].lieu);

//valeur test
var nbre_enfants=1;
var nbre_parents=3;
var ptit_dej=1;
//fin valeur test
function PrixTotal(){
var prix_total="Prix Total: "+String(((Tab[indice].prix+ptit_dej*12)*(nbre_parents+0.4*nbre_enfants)).toFixed(2))+"&euro;";

document.getElementById("prix").innerHTML=prix_total;
};
PrixTotal()