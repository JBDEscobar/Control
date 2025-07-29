function header() {
    let header = document.createElement("header");


    let div = document.createElement("div")
    header.appendChild(div)
    div.className = "div1"

    let h2 = document.createElement("h2")
    h2.innerText = "JDB Escobar"
    h2.className = "h22"
    div.appendChild(h2)

    let img = document.createElement("img")
    img.className = "img"
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png"
    div.appendChild(img)






    return header;

}

export { header }