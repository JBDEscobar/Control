function header() {
    let header = document.createElement('header');
    header.className = "header-pap";

    let text = document.createElement('h1'); 
    text.className = "header-tex";
    text.innerText = "Escobar";
    
    let div = document.createElement('div');
    div.className = "header-marcoImg";

    let img = document.createElement('img');
    img.className = "img";
    img.src = "https://imgs.search.brave.com/nMtxfLEqdvjQGF-W__zSobDlq-RDwYQBPz_aKKGn90Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FkL2Nm/LzI1L2FkY2YyNWRm/NjZkOGU4MGQ4OTFh/ZDFjNTc3YTMxZjI0/LmpwZw"
    
    header.appendChild(text);
    header.appendChild(div);  
    div.appendChild(img); 


   
    
    

    return header;
}

export { header }