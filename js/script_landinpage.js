let msg = document.getElementById('msg')
let nomeLand = document.getElementById('nome-land')
let emailLand = document.getElementById('email-land')
let usuariosCadastrados = []
function agradecimento(){
    if(nomeLand.value === ""){
        return msg.innerHTML = `Poderia nos informar seu nome?`
    }

    if(emailLand.value === ""){
        return msg.innerHTML = `E o seu email?`
    }
    
    msg.innerHTML = `
        <p>Obrigado por se cadastrar no MizP!<br>
        A partir de agora você receberá em seu email,<br>
        informações<br>
        sobre os nossos produtos e descontos exclusivos. Aproveite</p>
        <button class="btn-site">Ir para Site</button>
    `
    usuariosCadastrados.push({
        nome: nomeLand.value,
        email: emailLand.value
    })
    nomeLand.value = ""
    emailLand.value = ""
}