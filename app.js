let randomNumber1= Math.floor(Math.random()*6) + 1

let randomDadoImage = 'dado' + randomNumber1 + '.jpg' //dado1.png

let randomImageSource= 'img/' + randomDadoImage //img.dado2.png

let image1= document.querySelectorAll('img')[0]

image1.setAttribute('src', randomImageSource)

let randomNumber2= Math.floor(Math.random()*6) + 1

let randomImageSource2 = 'img/dado' + randomNumber2 + '.jpg'

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2) 

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML='🏆 o Jogador 1 ganhou'
} 
else if( randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML='🏆 o jogador 2 ganhou'

}
else{
    document.querySelector('h1').innerHTML='Empate'
}