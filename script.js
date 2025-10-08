function canviNom(){
    let nom = prompt ("¿COMO QUIERES LLAMARTE?")
    document.getElementById("nom").innerHTML = "NOM: "+nom;
}

function canviFoto(){
    let foto = prompt ("¿QUÉ QUIERES SER?")
    document.getElementById("foto").src = foto
}

function harryPotter(){
    document.getElementById("foto").style = "display:none"
   
}

function canviaFons(){
    let body = document.getElementsByTagName("body")[0]
    let foto = prompt("¿DÓNDE QUIERES VIAJAR?")
    body.style = "background-image: url('"+foto+"'); background-size: cover;";
}

function tradueix(){
    let body = document.getElementsByTagName("body")^[0]
    body.style = "font-family: 'Times New Roman', Times, serif;"
}

function afegirInfo(){
    let llista = document.getElementById("expL");
    let element = document.createElement("li")
    element.innerHTML = prompt("¿QUÉ QUIERES AÑADIR")
    llista.appendChild(element)
}

function desapareix(){
    document.getElementById("boody").style = "display:none"
   
}

function main(){
    document.getElementById("foto").style = "width:800px"

}