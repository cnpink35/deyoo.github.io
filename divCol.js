
function divCol(){
  var row = document.getElementById('table');
  var length = row.rows.length;
  if(length>0){
  /*var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
    cell0.innerText = test0;
    cell1.innerText = test0;*/
    var cell = row.rows[length-1].insertCell(-1);
    cell.innerText = 'test';
  }
}
    

/*function addRow(){
  //$("#table").after("<tr><td> test </td></tr>");
  
  var row = document.getElementById('table');
  var newRow.insertRow();
  var cell = newRow.inserCell(0);
  cell.innerText = 'test';
}
*/
