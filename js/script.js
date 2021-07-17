
let textoCategoria = document.getElementById('text')
document.getElementById('tecnologia').addEventListener('mouseover',function(){
    textoCategoria.value = "Tecnologia"    
})
document.getElementById('tecnologia').addEventListener('mouseout',function(){
    textoCategoria.value = ""
    textoCategoria.style.transition = '1s'
})

document.getElementById('casa').addEventListener('mouseover',function(){
    textoCategoria.value = "Casa"
})
document.getElementById('casa').addEventListener('mouseout',function(){
    textoCategoria.value = ""
})

document.getElementById('ferramentas').addEventListener('mouseover',function(){
    textoCategoria.value = "Ferramentas"
})
document.getElementById('ferramentas').addEventListener('mouseout',function(){
    textoCategoria.value = ""
})

document.getElementById('moda').addEventListener('mouseover',function(){
    textoCategoria.value = "Moda"
})
document.getElementById('moda').addEventListener('mouseout',function(){
    textoCategoria.value = ""
})

document.getElementById('produtos_beleza').addEventListener('mouseover',function(){
    textoCategoria.value = "Produtos de Beleza"
})
document.getElementById('produtos_beleza').addEventListener('mouseout',function(){
    textoCategoria.value = ""
})

document.getElementById('brinquedos').addEventListener('mouseover',function(){
    textoCategoria.value = "Brinquedos"
})
document.getElementById('brinquedos').addEventListener('mouseout',function(){
    textoCategoria.value = ""
})

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>mais vendidos<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
let maisVendidos = [
    {id: 0, categoria: "Notebook", descricao: "Notebook Acer Nitro Gamer AN515-55-59MT Intel Core I5 16GB 512GB SSD 15.6' Windows 10", fabricante: "accer", imagem: '/img/tecnologia/noteboks/notebook_acer.jpg', preco: "R$ 3.850,00"},

    {id: 1, categoria: "Notebook", descricao: "Notebook HP 256 G8 Intel Core i3 8GB 256GB SSD - 15,6&quot; LCD Windows 10", fabricante: "hp", imagem: '/img/tecnologia/noteboks/notebook_hp_.jpg', preco: "R$ 3.050,00"},

    {id: 2, categoria: "Celular", descricao: "Xiaomi Redmi Note 10 4GB+64GB Versão global Onyx Gray", fabricante: "xiaomi", imagem: '/img/tecnologia/celulares/xaomi_note_10.jpg', preco: "R$ 1.250,00"},

    {id: 3, categoria: "Celular", descricao: "Celular Smartphone K22+ 64GB 6,2 LG - Vermelho", fabricante: "lg", imagem: '/img/tecnologia/celulares/celular-smartphone-k22-64gb-6-2-lg_397369.jpg', preco: "R$ 2.150,00"},

    {id: 4, categoria: "Celular", descricao: "Relógio Amazfit GTS A1914 - Preto", fabricante: "amazfit", imagem: '/img/tecnologia/smart_whatches/smart_whatch_amazfit_bip_u+pro.jpg', preco: "R$ 420,00"},

    {id: 5, categoria: "Celular", descricao: "Galaxy Watch Active2 Preto", fabricante: "sansumg", imagem: '../img/tecnologia/smart_whatches/5187V2FMXML._AC_SL1000_.jpg', preco: "R$ 235,99"},
]

maisVendidos.forEach(produto =>{
    document.querySelector('.section-mais-vendidos').innerHTML +=`
        <div class="section-mais-vendidos-card">
            <img src=${produto.imagem} class='imagem'/>
            <div class="div-descricao">
                <p class="card-text">${produto.descricao}</p>
            </div>
            <div class="div-preco">
                <p class="preco">${produto.preco}</p>
            </div>
            <div class="div-btn-carrinho-${produto.id}">
                <a href="#" onclick="incluirItensCesta()"><i class="bi bi-cart4 fs-1 icon-carrinho icon-carrinho-${produto.id}" title:"Adicionar a cesta!"></i></a>
            </div>
        </div>
    `  
})

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>lançamentos<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
let lancamentos = [
    {id: 0, categoria: "Tablet", descricao: "Apple iPad 8ª Geração 10.2, Wi-Fi, 128GB Silver - A2270", fabricante: "apple", imagem: '/img/tecnologia/tablets/apple_ipad.jpg', preco: "R$ 3.330,00"},
    
    {id: 1, categoria: "Casa", descricao: "Colchão Cama Box Magnético Casal Massageador Cabeceira", fabricante: "Eco Dream", imagem: '/img/casa/camas/cama_ecoflex.jpg', preco: "R$ 2.196,00"},

    {id: 2, categoria: "Ferramentas", descricao: "DEWALT Mala de Ferramentas Multitak com 37 Compartimentos DWST82928-LA", fabricante: "dewalt", imagem: '/img/ferramentas/mala_de_ferrmanetas_multipak.jpg', preco: "R$ 459,48"},
]

