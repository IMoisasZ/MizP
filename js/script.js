let categorias = [
    {id: 0, nome: "Tecnologia", 
        produtos:{
            id: 0, nomeProduto: "Noteboks", icon: "<i class='bi bi-laptop'></i>",
            id: 1, nomeProduto: "Celulares", icon: "<i class='bi bi-phone'></i>",
            id: 2, nomeProduto: "Tablets", icon: "<i class='bi bi-tablet'></i>",
            id: 3, nomeProduto: "SmartWatches", icon:"<i class='bi bi-smartwatch'></i>"
        }
    },

    {id:1, nome:"Casa", 
        produtos:{
            id: 4, nomeProduto: "Camas",
            id: 5, nomeProduto: "Sofas",
            id: 6, nomeProduto: "Mesas",
            id: 7, nomeProduto: "Cadeiras",
        }
    },

    {id:2, nome: "Ferramentas", 
        produtos: {
            id: 8, nomeProduto: "Martelos",
            id: 9, nomeProduto: "Furadeiras",
            id: 10, nomeProduto: "Alicates",
            id: 11, nomeProduto: "Serrote",
        }
    },

    {id:3, nome: "Moda", 
        produtos: {
            id: 12, nomeProduto: "Masculina",
            id: 13, nomeProduto: "Feminina",
            id: 14, nomeProduto: "Meninos",
            id: 15, nomeProduto: "Meninas",
        }
    },

    {id:4, nome: "Produtos de Beleza",
        produtos: {
            id: 16, nomeProduto: "Perfumes Masculinos",
            id: 17, nomeProduto: "Perfumes Femininos",
            id: 18, nomeProduto: "Manicure e Pedicure",
            id: 19, nomeProduto: "Cuidados com o Cabelo",
        }
    },

    {id:5, nome: "Brinquedos",
        produtos: {
            id: 16, nomeProduto: "0 a 24 Meses",
            id: 17, nomeProduto: "2 a 4 Anos",
            id: 18, nomeProduto: "5  a 7 Anos",
            id: 19, nomeProduto: "8 Anos ou mais",
        }
    }
]

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

// produos e categorias


// "<div class="row">
//     <div class="col-xl-3">
//         <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">Special title treatment</h5>
//                 <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     </div>
// </div>"
