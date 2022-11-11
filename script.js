function carregar(){

var msg= window.document.getElementById("msg")
var img= window.document.getElementById("imagem")
var data= new Date()
var hora= data.getHours()
msg.innerHTML= `Agora são ${hora} horas`

if (hora >=5 && hora <12){
    img.src= 'FotoManha.png'
    document.body.style.background= "#efd4ad";
    }else if (hora >=12 && hora <=18){
    img.src= 'FotoTarde.png'
    document.body.style.background= "#eb9053";
}else{
    img.src= 'FotoNoite.png' 
    document.body.style.background= "#243243";

}
}