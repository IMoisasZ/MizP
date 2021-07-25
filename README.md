# MizP

## Ecommerce para realização do desafio da 4 e 5º semana do hiring coders

## Para a criação do ecccomerce foram utilizados:
### JAVASCRIPT
### HTML
### CSS
### BOOTSTRAP 5

OBS. 
    Todos os itens de inclusão ou busca de informações, foram geradas com o storage
    Para ver todos os recursos se faz necessário o cadastro de cliente e cadastro de endereço.

### Onde:
    Foi criado uma estrutura de pastas para melhorar o processo de execução do site da seguinte forma:

    #### Pasta CSS para incluir os arquivos referente a linguagem e 2 arquivos foram criados, sendo um para o site e outro para a landinpage
    
    #### Pasta DATABASE para mostrar os dados simulando um banco de dados em JAVASCRIPT. Foram criados 3 arquivos sendo:
        ##### genero.js - Que garda os tipos de generos utilizados na inclusão de usuários na plataforma;
        ##### listaCidadesEstados.js - Guarda os estados e cidades do Brasil para ajudar na inclusão do endereço dos clientes;
        ##### produtos.js - Guarda os produtos cadastrados para simular a compra do mesmo no eccomerce
    
    ### Pasta IMG para guardar as imagens do produto, logo e icon do sistema

    ### Pasta JS para incluir a logica do sistema e efeitos nas paginas HTML. Foram criados 2 arquivos, sendo 1 para o site e outro para a landinpage.

    ### Os arquivos HTML estão na pasta raiz. Tambem foram gerados 2 páginas, sendo uma para o site e outra para a landinpage.

### Logica do sistema
    O sistema foi criado para simular a compra de itens em um site eccomerce.
    As páginas foram geradas com HTML semantico e bootstrap na criação de modal para apresentação de telas secundárias dentro da página principal.
    Foram utilizadas 4 telas modal, sendo elas:
        #### Modal login: Utilizadas para realizar o login do cliente na plataforma
        #### Modal cadastro cliente: Utilizada para realizar o cadastro do cliente
        #### Modal cadastro endereço do cliente: Utilizada para realizar o cadastro do endereço do cliente
        #### Modal pedido: Utilizada para mostrar os itens escolhido
    
    # Modal Login
    Ao clicar no icone para realizar login a modal de login e apresentada e com isso é apresentado 2 inputs para inclusão de email e senha. Tambem tem 3 botões sendo um para logar outro para cancelar e outro para sair(logout).
    Tambem abaixo do input de senha há um link para se cadastrar caso não seja.
    Ao logar no sistema é mostrado a um bem vindo com um alert e o nome do cliente e abaixo do icone de login é apresentado o nome do cliente ex.: "Olá, fulano".

    # Modal Cadastro cliente
    Clicando no link para se cadastrar a modal para cadastro do usuário é aprentado mostrado os campos necessários para cadastro do cliente:
        #### Nome, sobrenome, genero(select com opções de escolha conforme dados pegos do storage do arquivo genero na pasta database), data de nascimento, email, confirmar email, senha, confirmar senha.
    Tambem há 3 botões:
        #### Incluir, Cancelar e Endereços.
            #### Clicando em incluir o usuário é incluido em um array e posto no storage
            #### Cancelando você sai da página voltado para a tela inicial do site
            #### Endereços você vai para a tela de cadastro de endereços
    No canto inferior esquerdo tem uma mensagem dizendo que os campos com * são obrigatórios.

    # Modal Cadastro endereço
    Clicando no botão de endereços é apresentado a modal com os campos para cadastro do endereço do cliente no sistema. Os campos são:
        #### Logradouro, numero, complemento, bairro, estado(select com os estados que vem do arquivo listaCidadesEstados.js da pasta database postos no storage), cidade(select com as cidades que fazem parte do estado selecionado anteriormente), cep (o cep contem mascara de entrada que formata o mesmo para o padrão "00000-000")
    Também Há 2 botões sendo:
        #### Incluir - Incluir o endereço ao cliente
        #### cancelar - sair da pagina de caastro sem efetuar o cadastro do endereço e voltando para a pagina inicial
    No canto inferior esquerdo tem uma mensagem dizendo que os campos com * são obrigatórios.

    # Modal Pedido
    Clicando na cesta é apresentado a modal com os itens adicionados a cesta com os dados do cliente e o endereço cadastrado para o mesmo.
    Na tela é possivel ver o id do item, sua descrição qtde e valor total do item e abaixo dos itens é apresentado o total do pedido.
    Também ha um botão de sair que volta para a pagina principal

### Tela Principal
    Na tela principal há o logo MipZ (Primeira letra de cada pessoa da minha familia aqui de casa. Moisés, Ivy, Zoe, Priscila - Minhas filhas e esposa).
    Link mais vendidos, leva aos cards dos produtos mais vendidos;
    Link lançamentos leva aos cards dos lançamentos;
    Nos cards há a foto do produto(passando o mouse por cima a mesma fica colorida), preço (passando o mause em cima aparece um efeito de troca de fundo e cor da letra tambem), descrição e botão de carrinho de compras.
    Caso esteja logcado e clique no botão, o item será adicionado na cesta e a qtde referente a ele será apresentada ao lado da cesta.
    Caso não esteja logado um alert ira dizer que para incluir item na cesta deve estar logado.

    Após o link de lançamentos há 6 botões que são:
        #### Engrenagem = Tecnologia
            #### Clicando você será levado aos produtos referente a Tecnologia
        #### Casa = Casa    
            #### Clicando você será levado aos produtos referente a Casa
        #### Chave - Ferramentas
            #### Clicando você será levado aos produtos referente a Ferramentas
        #### Boneco com check - Moda
            #### Clicando você será levado aos produtos referente a Moda
        #### Pincel - Produtos de Beleza
            #### Clicando você será levado aos produtos referente a Produtos de Beleza
        #### Estrela - Brinquedos
            #### Clicando você será levado aos produtos referente a Brinquedos
    Ao passar o mouse em cima de cada um desses botões e mostrado o que a cada um deles se refere em um intut proximo ao icone da estrela.
    Ao clicar em qualquer icone desse a página descola-se para o fim da mesma mostrando os itens referente o botão.
    No fim da página ha tam bem os mesmos botões para escolha de novos itens ali mesmo.
    Na lista dos itens é mostrado o subcategoria, produto, preço, imagem(ao passar o mouse em cima dela ela fica maior) e botão de compra.

    #### Carrocel
    Há um carrocel com 3 iamgens passando automaticamente porém coma possibilidade de ser mainual clicando nos botões na esquerda e direita de cada foto sendo apresentada.

### Footer (Rodapé)
    No rodapé ha uma divisão em 3 partes, sendo:
        #### Formas de pagamento
        #### Frete
        #### Midias sociais
    Logo abaixo das midias sociais há um link que leva a landinpage caso não seja cadastrado ainda no eccomerce.

### Landinpage
    A landinpage pede 2 informações para cadastro no sistema:
        #### nome
        #### email
    Mas, não é obrigatório o seu cadastro para acessar o site, já que ao entrar no site a primeira pagina a ser mostrada é a landinpage.
    Abaixo há um link que diz que se não quer se cadastrar clique aqui e clicando irá para o site.

### Link para acessar o site pelo Netlify