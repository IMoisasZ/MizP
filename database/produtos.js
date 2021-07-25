let produtos = [
    // tecnologia
    {id: 0, categoria: "Tecnologia", subcategoria: "Notebook", descricao: "Notebook Acer Nitro Gamer AN515-55-59MT Intel Core I5 16GB 512GB SSD 15.6' Windows 10", fabricante: "accer", imagem: '/img/tecnologia/noteboks/notebook_acer.jpg', preco: "R$ 3.850,00", tipo: "Mais vendido"},
    {id: 1, categoria: "Tecnologia", subcategoria: "Notebook", descricao: "Notebook HP 256 G8 Intel Core i3 8GB 256GB SSD - 15,6&quot; LCD Windows 10", fabricante: "hp", imagem: '/img/tecnologia/noteboks/notebook_hp_.jpg', preco: "R$ 3.050,00", tipo: "Mais vendido"},
    {id: 2, categoria: "Tecnologia", subcategoria: "Celular", descricao: "Xiaomi Redmi Note 10 4GB+64GB Versão global Onyx Gray", fabricante: "xiaomi", imagem: '/img/tecnologia/celulares/xaomi_note_10.jpg', preco: "R$ 1.250,00", tipo: "Mais vendido"},
    {id: 3, categoria: "Tecnologia", subcategoria: "Celular", descricao: "Celular Smartphone K22+ 64GB 6,2 LG - Vermelho", fabricante: "lg", imagem: '/img/tecnologia/celulares/celular-smartphone-k22-64gb-6-2-lg_397369.jpg', preco: "R$ 2.150,00", tipo: "Mais vendido"},
    {id: 4, categoria: "Tecnologia", subcategoria: "Smart Whatch", descricao: "Relógio Amazfit GTS A1914 - Preto", fabricante: "amazfit", imagem: '/img/tecnologia/smart_whatches/smart_whatch_amazfit_bip_u+pro.jpg', preco: "R$ 420,00", tipo: "Mais vendido"},
    {id: 5, categoria: "Tecnologia", subcategoria: "Smart Whatch", descricao: "Galaxy Watch Active2 Preto", fabricante: "sansumg", imagem: '../img/tecnologia/smart_whatches/5187V2FMXML._AC_SL1000_.jpg', preco: "R$ 235,99", tipo: "Mais vendido"},
    {id: 6, categoria: "Tecnologia", subcategoria: "Tablet", descricao: "Apple iPad 8ª Geração 10.2, Wi-Fi, 128GB Silver - A2270", fabricante: "apple", imagem: '/img/tecnologia/tablets/apple_ipad.jpg', preco: "R$ 3.330,00", tipo: "Lancamento"},
    {id: 7, categoria: "Tecnologia", subcategoria: "Tablet", descricao: "Tablet Samsung Galaxy A7 64GB Wi-Fi 4G Tela 10.4” Android Octa-Core 2.0GHz - Grafite", fabricante: "samsung", imagem: '/img/tecnologia/tablets/tablet_samsung.jpg', preco: "R$ 1.296,28", tipo: "Normal"},
    // ccasa
    {id: 8, categoria: "Casa", subcategoria: "Cama", descricao: "Cama Casal Madri Espresso Móveis Canion Hf", fabricante: "Espresso Móveis", imagem: '/img/casa/camas/cama_ecoflex.jpg', preco: "R$ 555,44", tipo: "Normal"},
    {id: 9, categoria: "Casa", subcategoria: "Cama", descricao: "Colchão Cama Box Magnético Casal Massageador Cabeceira", fabricante: "Eco Dream", imagem: '/img/casa/camas/cama.jpg', preco: "R$ 2.196,00", tipo: "Lancamento"},
    {id: 10, categoria: "Casa", subcategoria: "Sofá", descricao: "Sofá Berlim Retrátil Reclinável Chaise e Canto - 5 Lugares 2.70 M- 1 Tok Estofados", fabricante: "Tok Estofados", imagem: '/img/casa/sofas/sofa_berlim.jpg', preco: "R$ 2.789,10", tipo: "Normal"},
    {id: 11, categoria: "Casa", subcategoria: "Sofá", descricao: "Sofa 4 Lugares Retratil e Reclinavel com Bau Linoforte Artemis", fabricante: "Tok Estofados", imagem: '/img/casa/sofas/sofa_linoforte.jpg', preco: "R$ 1.679,00", tipo: "Normal"},
    {id: 12, categoria: "Casa", subcategoria: "Mesa", descricao: "Mesa de Jantar 6 Cadeiras Retangular Rufato - Alvorada Londrina", fabricante: "Rufato", imagem: '/img/casa/mesas/mesa_rufato.jpg', preco: "R$ 1.899,99", tipo: "Normal"},
    {id: 13, categoria: "Casa", subcategoria: "Mesa", descricao: "Conjunto Laguna de madeira mesa 120X70 com 4 cadeiras imbuia estofado marrom", fabricante: "Imbuia", imagem: '/img/casa/mesas/mesa_imbuia.jpg', preco: "R$ 849,97", tipo: "Normal"},
    // ferramentas
    {id: 14, categoria: "Ferramentas", subcategoria: "Caixa de Ferramentas", descricao: "DEWALT Mala de Ferramentas Multitak com 37 Compartimentos DWST82928-LA", fabricante: "dewalt", imagem: '/img/ferramentas/mala_de_ferrmanetas_multipak.jpg', preco: "R$ 459,48", tipo: "Lancamento"},
    {id: 15, categoria: "Ferramentas", subcategoria: "Caixa de Ferramentas", descricao: "Organizador de Ferramentas Dewalt TSTAK Nº4 DWST17804 16.5 com Duas Gavetas", fabricante: "tstak", imagem: '/img/ferramentas/organizador_tstak.jpg', preco: "R$ 392,07", tipo: "Normal"},

    {id: 16, categoria: "Moda", subcategoria: "Vestidos", descricao: "Vestido Godê Rodado Midi Moda Evangélica", fabricante: "Puro Glamour", imagem: '/img/moda/vestidos/vestido_evangelica.jpg', preco: "R$ 99,00", tipo: "Normal"},
    {id: 17, categoria: "Moda", subcategoria: "Sapatos", descricao: "Sapato Feminino Oxford Branco em Couro Salto Tratorado 19000", fabricante: "Oxford", imagem: '/img/moda/sapatos/sapato_oxford.jpg', preco: "R$ 159,99", tipo: "Normal"},

    {id: 18, categoria: "Produtos de Beleza", subcategoria: "Mascara Capilar", descricao: "Máscara Capilar Match SOS Reconstrução, 250g", fabricante: "Match", imagem: '/img/produtos_beleza/mascara_capilar.png', preco: "R$ 57,90", tipo: "Normal"},
    {id: 19, categoria: "Produtos de Beleza", subcategoria: "Mascara Capilar", descricao: "Yenzah Cronograma Capilar 3 Em 1 - Máscara de Tratamento", fabricante: "Yenzah", imagem: '/img/produtos_beleza/mascara_capilar_1.jpg', preco: "R$ 19,80", tipo: "Normal"},
    {id: 20, categoria: "Produtos de Beleza", subcategoria: "Mascara Capilar", descricao: "Máscara Capilar Eico Tratamento Mandioca 500g", fabricante: "Ikesaki", imagem: '/img/produtos_beleza/mascara_capilar_2.png', preco: "R$ 19,90", tipo: "Normal"},
    {id: 21, categoria: "Produtos de Beleza", subcategoria: "Kit Maquiagem", descricao: "Kit 10 Pinceis Kabuki Para Maquiagem Preto Com Dourado", fabricante: "On Line", imagem: '/img/produtos_beleza/kit_maquiagem.jpg', preco: "R$ 31,20", tipo: "Normal"},
    {id: 22, categoria: "Produtos de Beleza", subcategoria: "Kit Maquiagem", descricao: "Glitter p/ pele em pó Color Make c/ 10 cores Yur BT 1 KT", fabricante: "Yur", imagem: '/img/produtos_beleza/kit_maquiagem_1.jpg', preco: "R$ 18,90", tipo: "Normal"},

    {id: 23, categoria: "Brinquedos", subcategoria: "Pula Pula", descricao: "Cama Elástica 3,05m - Completa, Colorida e Importada", fabricante: "Lacuca brinquedos", imagem: '/img/brinquedos/pula_pula/pula_pula.jpg', preco: "R$ 1.599,00", tipo: "Normal"},
    {id: 24, categoria: "Brinquedos", subcategoria: "Pula Pula", descricao: "Pula Pula Inflável Infantil Com Cesta De Basquete Intex", fabricante: "Intex", imagem: '/img/brinquedos/pula_pula/pula_pula_1.jpg', preco: "R$ 649,99", tipo: "Normal"},
    {id: 25, categoria: "Brinquedos", subcategoria: "Piscina de Bolinha", descricao: "Piscina de Bolinhas Premium - Medidas 1,10m X 1,10m - Acompanha 500 Bolinhas TOP Coloridas", fabricante: "Lacuca Brinquedos", imagem: '/img/brinquedos/piscina_bolinha/piscina_bolinha.jpg', preco: "R$ 789,00", tipo: "Normal"},
    {id: 26, categoria: "Brinquedos", subcategoria: "Piscina de Bolinha", descricao: "Piscina de Bolinhas 3m com 5.000 Bolinhas 1,90 X 3,00(L) X 3,00 (A)", fabricante: "Lacuca Brinquedos", imagem: '/img/brinquedos/piscina_bolinha/piscina_bolinha_1.jpg', preco: "R$ 3.499,00", tipo: "Normal"},
    {id: 27, categoria: "Brinquedos", subcategoria: "Piscina de Bolinha", descricao: "Piscina De Bolinha + 200 Bolinhas + Piscina De Água 70 L", fabricante: "Company kids", imagem: '/img/brinquedos/piscina_bolinha/piscina_bolinha_2.jpg', preco: "R$ 399,49", tipo: "Normal"}
]

localStorage.setItem('produto',JSON.stringify(produtos))