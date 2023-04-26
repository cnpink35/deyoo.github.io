function delRow(){
  var row = document.getElementById('table');
  if(row.rows.length>0){
  row.deleteRow(row.rows.length-1);
  }
}

function addRow(){
  //$("#table").after("<tr><td> test </td></tr>");
  
  var row = document.getElementById('table');
  row.insertRow();
  var cell = row.inserCell(0);
  cell.innerText = 'test';
}
