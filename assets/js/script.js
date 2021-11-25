

/*
Case Sensitive = reconhece letras maisculas e minusculas

por Tag: grtElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false
let assuntoOk = false
let emailOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%";

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.nodeValue.length < 3){
         txtNome.innerHTML = "Nome Invalido"
        txtNome.style .color = "red"}
        else{
            txtNome.innerHTML = " Nome Valido"
            txtNome.style.color = "green"
            nomeOk = true
           
        }
    
}

function validaEmail() {
    let txtEmail = document.querySelector("email");

    if(email.value0.indexOf("@") == -1 || email.value.indexOf(".") -- -1) {
        txtEmail.innerHTML = "E-mail valido"
    }
    else {
        txtEmail.innerHTML = " E-mail válido"
        txtEmailstyle = "green"
        emailOk = true
}
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#assunto")
   if (assunto.value.length >= 100 ) {
    txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
    txtAssunto.style.color = "red"
   } else {
       txtAssunto.style.display = "none"
       assuntoOk = true
   }
    
    
}
function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "500px"
    mapa.style.height = "500px"
}