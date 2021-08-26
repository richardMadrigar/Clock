
function showTime() {
  var date = new Date(); //pegando data completa

  var h = date.getHours();  //pegando horas
  var m = date.getMinutes(); //pegando minutos


  if (h == 0) {  //transformando 00:00 em 12:00
    h = 12;
  }

  h = (h < 10) ? "0" + h : h; //passando um 0 antes do numero que ficar com um digito
  m = (m < 10) ? "0" + m : m;

  time = h + ":" + m  //criando sequencia de como vai ficar a data

  document.getElementById("clockDisplay").innerHTML = time; //atribuindo ao html

  setTimeout(showTime, 1000); //fazendo a funcao rodar a cada 1segundo
}
showTime();



var data1 = new Date();
var h1 = data1.getHours();

if (h1 > 05 && h1 < 12) {
  a = "Good Morning ❤"
} else if (h1 > 11 && h1 < 18) {
  a = "Good afternoon ❤"
} else {
  a = "Good evening ❤"
}

document.getElementById('welcome').innerHTML = a



