// mostra o usuario logado
var nl = document.getElementById('nome_login')

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
    let produtosStorage = localStorage.getItem('produto')
    var produtosJSON = JSON.parse(produtosStorage)
    let maisVendidos = []
    produtosJSON.forEach(prod =>{
        if(prod.tipo === "Mais vendido"){
            maisVendidos.push({
              id: prod.id,
              categoria: prod.categoria,
              descricao: prod.descricao,
              fabricante: prod.fabricante,
              imagem: prod.imagem,
              preco: prod.preco
            })
        }
    })

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
                    <button class="btn-carrinho-value" id="btn-carrinho-mais-vendidos-value" value="${produto.id}" onclick="incluirItensCesta(this.value)"><i class="bi bi-cart4 fs-1 icon-carrinho icon-carrinho-lancamentos-${produto.id}" title:"Adicionar a cesta!"></i></button>
                </div>
            </div>
        `  
    })
    // <a href="#" onclick="incluirItensCesta()"><i class="bi bi-cart4 fs-1 icon-carrinho icon-carrinho-${produto.id}" title:"Adicionar a cesta!"></i></a>
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>lançamentos<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    let lancamentos = []
    produtosJSON.forEach(lanc =>{
        if(lanc.tipo === "Lancamento"){
            lancamentos.push({
                id: lanc.id,
                categoria: lanc.categoria,
                descricao: lanc.descricao,
                fabricante: lanc.fabricante,
                imagem: lanc.imagem,
                preco: lanc.preco
            })
        }
    })


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
                <button class="btn-carrinho-value" id="btn-carrinho-value" value="${produto.id}" onclick="incluirItensCesta(this.value)"><i class="bi bi-cart4 fs-1 icon-carrinho icon-carrinho-lancamentos-${produto.id}" title:"Adicionar a cesta!"></i></button>
            </div>
            
        </div>`  
    })

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>cadastro cliente<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
let nomeCadastro = document.getElementById('nome-cadastro')
let sobrenome = document.getElementById('sobrenome-user-cadastro')
let genero = document.getElementById('genero')
let dataNascimento = document.getElementById('data-nascimento')
let emailCadastro = document.getElementById('email-user-cadastro')
let confirmeEmailCadastro = document.getElementById('confirme-email-user-cadastro')
let senhaCadastro = document.getElementById('senha-user-cadastro')
let confirmeSenhaCadastro = document.getElementById('confirmar-senha-user-cadastro')
let telefone = document.getElementById('telefone')
let btns = document.querySelector('.btns')

// definindo a lista de generos
let generoStorage = localStorage.getItem('generos')
let generosJSON = JSON.parse(generoStorage)
generosJSON.forEach(sexo =>{
    genero.innerHTML += `<option value="${sexo.id}">${sexo.genero}</option>`
})

// criando botões de erros
function btnErros(){
    btns.innerHTML = `
        <button type='submit' class='btn-site' id='btn-incluir'>Incluir</button>
        <button type='submit' class='btn-site' id='btn-cancelar-inclusao' data-bs-dismiss="modal" onclick="limparCampos()">Cancelar</button>
        <button type='button' class='btn-site' id='btn-endereco-inclusao' data-bs-toggle="modal" data-bs-target="#cadastro-endereco">Endereço</button>`
}
btnErros()
// criando botões de sucesso
function btnSuccess(){
    btns.innerHTML = `
        <button type='submit' class='btn-site' id='btn-incluir' onclick="incluirCliente()">Incluir</button>
        <button type='submit' class='btn-site' id='btn-cancelar-inclusao' data-bs-dismiss="modal" onclick="limparCampos()">Cancelar</button>
        <button type='button' class='btn-site' id='btn-endereco-inclusao' data-bs-toggle="modal" data-bs-target="#cadastro-endereco">Endereço</button>`
}

// verificando se os emails são validos e senhas iguais
function verificarEmailSenha(){
    if(emailCadastro.value === confirmeEmailCadastro.value && senhaCadastro.value === confirmeSenhaCadastro.value){
        btns.innerHTML = ""
        btnSuccess()
    }else{
        btns.innerHTML = ""
        btnErros()   
    }
}

// mascara telefone
/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}


var clientes = []