lancamentos.forEach(produto =>{
    document.querySelector('.section-lancamentos').innerHTML +=`
    <div class="section-lancamentos-card">
    <img src=${produto.imagem} class='imagem-lancamentos'/>
    <div class="div-descricao">
        <p class="card-text">${produto.descricao}</p>
    </div>
    <div class="div-preco">
        <p class="preco">${produto.preco}</p>
    </div>
    <div class="div-btn-carrinho-lancamentos-${produto.id}">
        <a href="#" onclick="incluirItensCesta()"><i class="bi bi-cart4 fs-1 icon-carrinho icon-carrinho-lancamentos-${produto.id}" title:"Adicionar a cesta!"></i></a>
    </div>
</div>
    `  
})

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>login<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    let login = document.getElementById('.btn-login')
    let sectionLogin = document.getElementById('section-login')

    function secLogin(){
        document.querySelector('.login-form').style.display = 'inline-block'
    }
    let email = document.getElementById('email-user')

    let senha = document.getElementById('senha-user')

    let erroLogin = document.querySelector('.erro-login')

    let nomeLogin = document.querySelector('.nome-login')

    let dadosUsuario = [
        {nome:"Moises", email:"mopri08@gmail.com", senha:"123456"}
    ]

    function verificarDadosLogin (){
        dadosUsuario.forEach(user =>{
            if(email.value === user.email){
                if(senha.value !== user.senha){
                    alert("Usuário não cadastrado ou senha inválida!")
                    document.querySelector('.login-form').style.display = 'none'
                }else{
                    alert("Olá "+user.nome)
                    nomeLogin.value = "Olá, "+user.nome
                    document.querySelector('.login-form').style.display = 'none'
                }
            }else{
                alert("Usuário não cadastrado ou senha inválida!")
                document.querySelector('.login-form').style.display = 'none'
            }
        })
    }

    function logOut(){
        if(nomeLogin.value !== ""){
            alert("Até a próxima "+nomeLogin.value.replace('Olá, ',''))
            nomeLogin.value = ""
            email.value = ""
            senha.value = ""
            document.querySelector('.login-form').style.display = 'none'
        }
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Add itens na cesta<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    let contadorCesta = document.querySelector('.input-cesta')
    function incluirItensCesta(){
        if(nomeLogin.value === "" ){
            alert("Você tem que estar logado para incluir itens a cesta!")
        }else{
            contadorCesta.value = Number(contadorCesta.value) + Number(1)
        }
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>cadastro usuario<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    let nomeUsuario = document.getElementById('nome-user-cadastro')
    let emailUsuario = document.getElementById('email-user-cadastro')
    let emailUsuarioConfirmar = document.getElementById('confirmar-email-user-cadastro')
    let senhaUsuario = document.getElementById('senha-user-cadastro')
    let senhaUsuarioConfirmar = document.getElementById('confirmar-senha-user-cadastro')
    let btnCastrarUsuario = document.getElementById('btn-incluir')
    let btnCancelarCadastro = document.getElementById('btn-cancelar-inclusao')

    function incluirUsuario(){
        if(emailUsuario.value !== emailUsuarioConfirmar.value){
            emailUsuario.focus()
            emailUsuario.style.borderColor = 'rgb(255,0,0)'
            emailUsuarioConfirmar.style.borderColor = 'rgb(255,0,0)'
            alert("Os emails são diferentes")

        }else if(senhaUsuario.value !== senhaUsuarioConfirmar.value){
            senhaUsuario.focus()
            senhaUsuario.style.borderColor = 'rgb(255,0,0)'
            senhaUsuarioConfirmar.style.borderColor = 'rgb(255,0,0)'
            alert("As senhas são diferentes")
        }else{
            dadosUsuario.push({
                nome: nomeUsuario.value,
                email: emailUsuario.value,
                senha: senhaUsuario.value
            })
            alert("O usuário "+nomeUsuario.value+ " foi cadastrado com sucesso!")
            limparCampos()
            
        }
    }

    function limparCampos(){
        nomeUsuario.value = ""
        emailUsuario.style.borderColor = 'rgb(206, 212, 218)'
        emailUsuario.value = ""
        emailUsuarioConfirmar.style.borderColor = 'rgb(206, 212, 218)'
        emailUsuarioConfirmar = ""
        senhaUsuario.style.borderColor = 'rgb(206, 212, 218)'
        senhaUsuario.value = ""
        senhaUsuarioConfirmar.style.borderColor = 'rgb(206, 212, 218)'
        senhaUsuarioConfirmar = ""
    }
           
    
    function cancelarInclusao(){
        window.location.reload();
    }
                
                