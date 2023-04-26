function adRow(){
  //$("#table").after("<tr><td> test </td></tr>");
  
  var row = document.getElementById('table');
  row.insertRow();
  var cell = row.inserCell(0);
  cell.innerText = 'test';
}
