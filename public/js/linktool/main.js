var errorMsg = false,
    rowChecks = [],
    cellChecks = [];
if (linkdata === undefined || linkdata.length === 0 || linkdata[0].length === 0) {
  errorMsg = "Uploaded data can't be recognized or is empty."
}else{
  for (var i = 0; i < linkdata.length; i++) {
    var temp = {};
    temp.id = "row" + i;
    temp.checked = true;
    temp.display = true;
    rowChecks.push(temp);
  }
  for (var j = 0; j < linkdata[0].length; j++) {
    var temp = {};
    temp.id = "cell" + j;
    temp.checked = true;
    temp.display = true;
    cellChecks.push(temp);
  }
}
var dataTable = new Vue({
  el: '#filter',
  data: {
    linkdata: linkdata,
    rowChecks: rowChecks,
    cellChecks: cellChecks,
    errorMsg: errorMsg,
  }
});