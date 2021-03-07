var url=window.location.href;
var indice =parseInt(url.substring(url.length - 1,url.length));

document.getElementById("voyage").innerHTML="Voyage à "+String(Tab[indice].lieu);

//valeur test
var nbre_enfants=1;
var nbre_parents=3;
var ptit_dej=1;
//fin valeur test
document.getElementById("prix").innerHTML="Prix Total: "+String(Tab[indice].prix*(nbre_parents+0.4*nbre_enfants)+ptit_dej*12);

