var button = document.querySelector('#reset')
var button2 = document.querySelector('#bigreset')
var all = document.querySelectorAll('.resize');
const allarr = Array.apply(null, all);

var index = 0;
var xwin = document.querySelector('#xwin');
var xnum = 0;
var xtotal = 0;
var ototal = 0;
var owin = document.querySelector('#owin');
var onum = 0;


// win events
function win(a, b, c){
    a.style.color = '#07d90e';
    b.style.color = '#07d90e';
    c.style.color = '#07d90e';
    // tournament adding
    var winner=a.textContent;
    if(winner==="X"){
      xtotal = xnum+1
      xwin.textContent=xtotal;
    }else {
      ototal = onum+1
      owin.textContent=ototal;
    }
    xnum=xtotal;
    onum=ototal;

}


// drawing & game logic
function play(){
  var options = ["X", "O"];
  this.textContent = options[index];
  if (index<1){
        index++} else {
          index=0 }
      // win scenarios
      for(var cell of allarr){
        var pos = allarr.indexOf(cell);
        if (cell.textContent!=""){
          // across
          if (pos===0||pos===3||pos===6){
            if(cell.textContent===allarr[pos+1].textContent&&cell.textContent===allarr[pos+2].textContent){win(cell,allarr[pos+1],allarr[pos+2])}
          }
          // up and down
          if (pos===0||pos===1||pos===2){
            if(cell.textContent===allarr[pos+3].textContent&&cell.textContent===allarr[pos+6].textContent){win(cell,allarr[pos+3],allarr[pos+6])}
          }
          // diagonal1
          if (pos===0&&cell){
            if(cell.textContent===allarr[pos+4].textContent&&cell.textContent===allarr[pos+8].textContent){win(cell,allarr[pos+4],allarr[pos+8])}
          }
          // diagonal2
          if (pos===2){
            if(cell.textContent===allarr[pos+2].textContent&&cell.textContent===allarr[pos+4].textContent){win(cell,allarr[pos+2],allarr[pos+4])}
          }
        }
      }
  }

// drawing event
for (var i of all) {
  i.addEventListener("click", play);
}

// reset button event
button.addEventListener("click", function(){
  for (var cell of all) {
    cell.textContent="";
    cell.style.color="black";
  }

  })

  // reset Tournament
button2.addEventListener("click", function(){
  for (var cell of all) {
    cell.textContent="";
    cell.style.color="black";
  }

  xnum = 0;
  onum = 0;
  xtotal = 0;
  ototal = 0;
  xwin.textContent="0";
  owin.textContent="0";

})
