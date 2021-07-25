let generos = [
    {id: 1, genero: "Masculino"},
    {id: 2, genero: "Feminino"},
    {id: 3, genero: "Homem transgênero"},
    {id: 4, genero: "Mulher Transgênero"},
    {id: 5, genero: "Homem Transexual"},
    {id: 6, genero: "Mulher Transexual"},
    {id: 7, genero: "Cisgênero"},
    {id: 8, genero: "Não sei responder"},
    {id: 9, genero: "Prefiro não responder"},
    {id: 10, genero: "Outros"} 
]

localStorage.setItem('generos', JSON.stringify(generos))