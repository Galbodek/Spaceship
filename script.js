console.log('Hello JS');
$(document).ready(function (){
    // console.log('Hello there jQuery');
    // $('p span').html('Bla Bla');
    $('body').keydown(function (event){
        console.log(event.keyCode);
        $('#key').html(event.keyCode);
        if(event.keyCode === 13){
            $('#key').html('Bla Bla')
        }
    });
    }
);


