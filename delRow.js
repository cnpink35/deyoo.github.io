function delRow(){
  var row = document.getElementById('table');
  if(row.rows.length>0){
  row.deleteRow(row.rows.length-1);
  }
}



function divCol(){
  var row = document.getElementById('table');
  if(row.rows.length>0){
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
    cell0.innerText = test0;
    cell1.innerText = test0;
  }
}
