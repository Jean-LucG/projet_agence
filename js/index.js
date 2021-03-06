

let template = document.querySelector("#destination");
for (const k of Tab) {
    let clone = document.importNode(template.content, true);
    newContent = clone.firstElementChild.innerHTML
        .replace(/{{image}}/g, "../images/"+k.image)
        .replace(/{{lieu}}/g, k.lieu)
        .replace(/{{prix}}/g, k.prix)
        .replace(/{{id}}/g,"reservation.html#"+String(k.id));
        clone.firstElementChild.innerHTML = newContent
        document.body.appendChild(clone);
}

