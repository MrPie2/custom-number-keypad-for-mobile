var current=1;
var next=current+1;
$(document).keyup(function(event){
    if(event.keyCode==8){
        $('.pin').prev().focus()
    }

})

var current=0;

$('.pin').keyup(function(){
    current++;
    var next=current+1;
    if(event.keyCode!=8){
        if(next==5){
            var password1=$('#pin1').val();
        var password2=$('#pin2').val();
        var password3=$('#pin3').val();
        var password4=$('#pin4').val();

        if(password1!=""&& password2!="" && password3!="" &&password4!=""){
            setTimeout(function(){
            $(".Confirm_Pin").removeClass('hidden');
            $(".First_Try").addClass('hidden');
            $('.spi').toggleClass('hidden');
            }, 5000)
        }else{
            alert('Error');
        }
        $('.spi').html("<span class='fa fa-spinner fa-spin' style='font-size: 40pt; color: white'></span>");

        }else if(next==9){
            var password5=$('#pin5').val();
            var password6=$('#pin6').val();
            var password7=$('#pin7').val();
            var password8=$('#pin8').val();
        
        if(password5!=""&& password6!="" && password7!="" &&password8!=""){
                setTimeout(function(){
                alert("You PIN has been set successfully")
                location.reload();

                 }, 5000)
        }else{
            alert('Error');
        }
  
                $('.spi').toggleClass('hidden');
                $('.spi').html("<span class='fa fa-spinner fa-spin' style='font-size: 40pt; color: white'></span>");

 
        }else{
                 $('#pin'+next).prop('disabled',false).focus();

        }
    }else{


    }
})

    for(var i=1; i<10; i++){
       $('.keypads').append("<li class='singlekey' style='color: white' id='"+i+"'><span>"+i+"</span></li>");
    }
$(document).on('click','.singlekey', function(){
var number=$(this).attr('id');
$('.pin').val(number);
})