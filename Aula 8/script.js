

// const botao = document.querySelector('button')

// //botao.onclick = function() {
// //console.log('Botao clicado via ')
// //}

// function saudacao(){
//     console.log("Ola")
// }

// botao.addEventListener('click',saudacao)
// botao.addEventListener('click', () => console.log('Segunda funcao executada'))

// //funcoes: sao um bloco de codigos para executar uma tarefa especifica

// function soma(a,b=5){
//     return a+b
// }

// const  resultado = soma(1+5)

// console.log(resultado)

// const x = function(a,b){
//     return a+b
// 
//}

// const dobrar = (n) => n * 2

const botao = document.querySelector('#botao')
const placar = document.querySelector('#placar')

let pontos = 0

function moverBotao() {
    const x = Math.random() * (window.innerWidth - 100)
    const y = Math.random() * (window.innerHeight - 100)

    botao.style.left = `${x}px`
    botao.style.top = `${y}px`
}

// evento de fugir
botao.addEventListener('mouseover', moverBotao)

// evento de clicar
botao.addEventListener('click', () => {
    pontos++
    placar.textContent = pontos
    alert("Boa 😄")
})


