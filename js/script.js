
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
        {nome:"Fulano", email:"fulano@gmail.com", senha:"123"},
        {nome:"Ciclano", email:"ciclano@gmail.com", senha:"321"},
    ]

    function verificarDadosLogin (){
        dadosUsuario.forEach(user =>{
            if(email.value === user.email){
                if(senha.value !== user.senha){
                    alert("Usuário não cadastrado ou senha inválida!")
                }else{
                    alert("Olá "+user.nome)
                    return nomeLogin.value = "Olá, "+user.nome
                }
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

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Logout<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    function logOut(){
        if(nomeLogin.value !== ""){
            nomeLogin.value = ""
            alert('Logout efetuado com sucesso!')
        }else{
            alert("Você não está logado!")
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
        if(nomeUsuario.value === ""){
            alert("Favor informar um nome de usuário!")
            nomeUsuario.style.border = '2px solid rgb(255,0,0)'
            nomeUsuario.focus()
            limparCampos()

        }
        else if(emailUsuario.value === "" && emailUsuarioConfirmar.value === ""){
            alert("Favor informar um email!")
            emailUsuario.style.border = '2px solid rgb(255,0,0)'
            emailUsuario.focus()
            limparCampos()

        }else if(senhaUsuario.value === "" && senhaUsuarioConfirmar.value === ""){
            alert("Favor informar uma senha!")
            senhaUsuario.style.border = '2px solid rgb(255,0,0)'
            senhaUsuario.focus()
            limparCampos()

        }else if(emailUsuario.value !== emailUsuarioConfirmar.value){
            emailUsuario.focus()
            emailUsuario.style.border = '2px solid rgb(255,0,0)'
            emailUsuarioConfirmar.style.borderColor = '2px solid rgb(255,0,0)'
            alert("Os emails são diferentes")
            limparCampos()

        }else if(senhaUsuario.value !== senhaUsuarioConfirmar.value){
            senhaUsuario.focus()
            senhaUsuario.style.border = 'rgb(255,0,0)'
            senhaUsuarioConfirmar.style.borderColor = 'rgb(255,0,0)'
            alert("As senhas são diferentes")
            limparCampos()
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
        senhaUsuarioConfirmar.value = ""
    }        


    let subcategorias = [
        {id: 0, categoria: "Tecnologia", subcategoria: "Celulares"},
        {id: 1, categoria: "Tecnologia", subcategoria: "Notebooks"},
        {id: 2, categoria: "Tecnologia", subcategoria: "Tablets"},
        {id: 3, categoria: "Tecnologia", subcategoria: "Smart Whatches"},
        {id: 4, categoria: "Casa", subcategoria: "Camas"},
        {id: 5, categoria: "Casa", subcategoria: "Sofas"},
        {id: 6, categoria: "Casa", subcategoria: "Mesas"},
        {id: 7, categoria: "Ferramentas", subcategoria: "Caixa de Ferramentas"},
        {id: 8, categoria: "Moda", subcategoria: "Vestidos"},
        {id: 9, categoria: "Moda", subcategoria: "Blusas"},
        {id: 10, categoria: "Moda", subcategoria: "Sapatos"},
        {id: 11, categoria: "Produtos de Beleza", subcategoria: "Mascara Capilar"},
        {id: 12, categoria: "Brinquedos", subcategoria: "Piscinas de Bolinha"},
        {id: 13, categoria: "Brinquedos", subcategoria: "Pula Pula"},
    ]    
    
    let produtosSite = [
        // tecnologia
        {id: 0, categoria: "Tecnologia", subcategoria: "Notebook", descricao: "Notebook Acer Nitro Gamer AN515-55-59MT Intel Core I5 16GB 512GB SSD 15.6' Windows 10", fabricante: "accer", imagem: '/img/tecnologia/noteboks/notebook_acer.jpg', preco: "R$ 3.850,00"},
        {id: 1, categoria: "Tecnologia", subcategoria: "Notebook", descricao: "Notebook HP 256 G8 Intel Core i3 8GB 256GB SSD - 15,6&quot; LCD Windows 10", fabricante: "hp", imagem: '/img/tecnologia/noteboks/notebook_hp_.jpg', preco: "R$ 3.050,00"},
        {id: 2, categoria: "Tecnologia", subcategoria: "Celular", descricao: "Xiaomi Redmi Note 10 4GB+64GB Versão global Onyx Gray", fabricante: "xiaomi", imagem: '/img/tecnologia/celulares/xaomi_note_10.jpg', preco: "R$ 1.250,00"},
        {id: 3, categoria: "Tecnologia", subcategoria: "Celular", descricao: "Celular Smartphone K22+ 64GB 6,2 LG - Vermelho", fabricante: "lg", imagem: '/img/tecnologia/celulares/celular-smartphone-k22-64gb-6-2-lg_397369.jpg', preco: "R$ 2.150,00"},
        {id: 4, categoria: "Tecnologia", subcategoria: "Smart Whatch", descricao: "Relógio Amazfit GTS A1914 - Preto", fabricante: "amazfit", imagem: '/img/tecnologia/smart_whatches/smart_whatch_amazfit_bip_u+pro.jpg', preco: "R$ 420,00"},
        {id: 5, categoria: "Tecnologia", subcategoria: "Smart Whatch", descricao: "Galaxy Watch Active2 Preto", fabricante: "sansumg", imagem: '../img/tecnologia/smart_whatches/5187V2FMXML._AC_SL1000_.jpg', preco: "R$ 235,99"},
        {id: 6, categoria: "Tecnologia", subcategoria: "Tablet", descricao: "Apple iPad 8ª Geração 10.2, Wi-Fi, 128GB Silver - A2270", fabricante: "apple", imagem: '/img/tecnologia/tablets/apple_ipad.jpg', preco: "R$ 3.330,00"},
        {id: 7, categoria: "Tecnologia", subcategoria: "Tablet", descricao: "Tablet Samsung Galaxy A7 64GB Wi-Fi 4G Tela 10.4” Android Octa-Core 2.0GHz - Grafite", fabricante: "samsung", imagem: '/img/tecnologia/tablets/tablet_samsung.jpg', preco: "R$ 1.296,28"},
        // ccasa
        {id: 8, categoria: "Casa", subcategoria: "Cama", descricao: "Cama Casal Madri Espresso Móveis Canion Hf", fabricante: "Espresso Móveis", imagem: '/img/casa/camas/cama_ecoflex.jpg', preco: "R$ 555,44"},
        {id: 9, categoria: "Casa", subcategoria: "Cama", descricao: "Colchão Cama Box Magnético Casal Massageador Cabeceira", fabricante: "Eco Dream", imagem: '/img/casa/camas/cama.jpg', preco: "R$ 2.196,00"},
        {id: 10, categoria: "Casa", subcategoria: "Sofá", descricao: "Sofá Berlim Retrátil Reclinável Chaise e Canto - 5 Lugares 2.70 M- 1 Tok Estofados", fabricante: "Tok Estofados", imagem: '/img/casa/sofas/sofa_berlim.jpg', preco: "R$ 2.789,10"},
        {id: 11, categoria: "Casa", subcategoria: "Sofá", descricao: "Sofa 4 Lugares Retratil e Reclinavel com Bau Linoforte Artemis", fabricante: "Tok Estofados", imagem: '/img/casa/sofas/sofa_linoforte.jpg', preco: "R$ 1.679,00"},
        {id: 12, categoria: "Casa", subcategoria: "Mesa", descricao: "Mesa de Jantar 6 Cadeiras Retangular Rufato - Alvorada Londrina", fabricante: "Rufato", imagem: '/img/casa/mesas/mesa_rufato.jpg', preco: "R$ 1.899,99"},
        {id: 13, categoria: "Casa", subcategoria: "Mesa", descricao: "Conjunto Laguna de madeira mesa 120X70 com 4 cadeiras imbuia estofado marrom", fabricante: "Imbuia", imagem: '/img/casa/mesas/mesa_imbuia.jpg', preco: "R$ 849,97"},
        // ferramentas
        {id: 14, categoria: "Ferramentas", subcategoria: "Caixa de Ferramentas", descricao: "DEWALT Mala de Ferramentas Multitak com 37 Compartimentos DWST82928-LA", fabricante: "dewalt", imagem: '/img/ferramentas/mala_de_ferrmanetas_multipak.jpg', preco: "R$ 459,48"},
        {id: 15, categoria: "Ferramentas", subcategoria: "Caixa de Ferramentas", descricao: "Organizador de Ferramentas Dewalt TSTAK Nº4 DWST17804 16.5 com Duas Gavetas", fabricante: "tstak", imagem: '/img/ferramentas/organizador_tstak.jpg', preco: "R$ 392,07"},
        // moda
        {id: 15, categoria: "Moda", subcategoria: "Vestidos", descricao: "Vestido Godê Rodado Midi Moda Evangélica", fabricante: "Puro Glamour", imagem: '/img/moda/vestidos/vestido_evangelica.jpg', preco: "R$ 99,00"},
        {id: 16, categoria: "Moda", subcategoria: "Sapatos", descricao: "Sapato Feminino Oxford Branco em Couro Salto Tratorado 19000", fabricante: "Oxford", imagem: '/img/moda/sapatos/sapato_oxford.jpg', preco: "R$ 159,99"},


    ]

    

    let itensTabela = document.querySelector('.itens-tabela')
    let btnTecnologia = document.querySelector('.btnTecnologia')
    let btnCasa = document.querySelector('.btnCasa')
    let btnFerramentas = document.querySelector('.btnFerramentas')
    let btnModa = document.querySelector('.btnModa')
    let btnProdutosBeleza = document.querySelector('.btnProdutosBeleza')
    let btnBrinquedos = document.querySelector('.btnBrinquedos')
    let inputCategoria = document.querySelector('.input-categoria')
    let inputSubcategoria = document.querySelector('.input-subcategoria')

    function mostrarTecnologia(){
        inputCategoria.value = btnTecnologia.value
    }

    function mostrarCasa(){
        inputCategoria.value = btnCasa.value
    }

    function mostrarFerramentas(){
        inputCategoria.value = btnFerramentas.value
    }

    function mostrarModa(){
        inputCategoria.value = btnModa.value
    }

    function mostrarProdutosBeleza(){
        inputCategoria.value = btnProdutosBeleza.value
    }

    function mostrarBrinquedos(){
        inputCategoria.value = btnBrinquedos.value
    }
    
    function carregarProdutos(){
        itensTabela.innerHTML = ""
        produtosSite.forEach(prod =>{
            if(inputCategoria.value === prod.categoria){  
                itensTabela.innerHTML += 
                `
                <tr>
                    <td>${prod.subcategoria}</td>
                    <td>${prod.descricao}</td>
                    <td>${prod.preco}</td>
                    <td><img class="img-table" src="${prod.imagem}" /></td>
                    <td><button class="btn-site">Comprar</button></td>
                </tr>
                `
            }
        })
    }