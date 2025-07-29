export function item() {
    let item = document.createElement("div");
    item.className = "item"

    let titu = document.createElement('titu');
    titu.className = "item-titulo";                         
    titu.innerText = "Travis Scott";
    item.appendChild(titu);            
    
    let img = document.createElement('img');
    img.className = "item-imagem";
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZT4W_D6chEsJBXwihHCsLqt7Mrv17o604HQ&s";
    item.appendChild(img);

    let desc = document.createElement('desc');
    desc.className = "item-descricao";
    desc.innerText = "Travis Scott, cuyo nombre real es Jacques Bermon Webster II, es un rapero, cantante, compositor y productor estadounidense, conocido por su estilo musical fusionado con trap, hip hop y psicodelia.";
    item.appendChild(desc);



    return item;                        
}