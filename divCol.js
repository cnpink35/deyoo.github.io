/*
divide last row of the table
but it refers previous action
made by daeun yoo on 2023.04.27
*/

function divCol(){
  var row = document.getElementById('table');
  var length = row.rows.length;
  if(length>0){
    var cell = row.rows[length-1].insertCell();
  }
}

