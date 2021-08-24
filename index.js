function showTime(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes();
  var s = date.getSeconds();

  if(h==0){
      h=12;
  }



  h = (h<10) ? "0" + h : h;
  m = (m<10) ? "0" + m : m;
  s = (s<10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s  ;
  document.getElementById("clockDisplay").innerHTML = time;
  document.getElementById("clockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();