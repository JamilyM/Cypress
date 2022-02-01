function verificarIdade() {

    var nome = document.querySelector("input[name=nome]")
    var receberIdade = document.querySelector("input[name=idade]")
    
    if (receberIdade.value == '') {
        alert("Idade é um campo obrigatório")
        return
    }

    var idade = parseInt(receberIdade.value)
    
    //typeof = mostra a tipagem(tipo do elemento)
    //console.log(typeof nome.value)

    if (idade >= 18) {
        alert("Parabéns, você pode tirar sua CNH.")
    } else if (idade <= 3) {
        alert("Você muito jovem, aprenda a andar primeiro.")

    } else if (idade <= 10) {
        alert("Sugiro, aprender a andar de bike, porque vai demora a maior idade")
    }
    else if (idade == 16) {
        alert("Se você tivesse no Estado Unidos, poderia. Mas infelizmente, você está no Brasil, então não!")
    }else{
        alert("Infelizmente, você não pode tirar sua CNH, aguarde ter 18 anos.")
    }
}