var url=window.location.href;
var indice =parseInt(url.substring(url.length - 1,url.length));

document.getElementById("voyage").innerHTML="Voyage à "+String(Tab[indice].lieu);

//valeur test
var nbre_enfants=2;
var nbre_parents=3;
var ptit_dej=1;



function PrixTotal(){
    document.getElementById("prix").innerHTML="Prix Total: "+String(Tab[indice].prix*(nbre_parents+0.4*nbre_enfants)+ptit_dej*12)
};
PrixTotal();
