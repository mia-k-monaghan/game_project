var p1 = null;
var p2 = null;
var ps = [p1,p2]
var p2c = "rgb(239, 245, 66)";
var p1c = 'rgb(245, 66, 66)';
var turn = $("#turn")
var rowIndex = null;
var colIndex = null;
var currentColor = null;
var newColor = null;
var options = [p1c, p2c];
var i = 0;
var wongame = false;


// enter p1 variable
$('#p1').keypress(function(event) {
  if (event.which===13 && $(this).val()!=""){
    $(this).hide();
    p1 = $(this).val();
    if ($('#p1').is(":hidden")&&$('#p2').is(":hidden")){
      turn.text(p1+", you're up!");
    }
  }
})
// enter p2 variable
$('#p2').keypress(function(event) {
  if (event.which===13 && $(this).val()!=""){
    $(this).hide();
    p2 = $(this).val();

    if ($('#p1').is(":hidden")&&$('#p2').is(":hidden")){
      turn.text(p1+", it's your turn!");
    }
  }
})

function getColor(rowIndex, colIndex){
  return $('.board tr').eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}
function changeColor(rowIndex, colIndex){
  newColor = options[i];
  $('.board tr').eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', newColor);
  if (i<1){
        i++} else {
          i=0 }
}
function checkbottom(colIndex){
  var index = 5;
  while (index>-1) {
    if(getColor(index, colIndex)=='rgb(187, 187, 187)'){
      changeColor(index, colIndex);
      break;
    }else {
      index=index-1;
    }
  }
}

function match(one, two, three, four){
  if (one==two&&one==three&&one==four&&one!='rgb(187, 187, 187)'){
    var ps = [p2,p1]
    console.log("match");
    turn.text("Congrats, "+ps[i]+", you win!");
    wongame = true;

  }
}
function win(){
  // horizontal
  for (row=0; row<3; row++){
    for(col=0; col<7; col++){
      match(getColor(row,col),getColor(row+1,col),getColor(row+2,col),getColor(row+3,col))
    }
  }
  // vertical
  for (row=0; row<6; row++){
    for(col=0; col<4; col++){
      match(getColor(row,col),getColor(row,col+1),getColor(row,col+2),getColor(row,col+3))
    }
  }
  // diagonal
  for (row=3; row<6; row++){
    for(col=0; col<4; col++){
      match(getColor(row,col),getColor(row-1,col+1),getColor(row-2,col+2),getColor(row-3,col+3))
    }
  }
  for (row=0; row<4; row++){
    for(col=0; col<4; col++){
      match(getColor(row,col),getColor(row+1,col+1),getColor(row+2,col+2),getColor(row+3,col+3))
    }
  }



}



// Board Events
$('.board button').on('click',function(){
  if (!wongame&&$('#p1').is(":hidden")&&$('#p2').is(":hidden")){
    var ps = [p1,p2]
    colIndex = $(this).closest("td").index();
    rowIndex = $(this).closest("tr").index();

    checkbottom(colIndex);
    turn.text(ps[i]+", you're up!");
    win();
  }

});

$('#reset').click(function(){
  $('.board button').css('background-color','rgb(187, 187, 187)');
  $('#p1').show();
  $('#p2').show();
  turn.text("Enter the players to get started.")
  wongame = false;
})
