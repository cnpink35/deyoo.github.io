/*
function of deleting table row
created by daeun yoo on 2023.04.26
*/

function delRow(){
  var row = document.getElementById('table');
  if(row.rows.length>0){
  row.deleteRow(row.rows.length-1);
  }
}
