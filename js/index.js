class Destination {
    constructor (lieu, prix, image, id) {
        this.lieu = lieu;
        this.prix = prix;
        this.image = image;
        this.id = id;
    }
}

let lyon = new Destination('Lyon', 300, 'Lyon.jpg', 0);
let pyongyang = new Destination('Pyongyang', 617, 'Pyongyang.jpg', 1);
let chernobyl = new Destination('Chernobyl', 666, 'Chernobyl.jpg', 2);
let paris = new Destination('Paris',13,'Paris.jpg',3)

Tab = [lyon, pyongyang, chernobyl,paris];

let template = document.querySelector("#destination");
for (const k of Tab) {
    let clone = document.importNode(template.content, true);
    newContent = clone.firstElementChild.innerHTML
        .replace(/{{image}}/g, "../images/"+k.image)
        .replace(/{{lieu}}/g, k.lieu)
        .replace(/{{prix}}/g, k.prix);
        clone.firstElementChild.innerHTML = newContent
        document.body.appendChild(clone);
}

