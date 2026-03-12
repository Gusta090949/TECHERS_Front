// console.log("Hellow.Word")

// 3*5

// console.log("3*5")
// console.log(3*5)

// let idade = 24;
// const nome = "Gustavo"
// console.log("nome")
// console.log(nome)

// console.log('Bem Vindo , $(nome)!')
// console.log("Bem vinda,",nome) 

// //if(true){

// //} elfi(){

// //}else{

//     // }

//     for(let i = 0; i =  i <= 10; i++){
//         console.log(i)
//     }

//     for(let i = 10; i =  i <= 0; i--){
//         console.log(i)
//     }

    // let frutas = ["maça", ,"banana", "kiwi", "morango"]

    // console.log(frutas[0])

    // frutas[0] = "melao"

    // console.log(frutas[0])

    // for (let i = 0; i < frutas.length;i++){
    //     console.log(frutas[i])
    // }

    function mudarTudo(){
        const titulo = document.getElementById("titulo")
        titulo.inertText = "Lista de compras!"
        titulo.style.color = "blue"

      let itens = ["maca", "banana", "kiwi", "morango"]
      let countainer = document.getElementById("lista-frutas")

      countainer.innerHTML = ""

      for(let i = 0; i < itens.length; i++)
        countainer.innerHTML += `<p>Item ${i+i} ${itens[i]} <p/>`
    }