function incluirCliente(){
    let clienteAdd = {
        id: clientes.length+Number(1),
        nome: nomeCadastro.value,
        sobrenome: sobrenome.value,
        genero: genero.value,
        dataNascimento: dataNascimento.value,
        emailCadastro: emailCadastro.value,
        senha: senhaCadastro.value,
        telefone: telefone.value
    }
    clientes.push( clienteAdd )
    localStorage.setItem('cli',JSON.stringify(clientes))
    return alert(`O cliente ${nomeCadastro.value} foi cadastrado com sucesso!`)
}

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>cadastro endereço<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
let clienteStorage = localStorage.getItem('cli')
let clienteJSON = JSON.parse(clienteStorage)
let clienteLogado = []
clienteJSON.forEach(c =>{
    clienteLogado.push(
        {
            nome: c.nome,
            email: c.emailCadastro,
            senha: c.senha
        }
    )
})
let clienteCadastrado = document.querySelector('.cliente-cadastrado')
clienteCadastrado.innerHTML = `<input class="" id="" value="${clienteLogado[0].nome}" readonly />`

let logradouro = document.getElementById('logradouro')
let numero = document.getElementById('numero')
let complemento = document.getElementById('complemento')
let bairro = document.getElementById('bairro')
let estado = document.getElementById('estado')
let cidade = document.getElementById('cidade')
let cep = document.getElementById('cep')
let btnsEndereco = document.querySelector('.btns-endereco')

// popular estados
let estadosStorage = localStorage.getItem('estados_cidades')
let estadosJSON = JSON.parse(estadosStorage)
console.log(estadosJSON);
estadosJSON.forEach(eSigla => {
    estado.innerHTML += `<option value="${eSigla.sigla}">${eSigla.sigla}</option>`
});

// popular cidades
let estadoSelecionado = ""
function estadoSelec(){
    estadoSelecionado = estado.value
    cidade.innerHTML = ""
    estadosJSON.forEach(city =>{
        if(city.sigla === estadoSelecionado){
            for(let i =0; i<city.cidades.length; i++){
                cidade.innerHTML += `<option value="${city.cidades[i]}">${city.cidades[i]}</option>`
            }
        }
    })
}

function botoesEndereco(){
    btnsEndereco.innerHTML = `
        <button type='button' class='btn-site' id='btn-incluir-endereco'>Incluir</button>
        <button type='submit' class='btn-site' id='btn-cancelar-inclusao' data-bs-dismiss="modal">Cancelar</button>
    `
}
botoesEndereco()

function botaoIncluirEndereco(){
    if(logradouro.value !== "" && numero.value !== "" && bairro.value !== "" && estado.value !== "" && cidade.value !== "" && cep.value !== ""){
        btnsEndereco.innerHTML = `
            <button type='submit' class='btn-site' id='btn-incluir-endereco' onclick="incluirEndereco()">Incluir</button>
            <button type='submit' class='btn-site' id='btn-cancelar-inclusao' data-bs-dismiss="modal">Cancelar</button>
        `
    }else{
        botoesEndereco()
    }
}

function mascaraCep(){
    let cepF = cep.value.substring(0,5)+"-"+cep.value.substring(5)
    cep.value = cepF
}

