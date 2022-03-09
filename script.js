function entrar(){
    var area = document.getElementById('Area');
    var texto = prompt("seu nome?");

    if(texto == '' || texto == null ){
        alert('de novo');
        area.innerHTML = 'bem vinda';
    }else{
        area.innerHTML = 'bem vinda' + texto;
    }
}

var lista = ["fernanda", "cascata", "cacau", "lola"]

lista

//encontrar 

lista.indexOf('lola');
lista[3]
// quando devlve -1 significa que nao existe
// join junta as listas

lista.join(',');
lista.join('/')

//apagar coisa de lista - ultimo elemento

lista.pop();

// apagar o primeiro 
lista.shift();

// alterar coisa
lista.indexOf('fernanda');
lista[0] = 'Fernanda bonita'

//numerar coisa da lista
lista.push();

//comparar cois
if(lista.indexOf('henrique') > -1){
    alert('esta na lista');
}else{
    alert('não encontrado')
}

//console.log serve para exibir resultados
console.log(lista.indexOf('henrique'))

//while
x = 0;

while(x < 10){
    document.write("<br> o valor do x: " + x);
    x++;
}
//executa até dar 10 o valor de x

//for
for(a = 0; a < x; a++){
    document.write("<br> o valor do x: " + a);
}

/*
comentario de um trecho do codigo
*/

//switch - não é laco de repetição. é bem parecido com o if
x= 2;
switch(x){
    case 0:
        alert("x vale 0");
        break;
    case 1:
        alert("x vale 0");
        break;
    case 2:
        alert("x vale 0");
        break; // coloca para parar apenas no numero que querro que apareça
}

document.write("</br> escolha seu pedido: </br>");
document.write("</br> 0 - sorvete / 1 - suco  </br>");
document.write("</br> 2 - coca / 3 - agua </br>");

function pedido(){
    x = prompt("pedido:")
    switch(x){
        case "0":
            alert("x vale 0");
            break;
        case "1":
            alert("x vale 0");
            break;
        case "2":
            alert("x vale 0");
            break;
        case "3":
            alert("x vale 0");
            break;
        default:
            alert("não tem");
            break;
    }
}