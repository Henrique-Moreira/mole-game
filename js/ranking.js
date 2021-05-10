var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
var currentDate = `${((''+day).length<2 ? '0' : '') + day}/${ ((''+month).length<2 ? '0' : '') + month}/${year}`;

function InsertRank() {
    // console.log(currentDate);
    alert(currentDate);
}