var enderecos = []
function incluirEndereco(){
    if(nl.value.substring(5) !== ""){
        let enderecoAdd =
        {
            id: enderecos.length+Number(1),
            cliente: nl.value.substring(5),
            logradouro: logradouro.value,
            numero: numero.value,
            complemento: complemento.value,
            bairro: bairro.value,
            cidade: cidade.value,
            estado: estado.value,
            cep: cep.value
        }
        enderecos.push(enderecoAdd)
    }
    localStorage.setItem('enderecosCliente', JSON.stringify(enderecos))
    return alert('Endereço cadastrado com sucesso!')
}

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>login<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    let login = document.getElementById('.btn-login')

    let emailUser = document.getElementById('email-user')

    let senhaUser = document.getElementById('senha-user')

    let erroLogin = document.querySelector('.erro-login')

    let nomeLogin = document.querySelector('.nome-login')

    function verificarDadosLogin (){
        clienteJSON.forEach(cli =>{
            if(cli.emailCadastro === emailUser.value){
                if(cli.senha !== senhaUser.value){
                    alert("Usuário não cadastrado ou senha inválida!")
                }else{
                    alert("Olá "+cli.nome)
                    return nomeLogin.value = "Olá, "+cli.nome
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
    let produtoSelecionado = document.querySelector('.btn-carrinho-value')
    var pedido = []
    function incluirItensCesta(response){
        if(nomeLogin.value === "" ){
            alert("Você tem que estar logado para incluir itens a cesta!")
        }else{
            contadorCesta.value = Number(contadorCesta.value) + Number(1)
            let idProd = response
            idProd = parseInt(idProd)
            produtosJSON.forEach(ped =>{
                if(ped.id === idProd ){
                pedido.push({
                    cliente: nl.value.substring(5),
                    id: ped.id,
                    categoria: ped.categoria,
                    subcategoria: ped.subcategoria,
                    descricao: ped.descricao,
                    fabricante: ped.fabricante,
                    imagem: ped.imagem,
                    preco: ped.preco
                    }
                )}
            })
        }
        localStorage.setItem('itens_pedido',JSON.stringify(pedido))
    }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>pedido<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    function dadosCliente(){
        let cliStorage = localStorage.getItem('cli')
        let cliJSON = JSON.parse(cliStorage)
        let nomePedido = document.getElementById('nome-pedido')
        let sobrenomePedido = document.getElementById('sobrenome-pedido')
        let generoPedido = document.getElementById('genero-pedido')
        let dataNascimentoPedido = document.getElementById('nascimento-pedido')
        let emailPedido = document.getElementById('email-pedido')
        let telefonePedido = document.getElementById('telefone-pedido')
        cliJSON.forEach(c =>{
            if(c.nome = nl.value.substring(5)){
                console.log(c.nome+"-"+c.sobrenome);
                let resultGenero = generosJSON.find(gen => gen.id === parseInt(c.genero))
                nomePedido.value = c.nome
                sobrenomePedido.value =  c.sobrenome
                generoPedido.value = resultGenero.genero
                dataNascimentoPedido.value = c.dataNascimento
                emailPedido.value = c.emailCadastro
                telefonePedido.value = c.telefone
            }
        })
    }
    
    function dadosEnderecoCliente(){
        let logradouroPedido = document.getElementById('logradouro-pedido')
        let numeroPedido = document.getElementById('numero-pedido')
        let complementoPedido = document.getElementById('complemento-pedido')
        let bairroPedido = document.getElementById('bairro-pedido')
        let estadoPedido = document.getElementById('estado-pedido')
        let cidadePedido = document.getElementById('cidade-pedido')
        let cepPedido = document.getElementById('cep-pedido')
        let endStorage = localStorage.getItem('enderecosCliente')
        let endJSON = JSON.parse(endStorage)
        endJSON.forEach(end =>{
            if(nl.value.substring(5) === end.cliente){
                logradouroPedido.value = end.logradouro
                numeroPedido.value = end.numero
                complementoPedido.value = end.complemento
                bairroPedido.value = end.bairro
                estadoPedido.value = end.estado
                cidadePedido.value = end.cidade
                cepPedido.value = end.cep
            }
        })
    }

    function itensPedido(){
        let tabelaItensPedido = document.querySelector('.tabela-itens-pedido')
        let tabelaTotalItens = document.querySelector('.table-footer')
        let itensPed = localStorage.getItem('itens_pedido')
        let itensPedJSON = JSON.parse(itensPed)
        var totalGeralF = 0
        var totalGeral = 0
        itensPedJSON.forEach(item =>{
            if(nl.value.substring(5) === item.cliente){
                let total = item.preco
                total = total.replace('R$ ','')
                total = total.replace('.','')
                total = total.replace(',','.')
                
                let totalF = parseFloat(total)
                totalGeral = totalGeral + totalF
                totalGeralF = totalGeral.toLocaleString('pt-br',{style:'currency', currency:"BRL"})
                // new Intl.NumberFormat('pt-br', {style:"currency", currency:"BRL", maximumFractionDigitsx: 3 }).format(totalGeral)
                tabelaItensPedido.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.descricao}</td>
                    <td>1</td>
                    <td>${item.preco}</td>
                </tr>`
            }
        })
        tabelaTotalItens.innerHTML = `<h6 class="total-geral mt-2 text-start">Total do pedido: ${totalGeralF}</h6>`
    }

    function mostrarPedido(){
        dadosCliente()
        dadosEnderecoCliente()
        itensPedido()
    }    
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>mostrar produtos<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    let itensTabela = document.querySelector('.itens-tabela')
    let inputCategoria = document.querySelector('.input-categoria')
    let btnTecnologia = document.querySelector('.btnTecnologia')
    let btnCasa = document.querySelector('.btnCasa')
    let btnFerramentas = document.querySelector('.btnFerramentas')
    let btnModa = document.querySelector('.btnModa')
    let btnProdutosBeleza = document.querySelector('.btnProdutosBeleza')
    let btnBrinquedos = document.querySelector('.btnBrinquedos')
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
        produtosJSON.forEach(prod =>{
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