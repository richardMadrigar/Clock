function showTime(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes();

  if(h==0){
      h=12;
  }



  h = (h<10) ? "0" + h : h;
  m = (m<10) ? "0" + m : m;
  
  var time = h + ":" + m
    document.getElementById("clockDisplay").innerHTML = time;
  document.getElementById("clockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();