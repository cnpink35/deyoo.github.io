function delRow(){
  var row = document.getElementById('table');
  if(row.rows.length>0){
  row.deleteRow(row.rows.length-1);
  }
}

function divCol(){
  var row = document.getElementById('table');
  if(row.rows.length>0){
  row.insertCell(0);
  row.insertCell(1);
  }

/*function addRow(){
  //$("#table").after("<tr><td> test </td></tr>");
  
  var row = document.getElementById('table');
  var newRow.insertRow();
  var cell = newRow.inserCell(0);
  cell.innerText = 'test';
}
*/
