
var current=0;
for(var number=1; number<13; number++) {
  if (number === 11) {
    $('.keypads').append("<li class='singlekey' style='color: white' id='"+0+"'><div>0</div></li>");
  } else if (number === 12) {
    $('.keypads').append("<li class='singlekey' style='color: white' id='"+number+"'><div><i class='fas fa-backspace' style='font-size: 12pt'></i></div></li>");
  } else if (number === 10) {
    $('.keypads').append(" <li class='singlekey' style='color: white' id='" + number + "'><div><i class='fa fa-check' style='font-size: 14pt'></i></div></li>");
  } else {
    $('.keypads').append("<li class='singlekey' style='color: white' id='" + number + "'><div>" + number + "</div></li>");
  }
};


$(document).on('click', '.singlekey', function(){

var number=$(this).attr('id');
if(number==12){
$('.pin').prev().focus()
$('.pin').val("");
}else if(number==10){
var pinn1=$('#pin1').val();
var pinn2=$('#pin2').val()
var pinn3=$('#pin3').val();
var pinn4=$('#pin4').val();
var correct_pin=pinn1+pinn2+pinn3+pinn4;
var database_pin="3434";

if(correct_pin==database_pin){
alert("Good, Transaction Successful");
}else{

alert("Incorrect Pin");
}

}else{
current++;
 var next=current+1;
if($('#pin1').val().trim()==""){
$('#pin1').val(number);
$('#pin'+next).prop('disabled',false).focus();
}else if($('#pin2').val().trim()==""){
$('#pin2').val(number);
$('#pin'+next).prop('disabled',false).focus();

}else if($('#pin3').val().trim()==""){
$('#pin3').val(number);
$('#pin'+next).prop('disabled',false).focus();
}else if($('#pin4').val().trim()==""){
$('#pin4').val(number);
$('#pin'+next).prop('disabled',false).focus();
}
}
})

