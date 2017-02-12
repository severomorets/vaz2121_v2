function zazhiganie(){
    socket.send(JSON.stringify({method:"zazhiganie",data:{}}));
}
function zapusk(){
    socket.send(JSON.stringify({method:"zapusk",data:{}}));
}
function fari(d){
    socket.send(JSON.stringify({method:"fari",data:{type:d}}));
}
function povorot(d){
    socket.send(JSON.stringify({method:"povorot",data:{type:d}}));
}
function pechka(d){
    socket.send(JSON.stringify({method:"pechka",data:{type:d}}));
}
function dver(d){
    socket.send(JSON.stringify({method:"dver",data:{type:d}}));
}
function protivotum(){
    socket.send(JSON.stringify({method:"protivotum",data:{}}));
}
function signal(){
    socket.send(JSON.stringify({method:"signal",data:{}}));
}



// создать подключение
var socket = new WebSocket("ws://localhost:8081");



// обработчик входящих сообщений
socket.onmessage = function(event) {
  var incomingMessage = event.data;
  showMessage(incomingMessage);
};

// показать сообщение в div#subscribe
function showMessage(message) {
  var DATA = JSON.parse(message)
  var str = ""
  for(var key in DATA)
  {
    var t = ""

    
    if (DATA[key].type=="D_OUT_R"){
      if (DATA[key].val==1){t="on"}
      if (DATA[key].val==0){t="off"}  
    }else{
        if (DATA[key].val==1){t="on"}
      if (DATA[key].val==0){t="off"}  
    }
    if (DATA[key].hasOwnProperty("attr"))
    {
        
        if (DATA[key].val==1){$("#"+DATA[key].attr).css({"backgroundColor":"green"})}
        if (DATA[key].val==0){$("#"+DATA[key].attr).css({"backgroundColor":"red"})}
    }
    
    
  }
  $('#subscribe').html(str)
  console.log(message)

}