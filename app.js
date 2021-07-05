//importando meu banco de dados
const livros = require('./database')

//criando variavel para entrada de dado
const readline = require('readline-sync')

//--------------Parte do Sistema Usavel---------------------//

console.log("--------------------------------ACERVO DE LIBROS--------------------------------")
//perngunta ao usuario se quer buscar um livro por categoria
const entrada_inicial = readline.question('Deseja Buscar um Livro por Categoria? [S/N] => ')

//se for SIM, mostras as categorias disponiveis, e escolhe a categoria
if(entrada_inicial.toLocaleUpperCase() === "S")
{
    
    console.log('---- Essas são as categorias disponíveis ----')
    console.log("1 - Produtividade e estilo de vida")
    console.log("2 - História Brasileira")
    console.log("3 - Cultura")
    console.log("4 - Tecnologia")
    console.log("5 - Geografia")

    //console.log('Digite o número da categoria desejada => ')
    //pergunta ao usuario qual categoria
    var escolha_categoria_usuario = readline.question('Digite o numero da categoria desejada => ')

    while(true){
        if(escolha_categoria_usuario == '1')
        {
            escolha_categoria_usuario ="Produtividade e estilo de vida"
            break;
        }            
        else if(escolha_categoria_usuario == '2')
        {
            escolha_categoria_usuario = "História Brasileira"
            break;
        }
        else if(escolha_categoria_usuario == '3')
        {
            escolha_categoria_usuario = "Cultura"
            break;
        }
        else if(escolha_categoria_usuario == '4')
        {
            escolha_categoria_usuario = "Tecnologia"
            break;
        }
        else if(escolha_categoria_usuario == '5')
        {
            escolha_categoria_usuario = "Geografia"
            break;
        }
        else 
        {
            console.log("Escolha Inválida, escolha de 1 à 5")
            //finalizar o programa
            var sair = readline.question("Deseja Continuar? [S/N] ")
            if(sair.toLocaleUpperCase() === "N")
            {
                console.log("Nenhum LIVRO encontrado!!!")
                break;
            }       
            //pergunta ao usuario qual categoria
            var escolha_categoria_usuario = readline.question('Digite o numero da categoria desejada => ')
                 
        }
    }

    //reposta do usuario e faz um filtro em categoria
    const resposta_usuario = livros.filter(livro => livro.categoria === escolha_categoria_usuario)

    if(resposta_usuario != ""){
        console.log('-------------------------------------------Esses são todos os LIVROS disponíveis--------------------------------------------')
        console.table(resposta_usuario)
        
    }    
}
else
{
        //se for NÃO, mostra todos os livros em ordem crescente por quantidade de paginas
            const ordenados = livros.sort((a,b) => a.paginas - b.paginas)
            console.log('-------------------------------------------Esses são todos os LIVROS disponíveis--------------------------------------------')
            console.table(ordenados)
           
}
console.log("-------------------------------------------------------VOLTE SEMPRE---------------------------------------------------------")

