function showTime() {
  var date = new Date(); //pegando a data compvara

  var hours = date.getHours() //pegando horas
  var minutes = date.getMinutes() //pegando minutos
  var seconds = date.getSeconds() //pegando segundos

  //transformando 0 em 12hrs
  if (hours == 0) {
    hours = 12;
  }


  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  let time = `${hours}:${minutes}:${seconds} `
  document.getElementById('clockDisplay').textContent = time

  setInterval(showTime, 1000)
}
showTime()

